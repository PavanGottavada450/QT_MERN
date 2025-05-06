import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

function SignUp() {
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [message, setMessage] = useState(false);
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    gender: "",
    email: "",
    password: "",
    phone: "",
  });

  const getNewUser = () => {
    axios
      .post("http://localhost:8989/api/users/signup", user)
      .then((res) => {
        if (res.ok) {
          //navigate user to login page
          // alert("Signup successful!");
          toast.success("Signed in successfully!");
          navigate("/home");
        }
        // Axios returns data in `res.data`
        console.log("User Created", res.data);
        setUser({
          fname: "",
          lname: "",
          gender: "",
          email: "",
          password: "",
          phone: "",
        });
        setMessage(true);
        setError(false);
      })
      .catch((error) => {
        console.log("Error Creating User", error);
        setError(true);
        setMessage(false);
        toast.error("Error Creating User");
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-6">Signup Page</h2>
        <form>
          <div className="mb-4">
            <input
              onChange={(event) =>
                setUser({ ...user, fname: event.target.value })
              }
              type="text"
              value={user.fname}
              placeholder="First Name"
              className="w-full p-2 border rounded-lg"
            />
          </div>
          <div className="mb-4">
            <input
              onChange={(event) =>
                setUser({ ...user, lname: event.target.value })
              }
              type="text"
              value={user.lname}
              placeholder="Last Name"
              className="w-full p-2 border rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Gender</label>
            <div className="flex gap-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  onChange={(event) =>
                    setUser({ ...user, gender: event.target.value })
                  }
                  name="gender"
                  value="male"
                  className="mr-2"
                />
                Male
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  onChange={(event) =>
                    setUser({ ...user, gender: event.target.value })
                  }
                  name="gender"
                  value="female"
                  className="mr-2"
                />
                Female
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  onChange={(event) =>
                    setUser({ ...user, gender: event.target.value })
                  }
                  name="gender"
                  value="other"
                  className="mr-2"
                />
                Other
              </label>
            </div>
          </div>
          <div className="mb-4">
            <input
              type="email"
              onChange={(event) =>
                setUser({ ...user, email: event.target.value })
              }
              placeholder="Email Id"
              value={user.email}
              className="w-full p-2 border rounded-lg"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              onChange={(event) =>
                setUser({ ...user, password: event.target.value })
              }
              placeholder="Password"
              value={user.password}
              className="w-full p-2 border rounded-lg"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              onChange={(event) =>
                setUser({ ...user, phone: event.target.value })
              }
              placeholder="Mobile Number"
              value={user.phone}
              className="w-full p-2 border rounded-lg"
            />
          </div>
          <div className="mb-4">
            <button
              type="button"
              onClick={getNewUser}
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Signup
            </button>
          </div>
        </form>
        {message && (
          <div className="text-center">
            <h2 className="text-green-500 text-lg font-semibold">
              Account created Successfully
            </h2>
          </div>
        )}
        {error && (
          <div className="text-center">
            <h2 className="text-red-500 text-lg font-semibold">
              Failed to Create Account
            </h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default SignUp;
