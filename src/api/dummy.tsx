import axios from "axios";

export function _getDummyList(dummyUrl: string): Array<any> {
  // const dummyUrl = "dummy/new_recruit.json";
  let dummy: any[] = [];
  axios
    .get(dummyUrl)
    .then((result) => {
      //가지고 온 리스트를 state에 저장합니다.
      dummy = result.data;
      console.log(dummy);
    })
    .catch((error) => {
      console.log(error);
    });
  return dummy;
}
