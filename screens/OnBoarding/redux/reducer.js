/**
 * @ Author: Do Xuan Loc - Kun
 * @ Create Time: 2020-02-07 11:27:13
 * @ Modified by: Do Xuan Loc - Kun
 * @ Modified time: 2020-02-07 15:35:25
 * @ Description:
 */

import { TOOGLE_CATEGORY_RUN } from "./actionType";

const initialState = {
  categoryVege: [
    {
      key: "1",
      name: "All",
      status: false
    },
    {
      key: "2",
      name: "Vegan",
      status: true
    },
    {
      key: "3",
      name: "Vegetarian",
      status: false
    },
    {
      key: "4",
      name: "Keto",
      status: true
    },
    {
      key: "5",
      name: "Low Carb",
      status: true
    }
  ]
};

const OnBoarding = (state = initialState, action) => {
  switch (action.type) {
    case TOOGLE_CATEGORY_RUN:
      return {
        ...state,
        categoryVege: action.payload.categoryVege
      };
    default:
      return state;
  }
};

export default OnBoarding;
