import { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy | Marieta Eye Clinic",
  description: "Read our privacy policy to understand how we collect, use, and protect your personal and medical information.",
  robots: { index: false, follow: true },
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "March 15, 2024";

  return (
    <div className="flex flex-col min-h-screen">
      <PageHero 
        headline="Privacy Policy" 
        subheadline={`Last Updated: ${lastUpdated}`}
      />
      
      <section className="py-24 bg-background">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto">
          <div className="prose prose-slate md:prose-lg max-w-none text-muted-foreground">
            
            <h2>1. Introduction</h2>
            <p>
              At {SITE_CONFIG.name} (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), we are committed to protecting privacy and security of our patients&apos; personal and medical information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website ({SITE_CONFIG.url}), use our patient portal, or visit our clinic.
            </p>
            <p>
              We comply with Health Insurance Portability and Accountability Act (HIPAA) and applicable state laws regarding privacy of medical records. You will receive a separate, detailed Notice of Privacy Practices regarding your protected health information (PHI) at your first visit.
            </p>

            <h2>2. Information We Collect</h2>
            <p>We may collect information about you in a variety of ways. The information we may collect includes:</p>
            
            <h3>Personal Data</h3>
            <p>
              Personally identifiable information, such as your name, shipping address, email address, and telephone number, and demographic information, such as your age, gender, hometown, and interests, that you voluntarily give to us when you register with the clinic or when you choose to participate in various activities related to the clinic.
            </p>

            <h3>Protected Health Information (PHI)</h3>
            <p>
              Information related to your past, present, or future physical or mental health or condition; the provision of health care to you; or the past, present, or future payment for the provision of health care to you. This includes medical history, examination results, diagnoses, and treatment plans.
            </p>

            <h3>Derivative Data</h3>
            <p>
              Information our servers automatically collect when you access the website, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the website.
            </p>

            <h2>3. Use of Your Information</h2>
            <p>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you to:</p>
            <ul>
              <li>Provide, operate, and maintain our health care services.</li>
              <li>Schedule appointments and send appointment reminders.</li>
              <li>Process your payments and bill for our services.</li>
              <li>Send you administrative information, such as changes to our terms, conditions, and policies.</li>
              <li>Respond to your comments, questions, and provide customer service.</li>
              <li>Improve our website and clinical operations.</li>
            </ul>

            <h2>4. Disclosure of Your Information</h2>
            <p>We may share information we have collected about you in certain situations. Your information may be disclosed as follows:</p>

            <h3>By Law or to Protect Rights</h3>
            <p>
              If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.
            </p>

            <h3>Third-Party Service Providers</h3>
            <p>
              We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance. All such third parties are required to maintain patient confidentiality and comply with HIPAA regulations.
            </p>

            <h2>5. Security of Your Information</h2>
            <p>
              We use administrative, technical, and physical security measures to help protect your personal and medical information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
            </p>

            <h2>6. Contact Us</h2>
            <p>If you have questions or comments about this Privacy Policy, please contact us at:</p>
            <p>
              <strong>{SITE_CONFIG.name}</strong><br />
              {SITE_CONFIG.address.street}<br />
              {SITE_CONFIG.address.city}, {SITE_CONFIG.address.state}<br />
              Phone: {SITE_CONFIG.telephone}<br />
              Email: {SITE_CONFIG.email}
            </p>

          </div>
        </div>
      </section>
    </div>
  );
}
