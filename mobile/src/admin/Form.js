import React, { Component, Fragment } from "react";
import {
  Modal,
  TouchableHighlight,
  View,
  Alert,
  ScrollView
} from "react-native";
import { decorate, observable } from "mobx";
import { observer } from "mobx-react";
import { Container, Button, Text } from "native-base";
import styled from "styled-components";
import TextInput from "./FormItems/TextInput";
import SelectInput from "./FormItems/SelectInput";
import CheckboxInput from "./FormItems/CheckboxInput";
import NumberInput from "./FormItems/NumberInput";
import DateInput from "./FormItems/DateInput";
import ImageInput from "./FormItems/ImageInput";
import TextareaInput from "./FormItems/TextareaInput";
import _ from "lodash";

const PaddedContent = styled(Container)``;

const StyledView = styled(View)`
  padding: 10px;
`;

const BlackFooter = styled(View)`
  background-color: black;
  padding: 10px;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-around;
  align-items: center;
`;

const FooterButton = styled(Button)`
  border-color: white;
`;

const FooterText = styled(Text)`
  color: white;
`;

class FormExample extends Component {
  items = [
    { type: "text", title: "Name", required: true },
    { type: "number", title: "Contact", required: true },
    { type: "date", title: "Date of birth", required: true },
    { type: "textarea", title: "Address", required: true },
    { type: "image", title: "Aadhaar Image", required: true },
    {
      type: "select",
      title: "Gender",
      required: true,
      options: ["Male", "Female"]
    },
    {
      type: "multi-select",
      title: "Langauges",
      required: false,
      options: ["English", "Hindi"]
    }
  ];

  modalVisible = false;

  setModalVisible(visible) {
    this.modalVisible = visible;
  }

  render() {
    return (
      <Fragment>
        <Modal
          animationType="fade"
          transparent={true}
          visible={this.modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <View
            style={{
              margin: 50,
              backgroundColor: "green",
              elevation: 1,
              height: 300
            }}
          >
            <View>
              <Text>Hello World!</Text>
              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.modalVisible);
                }}
              >
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
        <PaddedContent>
          <ScrollView>
            {this.items.map((item, index) => {
              let Elem = TextInput;
              let customProps = {
                item
              };
              switch (item.type) {
                case "text":
                  Elem = TextInput;
                  break;
                case "number":
                  Elem = NumberInput;
                  break;
                case "date":
                  Elem = DateInput;
                  break;
                case "image":
                  Elem = ImageInput;
                  break;
                case "select":
                  Elem = SelectInput;
                  customProps["options"] = item.options;
                  break;
                case "multi-select":
                  Elem = CheckboxInput;
                  customProps["options"] = item.options;
                  break;
                case "textarea":
                  Elem = TextareaInput;
                  break;
              }
              return (
                <StyledView key={index}>
                  <Elem {...customProps}></Elem>
                </StyledView>
              );
            })}
          </ScrollView>
          <BlackFooter>
            <FooterButton bordered onPress={this.setModalVisible(true)}>
              <FooterText>ADD FIELD</FooterText>
            </FooterButton>
            <FooterButton bordered onPress={this.nextIndex}>
              <FooterText>SAVE</FooterText>
            </FooterButton>
          </BlackFooter>
        </PaddedContent>
      </Fragment>
    );
  }
}

decorate(FormExample, { modalVisible: observable });

export default observer(FormExample);
