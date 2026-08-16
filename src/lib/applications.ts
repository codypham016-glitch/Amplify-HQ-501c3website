/**
 * Chapter Lead application — shared shape and validation.
 * Used by both the client form and the server action so the rules
 * can never drift apart. Server-side validation is authoritative.
 */

export type ChapterLeadApplication = {
  fullName: string;
  email: string;
  school: string;
  grade: string;
  city: string;
  state: string;
  country: string;
  motivation: string;
  interest: string;
  leadership: string;
  recruitment: string;
  facultySupport: string;
};

export const GRADES = ["9th", "10th", "11th", "12th"] as const;

export const EMPTY_APPLICATION: ChapterLeadApplication = {
  fullName: "",
  email: "",
  school: "",
  grade: "",
  city: "",
  state: "",
  country: "",
  motivation: "",
  interest: "",
  leadership: "",
  recruitment: "",
  facultySupport: "",
};

export type FieldErrors = Partial<Record<keyof ChapterLeadApplication, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Fields the applicant must complete. Everything else is optional. */
const REQUIRED: (keyof ChapterLeadApplication)[] = [
  "fullName",
  "email",
  "school",
  "grade",
  "city",
  "state",
  "country",
  "motivation",
];

const LABELS: Record<keyof ChapterLeadApplication, string> = {
  fullName: "Full name",
  email: "Email",
  school: "School",
  grade: "Grade",
  city: "City",
  state: "State/Province",
  country: "Country",
  motivation: "This answer",
  interest: "This answer",
  leadership: "This answer",
  recruitment: "This answer",
  facultySupport: "This answer",
};

export function validateApplication(values: ChapterLeadApplication): FieldErrors {
  const errors: FieldErrors = {};

  for (const field of REQUIRED) {
    if (!values[field]?.trim()) {
      errors[field] = `${LABELS[field]} is required.`;
    }
  }

  if (values.email.trim() && !EMAIL_RE.test(values.email.trim())) {
    errors.email = "Enter a valid email address.";
  }

  if (values.grade.trim() && !GRADES.includes(values.grade.trim() as (typeof GRADES)[number])) {
    errors.grade = "Select your current grade.";
  }

  if (values.motivation.trim() && values.motivation.trim().length < 40) {
    errors.motivation = "Tell us a little more. A few sentences is plenty.";
  }

  for (const [key, value] of Object.entries(values) as [
    keyof ChapterLeadApplication,
    string,
  ][]) {
    if (value && value.length > 2000) {
      errors[key] = "Please keep this under 2000 characters.";
    }
  }

  return errors;
}

export function hasErrors(errors: FieldErrors): boolean {
  return Object.keys(errors).length > 0;
}
