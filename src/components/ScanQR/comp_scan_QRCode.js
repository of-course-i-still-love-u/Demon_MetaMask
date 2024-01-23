import React, {useState, useRef, useEffect} from 'react';
import {View, Text} from 'react-native';
import {useRoute} from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import {moderateScale} from 'react-native-size-matters';

const comp_scan_QRCode = () => {
  const [isLoading, setLoading] = useState(false);
  const route = useRoute();

  return (
    <View style={{flex: 1, backgroundColor: '#151517',alignItems:'center',justifyContent:'center'}}>
      <LottieView
        style={{height: moderateScale(500)}}
        source={require('../scanQrCode.json')}
        autoPlay
        loop
      />
    </View>
  );
};

export default comp_scan_QRCode;
