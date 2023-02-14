import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Navbar } from "../navbar/Navbar";

export const HomeScreen = () => {
  const { user, balance } = useSelector((state) => state.auth);
  const { lastTransaction } = useSelector((state) => state.transactions);

  return (
    <div>
      <Navbar />

      <Container>
        <MainTitle>ICT Bank</MainTitle>

        <HomeInfo>
          <SubTitle>Welcome {!user ? "Loading..." : user}!!</SubTitle>
          <Paragraph>Your current balance:</Paragraph>

          <MoneyBalance>
            $
            {!lastTransaction.amountLess ? balance : lastTransaction.amountLess}
          </MoneyBalance>
        </HomeInfo>
      </Container>
    </div>
  );
};

const Container = styled.div`
  margin: 0px 270px;
`;

const MainTitle = styled.h1`
  margin: 50px 0px;
  padding-left: 20px;
  text-align: center;
  color: #3c84ab;
  font-size: 50px;
`;

const HomeInfo = styled.div`
  height: 360px;
  width: 100%;
  background: rgb(41, 128, 185);
  text-align: center;
  background: linear-gradient(
    90deg,
    rgba(41, 128, 185, 1) 0%,
    #3c84ab 35%,
    rgba(41, 185, 166, 1) 100%
  );
  border-radius: 30px;
`;

const SubTitle = styled.h2`
  color: white;
  padding-top: 50px;
  padding-left: 50px;
  font-size: 40px;
`;

const Paragraph = styled.p`
  padding-left: 50px;
  padding-top: 30px;
  color: white;
  font-size: 22px;
`;

const MoneyBalance = styled.h2`
  color: white;
  padding-top: 30px;
  padding-left: 50px;
  font-size: 40px;
`;
