import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Register = () => {
    const [file, setFile] = useState(null);

    return (
        <div className="flex justify-center  h-screen  bg-zinc-800">
            <div className="w-full max-w-sm bg-zinc-900 p-8 rounded-lg shadow-md h-fit mt-32">
                <h1 className="text-2xl font-bold text-white text-center mb-6">Register</h1>
                <form>
                    {file && (
                        <img
                            className="mx-auto mb-4 w-24 h-24 rounded-full object-cover"
                            src={URL.createObjectURL(file)}
                            alt="Preview"
                        />
                    )}
                    <input
                        style={{ display: "none" }}
                        type="file"
                        id="file"
                        onChange={(e) => setFile(e.target.files[0])}
                    />
                    <input
                        className="w-full p-2 mb-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                        type="text"
                        placeholder="email"
                        name="email"
                    />
                    <input
                        className="w-full p-2 mb-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                        type="text"
                        placeholder="username"
                        name="username"
                    />
                    <input
                        className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                        type="password"
                        placeholder="password"
                        name="password"
                    />
                    <button
                        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
                    >
                        Register
                    </button>
                    <span className="block mt-3 text-center text-white">
                        Do you have an account?{" "}
                        <Link className="text-blue-500 hover:underline" to="/login">
                            Login
                        </Link>
                    </span>
                </form>
            </div>
        </div>

    )
}

export default Register