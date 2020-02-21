/**
 * @ Author: Do Xuan Loc - Kun
 * @ Create Time: 2020-01-23 13:50:03
 * @ Modified by: Do Xuan Loc - Kun
 * @ Modified time: 2020-01-23 13:54:47
 * @ Description:
 */

import * as Localization from "expo-localization";
import i18n from "i18n-js";

import { En, Vi } from "../constants";

i18n.translations = {
  en: En,
  vi: Vi
};

i18n.locale = Localization.locale;

i18n.fallbacks = true;

export default i18n;
