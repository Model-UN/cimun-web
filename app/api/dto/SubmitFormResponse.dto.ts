import BaseDto from '_api/dto/Base.dto';

export default class SubmitFormResponseDto extends BaseDto {
  formId: number;

  // TODO: The schema for this is known, but is not necessary on submission.
  //  As a result, please reevaluate this decision as development continues.
  responses: Array<unknown>;
}
