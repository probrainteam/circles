import { useAppSelector } from "hooks/redux-hooks";
import { FunctionComponent, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AuthHoc(
  SpecificComponent: FunctionComponent,
  option: boolean,
  adminRoute = null
) {
  function AuthenticationCheck() {
    const isLoggedIn = useAppSelector((state) => state.userReducer.isLoggedIn);
    const navigation = useNavigate();

    useEffect(() => {
      if (!isLoggedIn && option) {
        navigation("/login");
      } else if (isLoggedIn && !option) {
        navigation("/");
      }
    }, [isLoggedIn, navigation]);

    return <SpecificComponent />;
  }
  return <AuthenticationCheck />;
}

export default AuthHoc;
