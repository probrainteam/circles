import axios from "axios";

export const getMembers = async () => {
  const response = await axios.get("/api/members");
  return response.data;
};

export const addMember = (
  sid: string,
  major: string,
  name: string,
  year: number,
  email: string,
  phone: string,
  paid: boolean,
  status: number
) => {
  const data = { sid, major, name, year, email, phone, paid, status };
  axios
    .post("/api/member", data)
    .then((res) => {
      console.log(res.data);
    })
    .catch((e) => {
      console.log(e);
    });
};
