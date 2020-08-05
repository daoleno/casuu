import React from "react";
import "./styles.css";
import { Link } from "@reach/router";

function Nav({ isLogin, isGroup }) {
  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex px-2 lg:px-0">
            <div className="flex-shrink-0 flex items-center">
              <a href="/">
                <h1 className="block w-auto text-xl">Casuu</h1>
              </a>
            </div>
          </div>
          <div className="flex items-center text-lg">
            {isLogin ? (
              <div className="flex items-center align-middle">
                <div className="rounded-md border border-gray-700 px-2 mr-4">
                  {isGroup ? (
                    <Link to="/create-group" className="font-light">
                      Create a group
                    </Link>
                  ) : (
                    <Link to="/create-card" className="font-light">
                      Create a Card
                    </Link>
                  )}
                </div>
                <div className="ml-4 relative flex-shrink-0">
                  <div>
                    <button
                      className="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition duration-150 ease-in-out"
                      id="user-menu"
                      aria-label="User menu"
                      aria-haspopup="true"
                    >
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://source.unsplash.com/random"
                        alt=""
                      />
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
