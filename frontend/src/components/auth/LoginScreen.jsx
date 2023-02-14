import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Swal from "sweetalert2";
import { startLogin } from "../../actions/auth";
import logo from "./logo.jpg";
import { useForm } from "../../hooks/useForm";

export const LoginScreen = () => {
  const dispatch = useDispatch();

  const [loginValues, handleInputChange] = useForm({
    lEmail: "",
    lPassword: "",
    lPassword2: "",
  });

  const { lEmail, lPassword, lPassword2 } = loginValues;

  const handleLogin = (e) => {
    e.preventDefault();

    if (lPassword !== lPassword2) {
      Swal.fire({
        title: "Both passwords are not equal.",
        backdrop: `
					rgba(0,0,123,0.4)
				`,
        icon: "error",
      });
    } else {
      dispatch(startLogin(lEmail, lPassword));
    }
  };

  return (
    <Container>
      <RightContainer>
        <FormContainer onSubmit={handleLogin}>
          <MainTitle>Login</MainTitle>
          <InputContainer>
            <Icon className="far fa-id-card"></Icon>
            <CustomInput
              type="email"
              name="lEmail"
              value={lEmail}
              onChange={handleInputChange}
            ></CustomInput>
          </InputContainer>

          <InputContainer>
            <Icon className="fas fa-lock"></Icon>
            <CustomInput
              type="password"
              name="lPassword"
              value={lPassword}
              onChange={handleInputChange}
            ></CustomInput>
          </InputContainer>

          <InputContainer>
            <Icon className="fas fa-lock"></Icon>
            <CustomInput
              type="password"
              name="lPassword2"
              value={lPassword2}
              onChange={handleInputChange}
            ></CustomInput>
          </InputContainer>

          <InputContainer>
            <SubmitInput
              type="submit"
              value="Join!"
              onClick={handleLogin}
            ></SubmitInput>
          </InputContainer>

          <InputContainer>
            <ForgotPassword to="/register">
              Don't you have an account?
            </ForgotPassword>
          </InputContainer>
        </FormContainer>
      </RightContainer>

      <LeftContainer>
        <ImageBackground src={logo} alt="Bank" />
      </LeftContainer>
    </Container>
  );
};

export const Container = styled.div`
  margin: 0px;
  padding: 0px;
  display: flex;
  height: 100vh;
  width: 100vw;
  flex-direction: row;
  background-color: white-smoke;
`;

const RightContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LeftContainer = styled.div`
  width: 50%;
  height: 80%;
`;

export const ImageBackground = styled.img`
  width: 100%;
  height: 100%;
`;

const FormContainer = styled.form`
  width: 550px;
  height: 600px;
  border-radius: 50px;
  box-shadow: 7px 8px 8px 0 rgba(0, 0, 0, 0.05),
    2px 2px 10px 0 rgba(0, 0, 0, 0.19);
`;

const MainTitle = styled.h1`
  margin-top: 50px;
  margin-bottom: 20px;
  color: #2980b9;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  font-size: 43px;
`;

const InputContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CustomInput = styled.input`
  padding: 25px;
  padding-left: 5px;
  width: 57%;
  margin: 20px 0px;
  border: none;
  color: #444;
  font-size: 15px;
  background-color: whitesmoke;
  &:focus {
    outline: none;
  }
`;

const Icon = styled.i`
  padding: 24.5px;
  color: #2980b9;
  font-size: 18px;
  background-color: white-smoke;
`;

const SubmitInput = styled.input`
  margin-top: 20px;
  padding: 20px 50px;
  width: 40%;
  border: none;
  background-color: #2980b9;
  border-radius: 30px;
  color: white;
  font-size: 20px;

  &:hover {
    background-color: #3188c1;
    cursor: pointer;
  }
`;

const ForgotPassword = styled(Link)`
  color: #2980b9;
  text-decoration: none;
  margin-top: 40px;
  font-size: 18px;
  font-family: Arial, Helvetica, sans-serif;
`;
