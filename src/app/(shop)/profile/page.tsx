"use client";

import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

export default function ProfilePage() {
  const { data: session } = useSession();
  const user = (session?.user as any) || {};

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  useEffect(() => {
    setName(user.name || "");
    setEmail(user.email || "");
    setPhone(user.phone || "");
  }, [user.name, user.email, user.phone]);

  const handleSave = async () => {
    setLoading(true);
    setMessage(null);
    try {
      const res = await fetch("/api/profile", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone }),
      });
      const data = await res.json();
      if (!res.ok) {
        setMessage({ type: "error", text: data.message || data.error || "Update failed" });
      } else {
        setMessage({ type: "success", text: "Profile updated successfully!" });
        setIsEditing(false);
      }
    } catch {
      setMessage({ type: "error", text: "Something went wrong" });
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setName(user.name || "");
    setEmail(user.email || "");
    setPhone(user.phone || "");
    setIsEditing(false);
    setMessage(null);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Personal Information</h1>
          <p className="text-gray-500">View and update your contact details.</p>
        </div>
        {!isEditing && (
          <button
            onClick={() => setIsEditing(true)}
            className="px-4 py-2 bg-amber-600 text-white rounded-xl hover:bg-amber-700 transition-colors font-medium text-sm"
          >
            Edit Profile
          </button>
        )}
      </div>

      {message && (
        <div
          className={`p-4 rounded-xl border text-sm font-medium ${
            message.type === "success"
              ? "bg-green-50 border-green-200 text-green-700"
              : "bg-red-50 border-red-200 text-red-700"
          }`}
        >
          {message.text}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700">Full Name</label>
          <input
            type="text"
            readOnly={!isEditing}
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={`w-full p-3 border rounded-xl focus:outline-none ${
              isEditing
                ? "bg-white border-amber-300 focus:border-amber-500 text-gray-900"
                : "bg-gray-50 border-gray-200 text-gray-600"
            }`}
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700">Email Address</label>
          <input
            type="email"
            readOnly={!isEditing}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`w-full p-3 border rounded-xl focus:outline-none ${
              isEditing
                ? "bg-white border-amber-300 focus:border-amber-500 text-gray-900"
                : "bg-gray-50 border-gray-200 text-gray-600"
            }`}
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700">Phone Number</label>
          <input
            type="tel"
            readOnly={!isEditing}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={`w-full p-3 border rounded-xl focus:outline-none ${
              isEditing
                ? "bg-white border-amber-300 focus:border-amber-500 text-gray-900"
                : "bg-gray-50 border-gray-200 text-gray-600"
            }`}
          />
        </div>
      </div>

      {isEditing && (
        <div className="flex gap-3 pt-4">
          <button
            onClick={handleSave}
            disabled={loading}
            className="px-6 py-2.5 bg-amber-600 text-white rounded-xl hover:bg-amber-700 transition-colors font-medium text-sm disabled:opacity-50"
          >
            {loading ? "Saving..." : "Save Changes"}
          </button>
          <button
            onClick={handleCancel}
            disabled={loading}
            className="px-6 py-2.5 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors font-medium text-sm"
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
}
