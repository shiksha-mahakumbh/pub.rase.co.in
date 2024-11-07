import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const ContactUs = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 mt-4"> {/* Reduced margin-top */}
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl"> {/* Box styling */}
        <div className="flex items-center">
          <div className="flex-shrink-0 mr-6">
            <FontAwesomeIcon icon={faEnvelope} className="text-gray-600 text-6xl" />
          </div>
          <div>
            <h2 className="text-4xl font-semibold text-gray-800">Contact Us</h2>
            <p className="text-gray-600 mt-4 text-xl">
              <a href="mailto:pub.dhe4@gmail.com" className="text-blue-500 hover:underline">
                pub.dhe4@gmail.com
              </a>
            </p>
            <p className="text-gray-600 mt-4 text-xl">
              <a href="mailto:contact@example.com" className="text-blue-500 hover:underline">
                Publications and Promotions Cell, Department of Holistic Education
                <br />
                Plot No. 1, Sector-71, SAS Nagar-160071
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
