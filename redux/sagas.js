/**
 * @ Author: Do Xuan Loc - Kun
 * @ Create Time: 2020-02-07 11:13:50
 * @ Modified by: Do Xuan Loc - Kun
 * @ Modified time: 2020-02-07 15:03:27
 * @ Description:
 */

import { all } from "redux-saga/effects";

import onBoarding from "../screens/OnBoarding/redux/saga";

export default function* rootSaga() {
  yield all([
    onBoarding()
  ]);
};