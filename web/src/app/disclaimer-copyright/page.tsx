import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Disclaimer en copyright | Sranan Story Collective',
  description:
    'Disclaimer en copyrightinformatie voor de website van Sranan Story Collective.',
};

export default function DisclaimerCopyrightPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-6 pb-16 pt-12 sm:px-12">
      <p className="text-sm uppercase tracking-[0.14em] text-(--ssc-kankantrie-canopy)">
        Juridische informatie
      </p>
      <h1 className="mt-2 text-5xl leading-tight text-(--ssc-river-night)">
        Disclaimer en copyright
      </h1>
      <p className="mt-4 text-sm text-(--ssc-river-night)/70">
        Laatst bijgewerkt: 31 juli 2026
      </p>

      <section className="mt-10 space-y-4 leading-8 text-(--ssc-river-night)/92">
        <h2 className="text-3xl text-(--ssc-ibis-red)">
          Gebruik van deze website
        </h2>
        <p>
          Sranan Story Collective (SSC) besteedt zorg aan de inhoud van deze
          website. Toch kunnen fouten, onvolledigheden of verouderde informatie
          voorkomen. Aan de inhoud van deze website kunnen geen rechten worden
          ontleend.
        </p>
      </section>

      <section className="mt-10 space-y-4 leading-8 text-(--ssc-river-night)/92">
        <h2 className="text-3xl text-(--ssc-kankantrie-root)">
          Aansprakelijkheid
        </h2>
        <p>
          SSC is niet aansprakelijk voor schade die direct of indirect ontstaat
          door gebruik van deze website, het tijdelijk niet beschikbaar zijn van
          de website of het vertrouwen op informatie op deze website.
        </p>
      </section>

      <section className="mt-10 space-y-4 leading-8 text-(--ssc-river-night)/92">
        <h2 className="text-3xl text-(--ssc-kankantrie-canopy)">
          Externe links
        </h2>
        <p>
          Deze website bevat links naar externe websites. SSC is niet
          verantwoordelijk voor de inhoud, beschikbaarheid of privacypraktijken
          van deze externe websites.
        </p>
      </section>

      <section className="mt-10 space-y-4 leading-8 text-(--ssc-river-night)/92">
        <h2 className="text-3xl text-(--ssc-river-night)">Copyright</h2>
        <p>
          Alle teksten, beelden, logo&apos;s en andere materialen op deze
          website zijn, tenzij anders vermeld, eigendom van SSC of worden
          gebruikt met toestemming van rechthebbenden.
        </p>
        <p>
          Hergebruik, publicatie of verspreiding van materiaal is alleen
          toegestaan met voorafgaande toestemming van SSC of de betreffende
          rechthebbende.
        </p>
        <p>
          Bij toegestaan gebruik moet altijd duidelijke bronvermelding worden
          opgenomen.
        </p>
      </section>

      <section className="mt-10 space-y-4 leading-8 text-(--ssc-river-night)/92">
        <h2 className="text-3xl text-(--ssc-ibis-red)">Wijzigingen</h2>
        <p>
          SSC kan deze disclaimer en copyrightverklaring op ieder moment
          aanpassen. De meest recente versie is altijd op deze pagina te vinden.
        </p>
      </section>

      <section className="mt-10 space-y-4 leading-8 text-(--ssc-river-night)/92">
        <h2 className="text-3xl text-(--ssc-river-night)">Contact</h2>
        <p>
          Vragen over gebruik van inhoud of toestemming voor hergebruik kun je
          richten aan het team via{' '}
          <Link
            href="/#team"
            className="border-b border-(--ssc-ibis-red)/60 pb-0.5 hover:border-(--ssc-river-night)"
          >
            het teamoverzicht
          </Link>
          .
        </p>
      </section>
    </main>
  );
}
