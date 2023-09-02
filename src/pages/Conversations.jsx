import { Link } from "react-router-dom";
import useConversations from "../hooks/useConversations";

function Conversations() {
  const conversations = useConversations();
  console.log(conversations);
  return (
    <ul className="list-group">
      {conversations.map((conversation, index) => {
        return (
          <Link to={`/conversations/${conversation.id}`}>
            <li key={index} className="list-group-item">
              <img
                alt=""
                height="30"
                src={conversation.participants[0].profilePicture}
                className="rounded-circle"
              />
              {conversation.title}
            </li>
          </Link>
        );
      })}
    </ul>
  );
}

export default Conversations;
