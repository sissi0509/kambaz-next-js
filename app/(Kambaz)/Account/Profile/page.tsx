"use client";
import { redirect } from "next/dist/client/components/navigation";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser } from "../reducer";
import { RootState } from "../../store";
import Link from "next/link";
import type { User, Role } from "../type";
import { useRouter } from "next/navigation";
export default function Profile() {
  const [profile, setProfile] = useState<User | null>(null);
  const dispatch = useDispatch();
  const router = useRouter();
  const { currentUser } = useSelector(
    (state: RootState) => state.accountReducer
  );
  const fetchProfile = () => {
    if (!currentUser) return redirect("/Account/Signin");
    setProfile(currentUser);
  };
  const signout = () => {
    dispatch(setCurrentUser(null));
    // redirect("/Account/Signin");
    router.push("/Signin");
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <div id="wd-profile-screen">
      <h1>Profile</h1>
      {profile && (
        <div>
          <input
            value={profile.username}
            onChange={(e) =>
              setProfile({ ...profile, username: e.target.value })
            }
            placeholder="username"
            id="wd-username"
            className="form-control mb-2"
          />

          <input
            value={profile.password}
            onChange={(e) =>
              setProfile({ ...profile, password: e.target.value })
            }
            placeholder="password"
            type="password"
            id="wd-password"
            className="form-control mb-2"
          />

          <input
            value={profile.firstName}
            onChange={(e) =>
              setProfile({ ...profile, firstName: e.target.value })
            }
            placeholder="First Name"
            id="wd-firstname"
            className="form-control mb-2"
          />

          <input
            value={profile.lastName}
            onChange={(e) =>
              setProfile({ ...profile, lastName: e.target.value })
            }
            placeholder="Last Name"
            id="wd-lastname"
            className="form-control mb-2"
          />

          <input
            value={profile.dob?.split("T")[0]}
            onChange={(e) => setProfile({ ...profile, dob: e.target.value })}
            type="date"
            id="wd-dob"
            className="form-control mb-2"
          />

          <input
            value={profile.email}
            onChange={(e) => setProfile({ ...profile, email: e.target.value })}
            type="email"
            id="wd-email"
            className="form-control mb-2"
          />

          <select
            className="form-control mb-2"
            onChange={(e) =>
              setProfile({ ...profile, role: e.target.value as Role })
            }
            id="wd-role"
          >
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </select>

          <Link
            href="Signin"
            onClick={signout}
            className="btn btn-danger w-100 mb-2"
          >
            Sign out
          </Link>
        </div>
      )}
    </div>
  );
}
