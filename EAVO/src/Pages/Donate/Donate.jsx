import React, { useState } from "react";
import axios from "axios";

function Donate() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [currency, setCurrency] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/donate", {
        firstName,
        lastName,
        email,
        currency,
        amount,
      })
      .then((response) => {
        if (response.data.status) {
          alert("Thank you for your donation!");
        }
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen shadow-lg p-4">
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
            <input
              type="text"
              id="currency"
              name="currency"
              className="w-full px-4 py-3 border border-gray-300 bg-gray-100 rounded-lg text-lg font-medium focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="amount"
              className="block text-gray-700 text-xl font-bold mb-2"
            >
              Amount
            </label>
            <input
              type="text"
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
      </div>
    </div>
  );
}

export default Donate;
