import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { BackHomeButton } from '../components/BackHomeButton/BackHomeButton'

import Pokedex from '../assets/pokedex.png'

interface FormValues {
  name: string
  email: string
  password: string
}

export function UserInfo() {
  const history = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    mode: 'onBlur',
  })

  const registerValidation = {
    name: {
      required: 'Input cannot be empty.',
      pattern: {
        value: /[a-zA-Z\s]+$/,
        message: 'Numbers and special characters are not allowed.',
      },
    },
    email: {
      required: 'Input cannot be empty.',
      pattern: {
        value: /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
        message: 'Only user@domain.com emails are allowed.',
      },
    },
    password: {
      required: 'Input cannot be empty.',
      pattern: {
        value: /[0-9a-zA-Z]{6,}$/,
        message: 'Special characters are not allowed.',
      },
    },
  }

  const userInfo = {
    name: '',
    email: '',
    password: '',
    pokemons: [],
  }

  const handleRegistration = (data: FormValues) => {
    const userData = {
      ...userInfo,
      name: data.name,
      email: data.email,
      password: data.password,
    }

    localStorage.setItem('user-info', JSON.stringify(userData))

    history('/userprofile')
  }

  return (
    <div className="min-h-screen bg-blue-900 p-6">
      <BackHomeButton />

      <form className="mx-auto mt-6 max-w-[35rem] rounded-2xl bg-blue-800 p-4 shadow-lg shadow-blue-500/70 min-[425px]:mt-16 sm:rounded-3xl sm:p-6">
        <img
          src={Pokedex}
          className="mx-auto w-[65%] max-[425px]:w-[70%] sm:w-[55%]"
        ></img>

        <h3 className="flex justify-center pb-8 pt-2 text-center text-lg font-semibold text-white sm:text-2xl">
          Ready to catch some pokemons?
        </h3>

        <div className="mb-6 flex flex-col">
          <label htmlFor="name" className="font-semibold text-white sm:text-lg">
            Can you tell us your name?
          </label>

          <input
            className={`border ${
              errors.name
                ? 'bg-yellow-200 placeholder:text-yellow-700'
                : 'bg-white placeholder:text-gray-500 focus:bg-blue-200'
            } mt-2 rounded-lg p-2.5 text-sm outline-none transition ease-in-out focus:outline-none focus:duration-500 sm:p-4 sm:text-base`}
            id="name"
            type="text"
            placeholder="Jane Doe"
            {...register('name', registerValidation.name)}
            aria-invalid={errors.name ? 'true' : 'false'}
          />

          {errors.name && (
            <p
              className="pt-2 text-xs font-semibold text-yellow-300 sm:text-sm"
              role="alert"
            >
              {errors.name?.message}
            </p>
          )}
        </div>

        <div className="mb-6 flex flex-col">
          <label
            htmlFor="email"
            className="font-semibold text-white sm:text-lg"
          >
            What's your best email?
          </label>

          <input
            className={`border ${
              errors.email
                ? 'bg-yellow-200 placeholder:text-yellow-700'
                : 'bg-white placeholder:text-gray-500 focus:bg-blue-200'
            } mt-2 rounded-lg p-2.5 text-sm outline-none transition ease-in-out focus:outline-none focus:duration-500 sm:p-4 sm:text-base`}
            id="email"
            type="text"
            placeholder="janedoe@domain.com"
            {...register('email', registerValidation.email)}
            aria-invalid={errors.email ? 'true' : 'false'}
          />

          {errors.email && (
            <p
              className="pt-2 text-xs font-semibold text-yellow-300 sm:text-sm"
              role="alert"
            >
              {errors.email?.message}
            </p>
          )}
        </div>

        <div className="mb-6 flex flex-col">
          <label
            htmlFor="password"
            className="font-semibold text-white sm:text-lg"
          >
            Please create a password!
          </label>

          <input
            className={`border ${
              errors.password
                ? 'bg-yellow-200 placeholder:text-yellow-700'
                : 'bg-white placeholder:text-gray-500 focus:bg-blue-200'
            } mt-2 rounded-lg p-2.5 text-sm outline-none  transition ease-in-out focus:outline-none focus:duration-500 sm:p-4 sm:text-base`}
            id="password"
            type="password"
            placeholder="Require 6 caracteres, a capital letter and a number."
            {...register('password', registerValidation.password)}
            aria-invalid={errors.password ? 'true' : 'false'}
          />

          {errors.password && (
            <p
              className="pt-2 text-xs font-semibold text-yellow-300 sm:text-sm"
              role="alert"
            >
              {errors.password?.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          onClick={handleSubmit(handleRegistration)}
          className="mt-6 flex w-full justify-center rounded-lg bg-yellow-400 py-3 font-bold text-blue-800 sm:text-xl"
        >
          Sign In
        </button>
      </form>
    </div>
  )
}
