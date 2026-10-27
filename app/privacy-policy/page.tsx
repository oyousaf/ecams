import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="Privacy Policy">
      <h2>Introduction</h2>
      <p>
        ECAMS is committed to protecting the data collected pertaining to our users. This policy details the collection,
        use, and protection of personal information we receive from site visitors. By entering our website you consent to
        our use of cookies as pertaining to the terms of this policy.
      </p>
      <h2>Data Collection</h2>
      <p>
        ECAMS collects the minimum amount of personally identifiable information necessary to improve our site and the
        service we provide. Data we collect includes any or all of the information you provide while using our website
        and/or services.
      </p>
      <h2>Use of Information</h2>
      <p>
        ECAMS may use the personal information collected through our site specifically for the purposes detailed in this
        policy. Personal information that we process for any reasons won’t be kept longer than is necessary for those
        purposes. We will take reasonable measures to prevent the loss or misuse of your personal information (e.g.
        encryption).
      </p>
    </LegalPage>
  );
}
