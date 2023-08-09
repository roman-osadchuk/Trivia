export enum IDifficultyEnum {
  Easy = 'easy',
  Hard = 'hard',
}

export interface IQuestion {
  category: string;
  type: string;
  difficulty: IDifficultyEnum;
  question: string;
  correct_answer: string;
  incorrect_answers: string[]
}

export interface IAnsweredQuestion extends IQuestion {
  isUserAnswerCorrect: string;
}

export interface IQuestionResponse {
  response_code: number;
  results: IQuestion[];
}

export interface IQuestionDataResponse {
  data: IQuestionResponse
}
