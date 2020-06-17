import React from "react";
import styled from "styled-components/native";

const Course = (props) => {
  return (
    <Container>
      <Cover>
        <Image source={props.image} />
        <Logo source={props.logo} resizeMode="contain" />
        <Subtitle>{props.subtitle}</Subtitle>
        <Title>{props.title}</Title>
      </Cover>
      <Content style={{ display: "flex", justifyContent: "center" }}>
        <Avatar source={props.avatar} />
        <Caption>{props.caption}</Caption>
        <Author>Taught by {props.author}</Author>
      </Content>
    </Container>
  );
};

export default Course;

const Container = styled.View`
  width: 85%;
  height: 335px;
  background: white;
  margin: 10px auto;
  border-radius: 14px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
`;

const Cover = styled.View`
  height: 260px;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  overflow: hidden;
  justify-content: flex-end;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
`;

const Logo = styled.Image`
  width: 48px;
  height: 48px;
  position: absolute;
  top: 90px;
  left: 50%;
  margin-left: -24px;
`;

const Title = styled.Text`
  font-size: 24px;
  color: #ffffff;
  font-weight: 600;
  margin-top: 4px;
  margin-bottom: 20px;
  z-index: 1;
  width: 250px;
  padding-left: 20px;
`;

const Subtitle = styled.Text`
  font-size: 15px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.8);
  text-transform: uppercase;
  margin-left: 20px;
  z-index: 1;
`;

const Content = styled.View`
  flex: 1;
  padding-left: 62px;
  justify-content: center;
  height: 75px;
`;

const Avatar = styled.Image`
  width: 32px;
  height: 32px;
  top: 10px;
  left: -45px;
  border-radius: 16px;
`;

const Caption = styled.Text`
  font-size: 14px;
  font-weight: 500;
  color: #b8bece;
  margin-top: -28px;
  width: 200px;
  white-space: pre;
  text-overflow: ellipsis;
  overflow: hidden;
  margin-bottom: 10px;
`;

const Author = styled.Text`
  color: black;
`;
