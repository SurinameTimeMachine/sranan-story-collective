import Image from 'next/image';
import Link from 'next/link';

const institutionalPartners = [
  {
    name: 'IISG',
    href: 'https://iisg.amsterdam/',
    src: '/partners/iisg.png',
    width: 167,
    height: 131,
  },
  {
    name: 'Meertens Instituut',
    href: 'https://meertens.knaw.nl/',
    src: '/partners/meertens.png',
    width: 170,
    height: 136,
  },
];

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-(--ssc-river-night) text-white">
      <div className="mx-auto w-full max-w-6xl px-6 py-5 sm:px-12">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-white">
              <Image
                src="/ssc-logo.svg"
                alt=""
                width={22}
                height={24}
                aria-hidden="true"
                className="h-5 w-auto"
              />
              <span className="font-(family-name:--font-story) text-xl leading-none tracking-[0.01em]">
                Sranan Story Collective
              </span>
            </div>
            <p className="max-w-xl text-xs leading-5 text-white/78">
              Websiteontwikkeling en beheer door het SSC-team, in samenwerking met
              Suriname Time Machine.
            </p>
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-white/60">
              © {year} Sranan Story Collective
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 md:justify-end">
            <div className="flex items-center gap-2">
              <a
                href="https://huc.knaw.nl/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-sm bg-[#f5f1ea] p-1 transition-transform hover:-translate-y-0.5"
                aria-label="KNAW Humanities Cluster"
              >
                <Image
                  src="/partners/knaw-humanities-cluster.png"
                  alt="KNAW Humanities Cluster"
                  width={300}
                  height={238}
                  className="h-9 w-auto"
                />
              </a>
              <span className="max-w-28 text-[0.68rem] leading-4 text-white/75">
                Gehost door Huygens Instituut
              </span>
            </div>

            <span className="hidden h-8 w-px bg-white/20 md:block" aria-hidden="true" />

            <div>
              <p className="mb-1 text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-white/55">
                Onderzoek en citizen science
              </p>
              <div className="flex items-center gap-3">
                {institutionalPartners.map((partner) => (
                  <a
                    key={partner.name}
                    href={partner.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-sm transition-transform hover:-translate-y-0.5"
                    aria-label={partner.name}
                  >
                    <Image
                      src={partner.src}
                      alt={partner.name}
                      width={partner.width}
                      height={partner.height}
                      className="h-8 w-auto"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 flex flex-col gap-2 border-t border-white/15 pt-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[0.68rem] text-white/60">
            Verbonden met het Huygens Instituut, het Meertens Instituut en het IISG.
          </p>
          <nav
            aria-label="Juridische links"
            className="flex flex-wrap gap-x-4 gap-y-1 text-[0.62rem] font-semibold uppercase tracking-[0.1em] text-white/75"
          >
            <Link href="/privacy-policy" className="hover:text-white">Privacybeleid</Link>
            <Link href="/accessibility" className="hover:text-white">Toegankelijkheid</Link>
            <Link href="/disclaimer-copyright" className="hover:text-white">Disclaimer en copyright</Link>
            <Link href="/#team" className="hover:text-white">Contact via team</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
