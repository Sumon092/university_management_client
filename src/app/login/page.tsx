import LoginPage from "@/components/login/login";
import { Metadata } from "next";
export const metaData:Metadata={
  title:" UMS | login",
}
const  Login= () => {
 
  return (
    <>
      <LoginPage></LoginPage>
    </>
  );
};

export default Login;