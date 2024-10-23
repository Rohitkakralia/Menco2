import React from "react";
import { useForm } from "react-hook-form";

const MentorSignup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch("http://localhost:5000/mentorsignup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      console.log(result.message); // Handle success message from the server
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };


  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 shadow-lg rounded-lg w-[90%] md:w-[60%] lg:w-[50%]"
      >
        <h2 className="text-center text-2xl font-bold mb-4">Mentor Sign up</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              placeholder="Name"
              className={`w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400 ${
                errors.name ? "border-red-500" : ""
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>
          <div>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                  message: "Email is not valid",
                },
              })}
              placeholder="Email Id"
              className={`w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400 ${
                errors.email ? "border-red-500" : ""
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>
          <div>
            <select
              {...register("qualification", { required: "Qualification is required" })}
              className={`w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400 ${
                errors.qualification ? "border-red-500" : ""
              }`}
            >
              <option value="">Qualification</option>
              <option value="Bachelors">Bachelors</option>
              <option value="Masters">Masters</option>
              <option value="PhD">PhD</option>
            </select>
            {errors.qualification && (
              <p className="text-red-500 text-sm">{errors.qualification.message}</p>
            )}
          </div>
          <div>
            <select
              {...register("category", { required: "Category is required" })}
              className={`w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400 ${
                errors.category ? "border-red-500" : ""
              }`}
            >
              <option value="">Category</option>
              <option value="Technical">Technical</option>
              <option value="Non-Technical">Non-Technical</option>
            </select>
            {errors.category && (
              <p className="text-red-500 text-sm">{errors.category.message}</p>
            )}
          </div>
          <div>
            <input
              type="password"
              {...register("password", { required: "Password is required" })}
              placeholder="Password"
              className={`w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400 ${
                errors.password ? "border-red-500" : ""
              }`}
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>
          <div>
            <input
              type="password"
              {...register("confirmPassword", {
                required: "Confirm Password is required",
                validate: (value) =>
                  value === document.getElementsByName("password")[0].value ||
                  "Passwords do not match",
              })}
              placeholder="Confirm Password"
              className={`w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400 ${
                errors.confirmPassword ? "border-red-500" : ""
              }`}
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>
            )}
          </div>
        </div>
        <div className="mt-4">
          <textarea
            {...register("description")}
            placeholder="Add Description"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400"
            rows="5"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 mt-4 rounded-md hover:bg-blue-600"
        >
          Sign up
        </button>
      </form>
    </div>
  );
};

export default MentorSignup;
