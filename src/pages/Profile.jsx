import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserProfile from "../components/UserProfile";
import { getUserById } from "../service/UsersService";

function Profile() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function loadUser() {
      const loaded = await getUserById(Number(id));
      setUser(loaded);
    }
    loadUser();
  }, [id]);

  return (
    <div className="container">
      {user ? (
        <UserProfile user={user} />
      ) : (
        <div className="spinner-border text-secondary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
    </div>
  );
}

export default Profile;
