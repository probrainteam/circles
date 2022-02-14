import axios from "axios";

export const onLogin = (email: string, pw: string) => {
  const data = { email, pw };
  axios
    .post("/api/user/login", data)
    .then((res) => {
      console.log(res.data.token);
      const { accessToken } = res.data.token;
      axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    })
    .catch((e) => {
      console.log(e);
    });
};
