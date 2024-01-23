import React, {useState, useRef, useEffect} from 'react';
import {View, Text, StyleSheet, Dimensions, Animated} from 'react-native';
import {useRoute} from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import {moderateScale} from 'react-native-size-matter';
import LinearGradient from 'react-native-linear-gradient';
import {Easing} from 'react-native-reanimated';

const {width} = Dimensions.get('window');

export default Skeleton = () => {
  const [isLoading, setLoading] = useState(false);
  const route = useRoute();

  const AnimatedLG = Animated.createAnimatedComponent(LinearGradient);
  const animatedValue = new Animated.Value(0);

  useEffect(() => {
    Animated.loop(
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear.inOut,
        useNativeDriver: true,
      }),
    ).start();
  });

  const translateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 200],
  });

  return (
    <View
      style={{
        width: '100%',
        backgroundColor: '#a0a0a0',
        borderColor: '#b0b0b0',
        height: '100%',
        borderRadius: 20,
      }}>
      <AnimatedLG
        colors={['#a0a0a0', '#b0b0b0', '#b0b0b0', '#a0a0a0']}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        style={{
          ...StyleSheet.absoluteFill,
          transform: [{translateX: translateX}],
          borderRadius: 20,
        }}
      />
    </View>
  );
};
