import React, {useState, useRef, useEffect} from 'react';
import {View, TouchableOpacity, Text, Animated} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {useRoute} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import Asset_card from './asset_card';
import Headers from '../Share/headers';
import Assets from '../Share/assets';
import Collectibles from '../Share/collectibles';

const comp_home = () => {
  const [isLoading, setLoading] = useState(false);
  const [isSelectTab, setIsSelectTab] = useState(1);
  const navigation = useNavigation();
  const [value, setValue] = useState(0);
  const route = useRoute();

  const fadeAnim = useRef(new Animated.Value(value)).current;

  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    fadeIn();
    // navigation.addListener('focus', () => {
    //   fadeIn();
    //   console.log('didFocus');
    // });
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: '#151517'}}>
      <Headers routeName={route.name} />
      <Animated.View
        style={{
          // Bind opacity to animated value
          opacity: fadeAnim,
        }}>
        <Asset_card />
      </Animated.View>
      <View style={{alignItems: 'center'}}>
        <View
          style={{
            flexDirection: 'row',
            width: '90%',
            height: moderateScale(45),
            //backgroundColor: '#faf',
            marginBottom: moderateScale(20),
          }}>
          <TouchableOpacity
            style={{
              width: '50%',
              borderBottomColor: isSelectTab == 1 ? '#4394FF' : '#232222',
              borderBottomWidth: 2,
              justifyContent: 'center',
            }}
            onPress={() => setIsSelectTab(1)}>
            <Text
              style={{
                fontSize: moderateScale(14),
                fontFamily: 'Lato-Bold',
                color: isSelectTab == 1 ? '#4394FF' : '#fff',
                textAlign: 'center',
                marginRight: moderateScale(10),
              }}>
              Assets
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: '50%',
              borderBottomColor: isSelectTab == 2 ? '#4394FF' : '#232222',
              borderBottomWidth: 2,
              justifyContent: 'center',
            }}
            onPress={() => setIsSelectTab(2)}>
            <Text
              style={{
                fontSize: moderateScale(14),
                fontFamily: 'Lato-Bold',
                textAlign: 'center',
                color: isSelectTab == 2 ? '#4394FF' : '#fff',
                marginRight: moderateScale(10),
              }}>
              Collectibles
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {isSelectTab == 1 ? (
        <Assets routeName={route.name} />
      ) : (
        <Collectibles routeName={route.name} />
      )}
    </View>
  );
};

export default comp_home;
