import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from "axios";

const DonationLoad = () => {
    const [message, setMessage] = useState("");
    const [isSuccess, setIsSuccess] = useState(false);

    useEffect(() => {

        const handleStatus = async () => {
            const tx_ref = localStorage.getItem('tx_ref');
            window.location.href = `http://localhost:5173/Donation/verify/${tx_ref}`;
        }
        handleStatus();
    }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-lg p-8 bg-white rounded-lg shadow-md">
          <div className="text-center">
            {/* <h1 className="text-2xl font-bold text-red-600 mb-4">Error in Donation</h1> */}
            <h1 className="text-gray-700 text-lg">{'Verifying Payment...................'}</h1>
          </div>
      </div>
    </div>
  );
};


export default DonationLoad;
