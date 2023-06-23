export interface FormField {
  _id: string;
  active: boolean;
  field_type: string;
  required: boolean;
  index: number; // the index for the field in the form itself
  content: string; // the "question"
  description?: string; // optional description
  values?: any[]; // optional values to select
}

export interface ApiFormData {
  _id: string;
  created_by: number;
  updated_by: number;
  created_on: Date;
  updated_on: Date;
  sections: FormSection[];
}

interface FormSection {
  _id: string;
  active: boolean;
  title?: string;
  subtitle?: string;
  intro?: string;
  outro?: string;
  fields: FormField[];
}
