import React, { useRef, useEffect, createRef } from "react";
import { SubTitle, Body } from "../../styles/typography";
import { ComponentWrapper } from "../../styles/containers";
import { exampleData } from "./example-data";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { breakpoints } from "../../styles/breakpoints";
import { fonts } from "../../styles/fonts";
import { colors } from "../../styles/colors";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: center;
  margin: 7vh 0;
  padding: 0;
`;
const Label = styled.label`
  margin: 0px 7px;
  font-size: 0.9rem ${breakpoints("font-size", "", [{ 1000: ".7rem" }])};
  font-style: italic;
`;
const SeggsyInput = styled.input`
  width: 100%;
  height: 56px;
  position: relative;
  padding: 0px 16px;
  border: 2px solid ${colors.kindaFadedltGray};
  border-radius: 4px;
  font-family: ${fonts.body}, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  background-color: rgba(255, 255, 255, 0.3);
  color: #282828;
  outline-color: ${colors.primaryBlue};
  transition: 0.3s background-color ease-in-out, 0.3s border-color ease-in-out;

  &:hover {
    background-color: rgba(255, 255, 255, 0.45);
    border-color: ${colors.ltGray};
  }
`;

const LongSeggsyInput = styled.textarea`
  width: 100%;
  height: 150px;
  position: relative;
  padding: 8px 16px;
  border: 2px solid ${colors.kindaFadedltGray};
  border-radius: 4px;
  font-family: ${fonts.body}, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  background-color: rgba(255, 255, 255, 0.3);
  color: #282828;
  outline-color: ${colors.primaryBlue};
  transition: 0.3s background-color ease-in-out, 0.3s border-color ease-in-out;

  &:hover {
    background-color: rgba(255, 255, 255, 0.45);
    border-color: ${colors.ltGray};
  }
`;

const SelectSeggsyInput = styled.select`
  width: 100%;
  height: 56px;
  position: relative;
  padding: 4px 16px;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  border: 2px solid ${colors.kindaFadedltGray};
  border-radius: 4px;
  font-family: ${fonts.body}, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  background-color: rgba(255, 255, 255, 0.3);
  color: #282828;
  outline-color: ${colors.primaryBlue};
  transition: 0.3s background-color ease-in-out, 0.3s border-color ease-in-out;

  &:hover {
    background-color: rgba(255, 255, 255, 0.45);
    border-color: ${colors.ltGray};
  }
`;

const Icon = styled(FontAwesomeIcon)`
  font-size: 16px;
  height: 16px;
  margin-left: -32px;
  color: ${colors.dkGray};
`;

interface FormField {
  id: number;
  fieldType: string;
  required: boolean;
  content: string; // the "question"
  description?: string; // optional description
  values?: any[]; // optional values to select
}

const SteppedForm = () => {
  const inputRefs = useRef([]);

  useEffect(() => {
    inputRefs.current = Array(exampleData.sections[0].fields.length)
      .fill(inputRefs)
      .map((_, i) => inputRefs.current[i] || createRef());
  }, [inputRefs]);

  const renderFormItem = (field: FormField, index: number) => {
    let inputType: string;
    switch (field.fieldType) {
      case "SHORT_ANSWER":
        inputType = "text";
        break;
      case "LONG_ANSWER":
        inputType = "textarea";
        break;
      case "SCALE":
        inputType = "text";
        break;
      case "RANK":
        inputType = "text";
        break;
      case "SINGLE_RESPONSE":
        inputType = "select";
        break;
      case "MULTIPLE_CHOICE":
        inputType = "checkbox";
        break;
      case "DROPDOWN":
        inputType = "select";
        break;
      case "DATE":
        inputType = "date";
        break;
      case "EMAIL":
        inputType = "email";
        break;
      case "TELEPHONE":
        inputType = "tel";
        break;
      case "SECURE_INPUT":
        inputType = "password";
        break;
      case "POSTAL_CODE":
        inputType = "text";
        break;
      default:
        inputType = "text";
        break;
    }

    let InputContent = (
      <SeggsyInput
        name={`${field.fieldType}-input`}
        type={inputType}
        ref={inputRefs.current[index]}
      />
    );
    if (inputType === "textarea") {
      InputContent = (
        <LongSeggsyInput
          name={`${field.fieldType}-input`}
          ref={inputRefs.current[index]}
        />
      );
    }
    if (inputType === "select") {
      InputContent = (
        <div
          style={{
            flexDirection: "row",
            display: "flex",
            alignItems: "center",
          }}
        >
          <SelectSeggsyInput
            name={`${field.fieldType}-input`}
            ref={inputRefs.current[index]}
          >
            {field.values.map((value, index) => {
              return <option value="value">{value}</option>;
            })}
          </SelectSeggsyInput>
          <Icon icon={"chevron-down"} />
        </div>
      );
    }
    return (
      <>
        <Body>
          {field.content}
          {field.description && <Label>({field.description})</Label>}
        </Body>
        {InputContent}
      </>
    );
  };

  return (
    <ComponentWrapper>
      <SubTitle align="center">
        {exampleData.sections[0].content.intro}
      </SubTitle>
      <Form>
        {exampleData.sections[0].fields.map((field, index) => {
          return renderFormItem(field, index);
        })}
      </Form>
    </ComponentWrapper>
  );
};

export default SteppedForm;
