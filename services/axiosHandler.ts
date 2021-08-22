import axios from "axios";

const BASE_URL = "https://api.cimun.org"

export class SubmitFormDto {
  responses: Array<FormFieldResponseDto>;
}

export class FormFieldResponseDto {
  id: number;
  response: any;
}

export const getFormTemplate = async (confId: string, formId: string) => {
  let responseData;
  await axios
    .get(`${BASE_URL}/conferences/${confId}/forms/${formId}`)
    .then((response) => {
      console.log(response);
      responseData = response.data;
    })
    .catch((error) => {
      console.log(error);
    });
  return responseData;
};

export const postFormSubmission = async (
  confId: string,
  formId: string,
  submitFormDto: SubmitFormDto
) => {
  axios
    .post(
      `${BASE_URL}/conferences/${confId}/forms/${formId}/submissions`,
      submitFormDto
    )
    .catch((error) => {
      console.log(error);
    });
};
