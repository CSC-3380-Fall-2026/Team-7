
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/profile.css";

interface User {
  id: string;
  name: string;
  email: string;
}

interface FavoriteDestination {
  id: number;
  city: string;
  state: string;
}

function Profile() {
  const navigate = useNavigate();

  const [user, setUser] = useState<User | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [editing, setEditing] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState<FavoriteDestination[]>([]);

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

        const favoritesResponse = await fetch(
          "http://localhost:5000/api/users/favorites",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (favoritesResponse.ok) {
          const favoritesData = await favoritesResponse.json();
          setFavorites(favoritesData.destinations);
        }
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


  if (loading) {
    return <main className="profile-page">Loading your profile...</main>;
  }

  if (!user) {
    return null;
  }

  return (
    <main className="profile-page">

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

        <div className="profile-details">
          <h2>Your Matches</h2>
          {favorites.length === 0 ? (
            <p>You haven't liked any destinations yet. Click Discover and get matching!</p>
          ) : (
            <ul>
              {favorites.map((destination) => (
                <li key={destination.id}>
                  {destination.city}, {destination.state}
                </li>
              ))}
            </ul>
          )}
        </div>

        <p className="profile-footer">
          Your next adventure is just around the corner.
        </p>
      </section>
    </main>
  );
}

export default Profile;
