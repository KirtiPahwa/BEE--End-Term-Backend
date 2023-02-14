import React from "react";
import styled from "styled-components";
import { Navbar } from "../navbar/Navbar";
import UserImage from "../../assets/default-user-image.png";
import { useSelector } from "react-redux";

export const AcountInfoScreen = () => {
  let { user, email, id, nationality, birthday, phone, balance } = useSelector(
    (state) => state.auth
  );

  return (
    <div>
      <Navbar />

      <Container>
        <UserInfoBox>
          {/* Col 1 */}
          <ImageUserContainer>
            <UserImageTag
              src={
                "data:image/jpeg;base64,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"
              }
              alt="image"
            />
          </ImageUserContainer>

          {/* Col 2 */}
          <InfoContainer>
            <Paragraph>user: {user}</Paragraph>
            <Paragraph>Email: {email}</Paragraph>
            <Paragraph>ID: {id}</Paragraph>
            <Paragraph>Nationality: {nationality}</Paragraph>
          </InfoContainer>

          {/* Col 3 */}
          <InfoContainer>
            <Paragraph>
              DOB: {birthday && birthday.split("").splice(0, 10).join("")}
            </Paragraph>
            <Paragraph>Phone: {phone}</Paragraph>
            <Paragraph>Balance: {balance}</Paragraph>

            <Paragraph style={{ color: "transparent" }}>a</Paragraph>
          </InfoContainer>
        </UserInfoBox>
      </Container>
    </div>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 89.3vh;
`;

const UserInfoBox = styled.div`
  width: 80%;
  height: 75%;
  background: rgb(41, 128, 185);
  background: linear-gradient(
    90deg,
    rgba(41, 128, 185, 1) 0%,
    #3c84ab 35%,
    rgba(41, 185, 166, 1) 100%
  );
  border-radius: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

const ImageUserContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UserImageTag = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 999px;
`;

const InfoContainer = styled.div`
  display: grid;
  align-items: center;
`;

const Paragraph = styled.p`
  color: white;
  margin: 0px 0px;
  font-size: 20px;
`;
