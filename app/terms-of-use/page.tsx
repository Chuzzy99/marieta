import { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Use | Marieta Eye Clinic",
  description: "Read the terms and conditions for using the Marieta Eye Clinic website and digital services.",
  robots: { index: false, follow: true },
};

export default function TermsOfUsePage() {
  const lastUpdated = "March 15, 2024";

  return (
    <div className="flex flex-col min-h-screen">
      <PageHero 
        headline="Terms of Use" 
        subheadline={`Last Updated: ${lastUpdated}`}
      />
      
      <section className="py-24 bg-background">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto">
          <div className="prose prose-slate md:prose-lg max-w-none text-muted-foreground">
            
            <h2>1. Agreement to Terms</h2>
            <p>
              These Terms of Use constitute a legally binding agreement made between you, whether personally or on behalf of an entity (&quot;you&quot;) and {SITE_CONFIG.name} (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), concerning your access to and use of the {SITE_CONFIG.url} website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the &quot;Site&quot;).
            </p>
            <p>
              By accessing the Site, you agree that you have read, understood, and agree to be bound by all of these Terms of Use. If you do not agree with all of these Terms of Use, then you are expressly prohibited from using the Site and you must discontinue use immediately.
            </p>

            <h2>2. No Medical Advice</h2>
            <p>
              The content provided on the Site, including text, graphics, images, and other information, is for general informational purposes only and is not intended as a substitute for professional medical advice, diagnosis, or treatment. 
            </p>
            <p>
              Always seek the advice of your optometrist or other qualified health provider with any questions you may have regarding a medical condition. Never disregard professional medical advice or delay in seeking it because of something you have read on this Site.
            </p>
            <div className="bg-destructive/10 border-l-4 border-destructive p-4 my-6 text-foreground">
              <strong>MEDICAL EMERGENCY:</strong> If you think you may have a medical emergency, call your doctor or our clinic immediately at {SITE_CONFIG.telephone}. We do not recommend or endorse any specific tests, physicians, products, procedures, opinions, or other information that may be mentioned on the Site.
            </div>

            <h2>3. User Representations</h2>
            <p>By using the Site, you represent and warrant that:</p>
            <ul>
              <li>All registration information you submit will be true, accurate, current, and complete.</li>
              <li>You will maintain the accuracy of such information and promptly update such registration information as necessary.</li>
              <li>You have the legal capacity and you agree to comply with these Terms of Use.</li>
              <li>You are not a minor in the jurisdiction in which you reside.</li>
              <li>You will not access the Site through automated or non-human means, whether through a bot, script, or otherwise.</li>
              <li>You will not use the Site for any illegal or unauthorized purpose.</li>
            </ul>

            <h2>4. Intellectual Property Rights</h2>
            <p>
              Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the &quot;Content&quot;) and the trademarks, service marks, and logos contained therein (the &quot;Marks&quot;) are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights.
            </p>

            <h2>5. User Data</h2>
            <p>
              We will maintain certain data that you transmit to the Site for the purpose of managing the performance of the Site, as well as data relating to your use of the Site. Although we perform regular routine backups of data, you are solely responsible for all data that you transmit or that relates to any activity you have undertaken using the Site. Privacy of patient health information is governed separately by our Privacy Policy.
            </p>

            <h2>6. Modifications and Interruptions</h2>
            <p>
              We reserve the right to change, modify, or remove the contents of the Site at any time or for any reason at our sole discretion without notice. However, we have no obligation to update any information on our Site. We also reserve the right to modify or discontinue all or part of the Site without notice at any time. We will not be liable to you or any third party for any modification, price change, suspension, or discontinuance of the Site.
            </p>

            <h2>7. Governing Law</h2>
            <p>
              These Terms shall be governed by and defined following the laws of Lagos State, Nigeria. {SITE_CONFIG.name} and yourself irrevocably consent that the courts of Nigeria shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.
            </p>

            <h2>8. Contact Us</h2>
            <p>In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:</p>
            <address className="not-italic">
              <strong>{SITE_CONFIG.name}</strong><br />
              {SITE_CONFIG.address.street}<br />
              {SITE_CONFIG.address.city}, {SITE_CONFIG.address.state}<br />
              Phone: {SITE_CONFIG.telephone}<br />
              Email: {SITE_CONFIG.email}
            </address>

          </div>
        </div>
      </section>
    </div>
  );
}
