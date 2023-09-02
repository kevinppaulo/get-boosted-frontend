import { Link } from "react-router-dom";

function UserProfile(props) {
  const { user } = props;

  const styles = {
    card: {
      margin: "1rem"
    },

    avatar: {
      marginRight: ".5rem"
    },

    contactButton: {
      width: "100%"
    }
  };

  return (
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
        <p className="card-text"></p>
        <p>
          <b>Bio: </b> Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Delectus aut eius amet dolore, et deserunt veniam, a sequi, temporibus
          assumenda porro. Itaque, quia dolor reprehenderit quo ex alias quaerat
          debitis.
        </p>
        <Link
          to={`/conversations/${user.id}`}
          className="btn btn-primary"
          style={styles.contactButton}
        >
          Send Message
        </Link>
      </div>
    </div>
  );
}

export default UserProfile;
