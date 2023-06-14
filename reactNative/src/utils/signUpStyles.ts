import {Dimensions, StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'left',
    marginVertical: 10,
    alignSelf: 'flex-start',
  },
  btn: {
    width: width * 0.75,
    height: height * 0.07,
    backgroundColor: 'rgba(4, 59, 92, 0.7)',
    marginHorizontal: 4,
    marginVertical: 10,
    borderRadius: 16,
    opacity: 0.1,
  },
  input: {
    width: width * 0.75,
    height: height * 0.07,
    marginHorizontal: 4,
    marginVertical: 20,

    borderWidth: 2,
    borderRadius: 16,
    color: 'black',
    borderColor: 'rgba(255, 94, 135, 0.17)',
    textAlign: 'center',
  },
  Continuebtn: {
    width: width * 0.75,
    height: height * 0.07,
    marginHorizontal: 4,
    marginVertical: 10,
    borderRadius: 16,
    backgroundColor: '#e24e59',
  },
  errorMsg: {
    color: 'red',
    marginBottom: 10,
  },
  error: {
    borderColor: 'red',
    borderWidth: 1,
  },
  inputTitle: {
    textAlign: 'left',
    marginTop: 4,
    alignSelf: 'flex-start',
  },
  signUp: {
    marginHorizontal: 4,
  },
  toogleBtn: {
    flex: 1,
    height: 50,
    borderRadius: 16,
    borderWidth:2,
    borderColor:"#F2B3B7",
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  toogleBtnPressed: {
    flex: 1,
    height: 50,
    borderRadius: 16,
    backgroundColor: '#e24e59',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth:0,

  },
  toogleBtnText: {
    textAlign: 'center',
    paddingVertical: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#F2B3B7',
  },
  pressedToogleBtnBtnText: {
    textAlign: 'center',
    paddingVertical: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});
// style={{
//   textAlign: 'center',
//   paddingVertical: 10,
//   fontSize: 18,
//   fontWeight: 'bold',
//   color: '#fff',
// }}
