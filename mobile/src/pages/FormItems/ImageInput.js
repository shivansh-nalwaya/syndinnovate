import { Input, Label, Text, Icon } from "native-base";
import React, { Component } from "react";
import { View, Image, TouchableOpacity, Platform } from "react-native";
import ImagePicker from "react-native-image-picker";

import styled from "styled-components";

const RedText = styled(Text)`
  color: red;
`;

const StyledInput = styled(Input)`
  border-width: 1;
  border-color: #898989;
  margin: 5px;
  background-color: transparent;
`;

class ImageInput extends Component {
  state = { value: this.props.value || "" };

  onPress = () => {
    const options = {
      title: `Select ${this.props.item.title}`,
      storageOptions: {
        skipBackup: true,
        path: "images"
      }
    };

    ImagePicker.showImagePicker(options, response => {
      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else {
        const uri =
          Platform.OS === "android"
            ? response.uri
            : response.uri.replace("file://", "");
        this.setState({ value: uri });
      }
    });
  };

  render() {
    const item = this.props.item;
    return (
      <React.Fragment>
        <Label>
          {item.title}
          <RedText>{item.required ? "*" : ""}</RedText>
        </Label>
        <Uploader onPress={this.onPress} value={this.state.value} />
      </React.Fragment>
    );
  }
}

class Uploader extends Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <View style={{ margin: 4 }}>
          <View
            style={{
              borderWidth: 1,
              borderColor: "#22CCC2",
              padding: 2,
              width: 150,
              height: 150,
              flex: 1,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            {this.props.value ? (
              <Image
                source={{ uri: this.props.value }}
                style={{
                  width: 146,
                  height: 146
                }}
              />
            ) : (
              <Icon name="md-add" style={{ fontSize: 80, color: "#22CCC2" }} />
            )}
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

export default ImageInput;
