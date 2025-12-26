import React from 'react'

interface InputProps {
  register: any;
  name: string;
  label: string; // Spelling corrected here
  error?: string;
}
export default function CheckoutFormInputs({label, error, register, name}:InputProps) {
  return (
    <div className="w-full px-2 py-4">
      <div className="relative border-b-2 transition-all duration-300 group">
        <input
          {...register(name)}
          type="text"
          id={name}
          placeholder=" " // Space zaroori hai peer focus ke liye
          className={`peer w-full py-2 outline-none bg-transparent 
            ${error ? "border-red-500" : "border-gray-300 focus:border-black"}`}
        />
        
        {/* Floating Label using peer */}
        <label
          htmlFor={name}
          className="absolute left-0 top-2 text-gray-400 text-base transition-all duration-300 
            pointer-events-none
            peer-placeholder-shown:top-2 
            peer-placeholder-shown:text-base 
            peer-focus:-top-4 
            peer-focus:text-xs 
            peer-focus:text-black 
            /* Ye line label ko upar rakhti hai agar input mein text ho */
            peer-[:not(:placeholder-shown)]:-top-4 
            peer-[:not(:placeholder-shown)]:text-xs"
        >
          {label}
        </label>
      </div>

      {/* Error Section */}
      <div className="h-4"> {/* Fixed height taake error aane pe layout hile nahi */}
        {error && (
          <p className="text-red-600 text-[10px] mt-1 font-semibold uppercase tracking-wider">
            {error}
          </p>
        )}
      </div>
    </div>
  );
}
