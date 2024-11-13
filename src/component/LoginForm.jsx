import React from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {
    return (
        <div>
            <h1 className="p-10 text-5xl">Login Form</h1>
            <form className="flex justify-center pt-[25vh] items-center flex-row gap-10 ">
                <h3>Enter Your Name</h3>
                <input className="w-[20vw] h-[5vh] text-black" type="text" placeholder="Enter Your User Name" />

                <h3>Enter Your Password</h3>
                <input className="w-[20vw] h-[5vh] text-black" type="Password" placeholder="Enter Your Password" />

                <Link className="p-5 bg-red-400 ">Submit</Link>
            </form>
        </div>
    );
};

export default LoginForm;
