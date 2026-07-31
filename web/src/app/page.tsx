import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Home',
  description:
    'Sranan Story Collective brengt verhalen, erfgoed en onderzoek samen rond Surinaamse geschiedenissen en gemeenschappen.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Sranan Story Collective',
    description:
      'Sranan Story Collective brengt verhalen, erfgoed en onderzoek samen rond Surinaamse geschiedenissen en gemeenschappen.',
    url: '/',
  },
  twitter: {
    title: 'Sranan Story Collective',
    description:
      'Sranan Story Collective brengt verhalen, erfgoed en onderzoek samen rond Surinaamse geschiedenissen en gemeenschappen.',
  },
};

const kernboodschappen = [
  'Sranan Story Collective brengt verhalen samen die het gedeelde verleden zichtbaar maken en nieuwe toekomsten verbeelden.',
  'SSC verbindt community, erfgoed, creativiteit en onderzoek.',
  'Verhalen uit en over Suriname zijn essentieel voor historisch bewustzijn, identiteit en maatschappelijke dialoog.',
];

const cocreatiePunten = [
  'welk materiaal van betekenis is',
  'wat er in het archief ontbreekt',
  'hoe koloniaal archiefmateriaal gecontextualiseerd en gepresenteerd moet worden',
  'welke verhalen en publieke eindproducten op basis van de data ontwikkeld kunnen worden',
];

const teamLinks = [
  {
    name: 'Sharmila Badloe',
    href: 'https://www.huygens.knaw.nl/medewerkers/sharmila-badloe/',
  },
  {
    name: 'Dewi van Leeuwen Sastromedjo',
    href: 'https://www.huygens.knaw.nl/medewerkers/dewi-van-leeuwen-sastromedjo/',
  },
  { name: 'Angelique Hoogmoed', href: '' },
  {
    name: 'Thunnis van Oort',
    href: 'https://www.huygens.knaw.nl/medewerkers/thunnis-van-oort/',
  },
  {
    name: 'Jona Schlegel',
    href: 'https://www.huygens.knaw.nl/medewerkers/jona-schlegel/',
  },
];

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://srananstorycollective.com/#organization',
  name: 'Sranan Story Collective',
  url: 'https://srananstorycollective.com',
  logo: 'https://srananstorycollective.com/ssc-logo.svg',
  description:
    'Sranan Story Collective brengt verhalen, erfgoed en onderzoek samen rond Surinaamse geschiedenissen en gemeenschappen.',
  sameAs: ['https://surinametijdmachine.org/', 'https://hdsc.ning.com/'],
  knowsAbout: [
    'Surinaamse geschiedenis',
    'diasporagemeenschappen',
    'erfgoed',
    'community verhalen',
  ],
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://srananstorycollective.com/#website',
  url: 'https://srananstorycollective.com',
  name: 'Sranan Story Collective',
  inLanguage: 'nl-NL',
  description:
    'Sranan Story Collective brengt verhalen, erfgoed en onderzoek samen rond Surinaamse geschiedenissen en gemeenschappen.',
  publisher: {
    '@id': 'https://srananstorycollective.com/#organization',
  },
};

function IbisIcon({
  src = '/red-ibis-5.svg',
  className = '',
}: {
  src?: string;
  className?: string;
}) {
  return (
    <Image
      src={src}
      alt=""
      width={12}
      height={8}
      aria-hidden="true"
      className={`h-2.5 w-auto shrink-0 ${className}`}
    />
  );
}

function IbisBullet({ text, icon }: { text: string; icon?: string }) {
  return (
    <li className="flex items-start gap-3">
      <IbisIcon src={icon ?? '/red-ibis-5.svg'} className="mt-2" />
      <span>{text}</span>
    </li>
  );
}

export default function Home() {
  return (
    <div className="relative flex flex-1 justify-center overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteJsonLd),
        }}
      />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_8%_10%,rgba(166,71,50,0.18),transparent_33%),radial-gradient(circle_at_92%_16%,rgba(55,84,59,0.2),transparent_35%),linear-gradient(170deg,rgba(255,255,255,0.9),rgba(242,240,235,0.78))]" />

      <Image
        src="/red-ibis-4.svg"
        alt=""
        width={126}
        height={118}
        style={{ width: 'auto', height: 'auto' }}
        aria-hidden="true"
        className="ibis-drift pointer-events-none absolute -left-8 top-28 opacity-25"
      />
      <Image
        src="/red-ibis-1.svg"
        alt=""
        width={84}
        height={82}
        style={{ width: 'auto', height: 'auto' }}
        aria-hidden="true"
        className="ibis-drift pointer-events-none absolute right-10 top-20 opacity-30"
      />

      <main className="z-10 w-full bg-transparent pb-12 pt-8 sm:pt-10">
        <header className="relative mx-auto grid min-h-[74vh] w-full max-w-6xl content-center px-6 pb-16 sm:px-12">
          <div className="grid gap-8 sm:grid-cols-[220px_1fr] sm:items-center">
            <Image
              src="/ssc-logo.svg"
              alt="Logo van Sranan Story Collective"
              width={200}
              height={219}
              priority
              style={{ width: 'auto', height: 'auto' }}
              className="drop-shadow-[0_16px_28px_rgba(20,28,46,0.18)]"
            />

            <div>
              <h1 className="text-6xl leading-[0.9] text-(--ssc-river-night) sm:text-7xl lg:text-8xl">
                Sranan Story Collective
              </h1>
              <p className="mt-5 text-2xl leading-9 text-(--ssc-river-night)/90">
                In het kort: SSC voegt het menselijk verhaal toe aan de Suriname
                Time Machine.
              </p>
              <p className="mt-5 max-w-4xl text-lg leading-9 text-(--ssc-river-night)/88">
                Samen met Surinaams-Nederlandse diasporagemeenschappen in
                Amsterdam en elders in Nederland bouwen we aan een uitnodigend
                platform waar verhalen gedeeld kunnen worden, met een boom als
                symbool voor verbinding en mensen als hart van het collectief.
              </p>
            </div>
          </div>

          <div className="mt-10 h-0.5] w-full bg-[linear-gradient(90deg,transparent,rgba(23,37,64,0.35),rgba(166,71,50,0.4),transparent)]" />
        </header>

        <div className="relative mx-auto w-full max-w-5xl px-6 pb-12 sm:px-12">
          <div className="absolute bottom-0 left-6 top-0 w-px bg-[linear-gradient(180deg,rgba(23,37,64,0.05),rgba(23,37,64,0.35),rgba(166,71,50,0.4),rgba(23,37,64,0.05))] sm:left-12" />

          <section id="collectief" className="relative py-8 pl-6 sm:pl-10">
            <h2 className="text-4xl text-(--ssc-river-night)">
              Wat is Sranan Story Collective?
            </h2>
            <p className="mt-4 leading-8 text-(--ssc-river-night)/92">
              SSC is de brug naar een duurzame, door community gedragen
              aanvulling op de Suriname Time Machine die verhalen, beelden,
              geluid, plekken en geschiedenis in samenhang toont en bewaart.
            </p>
            <p className="mt-4 leading-8 text-(--ssc-river-night)/92">
              Op deze manier voegt SSC het menselijke verhaal achter de
              koloniale archieven toe in samenwerking met de Surinaamse
              gemeenschappen.
            </p>
            <p className="mt-4 leading-8 text-(--ssc-river-night)/92">
              De community builders vormen samen met Afro-Surinaamse,
              Hindoestaanse, Javaanse, Marron, Chinese en Inheemse gemeenschap -
              iedereen die wortels heeft in Suriname - een nieuw collectief dat
              verhalen samenvoegt over Surinaams erfgoed.
            </p>
          </section>

          <section id="tijdmachine" className="relative py-8 pl-6 sm:pl-10">
            <div className="mb-4 text-sm uppercase tracking-[0.14em] text-(--ssc-kankantrie-canopy)">
              Verbinding met de Suriname Time Machine
            </div>
            <h2 className="text-4xl text-(--ssc-kankantrie-canopy)">
              Wat is Suriname Time Machine?
            </h2>
            <p className="mt-4 leading-8 text-(--ssc-river-night)/92">
              De Tijdmachine integreert een steeds groeiend aantal databanken
              uit het Surinaamse verleden, beheerd door verschillende
              erfgoedinstellingen, op een digitale kaart. Onderzoekers kunnen
              daardoor efficiënter en nauwkeuriger werken. Mensen die hun
              familiegeschiedenis onderzoeken vinden informatie gemakkelijker
              terug, ook wanneer namen of adressen in de loop van de tijd zijn
              veranderd.
            </p>
            <p className="mt-4 leading-8 text-(--ssc-river-night)/92">
              De Suriname Time Machine richt zich op het digitaal uitbreiden en
              toegankelijker maken van de Surinaamse geschiedenis voor
              historisch- en stamboomonderzoek.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 text-sm font-semibold text-(--ssc-river-night)">
              <a
                href="https://surinametijdmachine.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-b-2 border-(--ssc-ibis-red)/60 pb-1 hover:border-(--ssc-river-night)"
              >
                <IbisIcon src="/red-ibis-2.svg" className="mt-0.5" />
                surinametijdmachine.org
              </a>
              <a
                href="https://hdsc.ning.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-b-2 border-(--ssc-ibis-red)/60 pb-1 hover:border-(--ssc-river-night)"
              >
                <IbisIcon src="/red-ibis-3.svg" className="mt-0.5" />
                hdsc.ning.com
              </a>
            </div>
          </section>

          <section id="cocreatie" className="relative py-8 pl-6 sm:pl-10">
            <blockquote className="border-l-2 border-(--ssc-ibis-red) pl-5 text-lg leading-8 text-(--ssc-river-night)/86 italic">
              “Wij streven ernaar een uitnodigend en toegankelijk platform te
              creëren waar mensen zich vrij en veilig voelen om hun verhalen te
              delen.”
            </blockquote>
          </section>

          <section className="relative py-8 pl-6 sm:pl-10">
            <h2 className="text-4xl text-(--ssc-ibis-red)">
              Methodologie en co-creatie
            </h2>
            <p className="mt-4 leading-8 text-(--ssc-river-night)/92">
              In dit project houdt co-creatie in: het betrekken van
              gemeenschapsbouwers en leden van de gemeenschap bij discussies
              over:
            </p>
            <ul className="mt-4 space-y-2 text-(--ssc-river-night)/92">
              {cocreatiePunten.map((punt, index) => (
                <IbisBullet
                  key={punt}
                  text={punt}
                  icon={index % 2 === 0 ? '/red-ibis-5.svg' : '/red-ibis-6.svg'}
                />
              ))}
            </ul>
            <p className="mt-4 leading-8 text-(--ssc-river-night)/92">
              In deze fase combineert de methodologie bestaande
              participatievormen van de Suriname Time Machine, zoals mapathons
              en dataverrijking, met de gemeenschapsopbouw, consultatie en
              toekomstige vertelvormen van SSC.
            </p>
          </section>

          <section className="relative py-8 pl-6 sm:pl-10">
            <h2 className="text-4xl text-(--ssc-river-night)">
              Kernboodschappen
            </h2>
            <ul className="mt-4 space-y-3 leading-8 text-(--ssc-river-night)/92">
              {kernboodschappen.map((item, index) => (
                <IbisBullet
                  key={item}
                  text={item}
                  icon={index === 1 ? '/red-ibis-1.svg' : '/red-ibis-3.svg'}
                />
              ))}
            </ul>
          </section>

          <section id="team" className="relative py-8 pl-6 sm:pl-10">
            <h2 className="text-4xl text-(--ssc-river-night)">Het team</h2>
            <p className="mt-4 leading-8 text-(--ssc-river-night)/92">
              Het team van SSC bestaat uit drie community builders: Sharmila
              Badloe, Dewi van Leeuwen Sastromedjo en Angelique Hoogmoed.
            </p>
            <p className="mt-4 leading-8 text-(--ssc-river-night)/92">
              De onderzoekslijn via de Suriname Time Machine is zichtbaar in de
              samenwerking met Thunnis van Oort (projectleider) en Jona Schlegel
              (data en design).
            </p>
            <p className="mt-4 leading-8 text-(--ssc-river-night)/92">
              Bio-links:
            </p>
            <ul className="mt-3 space-y-2 text-(--ssc-river-night)/92">
              {teamLinks.map((member, index) => (
                <li key={member.name} className="flex items-start gap-3">
                  <IbisIcon
                    src={
                      index % 2 === 0 ? '/red-ibis-2.svg' : '/red-ibis-1.svg'
                    }
                    className="mt-1"
                  />
                  {member.href ? (
                    <a
                      href={member.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 border-b-2 border-(--ssc-ibis-red)/60 pb-1 hover:border-(--ssc-river-night)"
                    >
                      {member.name}
                    </a>
                  ) : (
                    <span>
                      {member.name}{' '}
                      <span className="opacity-70">(link volgt)</span>
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </section>

          <section id="bereik" className="relative py-8 pl-6 sm:pl-10">
            <h2 className="text-4xl text-(--ssc-kankantrie-root)">
              Communicatie en publieksbereik
            </h2>
            <p className="mt-4 leading-8 text-(--ssc-river-night)/92">
              Vanwege beperkte inzetbaarheid communiceren wij vooralsnog per
              kwartaal nieuwsbrieven en delen wij updates en
              contactmogelijkheden via de kanalen die op dat moment beschikbaar
              zijn.
            </p>
            <p className="mt-4 leading-8 text-(--ssc-river-night)/92">
              We komen graag in contact met iedereen die hieraan een bijdrage
              wil leveren. We komen ook graag naar bestaande activiteiten om dit
              samen te bespreken.
            </p>
            <p className="mt-4 leading-8 text-(--ssc-river-night)/92">
              Wie iemand uit het team rechtstreeks wil benaderen, kan terecht in
              het{' '}
              <a
                href="#team"
                className="border-b border-(--ssc-ibis-red)/60 pb-0.5 hover:border-(--ssc-river-night)"
              >
                teamoverzicht
              </a>{' '}
              hierboven.
            </p>
            <p className="mt-4 leading-8 text-(--ssc-river-night)/92">
              Onze website is nog in aanbouw.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
