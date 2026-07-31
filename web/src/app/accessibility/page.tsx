import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Toegankelijkheidsverklaring',
  description:
    'Toegankelijkheidsverklaring van Sranan Story Collective met huidige stand, verbeteracties en hoe je een toegankelijkheidsprobleem kunt melden.',
  alternates: {
    canonical: '/accessibility',
  },
  openGraph: {
    title: 'Toegankelijkheidsverklaring | Sranan Story Collective',
    description:
      'Toegankelijkheidsverklaring van Sranan Story Collective met huidige stand, verbeteracties en hoe je een toegankelijkheidsprobleem kunt melden.',
    url: '/accessibility',
  },
  twitter: {
    title: 'Toegankelijkheidsverklaring | Sranan Story Collective',
    description:
      'Toegankelijkheidsverklaring van Sranan Story Collective met huidige stand, verbeteracties en hoe je een toegankelijkheidsprobleem kunt melden.',
  },
};

export default function AccessibilityStatementPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-6 pb-16 pt-12 sm:px-12">
      <p className="text-sm uppercase tracking-[0.14em] text-(--ssc-kankantrie-canopy)">
        Juridische informatie
      </p>
      <h1 className="mt-2 text-5xl leading-tight text-(--ssc-river-night)">
        Toegankelijkheidsverklaring
      </h1>
      <p className="mt-4 text-sm text-(--ssc-river-night)/70">
        Laatst bijgewerkt: 31 juli 2026
      </p>

      <section className="mt-10 space-y-4 leading-8 text-(--ssc-river-night)/92">
        <p>
          Sranan Story Collective wil dat deze website bruikbaar is voor zoveel
          mogelijk mensen, inclusief bezoekers met een beperking en bezoekers
          die ondersteunende technologie gebruiken.
        </p>
        <p>
          Deze verklaring volgt de lijn van Nederlandse overheidsrichtlijnen,
          internationale WCAG-principes en de toegankelijkheidsambities die ook
          bij Huygens Instituut en KNAW worden gehanteerd.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-3xl text-(--ssc-ibis-red)">Huidige stand</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6 leading-8 text-(--ssc-river-night)/92">
          <li>De website is nog in aanbouw en wordt stapsgewijs verbeterd.</li>
          <li>
            We letten op leesbaarheid, kleurcontrast en toetsenbordnavigatie.
          </li>
          <li>
            Afbeeldingen krijgen waar nodig betekenisvolle alternatieve teksten.
          </li>
          <li>
            Structuur met duidelijke koppen helpt navigatie voor schermlezers.
          </li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-3xl text-(--ssc-kankantrie-root)">
          Waar we aan werken
        </h2>
        <ul className="mt-4 list-disc space-y-2 pl-6 leading-8 text-(--ssc-river-night)/92">
          <li>Verdere toetsing op WCAG 2.1 niveau AA.</li>
          <li>
            Verbeteren van formulieren en feedbackmechanismen zodra deze live
            gaan.
          </li>
          <li>
            Consistente focus-indicatoren en semantische HTML op alle
            pagina&apos;s.
          </li>
          <li>Regelmatige controles bij nieuwe inhoud en ontwerpupdates.</li>
        </ul>
      </section>

      <section className="mt-10 space-y-4 leading-8 text-(--ssc-river-night)/92">
        <h2 className="text-3xl text-(--ssc-river-night)">Probleem melden</h2>
        <p>
          Ervaar je een toegankelijkheidsprobleem op deze website? Laat het ons
          weten. Beschrijf daarbij zo duidelijk mogelijk op welke pagina je het
          probleem tegenkomt en welke hulptechnologie je gebruikt.
        </p>
        <p>
          Je kunt hiervoor contact opnemen via{' '}
          <Link
            href="/#team"
            className="border-b border-(--ssc-ibis-red)/60 pb-0.5 hover:border-(--ssc-river-night)"
          >
            het teamoverzicht
          </Link>
          . We nemen meldingen serieus en gebruiken ze om verbeteringen te
          prioriteren.
        </p>
      </section>
    </main>
  );
}
