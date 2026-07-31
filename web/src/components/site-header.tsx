import Image from 'next/image';
import Link from 'next/link';

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-(--ssc-river-night)/20 bg-[linear-gradient(180deg,rgba(250,248,244,0.96),rgba(242,240,235,0.9))] backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-6 py-3 sm:px-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-lg font-semibold tracking-wide text-(--ssc-river-night) hover:text-(--ssc-kankantrie-root)"
        >
          <Image
            src="/ssc-logo.svg"
            alt=""
            width={22}
            height={24}
            aria-hidden="true"
            className="h-6 w-auto"
          />
          Sranan Story Collective
        </Link>

        <nav
          aria-label="Hoofdnavigatie"
          className="flex items-center gap-4 text-sm font-semibold text-(--ssc-river-night) sm:gap-6"
        >
          <Link
            href="/#collectief"
            className="border-b-2 border-transparent pb-0.5 hover:border-(--ssc-ibis-red)/70"
          >
            Collectief
          </Link>
          <Link
            href="/#tijdmachine"
            className="border-b-2 border-transparent pb-0.5 hover:border-(--ssc-ibis-red)/70"
          >
            Tijdmachine
          </Link>
          <Link
            href="/#team"
            className="border-b-2 border-transparent pb-0.5 hover:border-(--ssc-ibis-red)/70"
          >
            Team
          </Link>
          <Link
            href="/#bereik"
            className="border-b-2 border-transparent pb-0.5 hover:border-(--ssc-ibis-red)/70"
          >
            Bereik
          </Link>
        </nav>
      </div>
    </header>
  );
}
