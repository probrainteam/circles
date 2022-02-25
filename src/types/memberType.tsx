export interface memberProps {
  id: number;
  approval: boolean;
  name: string;
  studentId: number;
  phone: string;
  grade: number;
  isDues: boolean;
  state: boolean;
}
export interface memberFuncProps {
  memberList: Array<memberProps>;
  setMemberList?: React.Dispatch<React.SetStateAction<never[]>>;
}
