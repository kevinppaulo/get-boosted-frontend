import { Link } from "react-router-dom";

const styles = {
  card: {
    margin: "1rem"
  },

  avatar: {
    marginRight: ".5rem"
  }
};

function UserCard(props) {
  const { user } = props;
  return (
    <Link to={`/profile/${user.id}`}>
      <div className="card" style={styles.card}>
        <div className="card-body">
          <h5 className="card-title">
            <img
              alt="Profile"
              src={user.picture}
              height="30"
              className="rounded-circle"
              style={styles.avatar}
            />
            {user.fullName}
          </h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">
            {user.position} at {user.company}
          </h6>
          <p className="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            sint odio natus voluptatem voluptas ex cumque voluptates debitis
            pariatur, exercitationem adipisci. Tenetur recusandae sequi
            expedita. Ipsam amet labore numquam aliquid.
          </p>
        </div>
      </div>
    </Link>
  );
}

export default UserCard;
