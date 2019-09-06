import { Label, Left, List, ListItem, Radio, Right, Text } from "native-base";
import React, { Component } from "react";
import styled from "styled-components";

const RedText = styled(Text)`
  color: red;
`;

class SelectInput extends Component {
  state = { selected: this.props.item.value };

  selectValue = value => {
    this.setState({ selected: value });
    this.props.onChange(value);
    this.props.onDone();
  };

  selectedValue = opt => {
    return opt === this.state.selected;
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
                  <Radio
                    onPress={() => this.selectValue(opt)}
                    selected={this.selectedValue(opt)}
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

export default SelectInput;
