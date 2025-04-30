import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
// Define validation schema
const formSchema = z.object({
    username: z.string().min(4, "Username should be at least four characters"),
    email: z.string().email("Email is not valid"),
    age: z.number().min(18, "You must be 18 or older"),
});
// Main component
function ZodInput() {
    const form = useForm({
        resolver: zodResolver(formSchema),
    });
    function onSubmit(values) {
        console.log(values);
        alert("Form submitted");
    }
    return (
        <div className="max-h-full h-96 w-96 flex items-center justify-center bg-white-800">
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="bg-purple-500 p-6 rounded-lg shadow-lg w-full max-w-md"
            >
                <h2 className="text-white text-2xl mb-4 text-center">User Information</h2>
                
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Username"
                        {...form.register("username")}
                        className="border border-green-500 p-2 rounded-md w-full focus:outline-none focus:ring focus:ring-green-500"
                    />
                    {form.formState.errors.username && (
                        <p className="text-red-500">{form.formState.errors.username.message}</p>
                    )}
                </div>
                
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Email"
                        {...form.register("email")}
                        className="border border-green-500 p-2 rounded-md w-full focus:outline-none focus:ring focus:ring-green-500"
                    />
                    {form.formState.errors.email && (
                        <p className="text-red-500">{form.formState.errors.email.message}</p>
                    )}
                </div>
                
                <div className="mb-4">
                    <input
                        type="number"
                        placeholder="Age (18+)"
                        {...form.register("age", { valueAsNumber: true })}
                        className="border border-green-500 p-2 rounded-md w-full focus:outline-none focus:ring focus:ring-green-500"
                    />
                    {form.formState.errors.age && (
                        <p className="text-red-500">{form.formState.errors.age.message}</p>
                    )}
                </div>
                <button className="w-full bg-green-500 text-white p-2 rounded-lg hover:bg-green-600 transition duration-300">
                    Submit
                </button>
            </form>
        </div>
    );
}
export default ZodInput;
