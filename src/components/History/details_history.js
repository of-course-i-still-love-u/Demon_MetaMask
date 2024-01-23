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
  Alert,
  Modal,
  Linking,
} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';
import Entypo_Icon from 'react-native-vector-icons/Entypo';
import LinearGradient from 'react-native-linear-gradient';
import LottieView from 'lottie-react-native';
import SwipeButton from 'rn-swipe-button';
import {useRoute} from '@react-navigation/native';
import Feather_Icon from 'react-native-vector-icons/Feather';
import moment from 'moment';
const {width, height} = Dimensions.get('screen');

export default Details_history = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [url, setUrl] = useState(
    'https://etherscan.io/tx/0x1f593ac29f7481486d087a79d9750cad8e1095e792c6a33c0eab979c5b2d9427',
  );
  const details = [
    {
      network: 'Ethereum',
      from: '0xC7809926AA56...C8Fc2159b8c009c23423',
      to: '0x99999926AA56...C8Fc2159b8c009c23423',
      gas_fee: 0.000609,
      total: '1.34567 ETH',
      transaction_hash:
        '0x1f593ac29f7481486d087a79d9750cad8e1095e792c6a33c0eab979c5b2d9427',
    },
  ];
  const route = useRoute();
  const data_transaction = route.params.data_params;
  console.log(data_transaction, '==data_transaction==');

  return (
    <View style={styles.contain}>
      <LinearGradient
        colors={['#FEAC5E', '#C779D0', '#4BC0C8']}
        start={{x: 0.0, y: 0.4}}
        end={{x: 1.0, y: 1.5}}
        style={{
          justifyContent: 'flex-start',
          alignItems: 'center',
          paddingHorizontal: moderateScale(20),
          flexDirection: 'row',
          paddingTop: moderateScale(45),
          paddingBottom: moderateScale(50),
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
            //marginRight: moderateScale(80),
            backgroundColor: 'rgba(255,255,255,0.2)',
          }}
          onPress={() => navigation.goBack()}>
          <Entypo_Icon
            name="chevron-small-left"
            size={moderateScale(25)}
            color="#fff"
          />
        </TouchableOpacity>
        <View style={{width: width / 1.5}}>
          <Text
            style={{
              fontSize: moderateScale(14),
              fontFamily: 'Lato-Black',
              color: '#fff',
              textAlign: 'center',
            }}>
            {data_transaction.action}
          </Text>
        </View>
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
          <View style={{alignItems: 'center'}}>
            <View
              style={{
                backgroundColor: '#151517',
                height: moderateScale(45),
                width: moderateScale(45),
                borderRadius: moderateScale(25),
                marginTop: moderateScale(-20),
              }}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor:
                    data_transaction.action == 'Send'
                      ? 'rgba(0,146,255,0.1)'
                      : data_transaction.action == 'Approve ETH'
                      ? 'rgba(103,72,164,0.1)'
                      : 'rgba(72,164,91,0.1)',
                  height: moderateScale(45),
                  width: moderateScale(45),
                  borderRadius: moderateScale(25),
                }}>
                <Feather_Icon
                  name={
                    data_transaction.action == 'Send'
                      ? 'arrow-up-right'
                      : data_transaction.action == 'Approve ETH'
                      ? 'check'
                      : 'arrow-down-left'
                  }
                  size={moderateScale(20)}
                  color={
                    data_transaction.action == 'Send'
                      ? '#4394FF'
                      : data_transaction.action == 'Approve ETH'
                      ? '#6748a4'
                      : '#48A45B'
                  }
                  style={{marginTop: moderateScale(2)}}
                />
              </View>
            </View>

            <Text
              style={{
                fontSize: moderateScale(16),
                fontFamily: 'Lato-Bold',
                color: '#fff',
                marginTop: moderateScale(10),
              }}>
              {data_transaction.amount}
            </Text>
            <Text
              style={{
                fontSize: moderateScale(12),
                fontFamily: 'Lato-Bold',
                color: 'gray',
                marginTop: moderateScale(5),
              }}>
              ~$3,078.44
            </Text>
          </View>

          <View
            style={{
              // backgroundColor: '#faa',
              marginHorizontal: moderateScale(20),
              borderColor: '#232222',
              borderBottomWidth: 1.5,
              paddingBottom: moderateScale(15),
              marginTop: moderateScale(40),
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                fontSize: moderateScale(12),
                fontFamily: 'Lato-Regular',
                color: 'gray',
              }}>
              Status
            </Text>
            <Text
              style={{
                fontSize: moderateScale(12),
                fontFamily: 'Lato-Regular',
                color: '#48A45B',
              }}>
              {data_transaction.status}
            </Text>
          </View>
          <View
            style={{
              // backgroundColor: '#faa',
              marginHorizontal: moderateScale(20),
              borderColor: '#232222',
              borderBottomWidth: 1.5,
              paddingBottom: moderateScale(15),
              marginTop: moderateScale(20),
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                fontSize: moderateScale(12),
                fontFamily: 'Lato-Regular',
                color: 'gray',
              }}>
              Date
            </Text>
            <Text
              style={{
                fontSize: moderateScale(12),
                fontFamily: 'Lato-Regular',
                color: '#fff',
              }}>
              {moment().format('YYYY-MM-DD HH:mm')}
            </Text>
          </View>
          <View
            style={{
              // backgroundColor: '#faa',
              marginHorizontal: moderateScale(20),
              borderColor: '#232222',
              paddingBottom: moderateScale(15),
              flexDirection: 'row',
              justifyContent: 'space-between',
              borderBottomWidth: 1.5,
              marginTop: moderateScale(20),
            }}>
            <Text
              style={{
                fontSize: moderateScale(12),
                fontFamily: 'Lato-Regular',
                color: 'gray',
              }}>
              From
            </Text>
            <Text
              style={{
                fontSize: moderateScale(12),
                fontFamily: 'Lato-Regular',
                color: '#fff',
              }}>
              {details[0].from}
            </Text>
          </View>
          <View
            style={{
              // backgroundColor: '#faa',
              marginHorizontal: moderateScale(20),
              borderColor: '#232222',
              paddingBottom: moderateScale(15),
              flexDirection: 'row',
              justifyContent: 'space-between',
              borderBottomWidth: 1.5,
              marginTop: moderateScale(20),
            }}>
            <Text
              style={{
                fontSize: moderateScale(12),
                fontFamily: 'Lato-Regular',
                color: 'gray',
              }}>
              To
            </Text>
            <Text
              style={{
                fontSize: moderateScale(12),
                fontFamily: 'Lato-Regular',
                color: '#fff',
              }}>
              {details[0].to}
            </Text>
          </View>
          <View
            style={{
              // backgroundColor: '#faa',
              marginHorizontal: moderateScale(20),
              borderColor: '#232222',
              paddingBottom: moderateScale(15),
              flexDirection: 'row',
              justifyContent: 'space-between',
              borderBottomWidth: 1.5,
              marginTop: moderateScale(20),
            }}>
            <Text
              style={{
                fontSize: moderateScale(12),
                fontFamily: 'Lato-Regular',
                color: 'gray',
              }}>
              Gas fee
            </Text>
            <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
              <Text
                style={{
                  fontSize: moderateScale(12),
                  fontFamily: 'Lato-Regular',
                  color: '#fff',
                  marginRight: moderateScale(5),
                }}>
                {`${details[0].gas_fee} ETH`}
              </Text>
              <Text
                style={{
                  fontSize: moderateScale(10),
                  fontFamily: 'Lato-Regular',
                  color: 'gray',
                }}>
                ($1.40)
              </Text>
            </View>
          </View>
          <View
            style={{
              //backgroundColor: '#faa',
              marginHorizontal: moderateScale(20),
              borderColor: '#232222',
              paddingBottom: moderateScale(15),
              flexDirection: 'row',
              justifyContent: 'space-between',
              borderBottomWidth: 1.5,
              marginTop: moderateScale(20),
            }}>
            <Text
              style={{
                fontSize: moderateScale(12),
                fontFamily: 'Lato-Regular',
                color: 'gray',
              }}>
              TxID
            </Text>
            <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
              <Text
                style={{
                  fontSize: moderateScale(12),
                  fontFamily: 'Lato-Regular',
                  color: '#fff',
                  marginRight: moderateScale(5),
                }}>
                {details[0].to}
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            marginHorizontal: moderateScale(20),
            marginBottom: moderateScale(25),
            //backgroundColor: '#faa',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            style={{
              paddingVertical: moderateScale(12),
              borderRadius: moderateScale(15),
              borderWidth: moderateScale(1.5),
              borderColor: '#232222',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              width: '48%',
            }}
            onPress={() => {
              Linking.openURL(url);
            }}>
            <Text
              style={{
                fontSize: moderateScale(12),
                fontFamily: 'Lato-Regular',
                color: '#fff',
                marginRight: moderateScale(5),
              }}>
              EtherScan
            </Text>
            <Feather_Icon
              name={'external-link'}
              size={moderateScale(15)}
              color={'#fff'}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              paddingVertical: moderateScale(12),
              borderRadius: moderateScale(15),
              borderWidth: moderateScale(1.5),
              borderColor: '#232222',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              width: '48%',
            }}>
            <Text
              style={{
                fontSize: moderateScale(12),
                fontFamily: 'Lato-Regular',
                color: '#fff',
                marginRight: moderateScale(5),
              }}>
              Share
            </Text>
            <Entypo_Icon name="share" size={moderateScale(15)} color="#fff" />
          </TouchableOpacity>
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
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    //margin: 20,
    width: '75%',
    backgroundColor: '#151517',
    borderRadius: moderateScale(20),
    padding: moderateScale(20),
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
});
