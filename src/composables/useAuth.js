import axios from "axios";

const register = ({ name, username, email, password }) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios.post("/api/user/register", {
        name,
        username,
        email,
        password,
      });
      console.log(data);
      resolve(data);
    } catch (error) {
      reject(error.response.data);
    }
  });
};

export { register };
