import React, {useState, useRef} from 'react';
import {View, Text, SafeAreaView, FlatList, Image, Switch} from 'react-native';
import MaterialIcons_Icon from 'react-native-vector-icons/MaterialIcons';
import {moderateScale} from 'react-native-size-matters';
import Entypo_Icon from 'react-native-vector-icons/Entypo';
import LinearGradient from 'react-native-linear-gradient';

export default function CustomDrawer() {
  const menu_data = [
    {
      title: 'Night mode',
      icon: 'nightlight-round',
      color: 'rgba(0,146,255,0.05)',
      icon_color: '#4394FF',
    },
    {
      title: 'Portfolio',
      icon: 'pie-chart',
      color: 'rgba(255,67,205,0.1)',
      icon_color: '#FF43CD',
    },
    {
      title: 'Price notification',
      icon: 'notifications-active',
      color: 'rgba(255,128,67,0.1)',
      icon_color: '#FF8043',
    },
    {
      title: 'Address book',
      icon: 'bookmarks',
      color: 'rgba(255,219,67,0.1)',
      icon_color: '#FFDB43',
    },
    {
      title: 'General settings',
      icon: 'brightness-high',
      color: 'rgba(117,255,67,0.1)',
      icon_color: '#75FF43',
    },
    {
      title: 'Security,privacy',
      icon: 'local-police',
      color: 'rgba(147,67,255,0.1)',
      icon_color: '#9343FF',
    },
    {
      title: 'Advanced settings',
      icon: 'tune',
      color: 'rgba(67,252,255,0.1)',
      icon_color: '#43FCFF',
    },
    {
      title: 'Get help',
      icon: 'science',
      color: 'rgba(67,255,166,0.1)',
      icon_color: '#43FFA6',
    },
    {
      title: 'Logout',
      icon: 'local-fire-department',
      color: 'rgba(255,67,67,0.1)',
      icon_color: '#FF4343',
    },
  ];

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#151517'}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
          paddingLeft: moderateScale(15),
          marginVertical: moderateScale(20),
        }}>
        <LinearGradient
          colors={[
            '#00FFFF',
            '#17C8FF',
            '#329BFF',
            '#4C64FF',
            '#6536FF',
            '#8000FF',
          ]}
          start={{x: 0.0, y: 0.4}}
          end={{x: 1.0, y: 1.5}}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: moderateScale(50),
            width: moderateScale(50),
            borderRadius: moderateScale(30),
            marginRight: moderateScale(15),
          }}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgba(0,0,0,1)',
              height: moderateScale(47),
              width: moderateScale(47),
              borderRadius: moderateScale(30),
            }}>
            <Image
              source={require('../../assets/images/Receive/metamask_black.jpeg')}
              resizeMode="contain"
              style={{
                height: moderateScale(25),
                width: moderateScale(25),
              }}
            />
          </View>
        </LinearGradient>
        <Text
          style={{
            fontSize: moderateScale(16),
            fontFamily: 'Lato-Bold',
            color: 'gray',
          }}>
          Demon Metamask
        </Text>
      </View>
      <View style={{flex: 1}}>
        <FlatList
          // style={{marginTop: moderateScale(-20)}}
          data={menu_data}
          bounces={false}
          renderItem={({item, index}) => {
            return (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  //backgroundColor:'#faa',
                  paddingVertical: moderateScale(2.5),
                  borderBottomWidth:
                    item.title == 'Address book' ||
                    item.title == 'Advanced settings' ||
                    item.title == 'Get help'
                      ? 1.5
                      : 0,
                  borderBottomColor: '#232222',
                  marginHorizontal: moderateScale(20),
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    // backgroundColor: '#faa',
                  }}>
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: item.color,
                      height: moderateScale(37),
                      width: moderateScale(37),
                      borderRadius: moderateScale(20),
                      marginVertical: moderateScale(10),
                      marginRight: moderateScale(15),
                    }}>
                    <MaterialIcons_Icon
                      name={item.icon}
                      size={moderateScale(15)}
                      color={item.icon_color}
                      style={{marginTop: moderateScale(2)}}
                      //onPress={() => navigation.navigate('Add_assets')}
                    />
                  </View>

                  <Text
                    style={{
                      fontSize: moderateScale(12),
                      fontFamily: 'Lato-Bold',
                      color: item.title == 'Logout' ? item.icon_color : '#fff',
                    }}>
                    {`${item.title}`}
                  </Text>
                </View>
                <View>
                  {item.title == 'Night mode' ? (
                    <Switch
                      trackColor={{false: '#767577', true: '#4394FF'}}
                      thumbColor={isEnabled ? '#f4f3f4' : '#f4f3f4'}
                      ios_backgroundColor="#3e3e3e"
                      onValueChange={toggleSwitch}
                      value={isEnabled}
                      style={{transform: [{scaleX: 0.6}, {scaleY: 0.6}]}}
                    />
                  ) : (
                    <Entypo_Icon
                      name="chevron-small-right"
                      size={moderateScale(20)}
                      color="gray"
                    />
                  )}
                </View>
              </View>
            );
          }}
          keyExtractor={item => item.title}
        />
      </View>
    </SafeAreaView>
  );
}
