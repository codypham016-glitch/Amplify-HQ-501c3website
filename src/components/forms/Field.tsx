import type { ReactNode } from "react";

type FieldProps = {
  id: string;
  label: string;
  error?: string;
  hint?: string;
  required?: boolean;
  children: (props: {
    id: string;
    "aria-invalid": boolean | undefined;
    "aria-describedby": string | undefined;
    required: boolean;
  }) => ReactNode;
};

export function Field({ id, label, error, hint, required = false, children }: FieldProps) {
  const errorId = `${id}-error`;
  const hintId = `${id}-hint`;
  const describedBy =
    [error ? errorId : null, hint ? hintId : null].filter(Boolean).join(" ") || undefined;

  return (
    <div className="flex flex-col gap-2.5">
      <label
        htmlFor={id}
        className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-[color:var(--color-navy)]"
      >
        {label}
        {required ? (
          <span className="ml-1 text-[color:var(--color-coral)]" aria-hidden>
            *
          </span>
        ) : (
          <span className="ml-2 font-normal normal-case tracking-normal text-[color:var(--color-navy-3)]">
            (optional)
          </span>
        )}
      </label>

      {hint ? (
        <p id={hintId} className="text-sm text-[color:var(--color-navy-3)]">
          {hint}
        </p>
      ) : null}

      {children({
        id,
        "aria-invalid": error ? true : undefined,
        "aria-describedby": describedBy,
        required,
      })}

      {error ? (
        <p id={errorId} className="text-sm font-semibold text-[color:var(--color-coral)]">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export const inputClass =
  "w-full border border-[color:var(--color-line-2)] bg-white px-4 py-3 text-base text-[color:var(--color-navy)] transition-colors placeholder:text-[color:var(--color-navy-3)] focus:border-[color:var(--color-coral)] focus:outline-none aria-[invalid=true]:border-[color:var(--color-coral)]";
