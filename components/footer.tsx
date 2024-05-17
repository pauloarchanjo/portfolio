import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();
  const licenseInfo = `© ${year} Archanjo. MIT License.`;
  const aboutWebsite = `
    built with React & Next.js (App Router & Server Actions), TypeScript, 
    Tailwind CSS, Framer Motion, React Email & Resend, Vercel hosting.
  `;

  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        {licenseInfo}
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> {aboutWebsite}
      </p>
    </footer>
  );
}
