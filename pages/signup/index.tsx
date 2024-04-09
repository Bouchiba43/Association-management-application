import Link from "next/link";

const SignupPage = () => {

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const fullName = e.target[0].value;
        const userName = e.target[1].value;
        const email = e.target[2].value;
        const password = e.target[3].value;
        const confirmPassword = e.target[4].value;
        const role = "user";
        const date = new Date().toISOString();

    }

    return (
        <div className="signup-container">
            <div className="signup-form">
                <h1 className="signup-heading">Register</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        className="input-field"
                        placeholder="Full Name"
                        required
                    />
                    <input
                        type="text"
                        className="input-field"
                        placeholder="Username"
                        required
                    />
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
                    <input
                        type="password"
                        className="input-field"
                        placeholder="Confirm Password"
                        required
                    />
                    <button
                        type="submit"
                        className="signup-button primary"
                    >
                        Register
                    </button>
                    <p className="error-message"></p>
                </form>
                <div className="alternative-action">- OR -</div>
                <Link
                    className="login-link"
                    href="/login"
                >
                    Login with an existing account
                </Link>
            </div>
        </div>
    );
}

export default SignupPage;
