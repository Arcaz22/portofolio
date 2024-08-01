import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_USER_ID
    )
      .then((result) => {
          console.log(result.text);
          alert('Message sent successfully!');
      }, (error) => {
          console.log(error.text);
          alert('Failed to send message. Please try again.');
      });
  };

  return (
    <section id="contact" className="flex flex-col items-center text-center text-white py-12">
      <h1 className="text-3xl font-bold mb-8">Contact</h1>
      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6 w-full max-w-lg">
        <div className="flex flex-col">
          <label htmlFor="from_name" className="sr-only">Name</label>
          <input
            type="text"
            name="from_name"
            id="from_name"
            placeholder="Name"
            required
            className="h-12 px-4 w-full rounded-lg border border-gray-400 bg-gray-50 text-gray-800"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="reply_to" className="sr-only">Email</label>
          <input
            type="email"
            name="reply_to"
            id="reply_to"
            placeholder="Email"
            required
            className="h-12 px-4 w-full rounded-lg border border-gray-400 bg-gray-50 text-gray-800"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="message" className="sr-only">Message</label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            required
            className="h-48 px-4 py-2 w-full rounded-lg border border-gray-400 bg-gray-50 text-gray-800 resize-none"
          ></textarea>
        </div>
        <input
          className="hover:scale-105 transform transition duration-200 ease-in-out active:translate-y-1 active:shadow-none bg-blue-500 text-white border-none rounded-lg w-32 h-12 font-bold shadow-md mx-auto cursor-pointer"
          type="submit"
          value="Submit"
        />
      </form>
    </section>
  );
}

export default Contact;
