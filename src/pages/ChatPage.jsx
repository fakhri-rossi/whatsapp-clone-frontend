import { useEffect, useState } from "react";
import { getChats } from "../composables/useChat";

export default function ChatPage() {
  const [chats, setChats] = useState([]);

  useEffect(() => {
    getChats()
      .then((res) => {
        console.log(res);
        setChats(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="h-screen">
      <h1 className="text-3xl font-bold">ChatPage</h1>

      <h1 className="text-3xl font-light text-gray-900">
        User can chat each other
      </h1>

      <div>
        {chats &&
          chats.map((chat, i) => {
            return <p key={i}>{chat.chatName}</p>;
          })}
      </div>
    </div>
  );
}
