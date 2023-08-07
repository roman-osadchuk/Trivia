import { httpClientConfig } from 'src/utils/httpClientConfig';
import { IQuestionResponse, IDifficultyEnum } from 'src/types/questionTypes';

export async function getQuestions({ difficulty }: { difficulty: IDifficultyEnum }) {
  return httpClientConfig.httpClient.get<IQuestionResponse>(`api.php?amount=10&difficulty=${difficulty}&type=boolean`);
}
