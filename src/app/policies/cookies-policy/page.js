import Navbar from '@/app/roi-calculator/Components/Navbar';

export default function page() {
  return (
    <>
      <Navbar />
      <div className="mx-auto max-w-4xl p-6 text-black">
        <h1 className="mb-4 text-2xl font-bold">Cookies Policy</h1>
        <section className="mb-8">
          <h2 className="text-xl font-semibold">1. Introduction</h2>
          <p>
            Dpanda uses cookies and similar tracking technologies to provide you
            with an enhanced user experience, improve our services, and deliver
            personalized content. This policy explains what cookies are, how we
            use them, and how you can manage your cookie preferences.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold">2. What Are Cookies?</h2>
          <p>
            Cookies are small text files that are placed on your device when you
            visit a website. They allow the website to recognize your device and
            store information about your preferences or past actions, making
            your experience smoother and more personalized.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold">3. Types of Cookies We Use</h2>

          <ul className="list-inside list-disc">
            <li>We use the following types of cookies on our site:</li>
            <li>
              <strong>Strictly Necessary Cookies:</strong> These cookies are
              essential for the website to function properly. Without these,
              certain features of the site may not be accessible.
            </li>
            <li>
              <strong>Performance Cookies:</strong>These cookies collect
              information about how visitors use our site. This helps us
              understand traffic patterns and improve the website&apos;s
              functionality.
            </li>
            <li>
              <strong>Functional Cookies:</strong>These cookies allow us to
              remember your preferences and provide enhanced features such as
              personalized content and language settings.
            </li>
            <li>
              <strong>Targeting and Advertising Cookies: </strong> These cookies
              are used to deliver advertisements that are relevant to you based
              on your browsing activity. They may be set by third-party
              advertising networks with our permission.
            </li>
            <li>
              <strong>Analytics Cookies: </strong>These cookies help us gather
              data on site performance and user engagement to improve our
              services.{' '}
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold">4. Why We Use Cookies</h2>
          <p>We use cookies to:</p>
          <ul className="list-inside list-disc">
            <li>Ensure our website functions correctly.</li>
            <li>Remember your preferences and settings.</li>
            <li>Personalize your browsing experience</li>
            <li> Analyze website performance and improve our services.</li>
            <li>Provide relevant advertising tailored to your interests.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold">5. Third-Party Cookies</h2>
          <p>
            We partner with third-party service providers, such as advertisers
            and analytics companies, who may also set cookies on your device.
            These third parties may use the information collected through
            cookies to deliver ads that are more relevant to your interests.
            Please refer to the privacy policies of these third parties for more
            information:
          </p>
          <ul>
            <li>
              Clarity:
              <a href="https://learn.microsoft.com/en-us/clarity/setup-and-installation/clarity-data">
                https://learn.microsoft.com/en-us/clarity/setup-and-installation/clarity-data{' '}
              </a>
            </li>
            <li>
              Vercel:{' '}
              <a href="https://vercel.com/legal/cookie-policy">
                {' '}
                https://vercel.com/legal/cookie-policy{' '}
              </a>
            </li>
            <li>
              Hotjar:{' '}
              <a href="https://help.hotjar.com/hc/en-us/articles/115011789248-Cookies-on-hotjar-com">
                https://help.hotjar.com/hc/en-us/articles/115011789248-Cookies-on-hotjar-com{' '}
              </a>
            </li>
            <li>
              Google:{' '}
              <a href="https://learn.microsoft.com/en-us/clarity/setup-and-installation/clarity-data">
                https://policies.google.com/technologies/cookies?hl=en-US{' '}
              </a>
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold">
            6. How to Manage or Disable Cookies
          </h2>
          <p>
            You have the right to manage how cookies are used on our site. Here
            are your options:
          </p>
          <p>
            <strong>Browser Settings: </strong> Most browsers allow you to block
            or delete cookies through your browser settings. However, blocking
            all cookies may affect the functionality of our site.
          </p>
          <p>
            <strong>Cookie Consent Banner: </strong> When you first visit our
            website, you will see a banner asking for your consent to use
            non-essential cookies. You can choose to accept or reject these
            cookies.
          </p>
          <p>
            <strong>Opt-Out Tools:</strong> For targeting and advertising
            cookies, you may use industry-standard tools such as the Network
            Advertising Initiative (NAI) or Digital Advertising Alliance (DAA)
            opt-out tools to manage your preferences.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold">
            7. How Long Are Cookies Stored?
          </h2>
          <p> Cookies can be stored on your device for varying periods: </p>
          <p>
            <strong>Session Cookies: </strong> These are temporary cookies that
            are deleted when you close your browser.
          </p>
          <p>
            <strong>Persistent Cookies:</strong> These remain on your device for
            a set period or until you manually delete them.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold">
            8. Updates to This Cookies Policy
          </h2>
          <p>
            We may update this Cookies Policy periodically to reflect changes in
            our practices or legal requirements. The updated policy will be
            posted on this page with the new &quot;Effective Date.&quot;
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold">9. Contact Us</h2>
          <p>
            If you have any questions or concerns about our use of cookies or
            this policy, please contact us at:
          </p>
          <p>
            Email:
            <a
              href="mailto:support@dpanda.in"
              className="text-blue-600 hover:underline"
            >
              support@dpanda.in
            </a>
            Mailing Address: 2nd Floor, Plot# 250, Phase IV, Udyog Vihar,
            Gurugram, Haryana 122015, India.
          </p>
        </section>
      </div>
    </>
  );
}
