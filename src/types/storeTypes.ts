import { IQuestionsState } from 'src/redux';
import { PersistedState } from 'redux-persist';

export type rootReducerType = {
  questions: IQuestionsState & PersistedState
}

export type actionType = {
  type: string,
  payload: object,
}
