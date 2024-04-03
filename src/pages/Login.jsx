import Template from "../Components/Template";
import loginImg from "../assets/login.png";

function Login({ setIsLoggedIn }) {
  return (
    <Template
      title="Welcome Back"
      description1="Supporting Parents, Uplifting Minds: "
      description2="Discovering Pediatric Mental Wellness Together."
      image={loginImg}
      formType="login"
      setIsLoggedIn={setIsLoggedIn}
    />
  );
}

export default Login;
