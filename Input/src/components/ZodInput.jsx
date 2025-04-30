import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  username: z.string().min(4, "Username should be at least 4 characters"),
  email: z.string().email("Email is not valid"),
  age: z.number().min(18, "You must be 18 or older"),
});

function ZodInput() {
  const form = useForm({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values) {
    console.log(values);
    alert("Form submitted");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-300">
      <div className="w-full max-w-md p-6 bg-purple-800 border border-purple-600 rounded shadow-md">
        <h2 className="text-2xl font-semibold mb-6 text-center text-purple-400">Register Form</h2>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 text-white">
          <div>
            <input
              type="text"
              placeholder="Username"
              {...form.register("username")}
              className="w-full px-4 py-2 bg-black border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400"
            />
            {form.formState.errors.username && (
              <p className="text-red-500 text-sm mt-1">
                {form.formState.errors.username.message}
              </p>
            )}
          </div>

          <div>
            <input
              type="text"
              placeholder="Email"
              {...form.register("email")}
              className="w-full px-4 py-2 bg-black border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400"
            />
            {form.formState.errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {form.formState.errors.email.message}
              </p>
            )}
          </div>

          <div>
            <input
              type="number"
              placeholder="Age (18+)"
              {...form.register("age", { valueAsNumber: true })}
              className="w-full px-4 py-2 bg-black border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400"
            />
            {form.formState.errors.age && (
              <p className="text-red-500 text-sm mt-1">
                {form.formState.errors.age.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-purple-700 hover:bg-purple-800 text-white py-2 px-4 rounded transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ZodInput;
