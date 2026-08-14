"use server";

import {
  validateApplication,
  hasErrors,
  type ChapterLeadApplication,
  type FieldErrors,
} from "@/lib/applications";

export type SubmitResult =
  | { status: "success" }
  | { status: "invalid"; errors: FieldErrors }
  | { status: "unconfigured"; message: string }
  | { status: "error"; message: string };

/**
 * Receives a Chapter Lead application.
 *
 * Storage is not wired yet. Rather than pretend a submission was
 * recorded, this returns an explicit `unconfigured` state that the
 * form surfaces to the applicant with a working email fallback.
 *
 * To enable storage:
 *   1. npm install @supabase/supabase-js
 *   2. Set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in .env.local
 *   3. Create the chapter_lead_applications table with RLS enabled
 *      (no public insert; writes go through this server action only)
 *   4. Replace the block marked TODO below with the insert call
 *
 * The service role key must never be imported into a client component.
 */
export async function submitChapterLeadApplication(
  values: ChapterLeadApplication,
): Promise<SubmitResult> {
  // Server-side validation is authoritative — never trust the client.
  const errors = validateApplication(values);
  if (hasErrors(errors)) {
    return { status: "invalid", errors };
  }

  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !supabaseKey) {
    return {
      status: "unconfigured",
      message:
        "Online applications aren't switched on yet. Email us and we'll send the application directly.",
    };
  }

  try {
    // TODO: persist to Supabase once the client is installed.
    //
    // const { createClient } = await import("@supabase/supabase-js");
    // const supabase = createClient(supabaseUrl, supabaseKey, {
    //   auth: { persistSession: false },
    // });
    // const { error } = await supabase
    //   .from("chapter_lead_applications")
    //   .insert({
    //     full_name: values.fullName,
    //     email: values.email,
    //     school: values.school,
    //     grade: values.grade,
    //     city: values.city,
    //     state: values.state,
    //     motivation: values.motivation,
    //     interest: values.interest,
    //     leadership: values.leadership,
    //     recruitment: values.recruitment,
    //     faculty_support: values.facultySupport,
    //   });
    // if (error) throw error;
    //
    // Applications are reviewed by a person. Nothing here should
    // auto-accept an applicant or send an acceptance email.

    return {
      status: "unconfigured",
      message:
        "Online applications aren't switched on yet. Email us and we'll send the application directly.",
    };
  } catch {
    return {
      status: "error",
      message: "Something went wrong on our end. Please email us instead.",
    };
  }
}
