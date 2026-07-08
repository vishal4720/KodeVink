import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RentEase - Privacy Policy",
  description:
    "Privacy Policy for the RentEase property rental management application.",
};

export default function RentEasePrivacyPolicy() {
  return (
    <main className="min-h-screen bg-background text-foreground py-16 px-4">
      <article className="container mx-auto max-w-3xl prose prose-slate dark:prose-invert">
        <h1 className="text-3xl font-bold mb-2">RentEase Privacy Policy</h1>
        <p className="text-muted-foreground mb-8">Last updated: July 8, 2026</p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">1. Introduction</h2>
          <p className="text-muted-foreground">
            RentEase (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;), developed and operated by
            KodeVink, is a property rental management application that connects
            property owners with renters. This Privacy Policy explains how we
            collect, use, and protect your personal information when you use our
            mobile application.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            2. Information We Collect
          </h2>

          <h3 className="text-xl font-medium mb-2">
            2.1 Information You Provide
          </h3>
          <ul className="list-disc pl-6 space-y-1 text-muted-foreground mb-4">
            <li>
              <strong>Account Information:</strong> Name, email address, phone
              number, password
            </li>
            <li>
              <strong>Profile Information:</strong> Address, profile photo, user
              type (owner/renter)
            </li>
            <li>
              <strong>Identity Verification:</strong> Government ID type, ID
              number, ID document photo
            </li>
            <li>
              <strong>Property Information:</strong> Property details, photos,
              location, pricing (for owners)
            </li>
            <li>
              <strong>Payment Information:</strong> Payment records, transaction
              history, settlement details
            </li>
            <li>
              <strong>Communications:</strong> Messages exchanged between owners
              and renters
            </li>
          </ul>

          <h3 className="text-xl font-medium mb-2">
            2.2 Information Collected Automatically
          </h3>
          <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
            <li>
              <strong>Device Information:</strong> Device type, operating system,
              app version
            </li>
            <li>
              <strong>Usage Data:</strong> Features used, pages visited,
              interactions within the app
            </li>
            <li>
              <strong>Location Data:</strong> Property locations (when you add a
              property or search nearby)
            </li>
            <li>
              <strong>Push Notification Tokens:</strong> For delivering
              notifications to your device
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            3. How We Use Your Information
          </h2>
          <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
            <li>To create and manage your account</li>
            <li>
              To facilitate property listings, bookings, and rental agreements
            </li>
            <li>
              To process and track payments between owners and renters
            </li>
            <li>
              To enable communication between parties via in-app messaging
            </li>
            <li>
              To send push notifications about bookings, payments, and meter
              readings
            </li>
            <li>
              To verify user identity and build trust through verification badges
            </li>
            <li>To generate lease agreements and settlement documents</li>
            <li>To improve our services and user experience</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            4. Information Sharing
          </h2>
          <p className="text-muted-foreground mb-3">
            We do not sell your personal information. We share information only
            in these cases:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
            <li>
              <strong>Between Parties:</strong> Owners and renters can see each
              other&apos;s name, phone, email, and rating when involved in a booking
            </li>
            <li>
              <strong>Service Providers:</strong> Firebase (Google) for
              authentication, database, storage, and cloud functions
            </li>
            <li>
              <strong>Legal Requirements:</strong> When required by law or to
              protect our rights
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            5. Data Storage and Security
          </h2>
          <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
            <li>Your data is stored on Google Firebase servers</li>
            <li>We use Firebase Authentication for secure login</li>
            <li>
              Firestore Security Rules restrict data access to authorized users
              only
            </li>
            <li>Passwords are never stored in plain text</li>
            <li>
              Images are stored in Firebase Cloud Storage with access controls
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">6. Your Rights</h2>
          <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
            <li>
              <strong>Access:</strong> You can view all your data within the app
            </li>
            <li>
              <strong>Update:</strong> You can edit your profile information at
              any time
            </li>
            <li>
              <strong>Delete:</strong> You can permanently delete your account
              and associated data (see Account Deletion Policy below)
            </li>
            <li>
              <strong>Notification Control:</strong> You can manage notification
              preferences within the app
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">7. Data Retention</h2>
          <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
            <li>
              Active account data is retained as long as your account exists
            </li>
            <li>
              Payment and booking records are retained for financial audit
              purposes even after account deletion
            </li>
            <li>Messages may be retained for the other party&apos;s records</li>
            <li>
              Upon account deletion, your personal profile data is permanently
              removed
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            8. Children&apos;s Privacy
          </h2>
          <p className="text-muted-foreground">
            RentEase is not intended for users under 18 years of age. We do not
            knowingly collect information from children.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            9. Third-Party Services
          </h2>
          <p className="text-muted-foreground mb-3">
            We use the following third-party services:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
            <li>
              <strong>Firebase Authentication:</strong> For user login and
              account management
            </li>
            <li>
              <strong>Cloud Firestore:</strong> For data storage
            </li>
            <li>
              <strong>Firebase Cloud Storage:</strong> For photo and document
              storage
            </li>
            <li>
              <strong>Firebase Cloud Messaging:</strong> For push notifications
            </li>
            <li>
              <strong>Google Maps:</strong> For property location services
            </li>
            <li>
              <strong>Google Sign-In:</strong> For social login
            </li>
          </ul>
          <p className="text-muted-foreground mt-3">
            These services have their own privacy policies. Please refer to
            Google&apos;s Privacy Policy for details.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            10. Changes to This Policy
          </h2>
          <p className="text-muted-foreground">
            We may update this Privacy Policy from time to time. We will notify
            you of significant changes through the app or via email.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">11. Contact Us</h2>
          <p className="text-muted-foreground">
            If you have questions about this Privacy Policy, contact us at:
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
        </section>
      </article>
    </main>
  );
}
