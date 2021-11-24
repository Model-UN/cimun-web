/**
 * Client to use for MUNDO API requests.
 */
import AxiosHandler, { IAxiosHandler } from '_api/AxiosHandler';
import FetchFormResponseDto from '_api/dto/FetchFormResponse.dto';
import SubmitFormDto from '_api/dto/SubmitForm.dto';
import Globs from '_constants/globs';
import SubmitFormResponseDto from '_api/dto/SubmitFormResponse.dto';

export interface IMundoClient extends IAxiosHandler {
  PREFIX: string;

  getFormTemplate(confId: string, formId: string): Promise<FetchFormResponseDto>;

  postFormSubmission(confId: string, formId: string,
    submitFormDto: SubmitFormDto): Promise<SubmitFormResponseDto>
}

export default class MundoClient extends AxiosHandler implements IMundoClient {
  PREFIX = Globs.API.URL_PREFIX;

  /*
   * Retrieves data for a form to be rendered
   */
  getFormTemplate = async (confId: string, formId: string): Promise<FetchFormResponseDto> => {
    const url = `${this.PREFIX}/conferences/${confId}/forms/${formId}`;
    return this.get<FetchFormResponseDto>(url);
  };

  /**
   * POSTs a submission for a form
   */
  postFormSubmission = async (
    confId: string,
    formId: string,
    submitFormDto: SubmitFormDto,
  ): Promise<SubmitFormResponseDto> => {
    const url = `${this.PREFIX}/conferences/${confId}/forms/${formId}/submissions`;
    return this.post<SubmitFormResponseDto>(url, submitFormDto);
  };
}
