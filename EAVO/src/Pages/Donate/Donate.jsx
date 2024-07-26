import React, { useState } from "react";
import axios from "axios";

function Donate() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [currency, setCurrency] = useState("");
  const [amount, setAmount] = useState("");
  const [tx_ref, setTxRef] = useState("");
  const [statusLink, setStatusLink] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Sending request to backend with:", {
        first_name: firstName,
        last_name: lastName,
        email,
        currency,
        amount,
      });

      const response = await axios.post(
        "http://localhost:5000/eavo/donation/pay",
        {
          first_name: firstName,
          last_name: lastName,
          email,
          currency,
          amount,
        }
      );

      console.log("Response received:", response);

      const { checkout_url, tx_ref } = response.data;
      console.log("Transaction reference:", tx_ref);
      setTxRef(tx_ref);
      setStatusLink(`http://localhost:5000/eavo/donation/verify/${tx_ref}`);
      localStorage.setItem("tx_ref", tx_ref);
      window.location.href = checkout_url;
    } catch (error) {
      console.error(
        "There was an error!",
        error.response ? error.response.data : error.message
      );
      alert("There was an error processing your donation. Please try again.");
    }
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center font-sans min-h-screen shadow-lg p-4">
      <div className="w-full max-w-2xl p-10 bg-white rounded-lg shadow-2xl">
        <h1 className="text-4xl font-bold text-orange-500 mb-8">
          Please fill this form to donate!
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="first_name"
              className="block text-gray-700 text-xl font-bold mb-2"
            >
              First Name
            </label>
            <input
              type="text"
              id="first_name"
              name="first_name"
              className="w-full px-4 py-3 border border-gray-300 bg-gray-100 rounded-lg text-lg font-medium focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="last_name"
              className="block text-gray-700 text-xl font-bold mb-2"
            >
              Last Name
            </label>
            <input
              type="text"
              id="last_name"
              name="last_name"
              className="w-full px-4 py-3 border border-gray-300 bg-gray-100 rounded-lg text-lg font-medium focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-gray-700 text-xl font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-3 border border-gray-300 bg-gray-100 rounded-lg text-lg font-medium focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="currency"
              className="block text-gray-700 text-xl font-bold mb-2"
            >
              Currency
            </label>
            <select
              id="currency"
              name="currency"
              className="w-full px-4 py-3 border border-gray-300 bg-gray-100 rounded-lg text-lg font-medium focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <option value="" disabled>
                Select currency
              </option>
              <option value="USD">USD</option>
              <option value="ETB">ETB</option>
            </select>
          </div>

          <div className="mb-6">
            <label
              htmlFor="amount"
              className="block text-gray-700 text-xl font-bold mb-2"
            >
              Amount
            </label>
            <input
              type="number"
              id="amount"
              name="amount"
              className="w-full px-4 py-3 border border-gray-300 bg-gray-100 rounded-lg text-lg font-medium focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <button
              type="submit"
              className="w-full py-3 px-4 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 text-xl"
            >
              Submit
            </button>
          </div>
        </form>

        {statusLink && (
          <div className="mt-6">
            <p className="text-lg text-gray-700">
              You can check your transaction status{" "}
              <a
                href={statusLink}
                className="text-orange-500 font-bold underline"
              >
                here
              </a>
              .
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Donate;
