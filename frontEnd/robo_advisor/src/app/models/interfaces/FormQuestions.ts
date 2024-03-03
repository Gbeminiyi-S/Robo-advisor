import { FormOptions } from "./FormOptions";

export interface FormQuestions {
    id: number;
    text: string;
    name: string,
    options: FormOptions[];
  }