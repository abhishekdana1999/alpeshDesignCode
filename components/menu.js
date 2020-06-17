import React, { Component } from "react";
import styled from "styled-components/native";
import { Animated, TouchableOpacity } from "react-native";

import { CloseIcon } from "../icons/close";
class Menu extends React.Component {
  state = {
    top: new Animated.Value(900),
  };

  componentDidMount() {
    Animated.spring(this.state.top, {
      toValue: 0,
    }).start();
  }

  toggleMenu = () => {
    Animated.spring(this.state.top, {
      toValue: 0,
    }).start();
  };
  render() {
    return (
      <AnimatedContainer style={{ top: this.state.top }}>
        <Cover />
        <TouchableOpacity onPress={this.toggle}>
          <CloseView>
            <CloseIcon />
          </CloseView>
        </TouchableOpacity>
        <Content />
      </AnimatedContainer>
    );
  }
}
export default Menu;

const CloseView = styled.View`
  width: 44px;
  height: 44px;
  border-radius: 22px;
  background: white;
  justify-content: center;
`;

const Comp = styled.View`
  position: absolute;
  background: white;
  height: 700px;
  width: 100%;
  z-index: 100;
`;
class Container extends Component {
  render() {
    return <Comp {...this.props} />;
  }
}

const AnimatedContainer = Animated.createAnimatedComponent(Container);

const Cover = styled.View`
  height: 142px;
  background: black;
`;

const Content = styled.View`
  height: 900;
  background: #f0f3f5;
`;
