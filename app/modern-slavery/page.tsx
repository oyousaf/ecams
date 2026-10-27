import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = { title: "Modern Slavery Statement" };

export default function ModernSlaveryPage() {
  return (
    <LegalPage title="Modern Slavery Act Transparency Agreement" updated="Dated 01/01/2025">
      <p>
        At Environmental Cleaning and Maintenance Services Ltd, we are committed to conducting our business in an ethical
        and responsible manner. While we are not currently required to publish a statement under Section 54 of the Modern
        Slavery Act 2015, we fully support its aims to eradicate modern slavery and human trafficking.
      </p>
      <p>
        We believe in fairness, respect, and dignity for all people, and we are committed to ensuring that modern slavery
        has no place in our operations. As our company grows, we will work to establish clear policies and procedures
        that promote transparency, safeguard human rights, and prevent exploitation.
      </p>
      <p>This statement reflects our values and our ongoing commitment to ethical business practices.</p>
      <p>
        Signed,
        <br />
        <strong>Alex Kargbo</strong>
        <br />
        Director, Environmental Cleaning and Maintenance Services Ltd
      </p>
    </LegalPage>
  );
}
