import React from "react";
import { ScrollView, SafeAreaView } from "react-native";
import styled from "styled-components/native";
import Card from "./components/Card";
import Logo from "./components/Logo";
import Course from "./components/Course";
import Menu from "./components/menu";

import { NotificationIconComponent } from "./icons/notfication";

export default function App() {
  return (
    <Container>
      <Menu />
      <SafeAreaView>
        <ScrollView>
          <TitleBar
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "16px",
            }}
          >
            <Avatar source={require("./assets/av.png")} />
            <Title>Welcome back,</Title>
            <Name>Alpesh</Name>
            <NotificationIconComponent
              style={{ position: "absolute", right: 20, top: 5 }}
            />
          </TitleBar>
          <ScrollView
            style={{
              flexDirection: "row",
              paddingHorizontal: 10,
              paddingVertical: 10,
            }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            {logos.map((logo, index) => (
              <Logo key={index} image={logo.image} text={logo.text} />
            ))}
          </ScrollView>
          <Subtitle>Continue Learning</Subtitle>
          <ScrollView
            horizontal={true}
            style={{ paddingBottom: 30 }}
            showsHorizontalScrollIndicator={false}
          >
            {cards.map((cards, index) => (
              <Card
                key={index}
                title={cards.title}
                image={cards.image}
                caption={cards.caption}
                logo={cards.logo}
                subtitle={cards.subtitle}
              />
            ))}
          </ScrollView>
          <Subtitle>Popular Courses</Subtitle>
          {courses.map((course, index) => (
            <Course
              key={index}
              image={course.image}
              title={course.title}
              subtitle={course.subtitle}
              logo={course.logo}
              avatar={course.avatar}
              title={course.title}
              caption={course.caption}
              author={course.author}
            />
          ))}
        </ScrollView>
      </SafeAreaView>
    </Container>
  );
}

const Subtitle = styled.Text`
  color: #b8bece;
  font-weight: 600;
  font-size: 16px;
  margin-left: 20px;
  margin-top: 20px;
  text-transform: uppercase;
`;

const Avatar = styled.Image`
  width: 44px;
  height: 44px;
  background: black;
  border-radius: 22px;
  margin-left: 20px;
  position: absolute;
  top: 0;
  left: 0;
`;

const Container = styled.View`
  background-color: #f0f3f5;
`;

const Title = styled.Text`
  font-size: 16px;
  color: #b8bece;
  font-weight: 500;
`;

const Name = styled.Text`
  font-size: 20px;
  color: #3c4568;
  font-weight: bold;
`;

const TitleBar = styled.View`
  width: 100%;
  margin-top: 50px;
  padding-left: 80px;
`;

const logos = [
  {
    image: require("./assets/framer-x.png"),
    text: "Framer X",
  },
  {
    image: require("./assets/figma.png"),
    text: "figma",
  },

  {
    image: require("./assets/studio.png"),
    text: "Studio",
  },

  {
    image: require("./assets/logo.png"),
    text: "React",
  },

  {
    image: require("./assets/swift.png"),
    text: "Swift",
  },

  {
    image: require("./assets/Sketch.png"),
    text: "Sketch",
  },
];

const cards = [
  {
    title: "React Native for Designers",
    image: require("./assets/bg 1.jpg"),
    subtitle: "React Native",
    caption: "1 of 12 sections",
    logo: require("./assets/logo.png"),
  },
  {
    title: "Java For Beginners",
    image: require("./assets/bg 2.jpeg"),
    subtitle: "Java Development",
    caption: "4 of 10 sections",
    logo: require("./assets/logo 1.png"),
  },
  {
    title: "Python Fundamentals",
    image: require("./assets/bg 3.jpeg"),
    subtitle: "Python Fundamentals",
    caption: "3 of 25 sections",
    logo: require("./assets/logo 3.png"),
  },
  {
    title: "Ios App Development",
    image: require("./assets/bg 4.jpg"),
    subtitle: "Ios App Development",
    caption: "6 of 30 sections",
    logo: require("./assets/logo 4.png"),
  },
];

const courses = [
  {
    title: "Adobe Illustrator CC ",
    subtitle: "25 section",
    image: require("./assets/bg course 1.jpg"),
    logo: require("./assets/courses1.png"),
    author: " Phil Ebiner",
    avatar: require("./assets/av.png"),
    caption: "Learn Adobe Illustrator CC graphic design, logo design.",
  },

  {
    title: "UI/UX using Adobe xd",
    subtitle: "12 section",
    image: require("./assets/courses2.png"),
    logo: require("./assets/xd logo.png"),
    author: "Tim bachulkas",
    avatar: require("./assets/av.png"),
    caption: "ui/ux fundamentals",
  },

  {
    title: "Advanced Javascript",
    subtitle: "30 section",
    image: require("./assets/javascript.jpg"),
    logo: require("./assets/js.png"),
    author: "Mohammad Ali ",
    avatar: require("./assets/av.png"),
    caption: "Advanced js spring boot framework",
  },

  {
    title: "IOS App Development",
    subtitle: "28 section",
    image: require("./assets/node.jpg"),
    logo: require("./assets/logo 4.png"),
    author: "Angela u",
    avatar: require("./assets/av.png"),
    caption: "Lets build 20 App using obj C and swift ",
  },
];
