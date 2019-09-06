import {
  Button,
  Container,
  Content,
  Form,
  Input,
  Item,
  Text
} from "native-base";
import React, { Component } from "react";
import { Actions } from "react-native-router-flux";
import Categories from "../models/Categories";

class CategoryForm extends Component {
  constructor(props) {
    super(props);
    this.id = (props.category || {}).id || "";
    this.title = (props.category || {}).title || "";
    this.reward_points = (props.category || {}).reward_points || 0;
    this.icon = {};
  }

  render() {
    return (
      <Container>
        <Content padder>
          <Form>
            <Item>
              <Input
                placeholder="Title"
                defaultValue={this.title}
                onChangeText={e => (this.title = e)}
              />
            </Item>
            <Item>
              <Input
                placeholder="Reward points"
                defaultValue={this.reward_points}
                onChangeText={e => (this.reward_points = e)}
              />
            </Item>
            <Item>
              <Button onPress={() => {}}>
                <Text>Upload icon</Text>
              </Button>
            </Item>
            <Item last>
              <Button
                onPress={() => {
                  Categories.create_or_update({
                    id: this.id,
                    title: this.title,
                    reward_points: this.reward_points
                  }).then(res => {
                    Actions.jump("form", {
                      form_id: res.category.form_config.id
                    });
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

export default CategoryForm;
