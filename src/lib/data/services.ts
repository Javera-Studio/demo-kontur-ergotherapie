export type FaqEntry = {
  question: string;
  answer: string;
};

export type AblaufSchritt = {
  title: string;
  text: string;
};

export type Service = {
  slug: string;
  /** Zweistellige Nummer für die Leistungsnavigation, z. B. "01". */
  number: string;
  /** Kurzer Titel für Navigation, Karten und Footer. */
  navTitle: string;
  /** Voller Seitentitel für H1 und Hero. */
  title: string;
  /** Ein bis zwei Sätze für Karten/Vorschau auf der Startseite. */
  teaser: string;
  /** Kurzes Schlagwort für den interaktiven Leistungsfinder, z. B. "Kind". */
  finderLabel: string;
  /** Tags, über die der Leistungsfinder auf diese Seite verweist. */
  finderTags: string[];
  metaTitle: string;
  metaDescription: string;
  heroKicker: string;
  heroText: string;
  /** Für wen die Behandlung geeignet sein kann. */
  fuerWen: string[];
  /** Typische Anliegen und Einsatzbereiche. */
  anliegen: string[];
  /** Ziele der Ergotherapie in diesem Bereich. */
  ziele: string[];
  ablauf: AblaufSchritt[];
  faq: FaqEntry[];
  /** Slugs verwandter Leistungen. */
  verwandte: string[];
  /** Pfad zum Hero-/Vorschaubild in public/images. */
  heroImage: string;
  /** Alt-Text, der den tatsächlichen Bildinhalt beschreibt. */
  imageAlt: string;
};

export const services: Service[] = [
  {
    slug: "ergotherapie-kinder",
    number: "01",
    navTitle: "Ergotherapie für Kinder",
    title: "Ergotherapie für Kinder",
    teaser:
      "Unterstützung bei Fein- und Grobmotorik, Konzentration und Alltagshandlungen – spielerisch und altersgerecht.",
    finderLabel: "Kind",
    finderTags: ["kind", "alltag"],
    metaTitle: "Ergotherapie für Kinder in Berlin",
    metaDescription:
      "Ergotherapie für Kinder in Berlin: Unterstützung bei Motorik, Konzentration, Wahrnehmung und Alltagshandlungen. Individuelle Förderung im KONTUR Zentrum für Ergotherapie.",
    heroKicker: "Kinder & Jugendliche",
    heroText:
      "Kinder entwickeln sich in ihrem eigenen Tempo. Wenn Feinmotorik, Konzentration oder Alltagshandlungen wie Anziehen und Schreiben spürbar mehr Anstrengung kosten als erwartet, unterstützen wir gezielt und spielerisch – abgestimmt auf Alter und Entwicklungsstand.",
    fuerWen: [
      "Kinder mit Auffälligkeiten in Fein- oder Grobmotorik",
      "Kinder mit Konzentrations- und Aufmerksamkeitsschwierigkeiten",
      "Kinder mit Wahrnehmungsbesonderheiten (sensorische Integration)",
      "Kinder mit Schwierigkeiten beim Schreiben oder in der Schulfähigkeit",
    ],
    anliegen: [
      "Schwierigkeiten beim Stifthalten oder Schreibenlernen",
      "Unsicherheiten bei alltäglichen Handlungen wie An- und Ausziehen",
      "Auffällige Ungeschicklichkeit oder vermehrtes Stolpern",
      "Herausforderungen in der Selbstorganisation im Schulalltag",
    ],
    ziele: [
      "Feinmotorische und grobmotorische Fähigkeiten stärken",
      "Konzentration und Handlungsplanung fördern",
      "Selbstständigkeit im Alltag und in der Schule aufbauen",
      "Freude an Bewegung und eigenem Können vermitteln",
    ],
    ablauf: [
      {
        title: "Anamnese und Befund",
        text: "Gemeinsames Gespräch mit den Eltern und spielerische Testverfahren zur Einschätzung von Motorik, Wahrnehmung und Konzentration.",
      },
      {
        title: "Individueller Förderplan",
        text: "Auf Basis des Befunds legen wir Ziele fest, die zum Alter und Alltag des Kindes passen.",
      },
      {
        title: "Therapieeinheiten",
        text: "Spielerische Übungen, die gezielt Motorik, Wahrnehmung und Konzentration ansprechen.",
      },
      {
        title: "Austausch mit Bezugspersonen",
        text: "Regelmäßige Rückmeldung an Eltern, auf Wunsch auch Abstimmung mit Kita oder Schule.",
      },
    ],
    faq: [
      {
        question: "Ab welchem Alter ist Ergotherapie für Kinder sinnvoll?",
        answer:
          "Ergotherapie kann grundsätzlich schon im Kleinkindalter beginnen. Welcher Zeitpunkt sinnvoll ist, besprechen wir individuell im Erstgespräch.",
      },
      {
        question: "Brauche ich eine Verordnung vom Arzt?",
        answer:
          "Ja, Ergotherapie wird auf Verordnung durch eine Kinderärztin, einen Kinderarzt oder eine andere Fachärztin bzw. einen Facharzt durchgeführt.",
      },
      {
        question: "Werden Eltern in die Therapie einbezogen?",
        answer:
          "Ja, wir besprechen Beobachtungen und Übungen regelmäßig gemeinsam, damit Fortschritte auch im Alltag zuhause unterstützt werden können.",
      },
      {
        question: "Findet die Therapie in der Praxis oder woanders statt?",
        answer:
          "In der Regel findet die Therapie in unseren Praxisräumen statt. Ob eine Einbindung des Umfelds sinnvoll ist, klären wir im Einzelfall.",
      },
    ],
    verwandte: ["ergotherapie-neurologie", "ergotherapie-psychische-gesundheit"],
    heroImage: "/images/praxis-bewegungsraum-kinder.jpg",
    imageAlt: "Bewegungsraum für Kinder mit Kletterwand, Hängeschaukel und Therapiematerial im KONTUR Zentrum",
  },
  {
    slug: "ergotherapie-neurologie",
    number: "02",
    navTitle: "Neurologische Ergotherapie",
    title: "Neurologische Ergotherapie",
    teaser:
      "Gezieltes Training nach Schlaganfall, Schädel-Hirn-Trauma oder bei neurologischen Erkrankungen für mehr Selbstständigkeit im Alltag.",
    finderLabel: "Neurologie",
    finderTags: ["neurologie", "alltag"],
    metaTitle: "Neurologische Ergotherapie in Berlin",
    metaDescription:
      "Neurologische Ergotherapie in Berlin: Training von Alltagsfähigkeiten nach Schlaganfall, Schädel-Hirn-Trauma oder bei neurologischen Erkrankungen. Individuell im KONTUR Zentrum.",
    heroKicker: "Neurologie",
    heroText:
      "Nach einem Schlaganfall, einer Hirnverletzung oder bei fortschreitenden neurologischen Erkrankungen verändert sich der Alltag oft grundlegend. Wir unterstützen dabei, verlorene Fähigkeiten neu aufzubauen und vorhandene Ressourcen gezielt zu nutzen.",
    fuerWen: [
      "Menschen nach Schlaganfall",
      "Menschen nach Schädel-Hirn-Trauma",
      "Menschen mit Multipler Sklerose, Parkinson oder anderen neurologischen Erkrankungen",
      "Menschen mit neurologisch bedingten Einschränkungen der Handfunktion",
    ],
    anliegen: [
      "Eingeschränkte Beweglichkeit oder Kraft einer Körperhälfte",
      "Schwierigkeiten bei Handlungsplanung und Konzentration",
      "Wahrnehmungsstörungen, etwa im räumlichen Sehen",
      "Verlust von Selbstständigkeit bei Alltagshandlungen",
    ],
    ziele: [
      "Alltagsfähigkeiten schrittweise zurückgewinnen oder kompensieren",
      "Motorik, Koordination und Handfunktion trainieren",
      "Kognitive Fähigkeiten wie Aufmerksamkeit und Planung fördern",
      "Hilfsmittel und Anpassungen im Wohnumfeld einbeziehen, wo sinnvoll",
    ],
    ablauf: [
      {
        title: "Neurologischer Befund",
        text: "Erhebung von Bewegungsfähigkeit, Wahrnehmung und kognitiven Funktionen als Grundlage der Therapieplanung.",
      },
      {
        title: "Zielvereinbarung",
        text: "Gemeinsame Festlegung realistischer Etappenziele, orientiert am persönlichen Alltag.",
      },
      {
        title: "Funktionelles Training",
        text: "Übungen zu Motorik, Handfunktion und Handlungsplanung, angepasst an den aktuellen Stand.",
      },
      {
        title: "Verlaufskontrolle",
        text: "Regelmäßige Anpassung der Therapie an Fortschritte und veränderte Bedürfnisse.",
      },
    ],
    faq: [
      {
        question: "Wie schnell nach einem Schlaganfall sollte Ergotherapie beginnen?",
        answer:
          "Der Zeitpunkt hängt vom individuellen Krankheitsverlauf ab und wird von der behandelnden Ärztin oder dem behandelnden Arzt festgelegt. Wir stimmen die Therapie eng darauf ab.",
      },
      {
        question: "Kann Ergotherapie auch bei fortschreitenden Erkrankungen helfen?",
        answer:
          "Ja, auch bei fortschreitenden neurologischen Erkrankungen kann Ergotherapie dabei unterstützen, Selbstständigkeit möglichst lange zu erhalten.",
      },
      {
        question: "Werden Angehörige einbezogen?",
        answer:
          "Auf Wunsch beziehen wir Angehörige in Übungen und Alltagsstrategien ein, um die Unterstützung zuhause zu erleichtern.",
      },
      {
        question: "Ist Hausbesuch möglich?",
        answer:
          "Ob ein Hausbesuch sinnvoll und möglich ist, besprechen wir individuell – sprechen Sie uns gerne darauf an.",
      },
    ],
    verwandte: ["handtherapie", "ergotherapie-senioren"],
    heroImage: "/images/service-ergotherapie-neurologie.jpg",
    imageAlt: "Ergotherapeut übt mit einem älteren Klienten eine kognitive Zuordnungsübung, im Hintergrund eine Illustration des Gehirns",
  },
  {
    slug: "handtherapie",
    number: "03",
    navTitle: "Handtherapie",
    title: "Handtherapie",
    teaser:
      "Spezialisierte Behandlung nach Verletzungen oder Operationen an Hand und Arm – für Beweglichkeit, Kraft und Funktion.",
    finderLabel: "Hand",
    finderTags: ["hand"],
    metaTitle: "Handtherapie in Berlin",
    metaDescription:
      "Handtherapie in Berlin nach Verletzungen, Operationen oder bei chronischen Beschwerden an Hand und Arm. Funktionelles Training im KONTUR Zentrum für Ergotherapie.",
    heroKicker: "Hand & Arm",
    heroText:
      "Die Hand ist unser wichtigstes Greif- und Ausdrucksorgan. Nach Verletzungen, Operationen oder bei chronischen Beschwerden unterstützt gezieltes Training dabei, Beweglichkeit, Kraft und Feingefühl wieder aufzubauen.",
    fuerWen: [
      "Menschen nach Sehnen-, Nerven- oder Knochenverletzungen der Hand",
      "Menschen nach handchirurgischen Operationen",
      "Menschen mit rheumatischen Erkrankungen der Hand",
      "Menschen mit chronischen Beschwerden wie Sehnenscheidenentzündungen",
    ],
    anliegen: [
      "Eingeschränkte Beweglichkeit einzelner Finger oder des Handgelenks",
      "Kraftverlust beim Greifen oder Halten",
      "Narbenempfindlichkeit nach Operationen",
      "Schwellungen oder Schonhaltung nach Verletzungen",
    ],
    ziele: [
      "Beweglichkeit von Fingern, Hand und Handgelenk verbessern",
      "Greif- und Feinmotorik funktionell trainieren",
      "Narbengewebe geschmeidig halten",
      "Belastbarkeit für Alltag und Beruf schrittweise aufbauen",
    ],
    ablauf: [
      {
        title: "Handspezifischer Befund",
        text: "Erfassung von Beweglichkeit, Kraft, Sensibilität und Narbenzustand als Grundlage der Behandlung.",
      },
      {
        title: "Therapieplanung",
        text: "Abstimmung mit ärztlicher Verordnung und Festlegung geeigneter Maßnahmen.",
      },
      {
        title: "Funktionelles Training",
        text: "Gezielte Übungen zu Beweglichkeit, Kraft und Belastbarkeit, ergänzt durch Narbenbehandlung, wo notwendig.",
      },
      {
        title: "Schienenversorgung",
        text: "Bei Bedarf Anfertigung individueller Schienen zur Unterstützung des Heilungsverlaufs.",
      },
    ],
    faq: [
      {
        question: "Wann kann Handtherapie nach einer Operation beginnen?",
        answer:
          "Der Zeitpunkt richtet sich nach der ärztlichen Freigabe und dem individuellen Heilungsverlauf.",
      },
      {
        question: "Werden auch Schienen angefertigt?",
        answer:
          "Ja, bei Bedarf fertigen wir individuelle Schienen an, die den Heilungsprozess unterstützen.",
      },
      {
        question: "Ist Handtherapie auch ohne Operation sinnvoll?",
        answer:
          "Ja, auch bei chronischen Beschwerden ohne vorangegangene Operation kann gezieltes Training helfen. Eine ärztliche Verordnung ist dafür Voraussetzung.",
      },
      {
        question: "Wie lange dauert eine Behandlung typischerweise?",
        answer:
          "Die Dauer hängt von Art und Schwere der Beschwerden ab und wird individuell im Erstgespräch eingeschätzt.",
      },
    ],
    verwandte: ["ergotherapie-orthopaedie", "ergotherapie-neurologie"],
    heroImage: "/images/praxis-handtherapie-raum.jpg",
    imageAlt: "Therapieraum mit Wandmodulen für Fein- und Handmotorik sowie Behandlungsliege",
  },
  {
    slug: "ergotherapie-orthopaedie",
    number: "04",
    navTitle: "Orthopädische Ergotherapie",
    title: "Orthopädische Ergotherapie",
    teaser:
      "Unterstützung bei Beschwerden des Bewegungsapparats – nach Operationen, Unfällen oder bei chronischen Erkrankungen der Gelenke.",
    finderLabel: "Orthopädie",
    finderTags: ["orthopaedie", "alltag"],
    metaTitle: "Orthopädische Ergotherapie in Berlin",
    metaDescription:
      "Orthopädische Ergotherapie in Berlin bei Beschwerden des Bewegungsapparats, nach Operationen oder Unfällen. Funktionelles Training im KONTUR Zentrum für Ergotherapie.",
    heroKicker: "Orthopädie",
    heroText:
      "Erkrankungen und Verletzungen des Bewegungsapparats wirken sich oft direkt auf Alltagshandlungen aus. Wir unterstützen dabei, Bewegungsabläufe zu trainieren und Belastungen im Alltag gezielt anzupassen.",
    fuerWen: [
      "Menschen nach Gelenkoperationen, etwa an Schulter, Hüfte oder Knie",
      "Menschen nach Unfällen mit orthopädischen Verletzungen",
      "Menschen mit chronischen Erkrankungen wie Arthrose",
      "Menschen mit belastungsabhängigen Schmerzen im Alltag",
    ],
    anliegen: [
      "Eingeschränkte Beweglichkeit nach Operation oder Verletzung",
      "Schmerzen bei alltäglichen Bewegungsabläufen",
      "Unsicherheit bei der Belastung eines Gelenks",
      "Notwendige Anpassung von Arbeitsabläufen im Alltag",
    ],
    ziele: [
      "Beweglichkeit und Belastbarkeit schrittweise aufbauen",
      "Bewegungsabläufe gelenkschonend trainieren",
      "Alltags- und Arbeitsplatzanpassungen erarbeiten",
      "Sicherheit im Umgang mit dem betroffenen Gelenk stärken",
    ],
    ablauf: [
      {
        title: "Funktionsbefund",
        text: "Erhebung von Beweglichkeit, Belastbarkeit und Alltagseinschränkungen als Ausgangspunkt.",
      },
      {
        title: "Therapieplanung",
        text: "Festlegung von Übungen und Maßnahmen abgestimmt auf Verordnung und Heilungsphase.",
      },
      {
        title: "Bewegungstraining",
        text: "Gezielte Übungen zu Beweglichkeit, Kraft und alltagsnahen Bewegungsabläufen.",
      },
      {
        title: "Alltagstransfer",
        text: "Gemeinsame Erarbeitung praktischer Strategien für Beruf und Alltag.",
      },
    ],
    faq: [
      {
        question: "Was unterscheidet orthopädische Ergotherapie von Physiotherapie?",
        answer:
          "Ergotherapie legt den Fokus stärker auf die konkrete Umsetzung im Alltag und Beruf, während Physiotherapie oft strukturelle Bewegungsfunktionen in den Vordergrund stellt. Beide Ansätze können sich sinnvoll ergänzen.",
      },
      {
        question: "Wird auch der Arbeitsplatz berücksichtigt?",
        answer:
          "Ja, bei Bedarf beziehen wir konkrete Arbeitsabläufe und mögliche Anpassungen in die Therapie ein.",
      },
      {
        question: "Ab wann nach einer Operation ist Ergotherapie sinnvoll?",
        answer:
          "Das hängt vom individuellen Heilungsverlauf und der ärztlichen Freigabe ab und wird im Erstgespräch besprochen.",
      },
      {
        question: "Ist eine Verordnung erforderlich?",
        answer:
          "Ja, orthopädische Ergotherapie erfolgt auf ärztliche Verordnung.",
      },
    ],
    verwandte: ["handtherapie", "ergotherapie-senioren"],
    heroImage: "/images/praxis-eingang.jpg",
    imageAlt: "Eingangsbereich des KONTUR Zentrums mit Rezeption und Logo an der Wand",
  },
  {
    slug: "ergotherapie-senioren",
    number: "05",
    navTitle: "Ergotherapie für Senioren",
    title: "Ergotherapie für Senioren",
    teaser:
      "Erhalt von Selbstständigkeit und Sicherheit im Alltag – bei altersbedingten Veränderungen oder nach gesundheitlichen Einschnitten.",
    finderLabel: "Senioren",
    finderTags: ["senioren", "alltag"],
    metaTitle: "Ergotherapie für Senioren in Berlin",
    metaDescription:
      "Ergotherapie für Senioren in Berlin: Erhalt von Selbstständigkeit, Sturzprophylaxe und Alltagstraining bei altersbedingten Veränderungen. Im KONTUR Zentrum für Ergotherapie.",
    heroKicker: "Senioren",
    heroText:
      "Mit zunehmendem Alter verändern sich Kraft, Beweglichkeit und manchmal auch die kognitive Leistungsfähigkeit. Wir unterstützen dabei, Selbstständigkeit im eigenen Zuhause möglichst lange zu erhalten.",
    fuerWen: [
      "Ältere Menschen mit nachlassender Kraft oder Beweglichkeit",
      "Menschen mit erhöhtem Sturzrisiko",
      "Menschen mit beginnenden kognitiven Veränderungen",
      "Menschen nach Krankenhausaufenthalt mit erhöhtem Unterstützungsbedarf",
    ],
    anliegen: [
      "Unsicherheit beim Gehen oder erhöhtes Sturzrisiko",
      "Schwierigkeiten bei alltäglichen Handlungen wie Ankleiden oder Kochen",
      "Nachlassende Konzentration oder Orientierung",
      "Bedarf an Anpassungen im Wohnumfeld",
    ],
    ziele: [
      "Selbstständigkeit im Alltag möglichst lange erhalten",
      "Sturzrisiko durch gezieltes Training reduzieren",
      "Alltagshandlungen und Orientierung trainieren",
      "Wohnumfeld gemeinsam auf Sicherheit und Praktikabilität prüfen",
    ],
    ablauf: [
      {
        title: "Alltagsorientierter Befund",
        text: "Einschätzung von Mobilität, Selbstständigkeit und Sicherheit im gewohnten Umfeld.",
      },
      {
        title: "Individuelle Zielsetzung",
        text: "Gemeinsame Festlegung, welche Alltagshandlungen im Vordergrund stehen sollen.",
      },
      {
        title: "Training im Alltag",
        text: "Übungen zu Kraft, Gleichgewicht und konkreten Alltagshandlungen.",
      },
      {
        title: "Wohnraumberatung",
        text: "Bei Bedarf Hinweise zu Hilfsmitteln und sinnvollen Anpassungen im Wohnumfeld.",
      },
    ],
    faq: [
      {
        question: "Kommt die Ergotherapeutin oder der Ergotherapeut auch nach Hause?",
        answer:
          "Ob ein Hausbesuch sinnvoll und möglich ist, besprechen wir individuell im Erstgespräch.",
      },
      {
        question: "Hilft Ergotherapie auch bei beginnender Demenz?",
        answer:
          "Ergotherapie kann bei beginnenden kognitiven Veränderungen unterstützend eingesetzt werden. Details besprechen wir gerne persönlich.",
      },
      {
        question: "Wie oft findet die Therapie statt?",
        answer:
          "Die Frequenz richtet sich nach ärztlicher Verordnung und individuellem Bedarf.",
      },
      {
        question: "Wird die Familie einbezogen?",
        answer:
          "Auf Wunsch beziehen wir Angehörige ein, um Alltagsstrategien gemeinsam abzustimmen.",
      },
    ],
    verwandte: ["ergotherapie-neurologie", "ergotherapie-orthopaedie"],
    heroImage: "/images/service-ergotherapie-senioren.jpg",
    imageAlt: "Ergotherapeutin unterstützt eine Klientin beim Trainieren einer Greif- und Reichbewegung in der heimischen Küche",
  },
  {
    slug: "ergotherapie-psychische-gesundheit",
    number: "06",
    navTitle: "Psychisch-funktionelle Ergotherapie",
    title: "Psychisch-funktionelle Ergotherapie",
    teaser:
      "Aufbau von Struktur, Handlungsfähigkeit und Belastbarkeit im Alltag bei psychischen Erkrankungen oder Belastungssituationen.",
    finderLabel: "Alltag",
    finderTags: ["psyche", "alltag"],
    metaTitle: "Psychisch-funktionelle Ergotherapie in Berlin",
    metaDescription:
      "Psychisch-funktionelle Ergotherapie in Berlin: Struktur und Handlungsfähigkeit im Alltag bei psychischen Erkrankungen aufbauen. Im KONTUR Zentrum für Ergotherapie.",
    heroKicker: "Psychische Gesundheit",
    heroText:
      "Psychische Erkrankungen oder anhaltende Belastungssituationen wirken sich häufig auf Antrieb, Struktur und Alltagsbewältigung aus. Wir unterstützen dabei, Handlungsfähigkeit und Tagesstruktur schrittweise wieder aufzubauen.",
    fuerWen: [
      "Menschen mit depressiven Erkrankungen",
      "Menschen mit Angststörungen oder Belastungsreaktionen",
      "Menschen in beruflichen oder privaten Umbruchsituationen mit spürbarer Überlastung",
      "Menschen nach stationärem psychiatrischem Aufenthalt",
    ],
    anliegen: [
      "Schwierigkeiten, den Alltag zu strukturieren",
      "Antriebslosigkeit oder Rückzug aus Alltagsaktivitäten",
      "Konzentrations- und Entscheidungsschwierigkeiten",
      "Unsicherheit beim Wiedereinstieg in Beruf oder Alltag",
    ],
    ziele: [
      "Tagesstruktur und Handlungsfähigkeit aufbauen",
      "Belastbarkeit schrittweise steigern",
      "Selbstwirksamkeit im Alltag stärken",
      "Wiedereinstieg in Beruf oder soziale Aktivitäten begleiten",
    ],
    ablauf: [
      {
        title: "Erstgespräch und Befund",
        text: "Gemeinsame Einschätzung der aktuellen Alltagssituation und persönlicher Anliegen.",
      },
      {
        title: "Zielorientierte Planung",
        text: "Festlegung realistischer, alltagsnaher Etappenziele.",
      },
      {
        title: "Handlungsorientiertes Training",
        text: "Aufbau von Struktur, Routinen und konkreten Handlungskompetenzen.",
      },
      {
        title: "Begleitung im Übergang",
        text: "Unterstützung beim schrittweisen Wiedereinstieg in Alltag, Beruf oder soziale Aktivitäten.",
      },
    ],
    faq: [
      {
        question: "Ersetzt Ergotherapie eine Psychotherapie?",
        answer:
          "Nein, psychisch-funktionelle Ergotherapie ergänzt eine ärztliche oder psychotherapeutische Behandlung, ersetzt sie aber nicht.",
      },
      {
        question: "Ist eine Diagnose Voraussetzung?",
        answer:
          "Ergotherapie erfolgt auf ärztliche Verordnung. Die Einzelheiten besprechen wir gerne im Erstgespräch.",
      },
      {
        question: "Wie diskret läuft die Therapie ab?",
        answer:
          "Alle Gespräche und Inhalte unterliegen der Schweigepflicht und werden vertraulich behandelt.",
      },
      {
        question: "Kann die Therapie parallel zu einer Psychotherapie stattfinden?",
        answer:
          "Ja, eine Kombination ist möglich und wird bei Bedarf mit den behandelnden Fachpersonen abgestimmt.",
      },
    ],
    verwandte: ["ergotherapie-kinder", "ergotherapie-senioren"],
    heroImage: "/images/service-ergotherapie-psychische-gesundheit.jpg",
    imageAlt: "Zwei Personen erarbeiten gemeinsam einen strukturierten Wochenplan",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export function getRelatedServices(service: Service): Service[] {
  return service.verwandte
    .map((slug) => getServiceBySlug(slug))
    .filter((entry): entry is Service => Boolean(entry));
}
