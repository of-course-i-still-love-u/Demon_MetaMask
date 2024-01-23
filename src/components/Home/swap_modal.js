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
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';
import Entypo_Icon from 'react-native-vector-icons/Entypo';
import AntDesign_Icon from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons_Icon from 'react-native-vector-icons/MaterialIcons';

export default Swap_modal = () => {
  const navigation = useNavigation();
  const [swap, setSwap] = useState(false);

  const amount = [
    {percent: 25},
    {percent: 50},
    {percent: 75},
    {percent: 'MAX'},
  ];

  const details = [
    {
      balance: '1,890',
      amount: '9.44999',
      logo: 'require(`../../assets/images/Asset_card/eth.png`)',
      symbol: 'ETH',
      total: '~$40,696',
      coin: 'Ethereum',
      rate: '1BNB = 0.1159108 ETH',
      gas_fee: '0.0087BNB',
      total_gas: '(~$4.44)',
      inverse: '1ETH = 8.5454 BNB',
    },
    {
      balance: '0',
      amount: '85.9944',
      logo: 'require(`../../assets/images/Asset_card/binance-coin-bnb-logo.png`)',
      symbol: 'BNB',
      total: '~$40,886',
      coin: 'Binance coin',
      rate: '1ETH = 8.5454 BNB',
      inverse: '1BNB = 0.1159108 ETH',
    },
  ];

  return (
    <View style={styles.contain}>
      <LinearGradient
        colors={['#FEAC5E', '#C779D0', '#4BC0C8']}
        start={{x: 0.0, y: 0.4}}
        end={{x: 1.0, y: 1.5}}
        style={{
          justifyContent: 'space-between',
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
            fontSize: moderateScale(16),
            fontFamily: 'Lato-Black',
            color: '#fff',
            textAlign: 'center',
          }}>
          Swap
        </Text>
        <TouchableOpacity
          style={{
            width: moderateScale(40),
            height: moderateScale(40),
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: moderateScale(20),
            // borderColor: '#232222',
            //borderWidth: 1.5,
            backgroundColor: 'rgba(255,255,255,0.2)',
          }}
          // onPress={() => navigation.goBack()}
        >
          <MaterialIcons_Icon
            name="hdr-strong"
            size={moderateScale(20)}
            color="#fff"
          />
        </TouchableOpacity>
      </LinearGradient>
      {/* <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flexGrow: 1}}> */}
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
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
                marginHorizontal: moderateScale(20),
                borderRadius: moderateScale(20),
                borderWidth: 1.5,
                borderBottomWidth: 0,
                borderBottomStartRadius: 0,
                borderBottomEndRadius: 0,
                borderColor: '#232222',
                padding: moderateScale(15),
                paddingHorizontal: moderateScale(20),
                paddingBottom: moderateScale(25),
                marginTop: moderateScale(40),
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontSize: moderateScale(12),
                    fontFamily: 'Lato-Regular',
                    color: 'gray',
                    marginBottom: moderateScale(5),
                  }}>
                  From
                </Text>
                <Text
                  style={{
                    fontSize: moderateScale(12),
                    fontFamily: 'Lato-Regular',
                    color: 'gray',
                    marginBottom: moderateScale(5),
                  }}>
                  Balance : {!swap ? details[0].balance : details[1].balance}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontSize: moderateScale(14),
                    fontFamily: 'Lato-Bold',
                    color: '#fff',
                  }}>
                  {!swap ? details[0].amount : details[1].amount}
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: moderateScale(5),
                  }}>
                  {!swap ? (
                    <Image
                      source={require(`../../assets/images/Asset_card/eth.png`)}
                      resizeMode="contain"
                      style={{
                        height: moderateScale(18),
                        width: moderateScale(18),
                        marginRight: moderateScale(5),
                      }}
                    />
                  ) : (
                    <Image
                      source={require(`../../assets/images/Asset_card/binance-coin-bnb-logo.png`)}
                      resizeMode="contain"
                      style={{
                        height: moderateScale(18),
                        width: moderateScale(18),
                        marginRight: moderateScale(5),
                      }}
                    />
                  )}
                  <Text
                    style={{
                      fontSize: moderateScale(14),
                      fontFamily: 'Lato-Bold',
                      color: '#fff',
                      marginRight: moderateScale(5),
                    }}>
                    {!swap ? details[0].symbol : details[1].symbol}
                  </Text>
                  <AntDesign_Icon
                    name="caretdown"
                    size={moderateScale(8)}
                    color="#fff"
                    //style={{marginTop: moderateScale(-15)}}
                  />
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: moderateScale(5),
                }}>
                <Text
                  style={{
                    fontSize: moderateScale(12),
                    fontFamily: 'Lato-Regular',
                    color: 'gray',
                    marginBottom: moderateScale(5),
                  }}>
                  {!swap ? details[0].total : details[1].total}
                </Text>
                <Text
                  style={{
                    fontSize: moderateScale(12),
                    fontFamily: 'Lato-Regular',
                    color: 'gray',
                    marginBottom: moderateScale(5),
                  }}>
                  {!swap ? details[0].coin : details[1].coin}
                </Text>
              </View>
            </View>
            <View
              style={{
                backgroundColor: 'rgba(27,28,31,1)',
                marginHorizontal: moderateScale(20),
                borderRadius: moderateScale(20),
                borderWidth: 1.5,
                borderColor: 'rgba(27,28,31,1)',
                padding: moderateScale(15),
                paddingHorizontal: moderateScale(20),
                marginTop: moderateScale(-15),
              }}>
              <View
                style={{alignItems: 'center', marginTop: moderateScale(-35)}}>
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
                  }}>
                  <TouchableOpacity
                    style={{
                      width: moderateScale(40),
                      height: moderateScale(40),
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: moderateScale(20),
                      borderColor: '#232222',
                      borderWidth: 1.5,
                      backgroundColor: '#151517',
                    }}
                    onPress={() => {
                      if (swap) {
                        setSwap(!swap);
                      } else {
                        setSwap(true);
                      }
                    }}>
                    <AntDesign_Icon
                      name="retweet"
                      size={moderateScale(15)}
                      color="#fff"
                      //style={{marginTop: moderateScale(-15)}}
                    />
                  </TouchableOpacity>
                </LinearGradient>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontSize: moderateScale(12),
                    fontFamily: 'Lato-Regular',
                    color: 'gray',
                    marginBottom: moderateScale(5),
                  }}>
                  To
                </Text>
                <Text
                  style={{
                    fontSize: moderateScale(12),
                    fontFamily: 'Lato-Regular',
                    color: 'gray',
                    marginBottom: moderateScale(5),
                  }}>
                  Balance : {!swap ? details[1].balance : details[0].balance}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontSize: moderateScale(14),
                    fontFamily: 'Lato-Bold',
                    color: '#fff',
                  }}>
                  {!swap ? details[1].amount : details[0].amount}
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: moderateScale(5),
                  }}>
                  {!swap ? (
                    <Image
                      source={require(`../../assets/images/Asset_card/binance-coin-bnb-logo.png`)}
                      resizeMode="contain"
                      style={{
                        height: moderateScale(18),
                        width: moderateScale(18),
                        marginRight: moderateScale(5),
                      }}
                    />
                  ) : (
                    <Image
                      source={require(`../../assets/images/Asset_card/eth.png`)}
                      resizeMode="contain"
                      style={{
                        height: moderateScale(18),
                        width: moderateScale(18),
                        marginRight: moderateScale(5),
                      }}
                    />
                  )}
                  <Text
                    style={{
                      fontSize: moderateScale(14),
                      fontFamily: 'Lato-Bold',
                      color: '#fff',
                      marginRight: moderateScale(5),
                    }}>
                    {!swap ? details[1].symbol : details[0].symbol}
                  </Text>
                  <AntDesign_Icon
                    name="caretdown"
                    size={moderateScale(8)}
                    color="#fff"
                    //style={{marginTop: moderateScale(-15)}}
                  />
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: moderateScale(5),
                }}>
                <Text
                  style={{
                    fontSize: moderateScale(12),
                    fontFamily: 'Lato-Regular',
                    color: 'gray',
                    marginBottom: moderateScale(5),
                  }}>
                  {!swap ? details[1].total : details[0].total}
                </Text>
                <Text
                  style={{
                    fontSize: moderateScale(12),
                    fontFamily: 'Lato-Regular',
                    color: 'gray',
                    marginBottom: moderateScale(5),
                  }}>
                  {!swap ? details[1].coin : details[0].coin}
                </Text>
              </View>
            </View>

            <View
              style={{
                // backgroundColor: '#faa',
                marginHorizontal: moderateScale(20),
                borderRadius: moderateScale(20),
                borderWidth: 1.5,
                borderColor: '#232222',
                padding: moderateScale(15),
                paddingHorizontal: moderateScale(20),
                marginTop: moderateScale(20),
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontSize: moderateScale(12),
                    fontFamily: 'Lato-Regular',
                    color: 'gray',
                    marginBottom: moderateScale(5),
                  }}>
                  Rate
                </Text>
                <Text
                  style={{
                    fontSize: moderateScale(12),
                    fontFamily: 'Lato-Regular',
                    color: '#fff',
                  }}>
                  {!swap ? details[0].rate : details[1].rate}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontSize: moderateScale(12),
                    fontFamily: 'Lato-Regular',
                    color: 'gray',
                    marginBottom: moderateScale(5),
                  }}>
                  Inverse Rate
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: moderateScale(5),
                  }}>
                  <Text
                    style={{
                      fontSize: moderateScale(12),
                      fontFamily: 'Lato-Regular',
                      color: '#fff',
                    }}>
                    {!swap ? details[0].inverse : details[1].inverse}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: moderateScale(5),
                }}>
                <Text
                  style={{
                    fontSize: moderateScale(12),
                    fontFamily: 'Lato-Regular',
                    color: 'gray',
                    marginBottom: moderateScale(5),
                  }}>
                  Gas fee
                </Text>
                <View style={{flexDirection: 'row'}}>
                  <Text
                    style={{
                      fontSize: moderateScale(12),
                      fontFamily: 'Lato-Regular',
                      color: '#fff',
                    }}>
                    {details[0].gas_fee}
                  </Text>
                  <Text
                    style={{
                      fontSize: moderateScale(12),
                      fontFamily: 'Lato-Regular',
                      color: 'gray',
                    }}>
                    {details[0].total_gas}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: moderateScale(5),
                  // backgroundColor:'#faa'
                }}>
                <Text
                  style={{
                    fontSize: moderateScale(12),
                    fontFamily: 'Lato-Regular',
                    color: 'gray',
                    marginBottom: moderateScale(5),
                  }}>
                  Swap To
                </Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  {!swap ? (
                    <Image
                      source={require(`../../assets/images/Asset_card/eth.png`)}
                      resizeMode="contain"
                      style={{
                        height: moderateScale(18),
                        width: moderateScale(18),
                        marginRight: moderateScale(5),
                      }}
                    />
                  ) : (
                    <Image
                      source={require(`../../assets/images/Asset_card/binance-coin-bnb-logo.png`)}
                      resizeMode="contain"
                      style={{
                        height: moderateScale(18),
                        width: moderateScale(18),
                        marginRight: moderateScale(5),
                      }}
                    />
                  )}
                  <Text
                    style={{
                      fontSize: moderateScale(12),
                      fontFamily: 'Lato-Regular',
                      color: '#fff',
                    }}>
                    {!swap ? details[0].symbol : details[1].symbol}
                  </Text>
                  <Entypo_Icon
                    name="chevron-small-right"
                    size={moderateScale(20)}
                    color="#fff"
                  />
                  {swap ? (
                    <Image
                      source={require(`../../assets/images/Asset_card/eth.png`)}
                      resizeMode="contain"
                      style={{
                        height: moderateScale(18),
                        width: moderateScale(18),
                        marginRight: moderateScale(5),
                      }}
                    />
                  ) : (
                    <Image
                      source={require(`../../assets/images/Asset_card/binance-coin-bnb-logo.png`)}
                      resizeMode="contain"
                      style={{
                        height: moderateScale(18),
                        width: moderateScale(18),
                        marginRight: moderateScale(5),
                      }}
                    />
                  )}
                  <Text
                    style={{
                      fontSize: moderateScale(12),
                      fontFamily: 'Lato-Regular',
                      color: '#fff',
                    }}>
                    {!swap ? details[1].symbol : details[0].symbol}
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              //backgroundColor: '#faa',
              marginHorizontal: moderateScale(20),
              alignItems: 'center',
              marginBottom: moderateScale(25),
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                width: '100%',
                marginBottom: moderateScale(15),
                //backgroundColor: '#faa',
              }}>
              {amount.map((item, index) => {
                return (
                  <TouchableOpacity
                    style={{
                      backgroundColor: 'rgba(67,148,255,0.2)',
                      marginHorizontal: moderateScale(5),
                      padding: moderateScale(8),
                      paddingHorizontal: moderateScale(15),
                      borderRadius: moderateScale(15),
                    }}
                    key={item.percent}
                    // onPress={() =>
                    //   setAmounts(
                    //     index == 0
                    //       ? '1.99988'
                    //       : index == 1
                    //       ? '4.05444'
                    //       : index == 2
                    //       ? '5.45333'
                    //       : index == 3
                    //       ? '9.99999'
                    //       : '0',
                    //   )
                    // }
                  >
                    <Text
                      style={{
                        fontSize: moderateScale(12),
                        fontFamily: 'Lato-Bold',
                        color: 'rgba(67,148,255,0.5)',
                      }}>
                      {index != 3 ? `${item.percent}%` : `${item.percent}`}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: 'rgba(67,148,255,1)',
                width: '100%',
                padding: moderateScale(15),
                borderRadius: moderateScale(15),
              }}
              //onPress={() => navigation.navigate('Confirmation')}
            >
              <Text
                style={{
                  fontSize: moderateScale(14),
                  fontFamily: 'Lato-Bold',
                  color: '#fff',
                  textAlign: 'center',
                }}>
                Swap Now
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
      {/* </KeyboardAvoidingView> */}
    </View>
  );
};

const styles = StyleSheet.create({
  contain: {
    flex: 1,
    //backgroundColor:'#faa',
  },
});
