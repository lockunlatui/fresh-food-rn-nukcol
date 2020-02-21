/**
 * @ Author: Do Xuan Loc - Kun
 * @ Create Time: 2020-01-23 14:30:36
 * @ Modified by: Do Xuan Loc - Kun
 * @ Modified time: 2020-01-23 17:32:34
 * @ Description:
 */
import * as Yup from "yup";
import { i18n } from '../../utils';

const CreateAccountSchema = Yup.object().shape({
  fullName: Yup.string().required(i18n.t('validations.requireFullName')),
  email: Yup.string()
    .email(i18n.t('validations.invalidEmail'))
    .required(i18n.t('validations.requireEmail')),
  password: Yup.string().required(i18n.t('validations.requirePassword'))
});

export default CreateAccountSchema;