import { defaultProfile } from "./default"
import { saasB2bProfile } from "./saas-b2b"
import type { Profile } from "./types"

/**
 * Registro de variantes de la portada.
 *
 * Para añadir una candidatura: crea `content/profiles/<slug>.ts` con el mismo tipo Profile,
 * regístralo aquí y ya estará disponible en `/for/<slug>` (y en el selector de `npm run cv:build`).
 */
export const profiles = {
  default: defaultProfile,
  "saas-b2b": saasB2bProfile,
} satisfies Record<string, Profile>

export type ProfileSlug = keyof typeof profiles

export const defaultProfileSlug: ProfileSlug = "default"

export function isProfileSlug(value: string): value is ProfileSlug {
  return value in profiles
}

/**
 * Perfil activo: el que pide la URL (`/for/<slug>`), o el que fija PORTFOLIO_PROFILE,
 * o el de por defecto.
 */
export function getProfile(slug?: string): Profile {
  const requested = slug ?? process.env.PORTFOLIO_PROFILE ?? defaultProfileSlug
  return isProfileSlug(requested) ? profiles[requested] : profiles[defaultProfileSlug]
}

export function getProfileSlugs(): ProfileSlug[] {
  return Object.keys(profiles) as ProfileSlug[]
}
