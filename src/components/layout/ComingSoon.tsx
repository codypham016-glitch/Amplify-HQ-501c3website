import { Container } from "./Container";
import { BackToHome } from "./BackToHome";

type ComingSoonProps = {
  title: string;
  eyebrow?: string;
};

/**
 * Clean COMING SOON page. Just an eyebrow, title, and back-to-home link.
 */
export function ComingSoon({ title, eyebrow = "Coming soon" }: ComingSoonProps) {
  return (
    <>
      <BackToHome />
      <section className="py-40 lg:py-52">
        <Container>
          <div className="max-w-3xl">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--color-navy-3)]">
              {eyebrow}
            </p>
            <h1 className="mt-8 text-[length:var(--text-hero)] font-extrabold leading-[1.02] tracking-[-0.025em] text-[color:var(--color-navy)]">
              {title}
            </h1>
            <p className="mt-10 text-lg leading-[1.65] text-[color:var(--color-navy-2)]">
              This page is on the way. Check back soon.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
