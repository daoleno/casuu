import React, { Fragment } from "react";
import Nav from "./nav";
import { Link } from "@reach/router";
import { RawCardList } from "./card";
import data from "./data";

function CreateGroup() {
  return (
    <Fragment>
      <Nav isLogin />
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl leading-9 font-light text-gray-900">
            Input Group Name
          </h2>
        </div>

        <textarea className="mt-8 mx-auto h-48 w-96 rounded-lg border border-gray-700 px-4 py-4" />

        <div class="mt-6 mx-auto">
          <span class="block w-full rounded-md border border-gray-700">
            <button
              type="submit"
              class="w-full flex justify-center py-2 px-4 border border-transparent text-xl font-lighter rounded-md text-black"
            >
              <Link to="/content">Submit</Link>
            </button>
          </span>
        </div>
      </div>
    </Fragment>
  );
}

function Group() {
  return (
    <Fragment>
      <Nav isLogin isGroup />
      <RawCardList cards={data} />
    </Fragment>
  );
}

export { CreateGroup, Group };
