import Navbar from '@/app/roi-calculator/Components/Navbar';

export default function page() {
  return (
    <>
      <Navbar />
      <div className="mx-auto max-w-4xl p-6">
        <h1 className="mb-4 text-2xl font-bold">Privacy Policy</h1>

        <section className="mb-8">
          <h2 className="text-xl font-semibold">1. Introduction</h2>
          <p>
            Welcome to Dpanda! We are committed to safeguarding your privacy and
            protecting your personal data. This Privacy Policy explains how we
            collect, use, disclose, and protect your information when you
            interact with our services. By using our services, you agree to the
            practices outlined in this Privacy Policy. If you do not agree,
            please discontinue using our services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold">2. Information We Collect</h2>
          <ul className="list-inside list-disc">
            <li>
              We collect different types of information to provide a seamless
              shopping experience and comply with legal obligations.
            </li>
            <li>
              Personal Information: Includes your name, email address, phone
              number, shipping and billing address, and payment details.
            </li>
            <li>
              Account Information: Includes username, password, and order
              history.
            </li>
            <li>
              Device Information: Such as IP address, browser type, operating
              system, and device identifiers.
            </li>
            <li>Geolocation Data: Collected with your consent.</li>
            <li>
              Social Media Information: Data from social platforms when you
              interact with us via those channels.
            </li>
            <li>
              Transaction Data: Information related to purchases, such as
              product details, payment method, and order history.
            </li>
            <li>
              Behavioral Data: Collected through cookies or similar
              technologies, such as browsing history, interaction with our
              services, and engagement metrics.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold">
            3. How We Use Your Information
          </h2>
          <ul className="list-inside list-disc">
            <li>We use your personal data for various purposes, including:</li>
            <li>
              Transaction Processing: To fulfill your orders and manage
              payments.
            </li>
            <li>
              Service Personalization: To deliver customized content,
              recommendations, and targeted ads.
            </li>
            <li>
              Customer Support: To respond to your inquiries and resolve issues.
            </li>
            <li>
              Marketing and Promotions: To send you promotional messages and
              offers, with the option to opt out.
            </li>
            <li>
              Legal Compliance: To comply with applicable laws, legal processes,
              and regulations.
            </li>
            <li>
              Analytics: To analyze user behavior and improve our services.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold">
            4. How We Share Your Information
          </h2>
          <p>
            Your personal information may be shared in the following
            circumstances:
          </p>
          <ul className="list-inside list-disc">
            <li>
              Service Providers: With third parties who help us process
              payments, fulfill orders, and provide other operational services.
              These providers are bound by confidentiality agreements.
            </li>
            <li>
              Brands and Advertisers: If you purchase from a brand through
              Dpanda, we may share your information to complete the transaction.
            </li>
            <li>
              Legal Obligations: To comply with legal processes such as
              subpoenas, court orders, or government requests.
            </li>
            <li>
              Business Transfers: In the event of a merger, acquisition, or sale
              of assets, your information may be transferred.
            </li>
            <li>
              Third-Party Tools: We use business analytics tools like Google
              Analytics for monitoring user behavior and improving service
              personalization. These third parties may collect information about
              your online activities across different websites.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold">
            5. Cookies and Tracking Technologies
          </h2>
          <p>
            We use cookies, pixels, and other tracking technologies for various
            purposes:
          </p>
          <ul className="list-inside list-disc">
            <li>
              Essential Cookies: Necessary for the operation of the website.
            </li>
            <li>
              Performance Cookies: Help us understand how users interact with
              our site to improve functionality.
            </li>
            <li>
              Advertising Cookies: Used to deliver relevant ads based on your
              browsing history. You can manage your cookie preferences via your
              browser settings or opt out of certain third-party advertising
              networks. For more details, review the privacy policies of
              third-party providers like Google Analytics.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold">6. Your Rights and Choices</h2>
          <p>
            Depending on your location, you may have certain rights regarding
            your personal data:
          </p>
          <ul className="list-inside list-disc">
            <li>
              Access and Correction: You can request access to or correction of
              your personal data.
            </li>
            <li>
              Deletion: You may request the deletion of your personal
              information, subject to legal exceptions.
            </li>
            <li>
              Opt-Out of Marketing: You can opt out of receiving promotional
              communications by following the instructions in the emails or
              contacting us directly.
            </li>
            <li>
              Do Not Track Signals: Our website does not respond to &quot;Do Not
              Track&quot; signals.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold">
            7. California Privacy Rights
          </h2>
          <p>
            California residents have specific rights under the California
            Consumer Privacy Act (CCPA):
          </p>
          <ul className="list-inside list-disc">
            <li>
              Right to Know: You can request information about the categories of
              personal data we collect.
            </li>
            <li>
              Right to Delete: You can request the deletion of your personal
              data.
            </li>
            <li>
              Right to Opt-Out of Data Sale: You may opt out of the sale of your
              personal data. To exercise these rights, contact us at
              <a
                href="mailto:support@dpanda.in"
                className="text-blue-600 hover:underline"
              >
                {' '}
                support@dpanda.in{' '}
              </a>
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold">8. Children’s Privacy</h2>
          <p>
            We do not knowingly collect personal information from children under
            the age of 13. If we discover that we have inadvertently collected
            data from a child, we will take steps to delete it promptly. If you
            believe we have collected such information, please contact us at
            <a
              href="mailto:support@dpanda.in"
              className="text-blue-600 hover:underline"
            >
              {' '}
              support@dpanda.in{' '}
            </a>
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold">9. Data Security</h2>
          <p>
            We implement appropriate technical and organizational security
            measures to protect your personal data. However, no system is
            completely secure, and we cannot guarantee absolute security. In the
            event of a data breach, we will notify affected users in compliance
            with applicable law.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold">10. Data Retention</h2>
          <p>
            We retain your personal information for as long as necessary to
            fulfill the purposes outlined in this Privacy Policy or to comply
            with legal obligations. After the retention period, we will securely
            delete or anonymize your data.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold">
            11. International Data Transfers
          </h2>
          <p>
            Your personal data may be transferred and processed outside your
            country of residence, including the United States. We ensure that
            such data transfers comply with applicable laws, including ensuring
            adequate data protection measures.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold">
            12. Third-Party Payment Processors
          </h2>
          <p>
            Payments are processed through third-party providers (e.g., PayPal,
            Stripe), and their privacy practices are governed by their own
            policies. We encourage you to review their privacy policies
            directly.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold">13. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites. We are not
            responsible for the privacy practices of these websites and
            encourage you to review their privacy policies before providing any
            personal information.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold">14. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes
            will be posted with an updated &quot;Effective Date.&quot; Continued
            use of our services after any changes constitute your acceptance of
            the revised policy.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold">15. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy or your data
            rights, please contact us at:
          </p>
          <p>
            Email:{' '}
            <a
              href="mailto:support@dpanda.in"
              className="text-blue-600 hover:underline"
            >
              support@dpanda.in
            </a>
          </p>
          <p>
            Mailing Address: 2nd Floor, Plot# 250, Phase IV, Udyog Vihar,
            Gurugram, Haryana 122015, India
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold">16. Accessibility Statement</h2>
          <p>
            Dpanda is committed to making our website accessible to all,
            including individuals with disabilities. If you have difficulty
            accessing any part of our website, please contact us at
            <a
              href="mailto:support@dpanda.in"
              className="text-blue-600 hover:underline"
            >
              {' '}
              support@dpanda.in{' '}
            </a>{' '}
            , and we will assist you.
          </p>
        </section>
      </div>
    </>
  );
}
