import React, { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import OAuth from "../components/OAuth";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../config/firebaseConfig";
import { serverTimestamp, setDoc, doc } from "firebase/firestore";
import { db } from "../config/firebaseConfig";
import { toast } from "react-toastify";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = formData;
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault();

    //handle the response of firebase
    try {
      const credentialsData = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      updateProfile(auth.currentUser, {
        displayName: name,
      });
      const user = credentialsData.user;

      //hash the password to db
      const formDataCopy: any = { ...formData };
      delete formDataCopy.password;
      const createTimeStamp = serverTimestamp();

      await setDoc(doc(db, "users", user.uid), formDataCopy);
    } catch (error) {
      if (!name || !email || !password) {
        toast.error("Please Fill the Credentials Data");
      } else if (password.length < 8) {
        toast.error("Please Input 8 Char Long Password");
      }
    }
  }

  return (
    <React.Fragment>
      <h1 className="text-center text-4xl text-black font-semibold py-5">
        Sign Up
      </h1>
      <div className="mx-auto flex justify-center items-center flex-wrap px-6 py-6 max-w-6xl">
        <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
          <img
            alt="img-login"
            src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2V5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
            className="w-full rounded-2xl"
          />
        </div>
        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
          <form className="space-y-5" onSubmit={handleRegister}>
            <input
              type="text"
              className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"
              placeholder="Full Name"
              name="name"
              value={name}
              onChange={handleInputChange}
            />
            <input
              type="email"
              className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"
              placeholder="input..."
              name="email"
              value={email}
              onChange={handleInputChange}
            />
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="passsword"
                name="password"
                className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"
                value={password}
                onChange={handleInputChange}
              />
              {showPassword ? (
                <AiFillEye
                  onClick={() => setShowPassword((prevState) => !prevState)}
                  className="absolute top-3 right-3 items cursor-pointer text-xl"
                />
              ) : (
                <AiFillEyeInvisible
                  onClick={() => setShowPassword((prevState) => !prevState)}
                  className="absolute top-3 right-3 items cursor-pointer text-xl"
                />
              )}
            </div>
            <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg">
              <p className="mb-6">
                Already have an account ?{" "}
                <Link
                  to="/signin"
                  className="text-red-600 hover:text-red-700 transition duration-200 ease-in-out ml-2"
                >
                  Sign in
                </Link>
              </p>
            </div>
            <button
              className="w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-700 transition duration-200 ease-in-out hover:shadow-lg active:bg-blue-800"
              type="submit"
            >
              Sign Up
            </button>
            <div className="flex items-center my-4 before:border-t before:flex-1 before:border-gray-300 after:border-t after:flex-1 after:border-gray-300">
              <p className="text-center font-semibold mx-4">OR</p>
            </div>
            <OAuth />
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SignUp;
