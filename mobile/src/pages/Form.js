import { decorate, observable, computed } from "mobx";
import { observer } from "mobx-react";
import { Container, Button, Text, Spinner } from "native-base";
import React, { Component } from "react";
import { ScrollView, View, Keyboard, findNodeHandle } from "react-native";
import styled from "styled-components";
import TextInput from "./FormItems/TextInput";
import SelectInput from "./FormItems/SelectInput";
import CheckboxInput from "./FormItems/CheckboxInput";
import NumberInput from "./FormItems/NumberInput";
import DateInput from "./FormItems/DateInput";
import ImageInput from "./FormItems/ImageInput";
import TextareaInput from "./FormItems/TextareaInput";
import _ from "lodash";
import FormModel from "../models/Forms";

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
  items = [];
  loading = true;
  current = 0;
  itemRefs = [];
  lead = {};

  constructor(props) {
    super(props);
    this.form_id = props.navigation.state.params.form_id;
    FormModel.find(this.form_id).then(res => {
      this.items = res.form_config.config || [];
      this.loading = false;
    });
  }

  get lastIndex() {
    return this.items.length - 1;
  }

  nextIndex = () => {
    this.current += 1;
    if (this.current > this.lastIndex) this.current = this.lastIndex;
    if (!["text", "number", "textarea"].includes(this.items[this.current].type))
      Keyboard.dismiss();
    this.scrollToItem();
  };

  scrollToItem = () => {
    requestAnimationFrame(() => {
      if (this.itemRefs[this.current] && this._scrollView) {
        this.itemRefs[this.current].measureLayout(
          findNodeHandle(this._scrollView),
          (x, y) => {
            this._scrollView.scrollTo({
              x: 0,
              y: y,
              animated: true
            });
          }
        );
      }
    });
  };

  render() {
    if (this.loading) return <Spinner />;
    return (
      <PaddedContent>
        <ScrollView ref={view => (this._scrollView = view)}>
          {this.items.map((item, index) => {
            let Elem = TextInput;
            let customProps = {
              item,
              onDone: () => {
                _.delay(this.nextIndex, 200);
              },
              onChange: val => {
                this.current = index;
                _.set(this.lead, item.title, val);
              }
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
              <StyledView
                key={index}
                current={this.current == index}
                ref={ele => (this.itemRefs[index] = ele)}
              >
                <Elem {...customProps} focus={this.current == index}></Elem>
              </StyledView>
            );
          })}
        </ScrollView>
        <BlackFooter>
          <FooterButton bordered onPress={this.nextIndex}>
            <FooterText>NEXT</FooterText>
          </FooterButton>
          <FooterButton
            bordered
            onPress={() => {
              console.log(this.lead);
            }}
          >
            <FooterText>SUBMIT</FooterText>
          </FooterButton>
        </BlackFooter>
      </PaddedContent>
    );
  }
}

decorate(FormExample, {
  current: observable,
  loading: observable,
  items: observable,
  lastIndex: computed
});

export default observer(FormExample);
