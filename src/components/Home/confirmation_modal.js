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
  LogBox
} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';
import Entypo_Icon from 'react-native-vector-icons/Entypo';
import LinearGradient from 'react-native-linear-gradient';
import LottieView from 'lottie-react-native';
import SwipeButton from 'rn-swipe-button';

export default Confirmation_modal = () => {
  LogBox.ignoreAllLogs();
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
            marginRight: moderateScale(80),
            backgroundColor: 'rgba(255,255,255,0.2)',
          }}
          onPress={() => navigation.goBack()}>
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
          Confirmation
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
          <View style={{alignItems: 'center'}}>
            <LinearGradient
              colors={[
                '#00FFFF',
                '#17C8FF',
                '#329BFF',
                '#4C64FF',
                '#6536FF',
                '#8000FF',
              ]}
              key={details[0].total}
              start={{x: 0.0, y: 1.0}}
              end={{x: 1.0, y: 1.0}}
              style={{
                width: moderateScale(45),
                height: moderateScale(45),
                borderRadius: moderateScale(45 / 2),
                justifyContent: 'center',
                alignItems: 'center',
                padding: moderateScale(1.5),
                marginTop: moderateScale(-20),
              }}>
              <View
                style={{
                  width: moderateScale(42),
                  height: moderateScale(42),
                  borderRadius: moderateScale(42 / 2),
                  backgroundColor: 'rgba(51,63,78,1)',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: moderateScale(-1),
                }}>
                <Image
                  source={require(`../../assets/images/Asset_card/eth.png`)}
                  resizeMode="contain"
                  style={{
                    height: moderateScale(27),
                    width: moderateScale(27),
                  }}
                />
              </View>
            </LinearGradient>
            <Text
              style={{
                fontSize: moderateScale(16),
                fontFamily: 'Lato-Bold',
                color: '#fff',
                marginTop: moderateScale(10),
              }}>
              -1.335411ETH
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
              Network
            </Text>
            <Text
              style={{
                fontSize: moderateScale(12),
                fontFamily: 'Lato-Regular',
                color: '#fff',
              }}>
              {details[0].network}
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
              Total
            </Text>
            <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
              <Text
                style={{
                  fontSize: moderateScale(12),
                  fontFamily: 'Lato-Regular',
                  color: '#fff',
                  marginRight: moderateScale(5),
                }}>
                {details[0].total}
              </Text>
              <Text
                style={{
                  fontSize: moderateScale(10),
                  fontFamily: 'Lato-Regular',
                  color: 'gray',
                }}>
                ($3,079.84)
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            marginHorizontal: moderateScale(20),
            marginBottom: moderateScale(25),
          }}>
          <SwipeButton
            //railStyles={{marginHorizontal: moderateScale(20)}}
            railBackgroundColor="rgba(67,148,255,0.2)"
            railFillBorderColor="transparent"
            railBorderColor="transparent"
            railFillBackgroundColor="rgba(67,148,255,0.5)"
            title={'Swipe to send'}
            titleColor="rgba(67,148,255,0.9)"
            titleFontSize={moderateScale(14)}
            titleStyles={{fontFamily: 'Lato-Bold'}}
            height={moderateScale(45)}
            thumbIconBackgroundColor={'rgba(67,148,255,1)'}
            thumbIconBorderColor={'transparent'}
            thumbIconComponent={() => (
              <Entypo_Icon
                name="chevron-small-right"
                size={moderateScale(25)}
                color="#fff"
              />
            )}
            onSwipeSuccess={() => setModalVisible(true)}
            // shouldResetAfterSuccess={true}
            // resetAfterSuccessAnimDelay={2000}
          />
        </View>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          // onRequestClose={() => {
          //   Alert.alert('Modal has been closed.');
          //   setModalVisible(!modalVisible);
          // }}
          >
          <View style={styles.centeredView}>
            <LinearGradient
              colors={[
                '#00FFFF',
                '#17C8FF',
                '#329BFF',
                '#4C64FF',
                '#6536FF',
                '#8000FF',
              ]}
              key={details[0].total}
              start={{x: 0.0, y: 1.0}}
              end={{x: 1.0, y: 1.0}}
              style={{
                borderRadius: moderateScale(20),
                padding: moderateScale(2),
                alignItems: 'center',
              }}>
              <View style={styles.modalView}>
                <LottieView
                  style={{height: moderateScale(100)}}
                  source={require('../rocket.json')}
                  autoPlay
                  loop
                />
                <Text
                  style={{
                    fontSize: moderateScale(12),
                    fontFamily: 'Lato-Regular',
                    color: 'gray',
                    marginBottom: moderateScale(10),
                    marginTop: moderateScale(20),
                  }}>
                  Transaction Hash
                </Text>
                <Text
                  style={{
                    fontSize: moderateScale(12),
                    fontFamily: 'Lato-Bold',
                    color: '#fff',
                    textDecorationLine: 'underline',
                    marginBottom: moderateScale(20),
                    textAlign: 'center',
                  }}
                  onPress={() => Linking.openURL(url)}>
                  {details[0].transaction_hash}
                </Text>

                <TouchableOpacity
                  style={{
                    width: moderateScale(150),
                    borderRadius: 15,
                    backgroundColor: 'rgba(67,148,255,1)',
                    padding: moderateScale(10),
                  }}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Text
                    style={{
                      fontSize: moderateScale(12),
                      fontFamily: 'Lato-Bold',
                      color: '#fff',
                      textAlign: 'center',
                    }}>
                    Finish
                  </Text>
                </TouchableOpacity>
              </View>
            </LinearGradient>
          </View>
        </Modal>
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
