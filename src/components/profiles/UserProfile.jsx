import { use, useState } from "react";
import { FaUserCircle, FaEdit, FaCheck, FaTimes, FaCheckCircle, FaExclamationCircle } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

export default function UserProfile() {
  const [user,setUser] = useState({
  user_id: 101,
  email: "john.doe@example.com",
  is_active: true,
  is_institute: false,
  name: "John Doe",
  password: "********", // never show real passwords in UI
  registered_at: "2025-09-24",
  is_verified: false,
  plans: [
    { title: "Premium Plan", duration: "6 Months", purchasedAt: "2025-03-01" },
    { title: "Test Series Pro", duration: "12 Months", purchasedAt: "2025-06-15" },
  ],
})
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(user.name);

  const handleSave = () => {
    // Call API to save updated name
    setIsEditing(false);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <div className="w-full max-w-lg shadow-lg rounded-2xl p-6 bg-white">
        {/* Profile Header */}
        <div className="flex items-center gap-4 mb-6">
          {/* Avatar with First Letter */}
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-600 text-white text-2xl font-bold">
            {user.name?.charAt(0).toUpperCase() || <FaUserCircle />}
          </div>
          <div>
            <h2 className="text-xl font-semibold">{user.name}</h2>
            <p className="text-gray-500 flex items-center gap-2">
              <AiOutlineMail className="text-blue-600" />
              {user.email}
            </p>
          </div>
        </div>

        {/* Profile Info */}
        <div className="space-y-4">
          {/* Name Field with Edit Option */}
          <div className="flex justify-between items-center">
            <p className="text-gray-600">Name:</p>
            {isEditing ? (
              <div className="flex items-center gap-2">
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="border rounded px-2 py-1 text-sm"
                />
                <button
                  onClick={handleSave}
                  className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600"
                >
                  <FaCheck />
                </button>
                <button
                  onClick={() => setIsEditing(false)}
                  className="bg-gray-300 text-black p-2 rounded-full hover:bg-gray-400"
                >
                  <FaTimes />
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <p className="font-medium">{name}</p>
                <button
                  onClick={() => setIsEditing(true)}
                  className="text-blue-600 hover:text-blue-800"
                >
                  <FaEdit />
                </button>
              </div>
            )}
          </div>

          {/* Status */}
          <div className="flex justify-between items-center">
            <p className="text-gray-600">Status:</p>
            {user.is_active ? (
              <span className="flex items-center gap-1 text-green-600 font-medium">
                <FaCheckCircle /> Active
              </span>
            ) : (
              <span className="flex items-center gap-1 text-red-600 font-medium">
                <FaTimes /> Inactive
              </span>
            )}
          </div>

          {/* Verification */}
          <div className="flex justify-between items-center">
            <p className="text-gray-600">Verified:</p>
            {user.is_verified ? (
              <span className="flex items-center gap-1 text-green-600 font-medium">
                <FaCheckCircle /> Verified
              </span>
            ) : (
              <span className="flex items-center gap-1 text-yellow-600 font-medium">
                <FaExclamationCircle /> Pending
              </span>
            )}
          </div>

          {/* Registered Date */}
          <div className="flex justify-between items-center">
            <p className="text-gray-600">Registered:</p>
            <p className="font-medium">{new Date(user.registered_at).toLocaleDateString()}</p>
          </div>

          {user.is_institute && (
            <div className="flex justify-between items-center">
              <p className="text-gray-600">Institute:</p>
              <p className="font-medium">Yes</p>
            </div>
          )}

          {/* Purchased Plan Section */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">Purchased Plan</h3>
            {user.plan ? (
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="font-medium">{user.plan.name}</p>
                <p className="text-sm text-gray-600">
                  Valid till: {new Date(user.plan.expiry).toLocaleDateString()}
                </p>
              </div>
            ) : (
              <p className="text-gray-500">No active plan</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
