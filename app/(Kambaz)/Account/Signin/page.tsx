import Link from "next/link";
export default function Signin() {
  return (
    <div id="wd-signin-screen">
      <h1>Sign in</h1>
      <input
        placeholder="username"
        id="wd-username"
        className="form-control mb-2"
        defaultValue="alice"
      />

      <input
        placeholder="password"
        type="password"
        id="wd-password"
        className="form-control mb-2"
      />

      <Link
        href="/Dashboard"
        id="wd-signin-btn"
        className="btn btn-primary w-100 mb-2"
      >
        Sign in
      </Link>
      <br />
      <Link href="Signup" id="wd-signup-link">
        Sign up
      </Link>
    </div>
  );
}
