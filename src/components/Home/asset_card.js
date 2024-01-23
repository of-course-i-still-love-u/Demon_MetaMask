import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import LottieView from 'lottie-react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import Entypo_Icon from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather_Icon from 'react-native-vector-icons/Feather';

const {width, height} = Dimensions.get('screen');

export default Asset_card = () => {
  const [isSelectTab, setIsSelectTab] = useState(1);
  const navigation = useNavigation();

  const menu_botton = [
    {menu: 'Buy', icon: 'credit'},
    {menu: 'Send', icon: 'align-top'},
    {menu: 'Receive', icon: 'align-bottom'},
    {menu: 'Swap', icon: 'swap-calls'},
  ];

  const [data_assets, setAata_assets] = useState([
    {
      cmc_rank: 1,
      id: 1,
      logo: '../../assets/images/Asset_card/eth.png',
      market_cap: 1080998411272.9978,
      name: 'Ethereum',
      percent_change_24h: 5.84,
      price: 3732.25,
      symbol: 'ETH',
      exchange: 'Binance',
      holding: 2.4,
      profit: 55,
      value: 4444,
      chartData: [
        50, 10, 40, 95, 100, 120, 111, 130, 140, 100, 122, 100, 90, 120, 150,
      ],
    },
  ]);

  return (
    <View style={styles.container}>
      <View
        style={{
          //flex: 1,
          justifyContent: 'space-between',
          width: '100%',
          alignItems: 'center',
          //backgroundColor: '#faa',
        }}>
        <View
          style={{
            width: '90%',
            //backgroundColor: '#faa',
            paddingBottom: moderateScale(15),
            marginBottom: moderateScale(10),
          }}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Transactions', {
                data_params: data_assets[0],
                eth_logo: true,
              })
            }>
            <LinearGradient
              // colors={[
              //   'rgba(0,255,255,0.8)',
              //   'rgba(23,200,255,0.8)',
              //   'rgba(50,155,255,0.8)',
              //   'rgba(76,100,255,0.8)',
              // //   'rgba(101,54,255,0.5)',
              // //   'rgba(128,0,255,1)',
              // ]}
              colors={['#FEAC5E', '#C779D0', '#4BC0C8']}
              start={{x: 0.0, y: 0.4}}
              end={{x: 1.0, y: 1.5}}
              style={{
                width: '100%',
                height: moderateScale(200),
                borderRadius: moderateScale(20),
                marginBottom: moderateScale(20),
                marginTop: moderateScale(20),
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  padding: moderateScale(20),
                  paddingBottom: moderateScale(5),
                  alignItems: 'center',
                  //backgroundColor:'#faa'
                }}>
                <Text
                  style={{
                    fontSize: moderateScale(12),
                    fontFamily: 'Lato-Regular',
                    textAlign: 'center',
                    color: '#fff',
                    marginTop: moderateScale(5),
                  }}>
                  Multi-Coin Wallet
                </Text>
                <Entypo_Icon
                  name="dots-three-horizontal"
                  size={moderateScale(15)}
                  color="#fff"
                />
              </View>
              <Text
                style={{
                  fontSize: moderateScale(30),
                  fontFamily: 'Lato-Bold',
                  textAlign: 'center',
                  color: '#fff',
                  marginTop: moderateScale(5),
                  textAlign: 'left',
                  marginLeft: moderateScale(20),
                }}>
                $999.90
              </Text>

              <View
                style={{
                  flexDirection: 'row',
                  padding: moderateScale(20),
                  flex: 1,
                  alignItems: 'flex-end',
                  // backgroundColor: '#faa',
                  justifyContent: 'space-between',
                }}>
                <View style={{flexDirection: 'row'}}>
                  <Text
                    style={{
                      fontSize: moderateScale(12),
                      fontFamily: 'Lato-Regular',
                      textAlign: 'center',
                      color: '#fff',
                      marginRight: moderateScale(10),
                    }}>
                    0x99B123456...4C9999
                  </Text>
                  <Feather_Icon
                    name="copy"
                    size={moderateScale(15)}
                    color="#fff"
                  />
                </View>
                <Image
                  source={require('../../assets/images/Asset_card/binance-coin-bnb-logo.png')}
                  resizeMode="cover"
                  style={{
                    height: moderateScale(25),
                    width: moderateScale(25),
                  }}
                />
              </View>
            </LinearGradient>
          </TouchableOpacity>

          <View
            style={{
              justifyContent: 'space-around',
              //backgroundColor: '#faa',
              width: '100%',
              flexDirection: 'row',
            }}>
            {menu_botton.map((item, index) => {
              return (
                <View key={item.menu}>
                  <TouchableOpacity
                    key={item.menu}
                    style={{
                      width: moderateScale(45),
                      height: moderateScale(45),
                      borderWidth: 1.5,
                      borderColor: '#232222',
                      borderRadius: moderateScale(45 / 2),
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                    onPress={() =>
                      item.menu == 'Receive'
                        ? navigation.navigate('Receive')
                        : item.menu == 'Send'
                        ? navigation.navigate('Send')
                        : item.menu == 'Swap'
                        ? navigation.navigate('Swap')
                        : null
                    }>
                    {item.menu != 'Swap' ? (
                      <Entypo_Icon
                        name={item.icon}
                        size={moderateScale(15)}
                        color="#fff"
                      />
                    ) : (
                      <MaterialIcons
                        name={item.icon}
                        size={moderateScale(15)}
                        color="#fff"
                      />
                    )}
                  </TouchableOpacity>
                  <Text
                    style={{
                      fontSize: moderateScale(12),
                      fontFamily: 'Lato-Bold',
                      textAlign: 'center',
                      color: 'gray',
                      marginTop: moderateScale(5),
                    }}>
                    {item.menu}
                  </Text>
                </View>
              );
            })}
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width,
    //height: moderateScale(350),
    alignItems: 'center',
    //justifyContent: 'flex-start',
    //backgroundColor: '#faa',
  },
});
