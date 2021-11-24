import React, { useEffect, useState } from 'react';
// import { useRouter } from 'next/router';
import { Body, SubTitle } from '_app/styles/typography';
import { ComponentWrapper } from '_app/styles/containers';
import FetchFormResponseDto from '_api/dto/FetchFormResponse.dto';
import MundoClient from '_api/MundoClient';
import FormFieldDto from '_api/dto/FormField.dto';
import SubmitFormDto from '_api/dto/SubmitForm.dto';
import FieldInputTypeMap from '_app/types/enums/FieldInputTypeMap';
import FormFieldResponseDto from '_api/dto/FormFieldResponse.dto';
import {
  CheckySeggsyInput,
  Form,
  Icon,
  LongSeggsyInput,
  SeggsyInput,
  SeggsySubmit,
  SelectSeggsyInput,
} from './SteppedForm.styles';

interface OwnProps {
  confId: string;
  formId: string;
}

const SteppedForm = (props: OwnProps) => {
  const { confId, formId } = props;
  const [formData, setFormData] = useState<FetchFormResponseDto>();
  const [loading, setLoading] = useState<boolean>(true);
  // #TODO - why doesn't this work correctly lol
  const [errorMessage, setErrors] = useState<string>('');
  // const router = useRouter();

  useEffect(() => {
    const client = new MundoClient();

    async function initForm() {
      setLoading(true);
      const getFormData = await client.getFormTemplate(confId, formId);
      setFormData(getFormData);
      setLoading(false);
    }

    initForm().catch(() => setErrors('Something went wrong, please try'
        + ' again later. If this issue persists, please contact our'
        + ' development team at engineering@cimun.org.'));
  }, [setErrors, confId, formId]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // array of objects containing id and value from input
    const responses: FormFieldResponseDto[] = [];
    // map out data from checkbox responses
    const checkboxMap: Record<string, Array<number>> = {};
    // map out data from ranking responses
    const rankingMap: Record<number, Record<number, string>> = { 0: { 0: '0' } };

    for (let idx = 0; idx < event.currentTarget.elements.length; idx += 1) {
      const response = event.currentTarget[idx] as HTMLInputElement;
      if (response.value) {
        switch (response.type) {
          case 'select-one':
            // handle rank type
            if (response.name.split('-').length === 3) {
              const split = response.name.split('-');
              const responseId: number = +split[0];
              const value = split[1];
              const valueIdx = `${+response.value - 1}`;
              if (!rankingMap[responseId]) {
                rankingMap[responseId] = {};
              }
              rankingMap[responseId][valueIdx] = value;
              break;
            }
            responses.push({ id: +response.name, response: +response.value });
            break;
          case 'dropdown':
            responses.push({ id: +response.name, response: +response.value });
            break;
          case 'checkbox':
            if (response.checked) {
              if (checkboxMap[response.name.split('-')[0]]) {
                checkboxMap[response.name.split('-')[0]].push(+response.value);
              } else {
                (checkboxMap[response.name.split('-')[0]] = [+response.value]);
              }
            }
            break;
          case 'date':
            if (response.value) {
              responses.push({
                id: +response.name,
                response: new Date(response.value),
              });
            }
            break;
          case 'submit':
            break;
          case 'password':
          case 'text':
          case 'textarea':
          case 'email':
          case 'tel':
          default:
            responses.push({ id: +response.name, response: response.value });
            break;
        }
      }
    }

    for (const id in checkboxMap) {
      if (Object.prototype.hasOwnProperty.call(checkboxMap, id)) {
        responses.push({ id: +id, response: checkboxMap[id] });
      }
    }
    // handle creating ranking responses
    for (const id in rankingMap) {
      if (Object.prototype.hasOwnProperty.call(rankingMap, id) && id !== '0') {
        const rankingResponse = [];
        for (const index in rankingMap[id]) {
          if (Object.prototype.hasOwnProperty.call(rankingMap, id)) {
            const value = rankingMap[id][index];
            rankingResponse.splice(+index, 1, +value);
          }
        }
        responses.push({ id: +id, response: rankingResponse });
      }
    }
    const request: SubmitFormDto = new SubmitFormDto();
    request.responses = responses;
    // Submit!
    try {
      const client = new MundoClient();
      await client.postFormSubmission(confId, formId, { responses });
      // await router.replace('/');
      // alert('Application submitted successfully!');
    } catch (error) {
      console.log(error);
      // alert(`Couldn't submit application. ${error.response.data.error}`);
    }
  };

  const renderFormItem = (
    {
      content, description, fieldType, id, required, values,
    }: FormFieldDto,
    index: number,
  ) => {
    const inputType = FieldInputTypeMap.get(fieldType);
    let InputContent: JSX.Element;
    let optionIdx: number = index;

    switch (inputType) {
      case 'textarea':
        InputContent = <LongSeggsyInput required={required} name={`${id}`} />;
        break;
      case 'rank':
        InputContent = (
          <>
            {values.map((value) => (
              <div
                style={{
                  flexDirection: 'row',
                  width: '100%',
                  display: 'flex',
                  alignItems: 'space-between',
                  margin: '10px 0px',
                }}
              >
                <div
                  style={{
                    flexDirection: 'row',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <SelectSeggsyInput
                    required={required}
                    name={`${id}-${value.id}-rank`}
                  >
                    {values.map(
                      () => {
                        optionIdx += 1;
                        return (
                          <option
                            value={`${optionIdx + 1}`}
                          >
                            {optionIdx + 1}
                          </option>
                        );
                      },
                    )}
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
            ))}
          </>
        );
        break;
      case 'select':
        InputContent = (
          <div
            style={{
              flexDirection: 'row',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <SelectSeggsyInput required={required} name={`${id}`}>
              {values.map((value) => (
                <option
                  value={`${value.id}`}
                >
                  {value.value}
                </option>
              ))}
            </SelectSeggsyInput>
            <Icon icon="chevron-down" />
          </div>
        );
        break;
      case 'checkbox':
        InputContent = (
          <>
            {values.map((value) => (
              <div
                style={{
                  flexDirection: 'row',
                  width: '100%',
                  display: 'flex',
                  alignItems: 'space-between',
                  margin: '5px 0px',
                }}
              >
                <div
                  style={{
                    flexDirection: 'row',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <CheckySeggsyInput
                    required={required}
                    name={`${id}-${optionIdx}-input`}
                    value={value.id}
                    type="checkbox"
                  />
                </div>
                <Body
                  size="16px"
                  self="center"
                  width="80%"
                  margins="0 0 0 3%"
                >
                  {value.value}
                </Body>
              </div>
            ))}
          </>
        );
        break;
      case 'text':
      default:
        InputContent = (
          <SeggsyInput required={required} name={`${id}`} type={inputType} />
        );
        break;
    }

    return (
      <>
        <div style={{ marginBottom: description ? '-30px' : '0px' }}>
          <Body>{required ? `${content}*` : content}</Body>
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
          {formData.sections[0].fields
            .sort((a, b) => a.index - b.index)
            .map((field, index) => renderFormItem(field, index))}
          {errorMessage ? <p>{errorMessage}</p> : ''}
          <SeggsySubmit type="submit" value="Submit" />
        </Form>
      )}
    </ComponentWrapper>
  );
};

export default SteppedForm;
