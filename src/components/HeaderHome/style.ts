import { StyleSheet } from 'react-native';
import { textPrimarycolor } from '../../utils/contants';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  deliveryText: {
    color: textPrimarycolor,
    marginBottom: 5,
    fontWeight: '600',
    fontSize: 18,
  },
  locationText: {
    color: textPrimarycolor,
    marginRight: 5,
    fontWeight: '300',
  },
  header: {
    flex: 2,
  },
  mainSection: {
    flex: 5,
    height: 100,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  line: {
    borderColor: '#fff',
    borderWidth: 0.3,
    borderStyle: 'solid',
    marginHorizontal: 20,
  },
});
