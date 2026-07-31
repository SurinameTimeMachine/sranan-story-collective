import Image from 'next/image';
import Link from 'next/link';

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-[#f5f1ea]/98">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-6 py-3 sm:px-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-(--ssc-river-night) hover:text-(--ssc-kankantrie-root)"
        >
          <Image
            src="/ssc-logo.svg"
            alt=""
            width={24}
            height={26}
            aria-hidden="true"
            className="h-6 w-auto"
          />
          <span className="font-(family-name:--font-story) text-2xl leading-none tracking-[0.01em] sm:text-[1.75rem]">
            Sranan Story Collective
          </span>
        </Link>

        <nav
          aria-label="Hoofdnavigatie"
          className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.13em] text-(--ssc-river-night)/88 sm:gap-5"
        >
          <Link
            href="/#collectief"
            className="border-b-2 border-transparent pb-0.5 transition-colors hover:border-(--ssc-ibis-red)/70 hover:text-(--ssc-river-night)"
          >
            Collectief
          </Link>
          <Link
            href="/#tijdmachine"
            className="border-b-2 border-transparent pb-0.5 transition-colors hover:border-(--ssc-ibis-red)/70 hover:text-(--ssc-river-night)"
          >
            Tijdmachine
          </Link>
          <Link
            href="/#team"
            className="border-b-2 border-transparent pb-0.5 transition-colors hover:border-(--ssc-ibis-red)/70 hover:text-(--ssc-river-night)"
          >
            Team
          </Link>
          <Link
            href="/#bereik"
            className="border-b-2 border-transparent pb-0.5 transition-colors hover:border-(--ssc-ibis-red)/70 hover:text-(--ssc-river-night)"
          >
            Bereik
          </Link>
        </nav>
      </div>
    </header>
  );
}
