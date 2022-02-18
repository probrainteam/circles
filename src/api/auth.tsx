import axios from "axios";
import { LoginInputData } from "types/authType";

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

export const onLogin = async ({ email, pw }: LoginInputData) => {
  try {
    const response = await axios.post("/api/user/login", { email, pw });
    console.log(response);
    const { accessToken } = response.data;
    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    return response;
  } catch (e: any) {
    return e.response;
  }
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
