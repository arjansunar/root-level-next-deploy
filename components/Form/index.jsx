import styled, { css } from "styled-components";
import { useState } from "react";
import { NavButton } from "../Navbar/NavbarElements";
import { IoIosArrowForward as Arrow } from "react-icons/io";
import { HiArrowRight as ArrowHover } from "react-icons/hi";
import { defaultStyles } from "../../defaults/defaults";
//emailjs
import emailjs from "emailjs-com";

const initalState = {
  name: "",
  email: "",
  phoneNumber: "",
  message: "",
};

export default function ContactForm() {
  const [state, setState] = useState(initalState);
  const [error, setError] = useState("");
  const [hover, setHover] = useState(false);

  //function to send emails
  const credentials = {
    service_id: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
    template_id: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
    user_id: process.env.NEXT_PUBLIC_EMAILJS_USER_ID,
  };
  console.log("credentials", credentials);
  const sendEmail = (target) => {
    emailjs
      .sendForm(
        credentials.service_id,
        credentials.template_id,
        target,
        credentials.user_id
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          setError("Please try again later...");
          console.log(error.text);
        }
      );
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    for (let key in state) {
      if (state[key] === "") {
        setError(`You must provide the ${key}`);
        return;
      }
    }
    //checking if the phone number is valid
    if (isNaN(state.phoneNumber) || state.phoneNumber.length != 10) {
      setError("You must provide a valid number");
    } else {
      sendEmail(e.target);
      setError("");
    }
    // const regex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    // const test = regex.test(state.email);
  };

  const handleInput = (e) => {
    const inputName = e.currentTarget.name;
    const value = e.currentTarget.value;

    setState((prev) => ({ ...prev, [inputName]: value }));
  };
  return (
    <FormWrapper>
      <StyledForm onSubmit={handleSubmit}>
        <StyledLabel htmlFor="name">Full Name</StyledLabel>
        <StyledInput
          type="text"
          name="name"
          value={state.name}
          onChange={handleInput}
          placeholder="name"
        />
        <StyledLabel htmlFor="email">Email Address</StyledLabel>
        <StyledInput
          type="email"
          name="email"
          value={state.email}
          onChange={handleInput}
          placeholder="email"
        />
        <StyledLabel htmlFor="number">Phone Number</StyledLabel>
        <StyledInput
          type=""
          name="phoneNumber"
          value={state.phoneNumber}
          onChange={handleInput}
          placeholder="phone number"
        />
        <StyledLabel htmlFor="message">
          Tell us something about your project
        </StyledLabel>
        <StyledTextArea
          name="message"
          value={state.message}
          onChange={handleInput}
          placeholder="description"
        />
        {error && (
          <StyledError>
            <p>{error}</p>
          </StyledError>
        )}
        <ButtonWrapper>
          <StyledButton
            type="submit"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            Send message
            <span>{hover ? <ArrowHover /> : <Arrow />}</span>
          </StyledButton>
        </ButtonWrapper>
      </StyledForm>
    </FormWrapper>
  );
}

const FormWrapper = styled.div`
  margin-top: 5rem;
  height: fit-content;
  max-width: 704px;
  width: 90%;
  border-radius: 0.2rem;
  background-color: #fff;
  box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.3);
`;

const ButtonWrapper = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const sharedStyles = css`
  background-color: #eee;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin: 10px 0 20px 0;
  padding: 20px;
  box-sizing: border-box;
`;

const StyledLabel = styled.label`
  color: #767683;
`;

const StyledForm = styled.form`
  width: 100%;
  max-width: 700px;
  padding: 40px;
  background-color: #fff;
  border-radius: 10px;
  box-sizing: border-box;
`;

const StyledInput = styled.input`
  display: block;
  width: 100%;
  ${sharedStyles}/* & ::placeholder{} */
`;

const StyledTextArea = styled.textarea`
  background-color: #eee;
  width: 100%;
  min-height: 100px;
  resize: none;
  ${sharedStyles}
`;
// const StyledButton = styled.button`
//   display: block;
//   background-color: #f7797d;
//   color: #fff;
//   font-size: 0.9rem;
//   border: 0;
//   border-radius: 5px;
//   height: 40px;
//   padding: 0 20px;
//   cursor: pointer;
//   box-sizing: border-box;
// `;
const StyledButton = styled(NavButton)`
  font-family: "Poppins";
  font-weight: 600;
  font-size: 1.5rem;
  width: fit-content;
  max-width: none;
  padding: 1rem 2.5rem;
  background: ${defaultStyles.brandColor};
  color: #fff;
  border-radius: 500px;
  text-transform: none;

  & span {
    margin-top: 5px;
  }
  @media screen {
    display: flex;
    align-items: center;
  }

  @media (max-width: 600px) {
    padding: 1rem 2rem;
  }

  @media (max-width: 500px) {
    font-size: 1.3rem;
  }

  @media (max-width: 450px) {
    padding: 0.8rem 1.2rem;
    font-size: 1rem;

    & span {
      margin-top: 1px;
    }
  }
`;
const StyledError = styled.div`
  color: red;
  font-weight: 800;
  margin: 0 0 40px 0;
`;
