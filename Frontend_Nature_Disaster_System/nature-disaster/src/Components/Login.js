import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    async function login(event) {
        event.preventDefault();
        try {
            const response = await axios.post("http://localhost:8085/api/v1/employee/login", {
                email: email,
                password: password,
            });

            const { data } = response;
            console.log(data);

            if (data.message === "Email not exists") {
                alert("Email does not exist.");
            } else if (data.message === "Login Success") {
                navigate('/home');
            } else {
                alert("Incorrect email or password.");
            }
        } catch (error) {
            console.error("Login error:", error);
            alert("Something went wrong with the login.");
        }
    }

    return (
        <div className="container mx-auto mt-8">
            <div className="w-full max-w-md mx-auto mt-20">
                <h2 className="text-center text-2xl mb-4 ont-bold">Login</h2>
                <hr className="mb-6" />

                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter Email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter Password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        onClick={login}
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;
