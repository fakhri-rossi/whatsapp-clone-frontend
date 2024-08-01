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

const registerVerify = ({ name, mediaFiles }) => {
  const form = new FormData();
  form.append("name", name);

  // form.append("media_file", profileImage);
  mediaFiles.forEach((mediaFile, index) => {
    form.append(`media_file_${index}`, mediaFile);
  });

  console.log(form);

  return axios.post("/api/user/register_verify", form, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

export { register, registerVerify };
