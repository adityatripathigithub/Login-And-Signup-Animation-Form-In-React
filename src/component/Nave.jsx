import React from "react";
import { Link, NavLink } from "react-router-dom";

const Nave = () => {
    return (
        <div className="flex justify-center">
            <div className="flex justify-center items-center w-[30%] h-16 gap-10 bg-gray-800 text-xl">
                <NavLink className={(n) => (n.isActive ? "text-red-500" : "")} to="/">
                    Home
                </NavLink>

                <NavLink className={(n) => (n.isActive ? "text-red-500" : "")} to="/">
                    Login
                    
                </NavLink>


                <NavLink className={(n) => (n.isActive ? "text-red-500" : "")} to="/">
                    Signup
                </NavLink>
            </div>
        </div>
    );
};

export default Nave;
