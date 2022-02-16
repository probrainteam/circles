import axios from "axios";

export const onRegister = (
  email: string,
  pw: string,
  pubkey: string,
  path: string
) => {
  axios
    .post("/api/user", { email, pw, pubkey, path })
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

export const onModPw = (pw: string, modPw: string) => {
  axios
    .put("/api/user/pw", { pw, modPw })
    .then((res) => {
      console.log(res);
    })
    .catch((e) => {
      console.log(e);
    });
};

export const onModKey = (cipher: string, modPub: string, path: string) => {
  axios
    .put("/api/user/pubkey", { cipher, modPub, path })
    .then((res) => {
      console.log(res);
    })
    .catch((e) => {
      console.log(e);
    });
};
