import React from "react";

export default function ProfilePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Personal Information</h1>
        <p className="text-gray-500">View and update your contact details.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700">Full Name</label>
          <input 
            type="text" 
            readOnly 
            value="Guest User" 
            className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-600 focus:outline-none"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700">Email Address</label>
          <input 
            type="email" 
            readOnly 
            value="guest@caffia.com" 
            className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-600 focus:outline-none"
          />
        </div>
      </div>

      <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 mt-8">
        <p className="text-sm text-blue-700">
          <strong>Note:</strong> Profile editing will be enabled once the backend is connected.
        </p>
      </div>
    </div>
  );
}