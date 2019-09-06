import React, { Component, Fragment } from "react";
import { Modal, View, Alert, ScrollView } from "react-native";
import { decorate, observable } from "mobx";
import { observer } from "mobx-react";
import {
  Container,
  Button,
  Text,
  Input,
  Picker,
  Form,
  Item,
  Label,
  Radio,
  Header,
  Body,
  Title,
  Textarea,
  Spinner
} from "native-base";
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

const PaddedContent = styled(Container)`
  background-color: ${props =>
    props.backgrounded ? "rgba(0, 0, 0, 0.5)" : "white"};
`;

const StyledView = styled(View)`
  padding: 10px;
`;

const BlackFooter = styled(View)`
  background-color: ${props => (props.light ? "#898989" : "black")};
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

const StyledModal = styled(View)`
  margin: 50px;
  margin-top: 100px;
  background-color: white;
  z-index: 100;
  height: 400px;
`;

class InnerModal extends Component {
  title = "";
  type = "text";
  required = false;
  options = "";

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "space-between" }}>
        <Header style={{ backgroundColor: "black" }}>
          <Body>
            <Title>Add Field</Title>
          </Body>
        </Header>
        <Form>
          <Item>
            <Label>Title</Label>
            <Input
              defaultValue={this.title}
              onChangeText={e => (this.title = e)}
              placeholder="Title"
            />
          </Item>
          <Item>
            <Label>Type</Label>
            <Picker
              mode="dropdown"
              placeholder="Type"
              defaultValue={this.type}
              onValueChange={e => (this.type = e)}
            >
              <Picker.Item label="Text" value="text" />
              <Picker.Item label="Number" value="number" />
              <Picker.Item label="Date" value="date" />
              <Picker.Item label="Image" value="image" />
              <Picker.Item label="Dropdown" value="select" />
              <Picker.Item label="Dropdown (Multiple)" value="multi-select" />
              <Picker.Item label="Text Area" value="textarea" />
            </Picker>
          </Item>
          <Item>
            <Label>Required</Label>
            <View
              style={{
                paddingVertical: 10,
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-around"
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <Radio
                  selected={this.required}
                  onPress={() => (this.required = true)}
                />
                <Text> Yes</Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Radio
                  selected={!this.required}
                  onPress={() => (this.required = false)}
                />
                <Text> No</Text>
              </View>
            </View>
          </Item>
          <Item>
            <Label>Options</Label>
            <Textarea
              onChangeText={e => (this.options = e)}
              placeholder="Options (Comma seperated)"
            />
          </Item>
        </Form>
        <BlackFooter>
          <Button
            onPress={() => {
              this.props.onAdd({
                type: this.type,
                title: this.title,
                required: this.required,
                options: this.options.split(",")
              });
              this.props.hideModal();
            }}
          >
            <FooterText>ADD</FooterText>
          </Button>
          <Button onPress={() => this.props.hideModal()}>
            <FooterText>CANCEL</FooterText>
          </Button>
        </BlackFooter>
      </View>
    );
  }
}

decorate(InnerModal, {
  required: observable
});

const ModalForm = observer(InnerModal);

class FormExample extends Component {
  items = [];
  loading = true;
  modalVisible = false;

  constructor(props) {
    super(props);
    this.form_id = props.navigation.state.params.form_id;
    FormModel.find(this.form_id).then(res => {
      this.items = res.form_config.config || [];
      this.loading = false;
    });
  }

  setModalVisible = visible => {
    this.modalVisible = visible;
  };

  render() {
    if (this.loading) return <Spinner />;
    return (
      <PaddedContent backgrounded={this.modalVisible}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={this.modalVisible}
          onRequestClose={() => {
            this.setModalVisible(false);
          }}
        >
          <StyledModal>
            <ModalForm
              hideModal={() => this.setModalVisible(false)}
              onAdd={val => this.items.push(val)}
            />
          </StyledModal>
        </Modal>
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
          <FooterButton bordered onPress={() => this.setModalVisible(true)}>
            <FooterText>ADD FIELD</FooterText>
          </FooterButton>
          <FooterButton
            bordered
            onPress={() =>
              FormModel.update(this.form_id, { config: this.items })
            }
          >
            <FooterText>SAVE</FooterText>
          </FooterButton>
        </BlackFooter>
      </PaddedContent>
    );
  }
}

decorate(FormExample, {
  modalVisible: observable,
  items: observable,
  loading: observable
});

export default observer(FormExample);
