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
  postFormSubmission, SubmitFormDto,
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
  padding: 0 16px;
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
  margin: 100px 0;
  padding: 0 16px;
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
  // #TODO - why doesn't this work correctly lol
  const [errorMessage, setErrors] = useState<string>("");

  const initForm = async () => {
    setLoading(true);
    const getFormData = await getFormTemplate("1", "1");
    setFormData(getFormData);
    setLoading(false);
  };

  useEffect(() => {
    initForm();
  }, []);

  const handleSubmit = async (props) => {
    const event = props.event;
    event.preventDefault();
    // array of objects containing id and value from input
    const responses = [];
    // map out data from checkbox responses
    const checkboxMap = {}
    // map out data from ranking responses
    const rankingMap = {"0": {"0": "0"}}
    for (const response of event.target) {
      if (response.value) {
        switch (response.type) {
          case "select-one":
            // handle rank type
            if (response.name.split("-").length === 3) {
              const split = response.name.split("-")
              const responseId = split[0]
              const value = split[1]
              const idx = `${+response.value - 1}`
              if (!rankingMap[responseId]) {
                rankingMap[responseId] = {}
              }
              rankingMap[responseId][idx] = value
              break;
            }
            responses.push({id: +response.name, response: +response.value});
            break;
          case "dropdown":
            responses.push({id: response.name, response: +response.value});
            break;
          case "checkbox":
            const responseId = response.name.split("-")[0];
            if (response.checked) {
              checkboxMap[responseId] ? checkboxMap[responseId].push(+response.value) : checkboxMap[responseId] = [+response.value];
            }
            break;
          case "date":
            if (response.value) {
              responses.push({id: +response.name, response: new Date(response.value)});
            }
            break;
          case "submit":
            break;
          case "password":
          case "text":
          case "textarea":
          case "email":
          case "tel":
          default:
            responses.push({id: +response.name, response: response.value});
            break;
        }
      }
    }
    // handle creating checkbox responses
    for (const id in checkboxMap) {
      responses.push({id: +id, response: checkboxMap[id]})
    }
    // handle creating ranking responses
    for (const id in rankingMap) {
      if (id === '0') {
        continue
      }
      const rankingResponse = []
      for (const index in rankingMap[id]) {
        const value = rankingMap[id][index]
        rankingResponse.splice(+index, 1, +value)
      }
      responses.push({id: +id, response: rankingResponse})
    }
    const request = new SubmitFormDto()
    request.responses = responses;
    // Submit!
    await postFormSubmission('1', '1', {responses})
    // #TODO - redirect home and try-catch with rendered error message "Something went wrong, try again (err: error_code)"
    props.history.push('')
  };

  const renderFormItem = ({content, description, fieldType, id, required, values}: FormField, index: number) => {
    const fieldInputTypeMap = {
      "SHORT_ANSWER": "text",
      "LONG_ANSWER": "textarea",
      "SCALE": "text",
      "RANK": "rank",
      "SELECTION": "select",
      "MULTIPLE_SELECTION": "checkbox",
      "DROPDOWN": "select",
      "DATE": "date",
      "EMAIL": "email",
      "TELEPHONE": "tel",
      "SECURE_INPUT": "password",
      "POSTAL_CODE": "text",
    };
    const inputType = fieldInputTypeMap[fieldType];

    let InputContent: JSX.Element
    switch (inputType) {
      case 'textarea':
          InputContent = <LongSeggsyInput required={required} name={`${id}`} />
        break;
      case 'rank':
        InputContent = (
            <>
              {values.map((value, _) => {
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
                      <SelectSeggsyInput required={required} name={`${id}-${value.id}-rank`}>
                        {values.map((_, index) => {
                          return (
                            <option value={`${index + 1}`}>
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
        break;
      case 'select':
        InputContent = (
          <div
            style={{
              flexDirection: "row",
              display: "flex",
              alignItems: "center",
            }}
          >
            <SelectSeggsyInput required={required} name={`${id}`}>
              {values.map((value, _) => {
                return (
                    <option value={`${value.id}`}>{value.value}</option>
                );
              })}
            </SelectSeggsyInput>
            <Icon icon={"chevron-down"} />
          </div>
        );
        break;
      case 'checkbox':
        InputContent = (
          <>
            {values.map((value, index) => {
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
                      required={required}
                      name={`${id}-${index}-input`}
                      value={value.id}
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
        break;
      case 'text':
      default:
        InputContent = <SeggsyInput required={required} name={`${id}`} type={inputType} />
        break;
    }

    return (
      <>
        <div style={{ marginBottom: description ? "-30px" : "0px" }}>
          <Body>{content}</Body>
        </div>
        {description && (
          <Body size="14px" styling="italic" margins="12.5px 0 20px 0">
            {description}
          </Body>
        )}
        {InputContent}
      </>
    );
  };

  return (
    <ComponentWrapper>
      {!loading && formData !== null && formData !== undefined && (
        <SubTitle align="center" width="75%" self="center">
          {formData.sections[0].intro}
        </SubTitle>
      )}
      {!loading && formData !== null && formData !== undefined && (
        <Form onSubmit={handleSubmit}>
          {formData.sections[0].fields.map((field, index) => {
            return renderFormItem(field, index);
          })}
          {errorMessage ? <p>{errorMessage}</p> : ""}
          <SeggsySubmit type="submit" value="Submit" />
        </Form>
      )}
    </ComponentWrapper>
  );
};

export default SteppedForm;
