import axios, { AxiosResponse } from "axios";

const BASE_URL = "https://api.cimun.org/api/v1";
const COMMS_DELG_URL =
  "https://api.cimun.org/api/v1/papers/62ca546c7cda019110923422";
// const BASE_URL = "http://localhost:8000/api/v1";

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

export const getCommitteesDelegations = async () => {
  let responseData;
  await axios
    .get(`${COMMS_DELG_URL}`)
    .then((response) => {
      responseData = response.data.papers;
      console.log(responseData);
    })
    .catch((error) => {
      console.log(error);
    });
  return responseData;
};

export const getPositionPaper = async (hash) => {
  let responseData;
  if (hash) {
    await axios
      .get(
        `https://api.cimun.org/api/v1/papers/62ca546c7cda019110923422?paper_hash_id=${hash}`
      )
      .then((response) => {
        responseData = response.data;
        console.log(responseData);
      })
      .catch((error) => {
        console.log(error);
      });
    return responseData;
  }
};

export const postFormSubmission = async (
  formId: string,
  submitFormDto: SubmitFormDto
): Promise<AxiosResponse> => {
  return await axios.post(`${BASE_URL}/forms/${formId}`, submitFormDto);
};
