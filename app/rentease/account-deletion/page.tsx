import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RentEase - Account Deletion Policy",
  description:
    "Account Deletion Policy for the RentEase property rental management application.",
};

export default function RentEaseAccountDeletion() {
  return (
    <main className="min-h-screen bg-background text-foreground py-16 px-4">
      <article className="container mx-auto max-w-3xl prose prose-slate dark:prose-invert">
        <h1 className="text-3xl font-bold mb-2">Account Deletion Policy</h1>
        <p className="text-muted-foreground mb-8">Last updated: July 8, 2026</p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            How to Delete Your Account
          </h2>
          <p className="text-muted-foreground mb-3">
            You can delete your RentEase account directly from within the app:
          </p>
          <ol className="list-decimal pl-6 space-y-1 text-muted-foreground">
            <li>Open the app and go to your Profile</li>
            <li>Tap the three-dot menu (⋮) in the top right corner</li>
            <li>Select &quot;Delete Account&quot;</li>
            <li>Read the warning about what will be deleted</li>
            <li>Tap &quot;I understand, continue&quot;</li>
            <li>Type &quot;DELETE&quot; in the confirmation field</li>
            <li>Enter your password to verify your identity</li>
            <li>Tap &quot;Permanently Delete My Account&quot;</li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">What Gets Deleted</h2>
          <p className="text-muted-foreground mb-3">
            Upon account deletion, the following data is permanently removed:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
            <li>
              Your user profile (name, email, phone, address, photos)
            </li>
            <li>Your identity verification documents</li>
            <li>Your saved/bookmarked properties</li>
            <li>Your notification history</li>
            <li>Your Firebase Authentication account</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">What Is Retained</h2>
          <p className="text-muted-foreground mb-3">
            For legal, financial, and operational reasons, the following may be
            retained:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
            <li>
              <strong>Payment records:</strong> Transaction history for financial
              audit compliance
            </li>
            <li>
              <strong>Booking records:</strong> Rental agreements for the other
              party&apos;s reference
            </li>
            <li>
              <strong>Messages:</strong> Chat history accessible to the other
              party
            </li>
            <li>
              <strong>Properties:</strong> If you are an owner, your property
              listings remain (you should delete them before deleting your
              account)
            </li>
            <li>
              <strong>Reviews:</strong> Reviews you left for others or received
              from others
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Important Notes</h2>
          <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
            <li>
              Account deletion is irreversible — your account cannot be recovered
            </li>
            <li>
              If you have active bookings or pending payments, please resolve
              them before deleting your account
            </li>
            <li>
              Your phone number and email will be unlinked and can be used to
              create a new account in the future
            </li>
            <li>Deletion is processed immediately upon confirmation</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Alternative: Deactivate Instead
          </h2>
          <p className="text-muted-foreground">
            If you want a break without permanent deletion, you can simply log
            out. Your account will remain inactive but your data will be
            preserved for when you return.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Contact for Assistance
          </h2>
          <p className="text-muted-foreground">
            If you are unable to delete your account through the app (e.g.,
            forgot password), contact us at:
          </p>
          <p className="text-muted-foreground mt-2">
            <strong>Email:</strong>{" "}
            <a
              href="mailto:kodevink@gmail.com"
              className="text-primary underline"
            >
              kodevink@gmail.com
            </a>
          </p>
          <p className="text-muted-foreground mt-2">
            We will verify your identity and process the deletion within 7
            business days.
          </p>
        </section>
      </article>
    </main>
  );
}
