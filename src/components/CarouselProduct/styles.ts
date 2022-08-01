import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 20,
    shadowOffset: { width: 0, height: 10 },
    shadowColor: '#gba(0, 0, 0, 0.03);',
    shadowRadius: 40,
  },
  cardImage: {
    width: 90,
    height: 90,
    resizeMode: 'stretch',
    borderRadius: 10,
  },
  cardFood: {
    fontWeight: '600',
    fontSize: 18,
    marginBottom: 10,
    color: 'black',
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  containerStars: {
    flexDirection: 'row',
    marginRight: 10,
    alignItems: 'center',
  },
  containerDelivery: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  containerDollar: {
    flexDirection: 'row',
    marginRight: 8,
    alignItems: 'center',
  },
});
