import React from 'react';

function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-gray-800 leading-relaxed font-sans">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 border-b pb-4">Privacy Policy</h1>
      
      <p className="mb-6">
        At <strong className="text-gray-900">smartappinfo.com (Smart App Info)</strong>, protecting your privacy and keeping your data secure is one of our top priorities. In line with the GDPR and EU user consent guidelines, we have updated our privacy and cookies policy. Below, you will find a clear breakdown of how we gather and handle your information when you browse our site, alongside simple steps on how to manage your cookie preferences.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">What Are Cookies?</h2>
      <p className="mb-6">
        Cookies are tiny text files saved directly onto your device. They are used to gather non-personal details, such as the type of device you use, your operating system, your browser, and how you navigate our pages. When you visit our website, these details are collected automatically using cookies and similar web technologies.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">How We Use Cookies</h2>
      <p className="mb-6">
        We use cookies to make your browsing experience smoother. This includes keeping you logged in, understanding how visitors interact with our content, and displaying personalized advertisements that match your interests. While most web browsers accept cookies by default, you are always in control and can block them through your browser settings whenever you like.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">The Types of Cookies We Use</h2>
      
      <div className="space-y-6 mb-8">
        <div>
          <h3 className="text-xl font-medium text-gray-900 mb-2">Necessary Cookies</h3>
          <p className="text-gray-700">
            These cookies are absolutely essential for our website to function properly and deliver the core services you expect. Because the site cannot run correctly without them, they cannot be turned off. Rest assured, necessary cookies do not track your long-term browsing habits or personal details.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-medium text-gray-900 mb-2">Analytics Cookies</h3>
          <p className="text-gray-700">
            We rely on Google Analytics to help us evaluate site traffic, audience size, and overall engagement. These cookies are active when you visit our site, but you can opt out of them at any point using the guidelines below. If you want to dive deeper into how Google manages this data, you can read their policy{' '}
            <a href="https://policies.google.com/technologies/cookies" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              here
            </a>
            .
          </p>
        </div>

        <div>
          <h3 className="text-xl font-medium text-gray-900 mb-2">Interest-Based Advertising</h3>
          <p className="text-gray-700 mb-3">
            These cookies study your preferences to serve you ads that are actually relevant to you, whether on our site or across the web, while also measuring how well those ads perform. They may be set by us, ad networks, or third-party ad providers. You can easily revoke your consent for these personalized ads by following the steps outlined below.
          </p>
          <p className="text-gray-700">
            Keep in mind that if you opt out of interest-based cookies, some site features might not work as intended, and the ads you see will be generic rather than tailored to your tastes.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-medium text-gray-900 mb-3">Third-Party Cookies & Tracking</h3>
          <p className="text-gray-700 mb-6">
            Certain cookies on our platform are managed by third parties. For example, if you click on an advertisement or a promotional link, you may be redirected to an external landing page that automatically processes your data. We do not control these third parties or how they choose to use cookies, so we recommend checking their individual privacy policies for more information. We also occasionally use tools like pixel tags, web beacons, and eTags to better understand our traffic patterns and visitor behavior.
          </p>

          <div className="overflow-x-auto my-6 border border-gray-200 rounded-lg shadow-sm">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-4 text-left text-sm font-semibold text-gray-900 border-r border-gray-200 w-1/4">
                    Cookie Partners
                  </th>
                  <th scope="col" className="px-6 py-4 text-left text-sm font-semibold text-gray-900 border-r border-gray-200 w-1/4">
                    Category
                  </th>
                  <th scope="col" className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    Purpose & Description
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr className="align-top">
                  <td className="px-6 py-4 text-sm text-gray-700 font-medium border-r border-gray-200">
                    Google Analytics, Google AdSense, DoubleClick
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700 border-r border-gray-200">
                    Site Analytics & Digital Advertising
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600 leading-relaxed">
                    Google manages the Google Display Network—a vast web of millions of sites and apps (including YouTube) that display advertising. They also utilize the DoubleClick platform to help buyers and publishers manage digital ad campaigns across the web, which includes the DoubleClick Advertising Exchange and Bid Manager. To learn more about how Google handles data for advertising purposes, please check out the{' '}
                    <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
                      Google Privacy & Terms
                    </a>
                    .
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">How to Opt Out of Cookies</h2>
      <p className="mb-4">
        If you want to pull back your consent, we support several easy opt-out options. Just remember that turning off cookies might cause parts of our website to stop working correctly. Additionally, disabling cookies will not stop ads from appearing; it simply means the ads won't be customized to your browsing habits.
      </p>
      <p className="mb-6">
        If you prefer that we don't use cookies during your visit, you can{' '}
        <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
          click here
        </a>{' '}
        to learn how to update your browser settings to reject them. 
      </p>

      <h3 className="text-xl font-medium text-gray-900 mb-2">Google Analytics Opt-Out</h3>
      <p className="mb-4">
        To prevent Google Analytics from tracking your activity across websites, you can install this formal{' '}
        <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
          opt-out browser add-on
        </a>
        .
      </p>
      <p className="mb-6">
        You can also use the tools provided by the{' '}
        <a href="https://safety.google/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
          Google Safety Centre
        </a>{' '}
        to control exactly what data is used to show you ads.
      </p>

      <h3 className="text-xl font-medium text-gray-900 mb-3">Managing Browser Controls</h3>
      <p className="mb-4">
        For a blanket approach, you can adjust settings directly inside your web browser. Most browsers let you block or clear cookies through their "Settings", "Options", or "Preferences" menus. Here are the direct guides for the most popular platforms:
      </p>
      <ul className="list-disc pl-6 mb-8 space-y-2 text-blue-600">
        <li>
          <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="hover:underline">
            Cookie management in Google Chrome
          </a>
        </li>
        <li>
          <a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" target="_blank" rel="noopener noreferrer" className="hover:underline">
            Cookie management in Mozilla Firefox
          </a>
        </li>
        <li>
          <a href="https://support.microsoft.com/en-us/windows/delete-and-manage-cookies-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank" rel="noopener noreferrer" className="hover:underline">
            Cookie management in Internet Explorer
          </a>
        </li>
        <li>
          <a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="hover:underline">
            Cookie management in Microsoft Edge
          </a>
        </li>
        <li>
          <a href="https://support.apple.com/en-us/HT201265" target="_blank" rel="noopener noreferrer" className="hover:underline">
            Cookie management in Apple Safari (iOS)
          </a>
        </li>
      </ul>

      <hr className="my-8 border-gray-200" />

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">General Data Practices</h2>
      <p className="mb-6">
        Beyond our use of cookie technology, Smart App Info handles and secures your broader data based on the rules outlined below. By continuing to use our platform, you acknowledge and agree to these terms.
      </p>

      <h3 className="text-xl font-medium text-gray-900 mb-2">What Data Do We Collect?</h3>
      <p className="mb-6">
        We look at technical data about your device whenever you access our pages. This includes logging your operating system name and version, the manufacturer and model of your device, your browser type and language settings, screen resolution, the website you visited right before ours, the pages you view, how long you stay, and your overall interaction patterns.
      </p>
      <p className="mb-6">
        We analyze this aggregate information strictly to optimize our site performance and make sure we are delivering the best possible user experience.
      </p>

      <h3 className="text-xl font-medium text-gray-900 mb-2">How Do We Use This Information?</h3>
      <p className="mb-4">Your information helps us in the following ways:</p>
      <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
        <li>To smoothly run, maintain, and upgrade our website, features, and tools;</li>
        <li>To organize and distribute rewards or promotions you choose to join on our site;</li>
        <li>To send out critical updates, technical notices, security alerts, and customer support messages.</li>
      </ul>

      <h3 className="text-xl font-medium text-gray-900 mb-2">Legal Disclosures & Misuse</h3>
      <p className="mb-6">
        If required to do so by law—such as obeying a valid court order or responding to a formal request from law enforcement agencies—we will disclose the information we possess to ensure compliance.
      </p>

      <h3 className="text-xl font-medium text-gray-900 mb-2">Intellectual Property Notice</h3>
      <p className="mb-6">
        All brand logos, names, and trademarks displayed on this site belong entirely to their respective corporate owners. Smart App Info operates independently and is not affiliated, endorsed, or associated with any of these brands.
      </p>

      <h3 className="text-xl font-medium text-gray-900 mb-2">Our Security & Safety Guarantee</h3>
      <p className="mb-6">
        We take safety seriously. Our site is dedicated entirely to hosting honest app reviews and original, unmodified, and completely virus-free APK downloads. We will never share or sell your personal details to external third parties without your clear permission.
      </p>

      <h3 className="text-xl font-medium text-gray-900 mb-2">Policy Updates</h3>
      <p className="mb-6">
        We may occasionally update this privacy policy. The data we collect is always governed by the active policy in place at the time the information is used. Any changes become effective as soon as they are posted, and continued use of our services means you accept those updates.
      </p>

      <h3 className="text-xl font-medium text-gray-900 mb-2">Contact Us</h3>
      <p className="mb-6">
        If you have any questions about this privacy statement or want to know more about the data we handle, please feel free to drop us a line at:{' '}
        <a href="mailto:support@smartappinfo.com" className="text-blue-600 hover:underline font-medium">
          support@smartappinfo.com
        </a>
        .
      </p>
    </div>
  );
}

export default PrivacyPolicy;