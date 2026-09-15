export type TeamMember = {
  name: string;
  role: string;
  /** Schwerpunkt (Therapeut:innen) oder kurze Aufgabenbeschreibung (Empfang). */
  description: string;
  image: string;
};

export const team: TeamMember[] = [
  {
    name: "Merle Wagner",
    role: "Empfang & Praxisorganisation",
    description: "Ihre Ansprechpartnerin für Termine, Organisation und Fragen rund um den Praxisbesuch.",
    image: "/images/team-merle-wagner.jpg",
  },
  {
    name: "Jana Hartmann",
    role: "Ergotherapeutin",
    description: "Schwerpunkt Pädiatrie und sensorische Integration",
    image: "/images/team-jana-hartmann.jpg",
  },
  {
    name: "Priya Nair",
    role: "Ergotherapeutin",
    description: "Schwerpunkt Geriatrie und Alltagstraining",
    image: "/images/team-priya-nair.jpg",
  },
  {
    name: "Tobias Reinke",
    role: "Ergotherapeut",
    description: "Schwerpunkt Psychisch-funktionelle Ergotherapie",
    image: "/images/team-tobias-reinke.jpg",
  },
];
