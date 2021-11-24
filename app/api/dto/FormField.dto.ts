import BaseDto from '_api/dto/Base.dto';
import FormFieldValueDto from '_api/dto/FormFieldValue.dto';

export default class FormFieldDto extends BaseDto {
  fieldType: string;

  required: boolean;

  // the index for the field in the form itself
  index: number;

  // the "question"
  content: string;

  // optional description
  description?: string;

  // optional values to select
  values: FormFieldValueDto[];
}
