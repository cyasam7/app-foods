import { StyleSheet } from 'react-native';
import { defaultPrimarycolor } from '../../utils/contants';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: defaultPrimarycolor,
  },
  header: {
    flex: 2,
    paddingHorizontal: 10,
  },
  mainSection: {
    flex: 5,
    height: 100,
    backgroundColor: '#EBEBEB',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    shadowColor: 'rgba(0,0,0,.4)',
    shadowOffset: {
      height: 10,
      width: 10,
    },
  },
});
