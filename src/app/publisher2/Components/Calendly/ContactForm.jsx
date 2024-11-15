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
    <div className="max-w-3xl mt-8 mx-auto p-4 sm:p-8 sm:border rounded-xl sm:shadow-lg bg-white">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Contact Us
      </h2>
      <form className="space-y-2" onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label
            htmlFor="email"
            className="text-sm font-medium text-gray-600 mb-2"
          >
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

        <div className="flex flex-col">
          <label
            htmlFor="message"
            className="text-sm font-medium text-gray-600 mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            rows="5"
            required
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            disabled={state.submitting}
            className="px-6 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 disabled:bg-gray-400"
          >
            {state.submitting ? 'Submitting...' : 'Submit'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
