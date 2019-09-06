import {
  Label,
  Left,
  List,
  ListItem,
  CheckBox,
  Right,
  Text
} from "native-base";
import React, { Component } from "react";
import styled from "styled-components";

const RedText = styled(Text)`
  color: red;
`;

class CheckboxInput extends Component {
  state = { selected: this.props.item.value || [] };

  selectValue = value => {
    let selected = this.state.selected;
    if (selected.includes(value)) selected.splice(selected.indexOf(value), 1);
    else selected = selected.concat(value);
    this.setState({ selected });
  };

  selectedValue = opt => {
    return this.state.selected.includes(opt);
  };

  render() {
    const item = this.props.item;
    const options = this.props.options || [];
    return (
      <React.Fragment>
        <Label>
          {item.title}
          <RedText>{item.required ? "*" : ""}</RedText>
        </Label>
        <List>
          {options.map(opt => {
            return (
              <ListItem iconRight onPress={() => this.selectValue(opt)}>
                <Left>
                  <Text>{opt}</Text>
                </Left>
                <Right>
                  <CheckBox
                    onPress={() => this.selectValue(opt)}
                    checked={this.selectedValue(opt)}
                  />
                </Right>
              </ListItem>
            );
          })}
        </List>
      </React.Fragment>
    );
  }
}

export default CheckboxInput;
