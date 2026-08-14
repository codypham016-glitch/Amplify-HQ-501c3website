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
        className="font-[family-name:var(--font-mono)] text-[0.72rem] font-medium uppercase tracking-[0.2em] text-[color:var(--color-ink)]"
      >
        {label}
        {required ? (
          <span className="ml-1 text-[color:var(--color-signal)]" aria-hidden>
            *
          </span>
        ) : (
          <span className="ml-2 font-normal normal-case tracking-normal text-[color:var(--color-stone)]">
            (optional)
          </span>
        )}
      </label>

      {hint ? (
        <p id={hintId} className="text-sm italic text-[color:var(--color-ink-2)]">
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
        <p
          id={errorId}
          className="text-sm font-medium text-[color:var(--color-signal)]"
        >
          {error}
        </p>
      ) : null}
    </div>
  );
}

export const inputClass =
  "w-full border-b border-[color:var(--color-ink)] bg-transparent px-0 py-3 text-base text-[color:var(--color-ink)] transition-colors placeholder:text-[color:var(--color-stone)] focus:border-[color:var(--color-signal)] focus:outline-none aria-[invalid=true]:border-[color:var(--color-signal)]";
