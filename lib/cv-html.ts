import type { CvContent, CvLanguage } from "@/content/cv"
import type { Profile } from "@/content/profiles/types"

/**
 * Maqueta A4 del CV. Es la misma hoja que se viene usando (una página, Arial 9,1 pt) pero
 * alimentada con datos: el perfil activo pone el titular (`positioning`) y el párrafo de
 * perfil (`intro`), y `content/cv` pone experiencia, proyectos, formación y skills reales.
 *
 * El HTML resultante lo sirve /cv/<lang> y el script `npm run cv:build` lo imprime a PDF.
 */
export function renderCvHtml({
  profile,
  cv,
  lang,
}: {
  profile: Profile
  cv: CvContent
  lang: CvLanguage
}): string {
  const { contact } = profile

  const entries = (list: CvContent["experience"]) =>
    list
      .map(
        (entry) => `
    <div class="entry">
      <div class="entry-head">
        <span class="title">${escapeHtml(entry.title)}</span>
        <span class="date">${escapeHtml(entry.period)}</span>
      </div>
      <div class="company">${escapeHtml(entry.company)}</div>
      ${entry.project ? `<div class="project-line">${escapeHtml(entry.project)}</div>` : ""}
      <ul>
        ${entry.bullets.map((bullet) => `<li>${escapeHtml(bullet)}</li>`).join("\n        ")}
      </ul>
    </div>`,
      )
      .join("\n")

  return `<!DOCTYPE html>
<html lang="${lang}">
<head>
<meta charset="utf-8">
<title>${escapeHtml(profile.brand.name)} — CV (${lang.toUpperCase()})</title>
<style>
  @page { size: A4; margin: 0; }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 8.6pt;
    line-height: 1.28;
    color: #222;
    width: 210mm;
    padding: 10mm 15mm 6mm;
    position: relative;
  }
  a { color: inherit; text-decoration: none; }

  .photo {
    position: absolute;
    top: 11mm;
    right: 15mm;
    width: 96px;
    height: 128px;
    object-fit: cover;
    object-position: top;
    border-radius: 6px;
  }
  h1 { font-size: 17.5pt; color: #1e5f9e; margin-bottom: 3px; }
  .subtitle { font-size: 10pt; color: #555; margin-bottom: 8px; }
  .contact { font-size: 8.8pt; color: #333; margin-bottom: 3px; }
  .contact .sep { color: #999; margin: 0 5px; }

  h2 {
    font-size: 10.2pt;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: #1f4e79;
    border-bottom: 1px solid #8ea9c1;
    padding-bottom: 2px;
    margin: 8px 0 5px;
  }
  .header-block { margin-bottom: 8px; padding-right: 115px; }

  .entry { margin-bottom: 6px; }
  .entry-head { display: flex; justify-content: space-between; align-items: baseline; }
  .entry-head .title { font-weight: bold; font-size: 9.4pt; }
  .entry-head .date { color: #777; font-size: 8.8pt; white-space: nowrap; margin-left: 12px; }
  .company { font-weight: bold; color: #222; }
  .project-line { font-style: italic; color: #444; }
  ul { list-style: none; margin-top: 2px; }
  li { padding-left: 13px; position: relative; margin-bottom: 1px; }
  li::before { content: "•"; position: absolute; left: 3px; color: #333; }

  .edu-row { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 3px; }
  .edu-row .date { color: #777; font-size: 8.8pt; white-space: nowrap; margin-left: 12px; }

  .skills { width: 100%; border-collapse: collapse; }
  .skills td { padding: 1.5px 0; vertical-align: top; }
  .skills td.label { width: 158px; color: #1e5f9e; font-weight: bold; padding-right: 10px; }

  .langs span.lang { color: #1e5f9e; font-weight: bold; }
  .langs { border-bottom: 1px solid #ddd; padding-bottom: 6px; }
</style>
</head>
<body>
  <img class="photo" src="/cv-perfil.jpg" alt="${escapeHtml(profile.brand.name)}">

  <div class="header-block">
    <h1>${escapeHtml(profile.brand.name)}</h1>
    <div class="subtitle">${escapeHtml(cv.subtitle ?? profile.positioning)}</div>
    <div class="contact">
      ${escapeHtml(contact.email)}<span class="sep">|</span>${escapeHtml(contact.phone)}<span class="sep">|</span>bravojc.com
    </div>
    <div class="contact">
      ${escapeHtml(cv.labels.location)}<span class="sep">|</span>linkedin.com/in/jean-bravo<span class="sep">|</span>github.com/naejbravo
    </div>
  </div>

  <h2>${escapeHtml(cv.labels.profile)}</h2>
  <p>${escapeHtml(cv.profile ?? profile.intro)}</p>

  <h2>${escapeHtml(cv.labels.experience)}</h2>
  ${entries(cv.experience)}

  <h2>${escapeHtml(cv.labels.projects)}</h2>
  ${entries(cv.projects)}

  <h2>${escapeHtml(cv.labels.education)}</h2>
  ${cv.education
    .map(
      (item) => `
  <div class="edu-row">
    <span><b>${escapeHtml(item.title)}</b> — ${escapeHtml(item.detail)}</span>
    <span class="date">${escapeHtml(item.period)}</span>
  </div>`,
    )
    .join("")}

  <h2>${escapeHtml(cv.labels.skills)}</h2>
  <table class="skills">
    ${cv.skills
      .map(
        (row) =>
          `<tr><td class="label">${escapeHtml(row.label)}</td><td>${escapeHtml(row.items)}</td></tr>`,
      )
      .join("\n    ")}
  </table>

  <h2>${escapeHtml(cv.labels.languages)}</h2>
  <p class="langs">${escapeHtml(cv.languages)}</p>
</body>
</html>
`
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
}
