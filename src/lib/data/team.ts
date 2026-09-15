export type TeamMember = {
  name: string;
  role: string;
  focus: string;
  image: string;
};

export const team: TeamMember[] = [
  {
    name: "Merle Wagner",
    role: "Leitung, Ergotherapeutin",
    focus: "Schwerpunkt Neurologie und Handtherapie",
    image: "/images/team-merle-wagner.jpg",
  },
  {
    name: "Jana Hartmann",
    role: "Ergotherapeutin",
    focus: "Schwerpunkt Pädiatrie und sensorische Integration",
    image: "/images/team-jana-hartmann.jpg",
  },
  {
    name: "Priya Nair",
    role: "Ergotherapeutin",
    focus: "Schwerpunkt Geriatrie und Alltagstraining",
    image: "/images/team-priya-nair.jpg",
  },
  {
    name: "Tobias Reinke",
    role: "Ergotherapeut",
    focus: "Schwerpunkt Psychisch-funktionelle Ergotherapie",
    image: "/images/team-tobias-reinke.jpg",
  },
];
