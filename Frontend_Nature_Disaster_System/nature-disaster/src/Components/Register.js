import { useState } from "react";
import axios from "axios";

function Register() {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function save(event) {
        event.preventDefault();
        try {
            await axios.post("http://localhost:8085/api/v1/user/save", {
                username: username,
                email: email,
                password: password,
            });
            alert("Registration Successful");

        } catch (err) {
            alert(err);
        }
    }

    return (
        <div className="container mx-auto mt-24">
            <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-md">
                <h1 className="text-3xl text-center py-4 ont-bold">User Registration</h1>
                <form className="px-6 py-4">
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-gray-700">Username</label>
                        <input
                            type="text"
                            id="username"
                            placeholder="Enter Name"
                            value={username}
                            onChange={(event) => setUsername(event.target.value)}
                            className="form-input mt-1 block w-full border-gray-300 rounded-md"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter Email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            className="form-input mt-1 block w-full border-gray-300 rounded-md"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700">Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter Password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            className="form-input mt-1 block w-full border-gray-300 rounded-md"
                        />
                    </div>

                    <button
                        type="submit"
                        onClick={save}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Save
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Register;
