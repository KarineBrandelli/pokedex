import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BackHomeButton from "../components/BackHomeButton/BackHomeButton";

import Pokedex from "../assets/pokedex.png";

interface FormValues {
  name: string;
  email: string;
  password: string;
}

export default function UserInfo() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    mode: "onBlur",
  });

  const registerValidation = {
    name: {
      required: "Input cannot be empty.",
      pattern: {
        value: /[a-zA-Z\s]+$/,
        message: "Numbers and special characters are not allowed.",
      },
    },
    email: {
      required: "Input cannot be empty.",
      pattern: {
        value: /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
        message: "Only user@domain.com emails are allowed.",
      },
    },
    password: {
      required: "Input cannot be empty.",
      pattern: {
        value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*)[0-9a-zA-Z]{6,}$/,
        message: "Special characters are not allowed.",
      },
    },
  };

  const history = useNavigate();

  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
    pokemons: [],
  });

  const handleRegistration = (data: FormValues) => {
    console.log(data);
    const userData = {
      ...userInfo,
      name: data.name,
      email: data.email,
      password: data.password,
    };

    localStorage.setItem("user-info", JSON.stringify(userData));

    history("/UserProfile");
  };

  return (
    <div className="bg-blue-900 min-h-screen p-6">
      <BackHomeButton />

      <form className="bg-blue-800 shadow-lg shadow-blue-500/70 rounded-2xl sm:rounded-3xl p-4 sm:p-6 max-w-[35rem] mx-auto mt-6 min-[425px]:mt-16">
        <img
          src={Pokedex}
          className="mx-auto max-[425px]:w-[70%] w-[65%] sm:w-[55%]"
        ></img>

        <h3 className="flex justify-center text-center text-lg sm:text-2xl pb-8 pt-2 text-white font-semibold">
          Ready to catch some pokemons?
        </h3>

        <div className="flex flex-col mb-6">
          <label htmlFor="name" className="sm:text-lg text-white font-semibold">
            Can you tell us your name?
          </label>

          <input
            className={`border ${
              errors.name
                ? "bg-yellow-200 placeholder:text-yellow-700"
                : "bg-white focus:bg-blue-200 placeholder:text-gray-500"
            } p-2.5 sm:p-4 mt-2 text-sm sm:text-base rounded-lg outline-none focus:outline-none transition focus:duration-500 ease-in-out`}
            id="name"
            type="text"
            placeholder="Jane Doe"
            {...register("name", registerValidation.name)}
            aria-invalid={errors.name ? "true" : "false"}
          />

          {errors.name && (
            <p
              className="text-yellow-300 text-xs sm:text-sm font-semibold pt-2"
              role="alert"
            >
              {errors.name?.message}
            </p>
          )}
        </div>

        <div className="flex flex-col mb-6">
          <label
            htmlFor="email"
            className="sm:text-lg text-white font-semibold"
          >
            What's your best email?
          </label>

          <input
            className={`border ${
              errors.email
                ? "bg-yellow-200 placeholder:text-yellow-700"
                : "bg-white focus:bg-blue-200 placeholder:text-gray-500"
            } p-2.5 sm:p-4 mt-2 text-sm sm:text-base rounded-lg outline-none focus:outline-none transition focus:duration-500 ease-in-out`}
            id="email"
            type="text"
            placeholder="janedoe@domain.com"
            {...register("email", registerValidation.email)}
            aria-invalid={errors.email ? "true" : "false"}
          />

          {errors.email && (
            <p
              className="text-yellow-300 text-xs sm:text-sm font-semibold pt-2"
              role="alert"
            >
              {errors.email?.message}
            </p>
          )}
        </div>

        <div className="flex flex-col mb-6">
          <label
            htmlFor="password"
            className="sm:text-lg text-white font-semibold"
          >
            Please create a password!
          </label>

          <input
            className={`border ${
              errors.password
                ? "bg-yellow-200 placeholder:text-yellow-700"
                : "bg-white focus:bg-blue-200 placeholder:text-gray-500"
            } p-2.5 sm:p-4 mt-2 text-sm sm:text-base  rounded-lg outline-none focus:outline-none transition focus:duration-500 ease-in-out`}
            id="password"
            type="password"
            placeholder="Require 6 caracteres, a capital letter and a number."
            {...register("password", registerValidation.password)}
            aria-invalid={errors.password ? "true" : "false"}
          />

          {errors.password && (
            <p
              className="text-yellow-300 text-xs sm:text-sm font-semibold pt-2"
              role="alert"
            >
              {errors.password?.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          onClick={handleSubmit(handleRegistration)}
          className="flex bg-yellow-400 w-full justify-center py-3 rounded-lg text-blue-800 sm:text-xl font-bold mt-6"
        >
          Sign In
        </button>
      </form>
    </div>
  );
}
