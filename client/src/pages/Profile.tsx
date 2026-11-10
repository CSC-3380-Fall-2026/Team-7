
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/profile.css";

interface User {
  id: string;
  name: string;
  email: string;
}

function Profile() {
  const navigate = useNavigate();

  const [user, setUser] = useState<User | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [editing, setEditing] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  const token =
    localStorage.getItem("token") || sessionStorage.getItem("token");

  useEffect(() => {
    async function getProfile() {
      if (!token) {
        navigate("/login");
        return;
      }

      try {
        const response = await fetch(
          "http://localhost:5000/api/users/profile",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Could not load profile.");
        }

        setUser(data.user);
        setName(data.user.name);
        setEmail(data.user.email);
      } catch {
        localStorage.removeItem("token");
        sessionStorage.removeItem("token");
        navigate("/login");
      } finally {
        setLoading(false);
      }
    }

    getProfile();
  }, [navigate, token]);

  async function handleUpdate(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");

    try {
      const response = await fetch(
        "http://localhost:5000/api/users/profile",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ name, email }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Could not update profile.");
      }

      setUser(data.user);
      setName(data.user.name);
      setEmail(data.user.email);
      setEditing(false);
      setMessage("Profile updated successfully!");
    } catch (error) {
      setMessage(
        error instanceof Error ? error.message : "Something went wrong."
      );
    }
  }

  function handleLogout() {
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");
    navigate("/");
  }

  if (loading) {
    return <main className="profile-page">Loading your profile...</main>;
  }

  if (!user) {
    return null;
  }

  return (
    <main className="profile-page">
      <header className="profile-navbar">
        <Link className="login-logo" to="/">
          globetrotter<span>.</span>
        </Link>

        <button className="logout-button" onClick={handleLogout}>
          Log Out
        </button>
      </header>

      <section className="profile-card">
        <p className="profile-eyebrow">YOUR ACCOUNT</p>
        <h1>Welcome, {user.name}!</h1>
        <p className="profile-description">
          Manage your account and get ready for your next adventure.
        </p>

        <div className="profile-details">
          <h2>Personal Information</h2>

          <form onSubmit={handleUpdate}>
            <label htmlFor="profile-name">Full Name</label>
            <input
              id="profile-name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              disabled={!editing}
              required
            />

            <label htmlFor="profile-email">Email Address</label>
            <input
              id="profile-email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              disabled={!editing}
              required
            />

            {editing ? (
              <div className="profile-actions">
                <button type="submit" className="save-button">
                  Save Changes
                </button>
                <button
                  type="button"
                  className="cancel-button"
                  onClick={() => {
                    setName(user.name);
                    setEmail(user.email);
                    setEditing(false);
                    setMessage("");
                  }}
                >
                  Cancel
                </button>
              </div>
            ) : (
              <button
                type="button"
                className="save-button"
                onClick={() => setEditing(true)}
              >
                Edit Profile
              </button>
            )}
          </form>

          {message && <p role="status">{message}</p>}
        </div>

        <p className="profile-footer">
          Your next adventure is just around the corner.
        </p>
      </section>
    </main>
  );
}

export default Profile;
