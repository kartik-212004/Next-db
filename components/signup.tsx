"use client"
import { useState } from "react"

export function Signup() {
  const [mail, setMail] = useState("")
  const [password, setPassword] = useState("")
  console.log(mail, password)

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md border border-gray-200">
        <form action="" method="post">
          <header className="w-full text-center text-3xl font-semibold mb-6 text-gray-800">
            Sign Up
          </header>

          <div className="mb-5">
            <label className="block text-gray-600 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              onChange={(e) => {
                setMail(e.target.value)
              }}
            />
          </div>

          <div className="mb-5">
            <label className="block text-gray-600 font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              onChange={(e) => {
                setPassword(e.target.value)
              }}
            />
          </div>

          <div className="mb-5">
            <label className="block text-gray-600 font-medium mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Confirm your password"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-md text-lg font-medium hover:bg-blue-600 transition-colors"
          >
            Sign Up
          </button>

          <p className="text-center text-gray-500 mt-6">
            Already have an account?{" "}
            <a href="/signin" className="text-blue-500 hover:underline">
              Log in
            </a>
          </p>
        </form>
      </div>
    </div>
  )
}
