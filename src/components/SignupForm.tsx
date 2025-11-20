"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Mail, User, MessageSquare, Send } from "lucide-react";

interface SignupFormData {
  parentName: string;
  childName: string;
  childAge: string;
  email: string;
  message: string;
  community?: string;
}

interface SignupFormProps {
  communityName?: string;
  onSubmit?: (data: SignupFormData) => void;
}

const SignupForm = ({ communityName, onSubmit }: SignupFormProps) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<SignupFormData>();

  const handleFormSubmit = async (data: SignupFormData) => {
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const formData = {
      ...data,
      community: communityName || "General Interest",
    };

    console.log("Form submitted:", formData);

    if (onSubmit) {
      onSubmit(formData);
    }

    setIsSubmitted(true);
    reset();

    // Reset success message after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-green-50 border border-green-200 rounded-xl p-6 text-center"
      >
        <div className="text-green-600 mb-4">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">✅</span>
          </div>
          <h3 className="text-lg font-semibold text-green-800 mb-2">
            Application Submitted!
          </h3>
          <p className="text-green-700">
            Thank you for your interest! We&apos;ll be in touch soon with next
            steps.
          </p>
        </div>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
      {/* Parent Name */}
      <div>
        <label
          htmlFor="parentName"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Parent/Guardian Name *
        </label>
        <div className="relative">
          <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <input
            {...register("parentName", { required: "Parent name is required" })}
            type="text"
            id="parentName"
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
            placeholder="Enter your full name"
          />
        </div>
        {errors.parentName && (
          <p className="text-red-500 text-sm mt-1">
            {errors.parentName.message}
          </p>
        )}
      </div>

      {/* Child Name */}
      <div>
        <label
          htmlFor="childName"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Child&apos;s Name *
        </label>
        <div className="relative">
          <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <input
            {...register("childName", { required: "Child name is required" })}
            type="text"
            id="childName"
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
            placeholder="Enter child's name"
          />
        </div>
        {errors.childName && (
          <p className="text-red-500 text-sm mt-1">
            {errors.childName.message}
          </p>
        )}
      </div>

      {/* Child Age */}
      <div>
        <label
          htmlFor="childAge"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Child&apos;s Age *
        </label>
        <select
          {...register("childAge", { required: "Please select child age" })}
          id="childAge"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
        >
          <option value="">Select age</option>
          {Array.from({ length: 14 }, (_, i) => i + 5).map((age) => (
            <option key={age} value={age}>
              {age} years old
            </option>
          ))}
          <option value="18+">18+ years old</option>
        </select>
        {errors.childAge && (
          <p className="text-red-500 text-sm mt-1">{errors.childAge.message}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Email Address *
        </label>
        <div className="relative">
          <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            type="email"
            id="email"
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
            placeholder="Enter your email"
          />
        </div>
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Additional Message (Optional)
        </label>
        <div className="relative">
          <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <textarea
            {...register("message")}
            id="message"
            rows={4}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200 resize-none"
            placeholder="Tell us about your child's interests or any questions you have..."
          />
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full btn-primary flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
            Submitting...
          </>
        ) : (
          <>
            <Send className="h-5 w-5 mr-2" />
            Join {communityName || "NGKYC"}
          </>
        )}
      </button>

      <p className="text-xs text-gray-500 text-center">
        By submitting this form, you agree to our privacy policy and terms of
        service.
      </p>
    </form>
  );
};

export default SignupForm;
