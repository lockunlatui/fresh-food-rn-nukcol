/**
 * @ Author: Do Xuan Loc - Kun
 * @ Create Time: 2020-02-07 11:15:34
 * @ Modified by: Do Xuan Loc - Kun
 * @ Modified time: 2020-02-11 11:30:44
 * @ Description:
 */

import { TOOGLE_CATEGORY_INIT, TOOGLE_CATEGORY_RUN } from "./actionType";
import { all, takeEvery, select, put } from "redux-saga/effects";

const categoryVege = state => state.onBoarding.categoryVege;

function* toogleCategory(action) {
  const { payload } = action ;
  const id = payload.idCategory;
  const categoryVegeSelect = yield select(categoryVege);

  const chacha = [...categoryVegeSelect];

  const solo = chacha.map((item) => {
    
  })

  yield put({
    type: TOOGLE_CATEGORY_RUN,
    payload: {
      categoryVege: solo
    }
  });

  console.log('Run saga', id, categoryVegeSelect);
};

const toogleCategorySaga = takeEvery(TOOGLE_CATEGORY_INIT, toogleCategory);


export default function* onBoardingSaga() {
  yield all([
    toogleCategorySaga
  ])
};