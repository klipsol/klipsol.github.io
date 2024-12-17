'use client';
import { useForm, ValidationError } from '@formspree/react';

const ContactForm = () => {
  const [state, handleSubmit] = useForm('mvgornkq');
  if (state.succeeded) {
    return (
      <div className="max-w-3xl my-4 mx-auto p-8 border rounded-xl shadow-lg bg-white">
        <p className="text-green-600 text-lg">Thanks for joining!</p>
      </div>
    );
  }

  return (
    <div className="mx-auto p-4 sm:p-4 bg-white">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Contact Us
      </h2>
      <form
        className="space-y-2 lg:flex lg:space-y-0 gap-4 justify-center items-center"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col m-0">
          <label htmlFor="email" className="text-sm font-medium text-gray-600">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        <div className="flex flex-col m-0">
          <label
            htmlFor="message"
            className="text-sm font-medium text-gray-600"
          >
            Message
          </label>
          <input
            id="message"
            name="message"
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            // rows="1"
            min-rows="1"
            required
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>

        <button
          type="submit"
          disabled={state.submitting}
          className="px-6 py-2 w-full md:w-auto lg:self-end text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 disabled:bg-gray-400"
        >
          {state.submitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
