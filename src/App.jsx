import React from "react";
import LoginForm from "./component/LoginForm";
import SignupForm from "./component/SignupForm";
import { Route, Routes } from "react-router-dom";
import Home from "./component/Home";

const App = () => {
    return (
        <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signupform" element={<SignupForm />} />
              <Route path="/loginform" element={<LoginForm />} />
                
            </Routes>
        </div>
    );
};

export default App;
