import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = { title: "Terms & Conditions" };

export default function TermsPage() {
  return (
    <LegalPage title="Terms and Conditions of Use">
      <p>
        The following Terms of Use is a legal contract between an individual user and ECAMS regarding the use of our
        website and services.
      </p>
      <p>
        Welcome to the website of ECAMS. By accessing our site, you agree to these Terms and Conditions of Use and are
        bound by all applicable laws and regulations.
      </p>
      <p>
        The site and its original content, features, and services are owned by ECAMS and are protected by international
        copyright, trademark, intellectual property, and other proprietary rights laws.
      </p>
      <p>
        If, for any reason, we believe that our Terms and Conditions have not been upheld, we reserve the right to suspend
        or terminate access to our website without prior notice or liability.
      </p>
    </LegalPage>
  );
}
