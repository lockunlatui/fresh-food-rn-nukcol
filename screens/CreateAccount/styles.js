/**
 * @ Author: Do Xuan Loc - Kun
 * @ Create Time: 2020-01-23 11:12:00
 * @ Modified by: Do Xuan Loc - Kun
 * @ Modified time: 2020-02-06 15:51:21
 * @ Description:
 */

import { StyleSheet, Dimensions } from 'react-native';
import { Colors } from '../../constants';

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  wrapTitle: {
    marginBottom: (width / height) * 149,
    alignSelf: "center"
  },
  wrapForm: {
    marginTop: (width / height) * 135,
    flex: 1
  },
  error: {
    marginLeft: (width / height) * 30,
    marginRight: (width / height) * 30,
    marginTop: 10,
    marginBottom: 10,
    color: Colors.red
  },
  wrapBtnClose:{
    width: 30,
    height: 30,
    zIndex: 2,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginRight: (width / height) * 30,
  },
  btnClose:{
    width: 14,
    height: 14
  }
});

export default styles;