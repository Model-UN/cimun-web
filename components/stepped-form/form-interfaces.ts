export interface FormField {
    id: number;
    active: boolean
    createdBy: number
    updatedBy: number
    createdOn: Date
    updatedOn: Date
    fieldType: string;
    required: boolean;
    content: string; // the "question"
    description?: string; // optional description
    values?: any[]; // optional values to select
}

export interface ApiFormData {
    id: number
    active: boolean
    createdBy: number
    updatedBy: number
    createdOn: Date
    updatedOn: Date
    sections: FormSection[]
}

interface FormSection {
    id: number
    active: boolean
    createdBy: number
    updatedBy: number
    createdOn: Date
    updatedOn: Date
    formId: number
    title?: string
    subtitle?: string
    intro?: string
    outro?: string
    fields: FormField[]
}

