import axios, {AxiosResponse} from "axios";

const BASE_URL = "https://api.cimun.org/api/v1"
// const BASE_URL = "http://localhost:8000/api/v1"

export class SubmitFormDto {
  responses: Array<FormFieldResponseDto>;
}

export class FormFieldResponseDto {
  id: number;
  response: any;
}

export const getFormTemplate = async (formId: string) => {
  let responseData;
  await axios
    .get(`${BASE_URL}/forms/${formId}`)
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
  formId: string,
  submitFormDto: SubmitFormDto
): Promise<AxiosResponse> => {
  return await axios
    .post(
      `${BASE_URL}/forms/${formId}`,
      submitFormDto
    )
};
