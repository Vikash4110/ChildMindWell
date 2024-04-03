import Template from "../Components/Template";
import signupImg from "../assets/signup.png";

function Signup({ setIsLoggedIn }) {
  return (
    <Template
      title="Discover pediatric mental health resources at ChildMindWell."
      description1="Supporting Parents, Uplifting Minds: "
      description2="Discovering Pediatric Mental Wellness Together."
      image={signupImg}
      formType="signup"
      setIsLoggedIn={setIsLoggedIn}
    />
  );
}

export default Signup;
