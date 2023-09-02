import { useEffect, useState } from "react";
import getConversations from "../service/ConversationService";

function useConversations() {
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    async function load() {
      const loaded = await getConversations();
      setConversations(loaded);
    }
    load();
  });

  return conversations;
}

export default useConversations;
