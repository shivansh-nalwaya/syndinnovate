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

class Textnput extends Component {
  render() {
    const item = this.props.item;
    return (
      <React.Fragment>
        <Label>
          {item.title}
          <RedText>{item.required ? "*" : ""}</RedText>
        </Label>
        <StyledInput placeholder={item.title} disabled={true} />
      </React.Fragment>
    );
  }
}

export default Textnput;
