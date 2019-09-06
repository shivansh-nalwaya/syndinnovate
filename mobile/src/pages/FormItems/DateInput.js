import { Input, Label, Text, DatePicker } from "native-base";
import React, { Component } from "react";
import styled from "styled-components";

const RedText = styled(Text)`
  color: red;
`;

class DateInput extends Component {
  render() {
    const item = this.props.item;
    return (
      <React.Fragment>
        <Label>
          {item.title}
          <RedText>{item.required ? "*" : ""}</RedText>
        </Label>
        <DatePicker
          locale={"en"}
          androidMode={"default"}
          placeHolderText={item.title}
          onDateChange={this.setDate}
        />
      </React.Fragment>
    );
  }
}

export default DateInput;
