interface FormValues {
  email: string;
  password: string;
}

import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import BackHomeButton from "../components/BackHomeButton/BackHomeButton";

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    mode: "onBlur",
  });

  const registerValidation = {
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
        value:
          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{6,}$/,
        message:
          "At least 6 caracters including 1 capital letter, 1 number and 1 symbol.",
      },
    },
  };

  const handleRegistration = (data: object) => {
    console.log(data);
  };

  return (
    <div className="bg-blue-900 h-screen px-4">
      <BackHomeButton />
      <div className="flex justify-center items-center h-full">
        <form className="bg-blue-800 shadow-lg shadow-blue-500/70 w-[35rem] rounded-3xl p-6">
          <img
            src="src/assets/pokedex.png"
            className="mx-auto max-[425px]:w-[85%] pb-10 w-[65%] sm:w-[55%] sm:pb-16"
          ></img>

          <div className="flex flex-col mb-5">
            <label
              htmlFor="email"
              className="sm:text-lg flex flex-col items-start min-[425px]:flex-row min-[425px]:items-center min-[425px]:justify-between text-white font-semibold"
            >
              Email
              {errors.email && (
                <p
                  className="text-yellow-300 text-sm font-semibold"
                  role="alert"
                >
                  {errors.email?.message}
                </p>
              )}
            </label>

            <input
              className={`border ${
                errors.email
                  ? "bg-yellow-200 placeholder:text-yellow-700"
                  : "bg-white focus:bg-blue-200 placeholder:text-gray-500"
              } p-3 sm:p-4 mt-2 rounded-lg outline-none focus:outline-none transition focus:duration-500 ease-in-out`}
              id="email"
              type="text"
              placeholder="janedoe@domain.com"
              {...register("email", registerValidation.email)}
              aria-invalid={errors.email ? "true" : "false"}
            />
          </div>

          <div className="flex flex-col mb-5">
            <label
              htmlFor="password"
              className="sm:text-lg flex flex-col items-start min-[425px]:flex-row min-[425px]:items-center min-[425px]:justify-between text-white font-semibold"
            >
              Password
              {errors.password && (
                <p
                  className="text-yellow-300 text-sm font-semibold"
                  role="alert"
                >
                  {errors.password?.message}
                </p>
              )}
            </label>

            <input
              className={`border ${
                errors.password
                  ? "bg-yellow-200 placeholder:text-yellow-700"
                  : "bg-white focus:bg-blue-200 placeholder:text-gray-500"
              } p-3 sm:p-4 mt-2 rounded-lg outline-none focus:outline-none transition focus:duration-500 ease-in-out`}
              id="password"
              type="password"
              placeholder="Must have at least 6 caracters"
              {...register("password", registerValidation.password)}
              aria-invalid={errors.password ? "true" : "false"}
            />
          </div>

          <p className="sm:text-lg flex justify-center gap-2 text-white font-semibold">
            Don't have an account?
            <Link to={"/SignUp"}>
              <span className="text-yellow-300">Sign up!</span>
            </Link>
          </p>

          <button
            type="submit"
            onClick={handleSubmit(handleRegistration)}
            className="flex bg-yellow-400 w-full justify-center py-3 rounded-lg text-blue-800 sm:text-xl font-bold mt-5"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}