export default function Privacy() {
    return (
      <div className="bg-gray-50 min-h-screen py-16 px-6 max-h-[70vh] overflow-y-scroll">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl font-extrabold text-center mb-6">
            Privacy <span className="text-green-500">Policy</span>
          </h1>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            Your privacy matters. At <strong>Resume Builder</strong>, we respect and protect your
            personal information. Below is how we handle your data with care and transparency.
          </p>
  
          <div className="bg-white shadow-lg rounded-2xl p-8 border border-gray-100 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-3 text-green-600">1. Data We Collect</h2>
              <p className="text-gray-700">
                We collect basic user information such as name, email, and resume data that you input
                voluntarily. We never collect sensitive data without your consent.
              </p>
            </section>
  
            <section>
              <h2 className="text-2xl font-semibold mb-3 text-green-600">2. Purpose of Data Use</h2>
              <p className="text-gray-700">
                Your data helps us improve our platform, save your progress, and personalize your
                experience. We do not sell, trade, or share your data with any third party.
              </p>
            </section>
  
            <section>
              <h2 className="text-2xl font-semibold mb-3 text-green-600">3. Cookies & Analytics</h2>
              <p className="text-gray-700">
                We use cookies for analytics and performance optimization. You can disable them
                anytime in your browser settings without affecting core functionality.
              </p>
            </section>
  
            <section>
              <h2 className="text-2xl font-semibold mb-3 text-green-600">4. Security</h2>
              <p className="text-gray-700">
                Our systems use encrypted connections (HTTPS) and secure cloud storage to protect
                your data against unauthorized access or loss.
              </p>
            </section>
  
            <section>
              <h2 className="text-2xl font-semibold mb-3 text-green-600">5. Contact Us</h2>
              <p className="text-gray-700">
                For privacy-related questions, contact us at: <br />
                📧 <a href="mailto:fobadeffo@gmail.com" className="text-blue-600">fobadeffo@gmail.com</a> <br />
                📞 +237 693 427 529
              </p>
            </section>
          </div>
  
          <p className="text-sm text-center text-gray-500 mt-10">
            Last updated: October 2025 | Resume Builder by Foba Deffo Gedeon
          </p>
        </div>
      </div>
    );
  }
  