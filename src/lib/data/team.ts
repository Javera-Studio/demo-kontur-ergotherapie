export type TeamMember = {
  name: string;
  role: string;
  focus: string;
};

export const team: TeamMember[] = [
  {
    name: "Merle Wagner",
    role: "Leitung, Ergotherapeutin",
    focus: "Schwerpunkt Neurologie und Handtherapie",
  },
  {
    name: "Jonas Hartmann",
    role: "Ergotherapeut",
    focus: "Schwerpunkt Pädiatrie und sensorische Integration",
  },
  {
    name: "Priya Nair",
    role: "Ergotherapeutin",
    focus: "Schwerpunkt Geriatrie und Alltagstraining",
  },
  {
    name: "Tobias Reinke",
    role: "Ergotherapeut",
    focus: "Schwerpunkt Psychisch-funktionelle Ergotherapie",
  },
];
