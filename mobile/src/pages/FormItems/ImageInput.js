import { Icon, Label, Text } from "native-base";
import React, { Component } from "react";
import { Image, Platform, TouchableOpacity, View } from "react-native";
import ImagePicker from "react-native-image-picker";
import styled from "styled-components";

const RedText = styled(Text)`
  color: red;
`;

const OuterView = styled(View)`
  border-width: 1px;
  border-color: #22ccc2;
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
        this.props.onChange(uri);
        this.props.onDone();
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
          <OuterView>
            {this.props.value ? (
              <InImage source={{ uri: this.props.value }} />
            ) : (
              <Icon name="md-add" style={{ fontSize: 80, color: "#22CCC2" }} />
            )}
          </OuterView>
        </View>
      </TouchableOpacity>
    );
  }
}

export default ImageInput;
