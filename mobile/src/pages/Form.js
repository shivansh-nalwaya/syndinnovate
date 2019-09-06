import { decorate, observable } from "mobx";
import { observer } from "mobx-react";
import { Container, Button, Text } from "native-base";
import React, { Component } from "react";
import { ScrollView, View } from "react-native";
import styled from "styled-components";
import TextInput from "./FormItems/TextInput";
import SelectInput from "./FormItems/SelectInput";
import CheckboxInput from "./FormItems/CheckboxInput";
import NumberInput from "./FormItems/NumberInput";
import DateInput from "./FormItems/DateInput";
import ImageInput from "./FormItems/ImageInput";
import TextareaInput from "./FormItems/TextareaInput";

const PaddedContent = styled(Container)``;

const StyledView = styled(View)`
  padding: 10px;
  border-left-width: ${props => (props.current ? "5px" : "0px")};
  border-left-color: ${props => (props.current ? "#ff8c00" : "white")};
  background-color: ${props => (props.current ? "#fff1e2" : "white")};
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
  current = 0;

  lastIndex = this.items.length - 1;

  nextIndex = () => {
    this.current += 1;
    if (this.current > this.lastIndex) this.current = this.lastIndex;
  };

  render() {
    return (
      <PaddedContent>
        <ScrollView>
          {this.items.map((item, index) => {
            let Elem = TextInput;
            let customProps = { item, onDone: this.nextIndex };
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
              <StyledView current={this.current == index}>
                <Elem {...customProps} focus={this.current == index}></Elem>
              </StyledView>
            );
          })}
        </ScrollView>
        <BlackFooter>
          <FooterButton bordered onPress={this.nextIndex}>
            <FooterText>NEXT</FooterText>
          </FooterButton>
        </BlackFooter>
      </PaddedContent>
    );
  }
}

decorate(FormExample, { current: observable });

export default observer(FormExample);
