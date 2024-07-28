import { useEffect } from "react";
import { useState } from "react";

export default function ChatPage() {
  async function getChats() {
    return new Promise(async (resolve, reject) => {
      try {
        const data = await fetch("http://127.0.0.1:5000/api/chat", {
          method: "GET",
        });

        const result = await data.json();
        resolve(result);
      } catch (err) {
        reject(err);
      }
    });
  }

  const [chats, setChats] = useState(null);

  useEffect(() => {
    getChats()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="h-screen">
      <h1>ChatPage</h1>

      <div></div>
    </div>
  );
}
