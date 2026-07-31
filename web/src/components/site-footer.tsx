import Link from 'next/link';

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-(--ssc-river-night)/20 bg-[linear-gradient(180deg,rgba(23,37,64,0.06),rgba(23,37,64,0.02))]">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-5 px-6 py-8 sm:px-12">
        <div className="flex flex-col gap-2 text-sm leading-7 text-(--ssc-river-night)/88">
          <p>
            Websiteontwikkeling en beheer: team Sranan Story Collective, in
            samenwerking met Suriname Time Machine.
          </p>
          <p>© {year} Sranan Story Collective. Alle rechten voorbehouden.</p>
        </div>

        <nav
          aria-label="Juridische links"
          className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold text-(--ssc-river-night)"
        >
          <Link
            href="/privacy-policy"
            className="border-b-2 border-(--ssc-ibis-red)/60 pb-0.5 hover:border-(--ssc-river-night)"
          >
            Privacybeleid
          </Link>
          <Link
            href="/accessibility"
            className="border-b-2 border-(--ssc-ibis-red)/60 pb-0.5 hover:border-(--ssc-river-night)"
          >
            Toegankelijkheidsverklaring
          </Link>
          <Link
            href="/disclaimer-copyright"
            className="border-b-2 border-(--ssc-ibis-red)/60 pb-0.5 hover:border-(--ssc-river-night)"
          >
            Disclaimer en copyright
          </Link>
          <Link
            href="/#team"
            className="border-b-2 border-(--ssc-ibis-red)/60 pb-0.5 hover:border-(--ssc-river-night)"
          >
            Contact via team
          </Link>
        </nav>
      </div>
    </footer>
  );
}
