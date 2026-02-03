"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contato", 0.5);

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Entre em Contato</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Por favor, entre em contato diretamente pelo email{" "}
        <a className="underline" href="mailto:pamelapereira321@gmail.com">
          pamelapereira321@gmail.com
        </a>{" "} ou use o formulário abaixo.
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
        }}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-green-100 dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none placeholder:text-gray-800 placeholder-opacity-100 dark:placeholder:text-gray-700"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-green-100 dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none placeholder:text-gray-800 placeholder-opacity-100 dark:placeholder:text-gray-700"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
