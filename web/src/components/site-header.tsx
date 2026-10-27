/* eslint-disable @next/next/no-html-link-for-pages -- Native anchors keep repeated section navigation reliable, including from other pages. */
import Image from 'next/image';
import Link from 'next/link';

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-[#f5f1ea]">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-2 px-4 py-3 sm:px-12 lg:flex-row lg:items-center lg:gap-4">
        <Link
          href="/"
          className="inline-flex min-h-11 items-center gap-2 text-(--ssc-river-night) hover:text-(--ssc-kankantrie-root)"
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
          className="flex w-full flex-wrap items-center gap-x-3 gap-y-1 text-sm font-semibold text-(--ssc-river-night) lg:w-auto lg:gap-x-5"
        >
          <a
            href="/#save-the-date"
            className="inline-flex min-h-11 items-center border-b-2 border-(--ssc-ibis-red) text-(--ssc-ibis-red)"
          >
            Lancering
          </a>
          <a
            href="/#collectief"
            className="inline-flex min-h-11 items-center border-b-2 border-transparent transition-colors hover:border-(--ssc-ibis-red)/70 hover:text-(--ssc-river-night)"
          >
            Collectief
          </a>
          <a
            href="/#tijdmachine"
            className="inline-flex min-h-11 items-center border-b-2 border-transparent transition-colors hover:border-(--ssc-ibis-red)/70 hover:text-(--ssc-river-night)"
          >
            Tijdmachine
          </a>
          <a
            href="/#team"
            className="inline-flex min-h-11 items-center border-b-2 border-transparent transition-colors hover:border-(--ssc-ibis-red)/70 hover:text-(--ssc-river-night)"
          >
            Team
          </a>
          <a
            href="/#bereik"
            className="inline-flex min-h-11 items-center border-b-2 border-transparent transition-colors hover:border-(--ssc-ibis-red)/70 hover:text-(--ssc-river-night)"
          >
            Bereik
          </a>
        </nav>
      </div>
    </header>
  );
}
