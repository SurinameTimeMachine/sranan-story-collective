import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacybeleid',
  description:
    'Lees hoe Sranan Story Collective omgaat met privacy op deze website, inclusief de huidige situatie zonder actieve gegevensverzameling.',
  alternates: {
    canonical: '/privacy-policy',
  },
  openGraph: {
    title: 'Privacybeleid | Sranan Story Collective',
    description:
      'Lees hoe Sranan Story Collective omgaat met privacy op deze website, inclusief de huidige situatie zonder actieve gegevensverzameling.',
    url: '/privacy-policy',
  },
  twitter: {
    title: 'Privacybeleid | Sranan Story Collective',
    description:
      'Lees hoe Sranan Story Collective omgaat met privacy op deze website, inclusief de huidige situatie zonder actieve gegevensverzameling.',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-6 pb-16 pt-12 sm:px-12">
      <p className="text-sm uppercase tracking-[0.14em] text-(--ssc-kankantrie-canopy)">
        Juridische informatie
      </p>
      <h1 className="mt-2 text-5xl leading-tight text-(--ssc-river-night)">
        Privacybeleid
      </h1>
      <p className="mt-4 text-sm text-(--ssc-river-night)/70">
        Laatst bijgewerkt: 31 juli 2026
      </p>

      <section className="mt-10 space-y-4 leading-8 text-(--ssc-river-night)/92">
        <p>
          Sranan Story Collective (SSC) vindt een zorgvuldige omgang met
          persoonsgegevens belangrijk. Op dit moment verzamelt deze website geen
          persoonsgegevens van bezoekers via formulieren, accounts,
          nieuwsbrieven of analysetools.
        </p>
        <p>
          Dit beleid is project-specifiek opgesteld voor deze website en sluit
          aan bij de privacy-uitgangspunten van het Huygens Instituut en de
          KNAW.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-3xl text-(--ssc-ibis-red)">
          Welke gegevens verwerken we?
        </h2>
        <p className="mt-4 leading-8 text-(--ssc-river-night)/92">
          Via deze website verwerken we in beginsel geen direct herleidbare
          persoonsgegevens. Als je doorklikt naar een externe website, geldt het
          privacybeleid van die externe partij.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-3xl text-(--ssc-kankantrie-root)">
          Waarom verwerken we deze gegevens?
        </h2>
        <p className="mt-4 leading-8 text-(--ssc-river-night)/92">
          Omdat er via deze website nu geen actieve persoonsgegevensverwerking
          plaatsvindt, zijn deze doelen op dit moment beperkt. Bij toekomstige
          uitbreiding van functionaliteiten (zoals formulieren) actualiseren we
          dit beleid.
        </p>
      </section>

      <section className="mt-10 space-y-4 leading-8 text-(--ssc-river-night)/92">
        <h2 className="text-3xl text-(--ssc-river-night)">
          Rechtsgrond en bewaartermijnen
        </h2>
        <p>
          Voor zover er geen persoonsgegevens worden verwerkt, zijn
          bewaartermijnen niet van toepassing. Als dit verandert, verwerken we
          gegevens uitsluitend op een geldige AVG-grondslag en niet langer dan
          noodzakelijk.
        </p>
      </section>

      <section className="mt-10 space-y-4 leading-8 text-(--ssc-river-night)/92">
        <h2 className="text-3xl text-(--ssc-kankantrie-canopy)">
          Delen met derden
        </h2>
        <p>
          SSC verkoopt geen persoonsgegevens. Voor de huidige website delen we
          geen persoonsgegevens van bezoekers met derden.
        </p>
      </section>

      <section className="mt-10 space-y-4 leading-8 text-(--ssc-river-night)/92">
        <h2 className="text-3xl text-(--ssc-river-night)">Jouw rechten</h2>
        <p>Je hebt onder de AVG onder andere recht op:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>inzage in je persoonsgegevens;</li>
          <li>correctie of verwijdering van gegevens;</li>
          <li>beperking van verwerking;</li>
          <li>bezwaar tegen verwerking;</li>
          <li>overdraagbaarheid van gegevens (dataportabiliteit).</li>
        </ul>
      </section>

      <section className="mt-10 space-y-4 leading-8 text-(--ssc-river-night)/92">
        <h2 className="text-3xl text-(--ssc-kankantrie-root)">Cookies</h2>
        <p>
          Deze website gebruikt op dit moment geen analytische, marketing- of
          trackingcookies.
        </p>
      </section>

      <section className="mt-10 space-y-4 leading-8 text-(--ssc-river-night)/92">
        <h2 className="text-3xl text-(--ssc-river-night)">Klachten</h2>
        <p>
          Heb je een klacht over de manier waarop SSC met persoonsgegevens
          omgaat, dan zoeken we graag eerst samen naar een oplossing.
        </p>
        <p>
          Kom je er met ons niet uit, dan heb je het recht een klacht in te
          dienen bij de{' '}
          <a
            href="https://autoriteitpersoonsgegevens.nl"
            target="_blank"
            rel="noopener noreferrer"
            className="border-b border-(--ssc-ibis-red)/60 pb-0.5 hover:border-(--ssc-river-night)"
          >
            Autoriteit Persoonsgegevens
          </a>
          .
        </p>
      </section>

      <section className="mt-10 space-y-4 leading-8 text-(--ssc-river-night)/92">
        <h2 className="text-3xl text-(--ssc-kankantrie-canopy)">
          Wijzigingen in dit beleid
        </h2>
        <p>
          SSC kan dit privacybeleid aanpassen, bijvoorbeeld bij nieuwe
          functionaliteiten of wettelijke ontwikkelingen. De meest recente
          versie staat altijd op deze pagina.
        </p>
      </section>

      <section className="mt-10 space-y-4 leading-8 text-(--ssc-river-night)/92">
        <h2 className="text-3xl text-(--ssc-ibis-red)">Contact</h2>
        <p>
          Voor vragen over dit privacybeleid of verzoeken over je
          persoonsgegevens kun je contact opnemen via het teamoverzicht op de
          homepage.
        </p>
        <p>
          Ga terug naar{' '}
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
