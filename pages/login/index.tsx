import React from "react";
import Link from "next/link";

const LoginPage = () => {
    return (
            <div className="login-container">
                <div className="login-form">
                    <h1 className="login-heading">Login</h1>
                    <form>
                        <input
                            type="text"
                            className="input-field"
                            placeholder="Email"
                            required
                        />
                        <input
                            type="password"
                            className="input-field"
                            placeholder="Password"
                            required
                        />
                        <button
                            type="submit"
                            className="login-button primary"
                        >
                            Sign In
                        </button>
                        <p className="error-message"></p>
                    </form>
                    <button
                        className="login-button secondary"
                        onClick={() => {
                            signIn("github");
                        }}
                    >
                        Sign In with Github
                    </button>
                    <div className="alternative-action">- OR -</div>
                    <Link
                        className="register-link"
                        href="/signup"
                    >
                        Register Here
                    </Link>
                </div>
            </div>
    );
}

export default LoginPage;
