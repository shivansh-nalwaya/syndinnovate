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
  componentDidUpdate() {
    if (this.props.focus) this.inputRef._root.focus();
  }

  render() {
    const item = this.props.item;
    return (
      <React.Fragment>
        <Label>
          {item.title}
          <RedText>{item.required ? "*" : ""}</RedText>
        </Label>
        <StyledInput
          ref={ref => (this.inputRef = ref)}
          autoFocus={this.props.focus}
          onChangeText={this.props.onChange}
          placeholder={item.title}
          onSubmitEditing={this.props.onDone}
        />
      </React.Fragment>
    );
  }
}

export default TextareaInput;
