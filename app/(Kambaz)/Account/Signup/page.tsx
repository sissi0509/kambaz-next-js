import Link from "next/link";
export default function Signup() {
  return (
    <div id="wd-signup-screen">
      <h1>Sign up</h1>
      <input
        placeholder="username"
        id="wd-username"
        className="form-control mb-2"
      />

      <input
        placeholder="password"
        type="password"
        id="wd-password"
        className="form-control mb-2"
      />

      <input
        placeholder="verify password"
        type="password"
        id="wd-password-verify"
        className="form-control mb-2"
      />

      <Link href="Profile" className="btn btn-primary w-100 mb-2">
        Signup
      </Link>

      <Link href="Signin"> Sign in </Link>
    </div>
  );
}
