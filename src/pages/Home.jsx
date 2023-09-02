import UserCard from "../components/UserCard";
import useUsers from "../hooks/useUsers";

function Home() {
  const users = useUsers();
  return (
    <div className="container">
      {users.map((user, index) => (
        <UserCard key={index} user={user} />
      ))}
    </div>
  );
}

export default Home;
