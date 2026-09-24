import React from 'react';

function AboutUs() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-gray-800 leading-relaxed font-sans">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 border-b pb-4">About Us</h1>

      <p className="mb-6">
        Welcome to our platform! We are passionate about helping you discover the absolute best free apps and games trending right now. Whether you are hunting for tools to personalize your phone, the latest social networks, smooth communication apps, or new music players, we have you covered. Our goal is to make your search effortless by breaking down everything you need to know—from detailed descriptions and real user reviews to recent update timelines and ratings—all in one convenient place.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">Our Review Process</h2>
      <p className="mb-6">
        We believe in authenticity. Every single app review and screenshot you see here is created entirely by our dedicated in-house editorial team. Because we put hard work into our original content, the copyright belongs strictly to us, and copying our reviews without clear attribution is completely prohibited.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">Disclaimer & Safety Commitments</h2>
      <p className="mb-4">
        Please note that all merchant trademarks, logos, and brand assets displayed across our site belong entirely to their respective owners. We operate independently and are not officially affiliated, partnered, or associated with any of the companies featured here.
      </p>
      <p className="mb-4">
        If you ever have any questions regarding copyrights, trademarks, or our content, please drop us an email. We take these matters seriously and will get back to you as quickly as possible.
      </p>
      <p className="mb-6">
        Everything we offer here at <strong className="text-gray-900">smartappinfo.com</strong> is 100% free of charge. We strictly share original, untouched, and virus-free APK files. Every file is identical to what you would find directly on the Google Play Store—no modifications, no malware, and no hidden surprises. Most importantly, we will **never** ask you for credit card numbers, passwords, or any financial payment information. 
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">Get in Touch</h2>
      <p className="mb-6">
        Your feedback keeps us going! If you have any questions, brilliant suggestions, or need to report a bug on our site, please reach out directly via email at:{' '}
        <a href="mailto:support@smartappinfo.com" className="text-blue-600 hover:underline font-medium">
          support@smartappinfo.com
        </a>
        . We are always happy to hear from you.
      </p>
    </div>
  );
}

export default AboutUs;