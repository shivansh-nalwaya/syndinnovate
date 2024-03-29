import { Input, Label, Text } from "native-base";
import React, { Component } from "react";
import styled from "styled-components";

const RedText = styled(Text)`
  color: red;
`;

const StyledInput = styled(Input)`
  border-width: 1;
  border-color: #898989;
  margin: 5px;
  background-color: transparent;
`;

class NumberInput extends Component {
  render() {
    const item = this.props.item;
    return (
      <React.Fragment>
        <Label>
          {item.title}
          <RedText>{item.required ? "*" : ""}</RedText>
        </Label>
        <StyledInput disabled={true} placeholder={item.title} />
      </React.Fragment>
    );
  }
}

export default NumberInput;
