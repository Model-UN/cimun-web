import React, { useEffect, useState } from "react";
import { SubTitle, Body } from "../../styles/typography";
import { ComponentWrapper } from "../../styles/containers";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { breakpoints } from "../../styles/breakpoints";
import { fonts } from "../../styles/fonts";
import { colors } from "../../styles/colors";
import {
  getFormTemplate,
  postFormSubmission,
} from "../../services/axiosHandler";
import { ApiFormData, FormField } from "./form-interfaces";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%;
  ${breakpoints("width", "", [{ 800: "97.5%" }])};
  justify-content: center;
  margin: 7vh 0;
  ${breakpoints("margin", "", [{ 800: "3vh 0" }])};
  padding: 0;
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

const SeggsySubmit = styled.input`
  width: 25%;
  ${breakpoints("width", "", [{ 800: "75%" }])};
  height: 56px;
  align-self: center;
  margin: 100px 0px;
  padding: 0px 16px;
  border: none;
  border-radius: 4px;
  font-family: ${fonts.body}, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  background-color: ${colors.primaryBlue};
  color: white;
  transition: 0.5s width ease-in-out;

  &:hover {
    cursor: pointer;
    width: 50%;
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

const CheckySeggsyInput = styled.input`
  width: 32px;
  height: 32px;
  appearance: none;
  -webkit-appearance: none;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: rgba(255, 255, 255, 0.3);
  border: 2px solid ${colors.kindaFadedltGray};
  border-radius: 4px;
  transition: 0.3s all ease-in-out;

  &:hover {
    background-color: rgba(255, 255, 255, 0.45);
    border-color: ${colors.ltGray};
  }
  &:active,
  :checked:active {
    background-color: ${colors.fadedPrimaryBlue};
    border: 2px solid ${colors.fadedPrimaryBlue};
  }
  &:checked {
    background-color: rgba(255, 255, 255, 0.3);
    border: 2px solid ${colors.primaryBlue};
    color: white;
    background-color: ${colors.primaryBlue};
  }
  &:checked:after {
    content: "✓";
    font-family: ${fonts.body}, sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: normal;
    color: white;
  }
`;

const Icon = styled(FontAwesomeIcon)`
  font-size: 16px;
  height: 16px;
  margin-left: -32px;
  color: ${colors.dkGray};
`;

const SteppedForm = () => {
  const [formData, setFormData] = useState<ApiFormData>();
  const [loading, setLoading] = useState<boolean>(true);

  const initForm = async () => {
    setLoading(true);
    const getFormData = await getFormTemplate("1", "1");
    setFormData(getFormData);
    console.log(getFormData);
    setLoading(false);
  };

  useEffect(() => {
    initForm();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // array of objects containing id and value from input
    const responses = [];
    // get id and values from input field
    for (const response of event.target) {
      if (response.type !== "checkbox") {
        responses.push({ id: response.name, value: response.value });
      }
      if (response.type === "checkbox" && response.checked === true) {
        responses.push({ id: response.name, value: `${response.value}-true` });
      }
      if (response.type === "checkbox" && response.checked === false) {
        responses.push({ id: response.name, value: `${response.value}-false` });
      }
    }
    console.log(responses);

    // #TODO - the below
    // get event data
    // mutate event data into new object for post
    // post submission to API
  };

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
        inputType = "rank";
        break;
      case "SELECTION":
        inputType = "select";
        break;
      case "MULTIPLE_SELECTION":
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
      <SeggsyInput name={`${field.id}-input`} type={inputType} />
    );
    if (inputType === "textarea") {
      InputContent = <LongSeggsyInput name={`${field.id}-input`} />;
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
          <SelectSeggsyInput name={`${field.id}-input`}>
            {field.values.map((value, index) => {
              return (
                <option value={`value-${value.value}`}>{value.value}</option>
              );
            })}
          </SelectSeggsyInput>
          <Icon icon={"chevron-down"} />
        </div>
      );
    }
    if (inputType === "checkbox") {
      InputContent = (
        <>
          {field.values.map((value, index) => {
            return (
              <div
                style={{
                  flexDirection: "row",
                  width: "100%",
                  display: "flex",
                  alignItems: "space-between",
                  margin: "5px 0px",
                }}
              >
                <div
                  style={{
                    flexDirection: "row",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <CheckySeggsyInput
                    name={`${field.id}-${index}-input`}
                    value={value.value}
                    type="checkbox"
                  />
                </div>
                <Body size="16px" self="center" width="80%" margins="0 0 0 3%">
                  {value.value}
                </Body>
              </div>
            );
          })}
        </>
      );
    }
    if (inputType === "rank") {
      InputContent = (
        <>
          {field.values.map((value, index) => {
            return (
              <div
                style={{
                  flexDirection: "row",
                  width: "100%",
                  display: "flex",
                  alignItems: "space-between",
                  margin: "10px 0px",
                }}
              >
                <div
                  style={{
                    flexDirection: "row",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <SelectSeggsyInput name={`${field.id}-${index}-input`}>
                    {field.values.map((_, index) => {
                      return (
                        <option value={`value-${index + 1}`}>
                          {index + 1}
                        </option>
                      );
                    })}
                  </SelectSeggsyInput>
                </div>
                <Body
                  size="16px"
                  self="center"
                  width="80%"
                  margins="0 0 0 7.5%"
                >
                  {value.value}
                </Body>
              </div>
            );
          })}
        </>
      );
    }
    return (
      <>
        <div style={{ marginBottom: field.description ? "-30px" : "0px" }}>
          <Body>{field.content}</Body>
        </div>
        {field.description && (
          <Body size="14px" styling="italic" margins="12.5px 0 20px 0">
            {field.description}
          </Body>
        )}
        {InputContent}
      </>
    );
  };

  return (
    <ComponentWrapper>
      <SubTitle align="center" width="75%" self="center">
        {loading ? "" : formData.sections[0].intro}
      </SubTitle>
      {!loading && (
        <Form onSubmit={handleSubmit}>
          {formData.sections[0].fields.map((field, index) => {
            return renderFormItem(field, index);
          })}
          <SeggsySubmit type="submit" value="Submit" />
        </Form>
      )}
    </ComponentWrapper>
  );
};

export default SteppedForm;
