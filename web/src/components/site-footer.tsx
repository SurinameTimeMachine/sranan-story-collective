import Image from 'next/image';
import Link from 'next/link';

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-[linear-gradient(180deg,rgba(245,241,234,0.98),rgba(236,228,218,0.86))]">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-9 sm:px-12 lg:grid-cols-[1.15fr_1fr] lg:items-start">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 text-(--ssc-river-night)">
            <Image
              src="/ssc-logo.svg"
              alt=""
              width={22}
              height={24}
              aria-hidden="true"
              className="h-6 w-auto"
            />
            <span className="font-(family-name:--font-story) text-2xl leading-none tracking-[0.01em]">
              Sranan Story Collective
            </span>
          </div>
          <p className="max-w-xl text-sm leading-7 text-(--ssc-river-night)/88">
            Websiteontwikkeling en beheer door het SSC-team, in samenwerking met
            Suriname Time Machine.
          </p>
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-(--ssc-river-night)/70">
            © {year} Sranan Story Collective
          </p>
        </div>

        <nav
          aria-label="Juridische links"
          className="flex flex-wrap content-start gap-x-6 gap-y-2 text-xs font-semibold uppercase tracking-[0.13em] text-(--ssc-river-night)/88"
        >
          <Link
            href="/privacy-policy"
            className="border-b-2 border-(--ssc-ibis-red)/45 pb-0.5 transition-colors hover:border-(--ssc-river-night) hover:text-(--ssc-river-night)"
          >
            Privacybeleid
          </Link>
          <Link
            href="/accessibility"
            className="border-b-2 border-(--ssc-ibis-red)/45 pb-0.5 transition-colors hover:border-(--ssc-river-night) hover:text-(--ssc-river-night)"
          >
            Toegankelijkheidsverklaring
          </Link>
          <Link
            href="/disclaimer-copyright"
            className="border-b-2 border-(--ssc-ibis-red)/45 pb-0.5 transition-colors hover:border-(--ssc-river-night) hover:text-(--ssc-river-night)"
          >
            Disclaimer en copyright
          </Link>
          <Link
            href="/#team"
            className="border-b-2 border-(--ssc-ibis-red)/45 pb-0.5 transition-colors hover:border-(--ssc-river-night) hover:text-(--ssc-river-night)"
          >
            Contact via team
          </Link>
        </nav>
      </div>
    </footer>
  );
}
