import {StyleSheet} from 'react-native';

export const loginStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'white',
    borderRadius: 8,
    margin: 16,
    padding: 16,
    width: '80%',
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: 'rgb(101,37,131)',
  },
  buttonContainer: {
    backgroundColor: 'white',
  },
  buttonText: {
    color: 'rgb(101,37,131)',
  },
});
