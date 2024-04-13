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

export class CreateStudentDto {
  aDA : boolean;
  advisorId : string;
  arrivalDate : Date;
  committeeId : string;
  position : string;
  departureDate : Date;
  dietaryNeeds : string;
  firstName : string;
  lastName : string;
  roomNumber : number;

  constructor(aDA : string, advisorId : string, arrivalDate : string,
    committeeId : string, position : string, departureDate : string,
    dietaryNeeds : string, firstName : string, lastName : string, roomNumber : string) {
    this.aDA = Boolean(aDA).valueOf();
    this.advisorId = advisorId;
    let arrivalTime: number = Date.parse(arrivalDate);
    this.arrivalDate = new Date(arrivalTime);
    this.committeeId = committeeId;
    this.position = position;
    let departureTime: number = Date.parse(departureDate);
    this.departureDate = new Date(departureTime)
    this.dietaryNeeds = dietaryNeeds;
    this.firstName = firstName;
    this.lastName = lastName;
    this.roomNumber= Number(roomNumber);
  }
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

export const addStudent = async (
  formData: FormData
): Promise<AxiosResponse> => {
  //turn formdata into student dto
  let studentDto = new CreateStudentDto(formData.get("aDA") as string, formData.get("advisorId") as string,
  formData.get("arrivalDate") as string, formData.get("committeeId") as string,
  formData.get("position") as string, formData.get("departureDate") as string, formData.get("dietaryNeeds") as string,
  formData.get("firstName") as string, formData.get("lastName") as string, formData.get("roomNumber") as string)
  var jsonStudent = JSON.stringify(studentDto)
  let responseData;
  await axios.post("https://idea-api-419802.uc.r.appspot.com/student", studentDto)
  .then((response) => {
    responseData = response.data;
    console.log(responseData);
  })
  .catch((error) => {
    console.log(error);
  });
  return responseData;
};
