import axios from "axios";

export const onRegister = (email: string, pw: string, pubkey?: string) => {
  axios
    .post("/api/user", { email, pw, pubkey })
    .then((res) => {
      console.log(res.data);
    })
    .catch((e) => {
      console.log(e);
    });
};

export const onLogin = (email: string, pw: string) => {
  axios
    .post("/api/user/login", { email, pw })
    .then((res) => {
      console.log(res.data.token);
      const { accessToken } = res.data.token;
      axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    })
    .catch((e) => {
      console.log(e);
    });
};

export const onLogout = () => {};

export const onResetPw = (email: string) => {
  axios
    .post("/api/user/pw", { email })
    .then((res) => {
      console.log(res);
    })
    .catch((e) => {
      console.log(e);
    });
};
