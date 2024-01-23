import React, {useEffect} from 'react';
import {View, TouchableOpacity, Image, Fragment, Text} from 'react-native';
import {scale, moderateScale} from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient';
import Images from './images';
import styles, {linearColor} from './styles';
import AntDesign_Icon from 'react-native-vector-icons/AntDesign';
import MaterialIcons_Icon from 'react-native-vector-icons/MaterialIcons';
import LottieView from 'lottie-react-native';

const customTab = ({state, descriptors, navigation}) => {
  const routes = state.routes;
  useEffect(() => {
    //console.log('TabNavigator routes', state);
  }, []);
  var image = '';
  var icons_name = '';

  const renderIcon_images = routeName => {
    if (routeName === 'Market') {
      image = Images.mainTabBar['increase'];
    } else if (routeName === 'Portfolio') {
      image = Images.mainTabBar['chart'];
    } else if (routeName === 'News') {
      image = Images.mainTabBar['news'];
    } else if (routeName === 'Customer') {
      image = Images.mainTabBar['customer'];
    }

    return (
      <Image
        source={image}
        resizeMode={'contain'}
        style={{width: moderateScale(24), height: moderateScale(24)}}
      />
    );
  };

  const renderIcon = (routeName, isActive) => {
    if (routeName === 'Home') {
      icons_name = 'change-history';
    } else if (routeName === 'NFTs') {
      icons_name = 'API';
    } else if (routeName === 'ScanQR') {
      icons_name = 'scan1';
    } else if (routeName === 'History') {
      icons_name = 'equalizer';
    } else if (routeName === 'Portfolio') {
      icons_name = 'data-usage';
    }

    return (
      <>
        {routeName == 'Home' ||
        routeName == 'Portfolio' ||
        routeName === 'History' ? (
          <MaterialIcons_Icon
            name={icons_name}
            size={moderateScale(17)}
            color={isActive ? '#4394FF' : '#424040'}
            // style={{}}
          />
        ) : (
          <AntDesign_Icon
            name={icons_name}
            size={moderateScale(17)}
            color={isActive ? '#4394FF' : '#424040'}
            // style={{}}
          />
        )}

        {isActive ? (
          <LottieView
            style={{height: moderateScale(15)}}
            source={require('../loading.json')}
            autoPlay
            loop
          />
        ) : null}
      </>
    );
  };

  const pressButton = route => {
    navigation.navigate(route);
  };

  return (
    <View style={styles.buttonContainer}>
      {routes.map((route, index) => {
        const isActive = index === state.index;
        return (
          <TouchableOpacity
            style={{
              width: moderateScale(25),
              height: moderateScale(25),
              alignItems: 'center',
              justifyContent: 'center',
            }}
            key={route.name}
            onPress={() => pressButton(route.name)}>
            {renderIcon(route.name, isActive)}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default customTab;
