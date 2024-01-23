import React, {useState, useRef, memo} from 'react';
import {
  StatusBar,
  View,
  Dimensions,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';
import Entypo_Icon from 'react-native-vector-icons/Entypo';
import LinearGradient from 'react-native-linear-gradient';
import QRCode from 'react-native-qrcode-svg';

export default Receive_modal = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.contain}>
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
          justifyContent: 'flex-start',
          alignItems: 'center',
          paddingHorizontal: moderateScale(20),
          flexDirection: 'row',
          paddingTop: moderateScale(45),
          paddingBottom: moderateScale(35),
        }}>
        <TouchableOpacity
          style={{
            width: moderateScale(40),
            height: moderateScale(40),
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: moderateScale(20),
            // borderColor: '#232222',
            //borderWidth: 1.5,
            marginRight: moderateScale(80),
            backgroundColor: 'rgba(255,255,255,0.2)',
          }}
          onPress={() => navigation.goBack()}
          >
          <Entypo_Icon
            name="chevron-small-left"
            size={moderateScale(25)}
            color="#fff"
          />
        </TouchableOpacity>

        <Text
          style={{
            fontSize: moderateScale(14),
            fontFamily: 'Lato-Black',
            color: '#fff',
            textAlign: 'center',
          }}>
          Receive ETH
        </Text>
      </LinearGradient>
      <View
        style={{
          backgroundColor: '#151517',
          flex: 1,
          borderTopLeftRadius: moderateScale(20),
          borderTopRightRadius: moderateScale(20),
          marginTop: moderateScale(-20),
          justifyContent: 'space-between',
        }}>
        <View>
          <View
            style={{
              //backgroundColor: '#faa',
              alignItems: 'center',
              height: moderateScale(250),
              justifyContent: 'flex-end',
              marginHorizontal: moderateScale(20),
              borderRadius: moderateScale(20),
              borderWidth: 1.5,
              borderColor: '#232222',
              padding: moderateScale(50),
              marginTop: moderateScale(120),
            }}>
            <View
              style={{
                alignItems: 'center',
                backgroundColor: '#fff',
                height: moderateScale(200),
                width: moderateScale(200),
                borderRadius: moderateScale(20),
                justifyContent: 'center',
                alignContent: 'center',
                marginBottom: moderateScale(20),
              }}>
              <QRCode
                value="0xC7809926AA56BFBC0924B4da8Fc2c2159b8c009c"
                logo={require('../../assets/images/Receive/metamask_black.jpeg')}
                size={180}
                logoSize={60}
                logoBackgroundColor="transparent"
              />
            </View>
            <Text
              style={{
                fontSize: moderateScale(12),
                fontFamily: 'Lato-Regular',
                color: 'gray',
                textAlign: 'center',
                marginBottom: moderateScale(10),
              }}>
              Ethereum Address
            </Text>
            <Text
              style={{
                fontSize: moderateScale(14),
                fontFamily: 'Lato-Bold',
                color: '#fff',
                textAlign: 'center',
              }}>
              0xC7809926AA56BFBC0924B4da8Fc2c2159b8c009c
            </Text>
          </View>
          <View
            style={{
              backgroundColor: 'rgba(67,148,255,0.2)',
              borderWidth: 1.5,
              borderColor: 'rgba(67,148,255,0.5)',
              padding: moderateScale(10),
              borderRadius: moderateScale(15),
              marginTop: moderateScale(20),
              alignItems: 'center',
              marginHorizontal: moderateScale(20),
              flexDirection: 'row',
            }}>
            <Entypo_Icon
              name="info-with-circle"
              size={moderateScale(15)}
              color="rgba(67,148,255,0.5)"
              style={{marginRight: moderateScale(10)}}
            />
            <View>
              <Text
                style={{
                  fontSize: moderateScale(10),
                  fontFamily: 'Lato-Bold',
                  color: 'rgba(67,148,255,0.5)',
                  textAlign: 'left',
                }}>
                Send to this address only ETH
              </Text>
              <Text
                style={{
                  fontSize: moderateScale(10),
                  fontFamily: 'Lato-Bold',
                  color: 'rgba(67,148,255,0.5)',
                  textAlign: 'left',
                }}>
                Make sure the network is correct : Ethereum
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            //backgroundColor: '#faa',
            marginHorizontal: moderateScale(20),
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: moderateScale(25),
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: 'rgba(67,148,255,1)',
              width: '80%',
              padding: moderateScale(15),
              borderRadius: moderateScale(15),
            }}>
            <Text
              style={{
                fontSize: moderateScale(12),
                fontFamily: 'Lato-Bold',
                color: '#fff',
                textAlign: 'center',
              }}>
              Copy
            </Text>
          </TouchableOpacity>
          <View
            style={{
              width: moderateScale(45),
              height: moderateScale(45),
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: moderateScale(15),
              borderColor: '#232222',
              borderWidth: 1.5,
            }}>
            <Entypo_Icon name="share" size={moderateScale(20)} color="#fff" />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contain: {
    flex: 1,
    //backgroundColor:'#faa',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
