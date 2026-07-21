import { useEffect, useState } from "react";
import axios from "axios";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Settings() {
  const token = localStorage.getItem("token");

  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);

  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/admin/profile",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.data.success) {
        setProfile(res.data.admin);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleProfileChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const saveProfile = async () => {
    setLoading(true);

    try {
      const res = await axios.put(
        "http://localhost:5000/api/admin/profile",
        profile,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert(res.data.message);
    } catch (err) {
      alert(err.response?.data?.message || "Failed");
    }

    setLoading(false);
  };

  const handlePasswordChange = (e) => {
    setPasswordData({
      ...passwordData,
      [e.target.name]: e.target.value,
    });
  };

  const updatePassword = async () => {
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      return alert("Passwords do not match");
    }

    try {
      const res = await axios.put(
        "http://localhost:5000/api/admin/change-password",
        {
          currentPassword: passwordData.currentPassword,
          newPassword: passwordData.newPassword,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert(res.data.message);

      setPasswordData({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
    } catch (err) {
      alert(err.response?.data?.message || "Failed");
    }
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-blue-700 mb-8">
        Admin Settings
      </h1>

      <div className="grid md:grid-cols-2 gap-8">

        {/* Profile */}

        <div className="bg-white rounded-xl shadow-lg p-6">

          <h2 className="text-xl font-bold mb-6">
            👤 Profile Information
          </h2>

          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleProfileChange}
            placeholder="Name"
            className="w-full border rounded-lg p-3 mb-4"
          />

          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleProfileChange}
            placeholder="Email"
            className="w-full border rounded-lg p-3 mb-4"
          />

          <input
            type="text"
            name="phone"
            value={profile.phone || ""}
            onChange={handleProfileChange}
            placeholder="Phone"
            className="w-full border rounded-lg p-3 mb-6"
          />

          <button
            onClick={saveProfile}
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
          >
            {loading ? "Saving..." : "Save Profile"}
          </button>

        </div>

        {/* Password */}

        <div className="bg-white rounded-xl shadow-lg p-6">

          <h2 className="text-xl font-bold mb-6">
            🔒 Change Password
          </h2>

          {/* Current Password */}

          <div className="relative mb-4">
            <input
              type={showCurrentPassword ? "text" : "password"}
              name="currentPassword"
              value={passwordData.currentPassword}
              onChange={handlePasswordChange}
              placeholder="Current Password"
              className="w-full border rounded-lg p-3 pr-12"
            />

            <button
              type="button"
              onClick={() =>
                setShowCurrentPassword(!showCurrentPassword)
              }
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-blue-600"
            >
              {showCurrentPassword ? (
                <FaEyeSlash size={20} />
              ) : (
                <FaEye size={20} />
              )}
            </button>
          </div>
                    {/* New Password */}

          <div className="relative mb-4">
            <input
              type={showNewPassword ? "text" : "password"}
              name="newPassword"
              value={passwordData.newPassword}
              onChange={handlePasswordChange}
              placeholder="New Password"
              className="w-full border rounded-lg p-3 pr-12"
            />

            <button
              type="button"
              onClick={() =>
                setShowNewPassword(!showNewPassword)
              }
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-blue-600"
            >
              {showNewPassword ? (
                <FaEyeSlash size={20} />
              ) : (
                <FaEye size={20} />
              )}
            </button>
          </div>

          {/* Confirm Password */}

          <div className="relative mb-6">
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              value={passwordData.confirmPassword}
              onChange={handlePasswordChange}
              placeholder="Confirm Password"
              className="w-full border rounded-lg p-3 pr-12"
            />

            <button
              type="button"
              onClick={() =>
                setShowConfirmPassword(!showConfirmPassword)
              }
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-blue-600"
            >
              {showConfirmPassword ? (
                <FaEyeSlash size={20} />
              ) : (
                <FaEye size={20} />
              )}
            </button>
          </div>

          <button
            onClick={updatePassword}
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition duration-300"
          >
            Update Password
          </button>

        </div>

      </div>

    </div>
  );
}

export default Settings;