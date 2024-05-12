"use client";
import emailjs from "@emailjs/browser";

import { useRef, useState } from "react";

import Loading from "react-loading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";

import Link from "next/link";
import { FaWhatsappSquare } from "react-icons/fa";
import { IoMdMailUnread } from "react-icons/io";

export default function Appointment() {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
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
    console.log(form.name, form.email, form.date, form.time);

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_2,
        {
          from_name: form.name,
          to_name: "Mr.Soufiane MASAD",
          from_email: form.email,
          to_email: "soufiane@oklever.com",
          from_date: form.date,
          from_time: form.time,
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
    <section className="h-[90vh] m-auto py-12">
      <ToastContainer />
      <div className="w-full md:px-12 py-8 md:py-12">
        <div className=" px-4 md:px-6 text-center">
          <div className="flex flex-col justify-center items-center space-y-2">
            <h1 className="text-3xl font-bold text-gray-100 tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Book an Appointment
            </h1>
            <p className=" text-gray-400 md:text-xl dark:text-gray-400">
              Schedule a meeting with me at your convenience.
            </p>
            <div className="flex flex-row items-center gap-3">
              <Link
                href="https://wa.me/212708300546?text=Hello%2C%20i%20have%20a%20question%20about%20your%20service.%20Can%20you%20help%20me%3F"
                target="_blank"
              >
                <FaWhatsappSquare className="text-gray-200 hover:text-[#cfef00] w-8 h-8" />
              </Link>
              <Link href="mailto:soufiane@oklever.com" target="_blank">
                <IoMdMailUnread className="text-gray-200 hover:text-[#cfef00] w-8 h-8" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="p-6">
        <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md ">
          <div className="space-y-4">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <Label htmlFor="name">Name</Label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    onChange={handleChange}
                    required
                    className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="email">Email</Label>
                  <input
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    type="email"
                    onChange={handleChange}
                    required
                    className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
              </div>
              <div className="space-y-1">
                <Label htmlFor="date">Meeting Date</Label>
                <Input
                  id="date"
                  name="date"
                  type="date"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="time">Meeting Time</Label>
                <Input
                  id="time"
                  name="time"
                  type="time"
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
    </section>
  );
}
