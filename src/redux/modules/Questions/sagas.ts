import { all, call, put, takeLatest } from 'redux-saga/effects';
import * as Api from '../../services/api/questions/routes';
import { GET_QUESTIONS, getQuestionsActionType } from './actions';
import { putAllQuestions, setQuestionsLoading, setQuestionsError } from './slices';
import { IQuestionDataResponse } from 'src/types/questionTypes';

function* getQuestions(difficulty: getQuestionsActionType) {
  try {
    yield put(setQuestionsLoading(true));
    const questionsResp: IQuestionDataResponse = yield call(Api.getQuestions, { difficulty: difficulty.payload });
    yield put(putAllQuestions(questionsResp.data.results));
  } catch (error) {
    yield put(setQuestionsError(error));
  } finally {
    yield put(setQuestionsLoading(false));
  }
}

export function* questionsSaga(): Generator<object> {
  yield all([
    yield takeLatest(GET_QUESTIONS, getQuestions),
  ])
}
