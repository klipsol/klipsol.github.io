import { useState, useEffect } from "react";
import Link from "next/link";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { beaconEvents } from "@/app/utils/events";

const GetInTouchModal = ({ url, onClose }) => {
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const [successMessage, setSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isValid },
    setValue,
    watch,
    trigger,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone_number: "",
      company: "",
      brand: "",
    },
    mode: "onChange",
  });

  const nameValue = watch("name");
  const emailValue = watch("email");
  const phoneValue = watch("phone_number");
  const media_handleValue = watch("company");
  const domainValue = watch("brand");

  useEffect(() => {
  }, [isValid]);

  useEffect(() => {
    if (emailValue || phoneValue) {
      setErrorMessage("");
      trigger(["email", "phone_number"]);
    }
  }, [emailValue, phoneValue, trigger]);

  const validateContact = () => {
    if (!emailValue && !phoneValue) {
      return "Either Email or Phone is required";
    }
    return true;
  };

  const onSubmit = async (data) => {
    setIsSubmitting(true);

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("phone_number", data.phone_number);
    formData.append("company", data.company);
    formData.append("brand", data.brand);

    try {
      const response = await axios.post(
        `https://staging.app.dpanda.in/index.php?route=api/publisher/contact_us`,
        // `${API_BASE_URL}/index.php?route=api/publisher/contact_us`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      setSuccessMessage(true);
      setErrorMessage("");

      // Fire Google Analytics Event
      beaconEvents.fireEvents(`Tracking Event`, {
        action: "submit_form",
        category: "Get in Touch",
        label: "User Submitted Get in Touch Form",
        value: 1,
      });

      // Fire Google Ads Conversion Tracking
      beaconEvents.fireEvents(`Tracking Conversion:`, {
        action: "conversion",
        send_to: "",
        value: 1.0,
        currency: "INR",
      });
  
      setTimeout(() => {
        setSuccessMessage(false);
        onClose();
      }, 3000);
      reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrorMessage("Error submitting form, please try again later.");
    } finally {
      setTimeout(() => setIsSubmitting(false), 1000);
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-80 flex items-center justify-center z-[100]">
      <form onSubmit={handleSubmit(onSubmit)}
        className="relative w-[80%] sm:w-[320px] xl:w-[400px] grid bg-white rounded-[1.625rem]">
        
        <button
          onClick={onClose}
          className="flex justify-center items-center w-[30px] h-[30px] absolute top-[-0.5rem] right-[-0.5rem] bg-[#696969] hover:bg-[#003045] text-white rounded-full p-2">
          <svg
            className="w-5 h-5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>

        <h2 className="font-[600] text-[1.375rem] xl:text-[1.375rem] leading-[1.6875rem] xl:leading-[2rem] text-[#1D234E] text-center py-[2.5rem]">
          Get in Touch
        </h2>

        {successMessage && (
          <div className="fixed z-10 inset-0 flex items-center justify-center bg-black bg-opacity-50" onClick={() => setSuccessMessage(false)}>
            <div className="bg-white rounded-lg shadow-lg p-6 w-80 text-center">
              <h3 className="text-lg font-semibold text-green-600">
                Submission Successful!
              </h3>
              <p className="text-gray-700 mt-2">
                Thanks for sharing your details. Our onboarding team will get back to you in 2-3 business days.
              </p>
              <button
                className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                onClick={() => setSuccessMessage(false)}
              >
                Close
              </button>
            </div>
          </div>
        )}

        {errorMessage && (
          <div className="flex items-center bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded-md mx-4 mb-4">
            <svg
              className="w-5 h-5 text-red-600 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            <span>{errorMessage}</span>
          </div>
        )}

        <div className="grid px-[1.25rem] mb-4">
          <label className="font-[700] text-[.6875rem] xl:text-[1rem] leading-[1.375rem] xl:leading-[2rem] text-[#003045]">Full Name</label>
          <input
            placeholder="Enter your name"
            type="text"
            {...register("name", {
              required: "Full Name is required",
              onChange: (e) => {
                let value = e.target.value;
                value = value.replace(/[^A-Za-z\s]/g, "");
                value = value.replace(/\s+/g, " ");
                value = value.trimStart();

                setValue("name", value);
              },
              minLength: {
                value: 3,
                message: 'Minimum length of 3 characters required',
              },
              maxLength: {
                value: 200,
                message: 'Maximum length of 200 characters allowed',
              },
              pattern: {
                value: /^[A-Za-z]+(?:\s[A-Za-z]+)*$/,
                message: 'Name should contain only letters with a single space between words.',
              },
            })}
            className="font-[500] text-[.625rem] xl:text-[.875rem] leading-[.625rem] xl:leading-[.875rem] text-[#00000076] px-[.8125rem] sm:px-[1.0625rem] py-[.5625rem] sm:py-[.875rem] border border-solid border-[#28293E4D] rounded-[.1875rem] sm:rounded-[.3125rem] focus:outline-none focus:ring-2 focus:ring-[#003045]"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        <div className="grid px-[1.25rem] mb-4">
          <label className="font-[700] text-[.6875rem] xl:text-[1rem] leading-[1.375rem] xl:leading-[2rem] text-[#003045]">Email Address</label>
          <input
            placeholder="Enter your email"
            type="text"
            {...register("email", {
              validate: validateContact,
              // required: "Email is required",
              onChange: (e) => {
                let value = e.target.value.replace(/[^a-zA-Z0-9._@+-]/g, '').trim();
                setValue("email", value);
              },
              pattern: {
                value: /^[a-zA-Z0-9._@+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Enter a valid email address",
              },
            })}
            className="font-[500] text-[.625rem] xl:text-[.875rem] leading-[.625rem] xl:leading-[.875rem] text-[#00000076] px-[.8125rem] sm:px-[1.0625rem] py-[.5625rem] sm:py-[.875rem] border border-solid border-[#28293E4D] rounded-[.1875rem] sm:rounded-[.3125rem] focus:outline-none focus:ring-2 focus:ring-[#003045]"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div className="grid px-[1.25rem] mb-4">
          <label className="font-[700] text-[.6875rem] xl:text-[1rem] leading-[1.375rem] xl:leading-[2rem] text-[#003045]">Phone Number</label>
          <input
            placeholder="Enter your phone number"
            type="tel"
            {...register("phone_number", {
              validate: validateContact,
              // required: "Phone number is required",
              onChange: (e) => {
                const value = e.target.value
                  .replace(/[^0-9]/g, '')
                  .slice(0, 10);
                setValue("phone_number", value);
              },
              pattern: {
                value: /^[0-9]{10}$/,
                message: 'Enter a valid 10-digit phone number',
              },
            })}
            className="font-[500] text-[.625rem] xl:text-[.875rem] leading-[.625rem] xl:leading-[.875rem] text-[#00000076] px-[.8125rem] sm:px-[1.0625rem] py-[.5625rem] sm:py-[.875rem] border border-solid border-[#28293E4D] rounded-[.1875rem] sm:rounded-[.3125rem] focus:outline-none focus:ring-2 focus:ring-[#003045]"
          />
          {errors.phone_number && (
            <p className="text-red-500 text-sm mt-1">{errors.phone_number.message}</p>
          )}
        </div>

        <div className="grid px-[1.25rem] mb-4">
          <label className="font-[700] text-[.6875rem] xl:text-[1rem] leading-[1.375rem] xl:leading-[2rem] text-[#003045]">Company Name</label>
          <input
            placeholder="Enter your company name"
            type="text"
            {...register("company", {
              // required: "Company name is required",
              // onChange: (e) => {
              //   let value = e.target.value;
              //   value = value.replace(/[^A-Za-z0-9&@#.,'()\- ]/g, "");
              //   value = value.replace(/\s+/g, " ");
              //   value = value.trimStart(); 

              //   setValue("company", value);
              // },
              // minLength: {
              //   value: 3,
              //   message: 'Minimum length of 3 characters required',
              // },
              // maxLength: {
              //   value: 200,
              //   message: 'Maximum length of 200 characters allowed',
              // },
              // pattern: {
              //   value: /^[A-Za-z0-9&@#.,'()\-]+(?:\s[A-Za-z0-9&@#.,'()\-]+)*$/,
              //   message: "Company name can contain letters, numbers, and allowed special characters: & . , ' ( ) -",
              // },
            })}
            className="font-[500] text-[.625rem] xl:text-[.875rem] leading-[.625rem] xl:leading-[.875rem] text-[#00000076] px-[.8125rem] sm:px-[1.0625rem] py-[.5625rem] sm:py-[.875rem] border border-solid border-[#28293E4D] rounded-[.1875rem] sm:rounded-[.3125rem] focus:outline-none focus:ring-2 focus:ring-[#003045]"
          />
          {errors.company && (
            <p className="text-red-500 text-sm mt-1">{errors.company.message}</p>
          )}
        </div>

        <div className="grid px-[1.25rem] mb-4">
          <label className="font-[700] text-[.6875rem] xl:text-[1rem] leading-[1.375rem] xl:leading-[2rem] text-[#003045]">Brand</label>
          <input
            placeholder="Enter your brand name"
            type="text"
            {...register("brand", {
              // required: "Brand name is required",
              // onChange: (e) => {
              //   let value = e.target.value;
              //   value = value.replace(/[^A-Za-z0-9&@#.,'()\- ]/g, "");
              //   value = value.replace(/\s+/g, " ");
              //   value = value.trimStart(); 

              //   setValue("brand", value);
              // },
              // minLength: {
              //   value: 3,
              //   message: 'Minimum length of 3 characters required',
              // },
              // maxLength: {
              //   value: 200,
              //   message: 'Maximum length of 200 characters allowed',
              // },
              // pattern: {
              //   value: /^[A-Za-z0-9&@#.,'()\-]+(?:\s[A-Za-z0-9&@#.,'()\-]+)*$/,
              //   message: "Brand name can contain letters, numbers, and allowed special characters: & . , ' ( ) -",
              // },
            })}
            className="font-[500] text-[.625rem] xl:text-[.875rem] leading-[.625rem] xl:leading-[.875rem] text-[#00000076] px-[.8125rem] sm:px-[1.0625rem] py-[.5625rem] sm:py-[.875rem] border border-solid border-[#28293E4D] rounded-[.1875rem] sm:rounded-[.3125rem] focus:outline-none focus:ring-2 focus:ring-[#003045]"
          />
          {errors.brand && (
            <p className="text-red-500 text-sm mt-1">{errors.brand.message}</p>
          )}
        </div>

        <button
          type="submit"
          // disabled={!isValid}
          disabled={isSubmitting}
          className={`font-[600] text-[.875rem] xl:text-[1rem] leading-[1.375rem] xl:leading-[2rem] text-[#ffffff] mx-[1.875rem] mb-[.625rem] py-2 rounded-[.375rem] ${isSubmitting ? "disabled:bg-[#ddd] disabled:cursor-not-allowed" : "bg-[#003045] hover:bg-[#f7ba30]"
            }`}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>

        <p className="font-[500] text-[.5rem] xl:text-[.75rem] leading-[.5rem] xl:leading-[.75rem] text-[#000000] text-center mx-[1.875rem] mb-[.625rem] sm:mb-[1.5rem] pb-2">By signing up, you agree to our <Link href="/policies/terms-and-conditions" target="_blank" className="text-[#003045] hover:text-[#f7ba30]">Terms and Conditions</Link>.</p>
      </form>
    </div>
  );
};

export default GetInTouchModal;
