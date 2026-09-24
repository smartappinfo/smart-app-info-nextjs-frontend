import React from 'react';

function Disclaimer() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-gray-800 leading-relaxed font-sans">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 border-b pb-4">Disclaimer</h1>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">Copyright & Original Content</h2>
      <p className="mb-6">
        Everything you read on <strong className="text-gray-900">smartappinfo.com</strong> is entirely our own work. Our creative and editorial team holds the exclusive copyright for all app reviews and imagery found across the site. Because we put genuine effort into creating this content, duplicating or redistributing it without clear, proper attribution is strictly off-limits.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">Google Policy Alignment</h2>
      <p className="mb-6">
        We hold ourselves to high operational standards. All information, layouts, and ad placements on our platform fully align with Google Ads guidelines and the Google Unwanted Software policy. We ensure that our site structure and content delivery respect these safety benchmarks at all times.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">Your Device Safety</h2>
      <p className="mb-6">
        Browsing our platform is completely safe for your hardware. We do not execute any scripts or operations that alter your device configurations or underlying system settings. Using our website will never change the internal settings of your phone or tablet.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">Free Access & Pure APKs</h2>
      <p className="mb-6">
        Every feature and tool offered on <strong className="text-gray-900">smartappinfo.com</strong> is 100% free to use. We exclusively provide authentic, virus-free APK files for naturally free applications alongside our custom breakdowns. The files we share are direct, untampered carbon copies of the versions found right on the Google Play Store. Furthermore, we will **never** prompt you for banking details, credit card numbers, or passwords.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">Ads & External Links</h2>
      <p className="mb-6">
        We do not hand-pick corporate advertisers or run direct partnerships. The promotions displayed on our site are automatically populated by Google Ads depending on standard browsing behavior. Because of this automated setup, <strong className="text-gray-900">smartappinfo.com</strong> does not assume responsibility for the specific text, visual layouts, or accuracy of these external third-party ads.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">Reach Out</h2>
      <p className="mb-6">
        If you experience any issues accessing our platform or have questions regarding our documentation, please feel free to send a message to our support line at:{' '}
        <a href="mailto:support@smartappinfo.com" className="text-blue-600 hover:underline font-medium">
          support@smartappinfo.com
        </a>
        . We are happy to help clear things up.
      </p>
    </div>
  );
}

export default Disclaimer;