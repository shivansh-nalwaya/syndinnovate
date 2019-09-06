import { Label, Left, List, ListItem, Radio, Right, Text } from "native-base";
import React, { Component } from "react";
import styled from "styled-components";

const RedText = styled(Text)`
  color: red;
`;

class SelectInput extends Component {
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
              <ListItem iconRight>
                <Left>
                  <Text>{opt}</Text>
                </Left>
                <Right>
                  <Radio />
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
