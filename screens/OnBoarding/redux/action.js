/**
 * @ Author: Do Xuan Loc - Kun
 * @ Create Time: 2020-02-07 11:59:50
 * @ Modified by: Do Xuan Loc - Kun
 * @ Modified time: 2020-02-07 15:21:11
 * @ Description:
 */

import { TOOGLE_CATEGORY_INIT } from "./actionType";

export const toogleCategory = idCategory => ({
  type: TOOGLE_CATEGORY_INIT,
  payload: {
    idCategory
  }
});