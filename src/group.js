import React, { Fragment } from "react";
import Nav from "./nav";
import { Link, navigate } from "@reach/router";
import { RawCardList } from "./card";
// import data from "./data";
import useSWR from "swr";
import { useForm } from "react-hook-form";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function CreateGroup() {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => {
    fetch("http://localhost:8080/group", {
      method: "POST",
      body: JSON.stringify(data),
    });
    navigate(`/group`);
  };

  // console.log(watch("name")); // watch input value by passing the name of it

  return (
    <Fragment>
      <Nav isLogin />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8"
      >
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl leading-9 font-light text-gray-900">
            Input Group Name
          </h2>
        </div>
        <textarea
          name="name"
          ref={register}
          className="mt-8 mx-auto h-48 w-96 rounded-lg border border-gray-700 px-4 py-4"
          required
        />

        <div class="mt-6 mx-auto">
          <span class="block w-full rounded-md border border-gray-700">
            <button
              type="submit"
              class="w-full flex justify-center py-2 px-4 border border-transparent text-xl font-lighter rounded-md text-black"
            >
              {/* <Link to="/group">Submit</Link> */}
              Submit
            </button>
          </span>
        </div>
      </form>
    </Fragment>
  );
}

function Group() {
  const { data, error } = useSWR("http://localhost:8080/group", fetcher);
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <Fragment>
      <Nav isLogin isGroup />
      <RawCardList cards={data} />
    </Fragment>
  );
}

export { CreateGroup, Group };
