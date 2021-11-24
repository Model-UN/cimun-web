import BaseDto from '_api/dto/Base.dto';
import FormFieldDto from '_api/dto/FormField.dto';

export default class FormSectionDto extends BaseDto {
  formId: number;

  title: string;

  subtitle?: string;

  intro?: string;

  outro?: string;

  fields: Array<FormFieldDto>;
}
