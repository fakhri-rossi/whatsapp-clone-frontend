import axios from "axios";

async function getChats() {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios.get("/api/chat");
      resolve(data.chats);
    } catch (err) {
      reject(err);
    }
  });
}

export { getChats };
