import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Reveal } from "@/components/ui/Reveal";
import { team } from "@/lib/data/team";

export function Team() {
  return (
    <section id="team" aria-labelledby="team-heading" className="scroll-mt-20 border-t border-silver bg-ice py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Team"
          title="Ein Team, sechs Schwerpunkte."
          description="Unser interdisziplinäres Team bündelt Erfahrung über alle Altersgruppen und Fachbereiche der Ergotherapie hinweg."
        />

        <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4" role="list">
          {team.map((member, index) => (
            <li key={member.name}>
              <Reveal variant="scale-in" delay={index * 100}>
                <ImagePlaceholder aspect="1/1" label={`Portrait ${member.name}`} futurePath="/images/team/portrait.webp" />
                <p className="mt-4 font-heading text-lg font-semibold text-ink">{member.name}</p>
                <p className="text-sm font-medium text-cobalt">{member.role}</p>
                <p className="mt-1 text-sm text-ink/65">{member.focus}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
