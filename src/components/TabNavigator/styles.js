import {StyleSheet, Platform} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {scale, moderateScale} from 'react-native-size-matters';

export const fundTargetIcon = {
  size: heightPercentageToDP('7%'),
};

export const linearColor = ['#F21CC8', '#FD9FEB'];

export default StyleSheet.create({
  linearGradient: {
    width: moderateScale(45),
    height: moderateScale(30),
    borderRadius: moderateScale(20),
    marginBottom: moderateScale(5),
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#151517',
    flexDirection: 'row',
    width: '100%',
    height: moderateScale(80),
    // ...Platform.select({
    //   ios: {
    //     shadowOffset: {width: 0, height: moderateScale(-40)},
    //     shadowColor: ' rgba(255,255,255,0.5)',
    //     shadowOpacity: 0.05,
    //     shadowRadius:moderateScale(10)
    //   },
    //   android: {
    //     elevation: 5,
    //   },
    // }),
  },
});
