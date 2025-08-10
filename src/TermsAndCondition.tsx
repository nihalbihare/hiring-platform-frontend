import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-mine-shaft-950 text-white p-10">
      <div className="max-w-4xl mx-auto bg-mine-shaft-900 p-8 rounded-lg border border-bright-sun-400/30 shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-bright-sun-400">
          Terms & Conditions
        </h1>
        <p className="mb-4">
          This is a placeholder Terms & Conditions page for our platform. 
          The final legal content will be provided later.
        </p>

        <h2 className="text-xl font-semibold mt-4">1. Acceptance of Terms</h2>
        <p>
          By using our platform, you agree to these placeholder terms.
        </p>

        <h2 className="text-xl font-semibold mt-4">2. Responsibilities</h2>
        <p>
          Users are expected to behave respectfully and follow all applicable laws.
        </p>

        <h2 className="text-xl font-semibold mt-4">3. Updates</h2>
        <p>
          These terms may be updated from time to time without notice.
        </p>

        <p className="mt-6 text-sm text-gray-400">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
