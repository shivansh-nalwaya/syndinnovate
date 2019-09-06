import { Icon, Label, Text } from "native-base";
import React, { Component } from "react";
import { Image, TouchableOpacity, View } from "react-native";
import styled from "styled-components";

const RedText = styled(Text)`
  color: red;
`;

const OuterView = styled(View)`
  border-width: 1px;
  border-color: #787878;
  padding: 2px;
  width: 150px;
  height: 150px;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const InImage = styled(Image)`
  width: 146px;
  height: 146px;
`;

class ImageInput extends Component {
  render() {
    const item = this.props.item;
    return (
      <React.Fragment>
        <Label>
          {item.title}
          <RedText>{item.required ? "*" : ""}</RedText>
        </Label>
        <Uploader />
      </React.Fragment>
    );
  }
}

class Uploader extends Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <View style={{ margin: 4 }}>
          <OuterView>
            {this.props.value ? (
              <InImage source={{ uri: this.props.value }} />
            ) : (
              <Icon name="md-add" style={{ fontSize: 80, color: "#787878" }} />
            )}
          </OuterView>
        </View>
      </TouchableOpacity>
    );
  }
}

export default ImageInput;
