import { Container } from "@/components/layout/Container";
import { professionalRoles } from "@/lib/site";

/**
 * The people Amplify brings into the room. White background, no purple.
 * Roles as flowing typography, coral separators.
 */
export function ThePeople() {
  return (
    <section className="bg-white py-24 lg:py-32 border-t border-[color:var(--color-line)]">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--color-navy-3)]">
              The people
            </p>
            <h2 className="mt-6 text-[length:var(--text-display)] font-bold leading-[1.05] tracking-[-0.02em] text-[color:var(--color-navy)]">
              Who chapters bring in.
            </h2>
          </div>

          <div className="lg:col-span-8">
            <p className="text-[clamp(1.75rem,3.5vw,3rem)] font-bold leading-[1.15] tracking-[-0.02em] text-[color:var(--color-navy)]">
              {professionalRoles.map((role, i) => (
                <span key={role}>
                  {role}
                  {i < professionalRoles.length - 1 ? (
                    <span className="text-[color:var(--color-coral)]"> · </span>
                  ) : (
                    <span className="text-[color:var(--color-coral)]">.</span>
                  )}{" "}
                </span>
              ))}
            </p>

            <p className="mt-10 max-w-2xl text-lg leading-[1.65] text-[color:var(--color-navy-2)]">
              People with actual answers to the questions students are trying to ask. Speaker sessions are small enough that a student can ask a real question and get a real answer.
            </p>

            <p className="mt-8 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--color-navy-3)]">
              Speaker names published as they confirm. No invented rosters.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
