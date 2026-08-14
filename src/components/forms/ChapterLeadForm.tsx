"use client";

import { useState, useRef } from "react";
import { Field, inputClass } from "./Field";
import { Button } from "@/components/ui/Button";
import { submitChapterLeadApplication, type SubmitResult } from "@/app/start-a-chapter/actions";
import {
  EMPTY_APPLICATION,
  GRADES,
  validateApplication,
  hasErrors,
  type ChapterLeadApplication,
  type FieldErrors,
} from "@/lib/applications";
import { site } from "@/lib/site";

export function ChapterLeadForm() {
  const [values, setValues] = useState<ChapterLeadApplication>(EMPTY_APPLICATION);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [result, setResult] = useState<SubmitResult | null>(null);
  const [pending, setPending] = useState(false);
  const statusRef = useRef<HTMLDivElement>(null);

  function update<K extends keyof ChapterLeadApplication>(key: K, value: string) {
    setValues((v) => ({ ...v, [key]: value }));
    if (errors[key]) {
      setErrors((e) => {
        const next = { ...e };
        delete next[key];
        return next;
      });
    }
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setResult(null);

    const clientErrors = validateApplication(values);
    if (hasErrors(clientErrors)) {
      setErrors(clientErrors);
      const firstKey = Object.keys(clientErrors)[0];
      document.getElementById(firstKey)?.focus();
      return;
    }

    setPending(true);
    const res = await submitChapterLeadApplication(values);
    setPending(false);

    if (res.status === "invalid") {
      setErrors(res.errors);
      return;
    }

    setResult(res);
    requestAnimationFrame(() => statusRef.current?.focus());
  }

  if (result?.status === "success") {
    return (
      <div
        ref={statusRef}
        tabIndex={-1}
        className="border-2 border-[color:var(--color-teal)] bg-[color:var(--color-teal)]/5 p-8"
      >
        <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold text-[color:var(--color-charcoal)]">
          Application received.
        </h3>
        <p className="mt-4 text-[color:var(--color-gray-muted)]">
          A member of the national team will review it and follow up by email to
          set up an introductory call. Applications are read by a person, so give
          us a few days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-8">
      {result ? (
        <div
          ref={statusRef}
          tabIndex={-1}
          role="alert"
          className="border-2 border-[color:var(--color-accent-warm)] bg-[color:var(--color-accent-warm)]/5 p-6"
        >
          <p className="font-semibold text-[color:var(--color-charcoal)]">
            {"message" in result ? result.message : "Something went wrong."}
          </p>
          <p className="mt-3 text-sm text-[color:var(--color-gray-muted)]">
            Email{" "}
            <a
              href={`mailto:${site.contactEmail}?subject=Chapter%20Lead%20Application`}
              className="font-semibold text-[color:var(--color-teal)] underline underline-offset-4"
            >
              {site.contactEmail}
            </a>{" "}
            and we&apos;ll take it from there.
          </p>
        </div>
      ) : null}

      {/* About you */}
      <fieldset className="flex flex-col gap-6 border-0 p-0">
        <legend className="mb-2 font-[family-name:var(--font-display)] text-xl font-bold text-[color:var(--color-charcoal)]">
          About you
        </legend>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <Field id="fullName" label="Full name" error={errors.fullName} required>
            {(p) => (
              <input
                {...p}
                type="text"
                autoComplete="name"
                className={inputClass}
                value={values.fullName}
                onChange={(e) => update("fullName", e.target.value)}
              />
            )}
          </Field>

          <Field id="email" label="Email" error={errors.email} required>
            {(p) => (
              <input
                {...p}
                type="email"
                autoComplete="email"
                className={inputClass}
                value={values.email}
                onChange={(e) => update("email", e.target.value)}
              />
            )}
          </Field>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <Field id="school" label="School" error={errors.school} required>
            {(p) => (
              <input
                {...p}
                type="text"
                className={inputClass}
                value={values.school}
                onChange={(e) => update("school", e.target.value)}
              />
            )}
          </Field>

          <Field id="grade" label="Grade next year" error={errors.grade} required>
            {(p) => (
              <select
                {...p}
                className={inputClass}
                value={values.grade}
                onChange={(e) => update("grade", e.target.value)}
              >
                <option value="">Select…</option>
                {GRADES.map((g) => (
                  <option key={g} value={g}>
                    {g}
                  </option>
                ))}
              </select>
            )}
          </Field>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <Field id="city" label="City" error={errors.city} required>
            {(p) => (
              <input
                {...p}
                type="text"
                autoComplete="address-level2"
                className={inputClass}
                value={values.city}
                onChange={(e) => update("city", e.target.value)}
              />
            )}
          </Field>

          <Field id="state" label="State" error={errors.state} required>
            {(p) => (
              <input
                {...p}
                type="text"
                autoComplete="address-level1"
                className={inputClass}
                value={values.state}
                onChange={(e) => update("state", e.target.value)}
              />
            )}
          </Field>
        </div>
      </fieldset>

      {/* Your interest */}
      <fieldset className="flex flex-col gap-6 border-0 p-0">
        <legend className="mb-2 font-[family-name:var(--font-display)] text-xl font-bold text-[color:var(--color-charcoal)]">
          Why Amplify HQ
        </legend>

        <Field
          id="motivation"
          label="Why do you want to start a chapter?"
          hint="A few sentences is plenty. We're interested in what you'd actually do with it."
          error={errors.motivation}
          required
        >
          {(p) => (
            <textarea
              {...p}
              rows={5}
              className={inputClass}
              value={values.motivation}
              onChange={(e) => update("motivation", e.target.value)}
            />
          )}
        </Field>

        <Field
          id="interest"
          label="What interests you about business and psychology?"
          error={errors.interest}
        >
          {(p) => (
            <textarea
              {...p}
              rows={4}
              className={inputClass}
              value={values.interest}
              onChange={(e) => update("interest", e.target.value)}
            />
          )}
        </Field>
      </fieldset>

      {/* Building the chapter */}
      <fieldset className="flex flex-col gap-6 border-0 p-0">
        <legend className="mb-2 font-[family-name:var(--font-display)] text-xl font-bold text-[color:var(--color-charcoal)]">
          Building the chapter
        </legend>
        <p className="-mt-4 text-sm text-[color:var(--color-gray-muted)]">
          No experience required — these help us understand where you&apos;re
          starting from. Leave anything blank if it doesn&apos;t apply.
        </p>

        <Field
          id="leadership"
          label="Leadership experience and current activities"
          hint="Clubs, teams, jobs, projects — anything you've helped organize."
          error={errors.leadership}
        >
          {(p) => (
            <textarea
              {...p}
              rows={3}
              className={inputClass}
              value={values.leadership}
              onChange={(e) => update("leadership", e.target.value)}
            />
          )}
        </Field>

        <Field
          id="recruitment"
          label="How would you recruit your first members?"
          error={errors.recruitment}
        >
          {(p) => (
            <textarea
              {...p}
              rows={3}
              className={inputClass}
              value={values.recruitment}
              onChange={(e) => update("recruitment", e.target.value)}
            />
          )}
        </Field>

        <Field
          id="facultySupport"
          label="Possible faculty sponsor or school contacts"
          hint="A teacher who might sponsor the club, or local businesses you could approach."
          error={errors.facultySupport}
        >
          {(p) => (
            <textarea
              {...p}
              rows={3}
              className={inputClass}
              value={values.facultySupport}
              onChange={(e) => update("facultySupport", e.target.value)}
            />
          )}
        </Field>
      </fieldset>

      <div className="flex flex-col gap-4 border-t-2 border-[color:var(--color-charcoal)] pt-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-[color:var(--color-gray-muted)]">
          Fields marked{" "}
          <span className="text-[color:var(--color-accent-warm)]">*</span> are
          required. Applications are reviewed by a person.
        </p>
        <Button type="submit" size="lg" disabled={pending} trailing={pending ? undefined : "→"}>
          {pending ? "Submitting…" : "Submit application"}
        </Button>
      </div>
    </form>
  );
}
