"use client";
import emailjs from "@emailjs/browser";

import { useRef, useState } from "react";

import Loading from "react-loading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Mr.Soufiane MASAD",
          from_email: form.email,
          to_email: "soufiane@oklever.com",
          from_phone: form.phone,
          from_service: form.service,
          from_budget: form.budget,
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setLoading(false);
          toast("Sent successfully!", {
            type: "success",
          });
        },
        (error) => {
          console.log("FAILED...", error);
          setLoading(false);
          toast("Message not sent!", {
            type: "error",
          });
        }
      );
  };

  return (
    <div className="flex flex-col items-center justify-center py-4 p-6">
      <ToastContainer />
      <div className="bg-gray-200 shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 ">Contact Us</h2>
        <div className="flex flex-col gap-4">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
          >
            <div>
              <label
                className="block text-sm font-medium text-gray-700 "
                htmlFor="name"
              >
                Full-Name
              </label>
              <input
                className="mt-1 h-8 block w-full p-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                id="name"
                name="name"
                placeholder="Enter your fullname"
                type="text"
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label
                className="block  text-sm font-medium text-gray-700 "
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="mt-1 p-1 h-8 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                id="email"
                name="email"
                placeholder="Enter your email"
                type="email"
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium text-gray-700 "
                htmlFor="phone"
              >
                Phone Number
              </label>
              <input
                className="mt-1 h-8 block w-full p-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                id="phone"
                name="phone"
                placeholder="+1 (555) 555-5555"
                type="tel"
                onChange={handleChange}
                required
              />
              <p className="text-sm text-gray-500 ">
                Enter your phone number including the country code (e.g. +1 for
                USA).
              </p>
            </div>
            <div>
              <label
                className="block  text-sm font-medium text-gray-700 "
                htmlFor="service"
              >
                Choose service
              </label>
              <select
                className="mt-1 p-1 h-8 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                id="service"
                name="service"
                onChange={handleChange}
                required
              >
                <option value="Choose your service">Choose your service</option>
                <option value="NFT Development">NFT Development</option>
                <option value="Full-stack Web 3.0 Application">
                  Full-Stack Web 3.0 Application
                </option>
                <option value="Custom Smart Contracts">
                  Custom Smart Contracts
                </option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label
                className="block  text-sm font-medium text-gray-700 "
                htmlFor="budget"
              >
                Budget
              </label>
              <select
                className="mt-1 p-1 h-8 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                id="budget"
                name="budget"
                onChange={handleChange}
                required
              >
                <option value="Choose your service">Your budget</option>
                <option value="<1000$">{"<"}1000$</option>
                <option value="1000$-3000$">1000$-3000$</option>
                <option value=">4000$">{">"}4000$</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label
                className="block text-sm font-medium text-gray-700 "
                htmlFor="message"
              >
                Description
              </label>
              <textarea
                className="mt-1 p-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                id="message"
                name="message"
                placeholder="Enter your message"
                rows={5}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-col items-center justify-center">
              <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-gray-200 hover:text-gray-950 hover:border-gray-950 bg-gray-950 hover:bg-[#cfef00] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Submit
              </button>
            </div>
            {loading && (
              <div className="mt-2 flex justify-center">
                <Loading type="spin" color="black" height={20} width={20} />
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
