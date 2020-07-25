import React from "react";
import { Link } from "@reach/router";

function Login() {
  return (
    <div class="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 class="mt-6 text-center text-3xl leading-9 font-light text-gray-900">
          <Link to="/">Casuu</Link>
        </h2>
      </div>

      <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form action="#" method="POST">
            <div>
              <label
                for="email"
                class="block text-xl font-thin leading-5 text-gray-700"
              >
                Email
              </label>
              <div class="mt-3 rounded-md shadow-sm">
                <input
                  id="email"
                  type="email"
                  required
                  class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
              </div>
            </div>

            <div class="mt-6">
              <label
                for="password"
                class="block text-xl font-thin leading-5 text-gray-700"
              >
                Password
              </label>
              <div class="mt-3 rounded-md shadow-sm">
                <input
                  id="password"
                  type="password"
                  required
                  class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
              </div>
            </div>

            <div class="mt-6">
              <span class="block w-full rounded-md shadow-sm">
                <button
                  type="submit"
                  class="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-thin rounded-md text-black bg-gray-300 hover:bg-gray-400 focus:outline-none focus:bg-gray-500 focus:shadow-outline-gray active:bg-gray-500 transition duration-150 ease-in-out"
                >
                  <Link to="/content">Sign in</Link>
                </button>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
