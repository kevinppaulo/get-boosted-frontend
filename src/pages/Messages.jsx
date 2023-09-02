import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useConversations from "../hooks/useConversations";

function Messages() {
  const MY_ID = 0;
  const conversations = useConversations();
  const { id } = useParams();
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const conversation = conversations.find(
      (conversation) => conversation.id === Number(id)
    );
    if (conversation) setMessages(conversation.messages);
  }, [conversations, id]);

  return (
    <ul className="list-group">
      {messages.length == 0 && (
        <div className="container text-center">
          Nothing here yet. Start a conversation
        </div>
      )}
      {messages.map((message, index) => {
        return (
          <li
            key={index}
            className="list-group-item"
            style={{ border: "none" }}
          >
            <span
              className={
                message.sender_id === MY_ID
                  ? "float-end bg-primary text-white p-2 rounded"
                  : "bg-secondary text-white p-2 rounded"
              }
            >
              {message.content}
            </span>
          </li>
        );
      })}
    </ul>
  );
}

export default Messages;
