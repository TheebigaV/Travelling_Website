// app/privacy/page.tsx
import Link from 'next/link';
import { 
  FaShieldAlt, 
  FaUserLock, 
  FaDatabase, 
  FaFileContract,
  FaMapMarkerAlt,
  FaGlobeAmericas
} from 'react-icons/fa';

export default function PrivacyAndTerms() {
  const currentDate = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-12 max-w-5xl">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 rounded-full bg-blue-100 mb-4">
            <FaShieldAlt className="text-blue-600 text-3xl" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Privacy Policy & Terms</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Last updated: {currentDate}
          </p>
        </div>

        {/* Content Container */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* ========== PRIVACY POLICY SECTION ========== */}
          <div className="p-8 md:p-12 border-b border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <FaGlobeAmericas className="text-blue-600 text-2xl" />
              <h2 className="text-3xl font-bold text-gray-800">Privacy Policy</h2>
            </div>

            {/* Information Collection */}
            <section className="group mb-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-2 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                  <FaUserLock className="text-blue-600 text-xl" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mt-1">Information Collection</h3>
              </div>
              <div className="pl-12 space-y-4 text-gray-700">
                <p>
                  We collect minimal information to provide and improve our location discovery service:
                </p>
                <ul className="list-disc pl-6 space-y-2 marker:text-blue-500">
                  <li className="pl-2">Basic account information when you register</li>
                  <li className="pl-2">Location preferences to personalize recommendations</li>
                  <li className="pl-2">Usage data to improve our service</li>
                </ul>
              </div>
            </section>

            {/* Data Usage */}
            <section className="group mb-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-2 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                  <FaDatabase className="text-blue-600 text-xl" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mt-1">Use of Information</h3>
              </div>
              <div className="pl-12 space-y-4 text-gray-700">
                <p>Your information helps us:</p>
                <ul className="list-disc pl-6 space-y-2 marker:text-blue-500">
                  <li className="pl-2">Provide personalized location recommendations</li>
                  <li className="pl-2">Improve our discovery algorithms</li>
                  <li className="pl-2">Enhance user experience</li>
                  <li className="pl-2">Communicate important service updates</li>
                </ul>
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r mt-4">
                  <p className="font-medium text-blue-700">
                    We never sell your personal data to third parties.
                  </p>
                </div>
              </div>
            </section>

            {/* Data Protection */}
            <section className="group">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-2 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                  <FaShieldAlt className="text-blue-600 text-xl" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mt-1">Data Protection</h3>
              </div>
              <div className="pl-12 space-y-4 text-gray-700">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <h4 className="font-semibold text-gray-800 mb-2">Security Measures</h4>
                    <p className="text-sm text-gray-600">
                      We implement industry-standard security protocols to protect your data.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <h4 className="font-semibold text-gray-800 mb-2">Your Rights</h4>
                    <p className="text-sm text-gray-600">
                      You can request access, correction, or deletion of your personal data.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* ========== TERMS & CONDITIONS SECTION ========== */}
          <div className="p-8 md:p-12">
            <div className="flex items-center gap-3 mb-6">
              <FaFileContract className="text-blue-600 text-2xl" />
              <h2 className="text-3xl font-bold text-gray-800">Terms of Service</h2>
            </div>

            {/* General Terms */}
            <section className="group mb-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-2 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                  <FaFileContract className="text-blue-600 text-xl" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mt-1">General Terms</h3>
              </div>
              <div className="pl-12 space-y-4 text-gray-700">
                <p>
                  By using Wanderlust Travels, you agree to these terms governing our location discovery service.
                </p>
                <ul className="list-disc pl-6 space-y-2 marker:text-blue-500">
                  <li className="pl-2">You must be at least 13 years old to use our service</li>
                  <li className="pl-2">Content is for informational purposes only</li>
                  <li className="pl-2">We may modify or discontinue service at any time</li>
                </ul>
              </div>
            </section>

            {/* Content Usage */}
            <section className="group mb-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-2 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                  <FaMapMarkerAlt className="text-blue-600 text-xl" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mt-1">Content & Usage</h3>
              </div>
              <div className="pl-12 space-y-4 text-gray-700">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Location Information</h4>
                    <ul className="list-disc pl-5 space-y-1.5 text-sm marker:text-blue-400">
                      <li>Provided for informational purposes only</li>
                      <li>Accuracy not guaranteed - verify with official sources</li>
                      <li>May change without notice</li>
                    </ul>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-800 mb-2">User Responsibilities</h4>
                    <ul className="list-disc pl-5 space-y-1.5 text-sm marker:text-blue-400">
                      <li>Verify all travel information independently</li>
                      <li>Comply with all local laws and regulations</li>
                      <li>Use content responsibly</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Limitation of Liability */}
            <section className="group">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-2 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                  <FaShieldAlt className="text-blue-600 text-xl" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mt-1">Limitation of Liability</h3>
              </div>
              <div className="pl-12 space-y-4 text-gray-700">
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r">
                  <p className="font-medium text-yellow-700">
                    Wanderlust Travels is not responsible for any travel decisions made based on our content.
                  </p>
                </div>
                <ul className="list-disc pl-6 space-y-2 marker:text-blue-500">
                  <li className="pl-2">We don&#39;t guarantee accuracy of third-party information</li>
                  <li className="pl-2">Travel restrictions may change without notice</li>
                  <li className="pl-2">You are solely responsible for your travel plans</li>
                </ul>
              </div>
            </section>
          </div>

          {/* Footer Section */}
          <div className="bg-gray-50 px-8 py-6 border-t border-gray-200">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-600 mb-4 md:mb-0 text-sm">
                For questions about these terms, contact us at{' '}
                <Link href="mailto:legal@wanderlust.com" className="text-blue-600 hover:underline">
                  info@wanderlusttravel.com
                </Link>
              </p>
              <Link 
                href="/" 
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors flex items-center gap-2"
              >
                <span>Back to Home</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}