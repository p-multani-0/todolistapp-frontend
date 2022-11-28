import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { saveToken } from "../lib/token";

const SignIn = () => {
  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();

  const signIn = async (signInData) => {
    const apiUrl = `${process.env.REACT_APP_SERVER_URL}/sign-in`;
    try {
      const { data } = await axios.post(apiUrl, {
        email: signInData.email,
        password: signInData.password,
      });
      saveToken(process.env.REACT_APP_AUTH_TOKEN_NAME, data.token);
      navigate("/app");
    } catch (error) {
      console.log("Error on login: ", error);
    }
  };

  const signUp = () => {
    navigate("/sign-up");
  };

  return (
    <>
      <div className="mx-auto my-36 flex h-[300px] w-[350px] flex-col border-2 bg-white text-black shadow-xl rounded-md">
        <div className="mx-8 mt-7 mb-1 flex flex-row justify-start space-x-2">
          <div className="h-7 w-3 bg-[#0DE6AC]"></div>
          <div className="w-3 text-center font-sans text-xl font-bold">
            <h1>SignIn</h1>
          </div>
        </div>
        <form
          className="flex flex-col items-center"
          onSubmit={handleSubmit(signIn)}
        >
          <input
            className="my-2 w-72 border p-2"
            type="email"
            placeholder="Username"
            {...register("email")}
          />
          <input
            className="my-2 w-72 border p-2"
            type="password"
            placeholder="Password"
            {...register("password")}
          />
          <div className="my-2 flex justify-center">
            <button
              className="w-72 border bg-[#0DE6AC] p-2 font-sans"
              type="submit"
            >
              Confirm
            </button>
          </div>
        </form>
        <div className="mx-7 my-3 flex justify-between text-sm font-semibold">
          <div>
            <button
              className="underline underline-offset-2"
              onClick={() => signUp()}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
