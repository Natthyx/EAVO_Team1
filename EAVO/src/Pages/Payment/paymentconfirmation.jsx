import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from "axios";

const DonationStatus = () => {
    const [message, setMessage] = useState("");
    const [isSuccess, setIsSuccess] = useState(false);

    useEffect(() => {

        const handleStatus = async () => {
            const tx_ref = localStorage.getItem('tx_ref');
        await axios.get(`http://localhost:5000/eavo/donation/verify/${tx_ref}`)
                 .then((response) => {
                    if (response.status === 200) {
                        setIsSuccess(true);
                    } else {
                        setIsSuccess(false);
                    }
                 })
                 .catch((err) => {
                    setIsSuccess(false);
                 })
        }
        handleStatus();
    }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-lg p-8 bg-white rounded-lg shadow-md">
        {isSuccess ? (
          <div className="text-center">
            <h1 className="text-2xl font-bold text-green-600 mb-4">Donation Successful</h1>
            <p className="text-gray-700 text-lg">{message || 'Thank you for your generous donation!'}</p>
          </div>
        ) : (
          <div className="text-center">
            <h1 className="text-2xl font-bold text-grey-800 mb-4">Verifying...............</h1>
            {/* <p className="text-gray-700 text-lg">{message || 'An error occurred during the donation process. Please try again later.'}</p> */}
          </div>
        )}
      </div>
    </div>
  );
};

// DonationStatus.propTypes = {
//   isSuccess: PropTypes.bool.isRequired,
//   message: PropTypes.string
// };

export default DonationStatus;
