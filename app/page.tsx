import type { Metadata } from "next"

import PortfolioPage from "@/components/portfolio-page"
import { getProfile } from "@/content/profiles"

export const metadata: Metadata = {
  title: {
    absolute: `${getProfile().brand.name} · ${getProfile().positioning}`,
  },
}

export default function HomePage() {
  const profile = getProfile()

  return <PortfolioPage profile={profile} />
}
