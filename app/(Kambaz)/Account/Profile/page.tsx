import Link from "next/link";
export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h1>Profile</h1>
      <input
        defaultValue="alice"
        placeholder="username"
        id="wd-username"
        className="form-control mb-2"
      />

      <input
        defaultValue="123"
        placeholder="password"
        type="password"
        id="wd-password"
        className="form-control mb-2"
      />

      <input
        defaultValue="Alice"
        placeholder="First Name"
        id="wd-firstname"
        className="form-control mb-2"
      />

      <input
        defaultValue="Wonderland"
        placeholder="Last Name"
        id="wd-lastname"
        className="form-control mb-2"
      />

      <input
        defaultValue="2000-01-01"
        type="date"
        id="wd-dob"
        className="form-control mb-2"
      />

      <input
        defaultValue="alice@wonderland.com"
        type="email"
        id="wd-email"
        className="form-control mb-2"
      />

      <select className="form-control mb-2" defaultValue="USER" id="wd-role">
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </select>

      <Link href="Signin" className="btn btn-danger w-100 mb-2">
        {" "}
        Sign out{" "}
      </Link>
    </div>
  );
}
