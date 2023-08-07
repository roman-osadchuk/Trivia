import { all, fork } from 'redux-saga/effects';

import { questionsSaga } from 'src/redux/modules/Questions/sagas';

export default function* rootSaga() {
  yield all([fork(questionsSaga)]);
}
