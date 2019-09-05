import React, { Component } from "react";
import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Button,
  Text,
  Card,
  CardItem
} from "native-base";
import { observer } from "mobx-react";
import Categories from "../models/Categories";

class CategoryForm extends Component {
  constructor(props) {
    super(props);
    this.title = "";
    this.reward_points = 0;
    this.icon = {};
    this.form_config = [];
  }

  render() {
    return (
      <Container>
        <Content>
          <Form>
            <Item>
              <Input placeholder="Title" onChangeText={e => (this.title = e)} />
            </Item>
            <Item>
              <Input
                placeholder="Reward points"
                onChangeText={e => (this.reward_points = e)}
              />
            </Item>
            <Item>
              <Button onPress={() => {}}>
                <Text>Upload icon</Text>
              </Button>
            </Item>
            <Item>
              <Card>
                <CardItem>
                  <Text>Configure form</Text>
                </CardItem>
              </Card>
            </Item>
            <Item last>
              <Button
                onPress={() => {
                  Categories.create({
                    title: this.title,
                    reward_points: this.reward_points
                  });
                }}
              >
                <Text>Save</Text>
              </Button>
            </Item>
          </Form>
        </Content>
      </Container>
    );
  }
}

export default observer(CategoryForm);
