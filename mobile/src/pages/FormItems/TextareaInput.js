import { Label, Text, Textarea } from "native-base";
import React, { Component } from "react";
import styled from "styled-components";

const RedText = styled(Text)`
  color: red;
`;

const StyledInput = styled(Textarea)`
  border-width: 1;
  border-color: #898989;
  margin: 5px;
  background-color: transparent;
`;

class TextareaInput extends Component {
  render() {
    const item = this.props.item;
    return (
      <React.Fragment>
        <Label>
          {item.title}
          <RedText>{item.required ? "*" : ""}</RedText>
        </Label>
        <StyledInput placeholder={item.title} />
      </React.Fragment>
    );
  }
}

export default TextareaInput;
