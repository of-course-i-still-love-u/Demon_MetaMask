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
import FontAwesome5_Icon from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';

export default Send_modal = () => {
  const navigation = useNavigation();
  const [gasTab, setGasTab] = useState(0);
  const [amounts, setAmounts] = useState('');
  const gas_fee = [
    {
      gwei: 25,
      cost: 0.97,
      time: 16,
    },
    {
      gwei: 26,
      cost: 1.2,
      time: 4,
    },
    {
      gwei: 30,
      cost: 2.9,
      time: 30,
    },
  ];

  const amount = [
    {percent: 25},
    {percent: 50},
    {percent: 75},
    {percent: 'MAX'},
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
            marginRight: moderateScale(100),
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
          Send
        </Text>
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
                borderColor: '#232222',
                padding: moderateScale(15),
                paddingHorizontal: moderateScale(20),
                marginTop: moderateScale(40),
              }}>
              <Text
                style={{
                  fontSize: moderateScale(12),
                  fontFamily: 'Lato-Regular',
                  color: 'gray',
                  marginBottom: moderateScale(5),
                }}>
                Address :
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontSize: moderateScale(12),
                    fontFamily: 'Lato-Bold',
                    color: '#fff',
                  }}>
                  0xC7809926AA56...C8Fc2159b8c009c23423
                </Text>
                <AntDesign_Icon
                  name="scan1"
                  size={moderateScale(18)}
                  color="gray"
                  style={{marginTop: moderateScale(-15)}}
                />
              </View>
            </View>
            <View
              style={{
                //backgroundColor: '#faa',
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
                  marginBottom: moderateScale(5),
                }}>
                <Text
                  style={{
                    fontSize: moderateScale(12),
                    fontFamily: 'Lato-Regular',
                    color: 'gray',
                  }}>
                  Amount
                </Text>
                <Text
                  style={{
                    fontSize: moderateScale(12),
                    fontFamily: 'Lato-Regular',
                    color: 'gray',
                  }}>
                  ~$3,078.44
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <TextInput
                  style={{
                    //height: moderateScale(20),
                    color: '#fff',
                    fontFamily: 'Lato-Bold',
                    fontSize: moderateScale(12),
                    flex: 1,
                  }}
                  keyboardType="numeric"
                  onChangeText={text => setAmounts(text)}
                  placeholderTextColor="gray"
                  value={amounts}
                  placeholder="0"
                  keyboardAppearance="dark"
                />

                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image
                    source={require(`../../assets/images/Asset_card/eth.png`)}
                    resizeMode="contain"
                    style={{
                      height: moderateScale(15),
                      width: moderateScale(15),
                      marginRight: moderateScale(5),
                    }}
                  />
                  <Text
                    style={{
                      fontSize: moderateScale(12),
                      fontFamily: 'Lato-Bold',
                      color: '#fff',
                      marginRight: moderateScale(5),
                    }}>
                    ETH
                  </Text>
                  <AntDesign_Icon
                    name="caretdown"
                    size={moderateScale(8)}
                    color="#fff"
                    //style={{marginTop: moderateScale(-15)}}
                  />
                </View>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                //backgroundColor: '#faa',
                marginHorizontal: moderateScale(20),
                marginTop: moderateScale(20),
                justifyContent: 'space-between',
              }}>
              {gas_fee.map((item, index) => {
                return (
                  <LinearGradient
                    colors={
                      gasTab == index
                        ? [
                            '#00FFFF',
                            '#17C8FF',
                            '#329BFF',
                            '#4C64FF',
                            '#6536FF',
                            '#8000FF',
                          ]
                        : ['#232222', '#232222']
                    }
                    key={item.cost}
                    start={{x: 0.0, y: 1.0}}
                    end={{x: 1.0, y: 1.0}}
                    style={{
                      width: '32%',
                      borderRadius: moderateScale(20),
                      padding: moderateScale(1.5),
                    }}>
                    <TouchableOpacity
                      style={{
                        backgroundColor: '#151517',
                        padding: moderateScale(10),
                        borderRadius: moderateScale(20),
                        alignItems: 'center',
                        paddingVertical: moderateScale(20),
                      }}
                      key={item.cost}
                      onPress={() => setGasTab(index)}>
                      <FontAwesome5_Icon
                        name="gas-pump"
                        size={moderateScale(15)}
                        color="gray"
                        //style={{marginTop: moderateScale(-15)}}
                      />

                      <Text
                        style={{
                          fontSize: moderateScale(12),
                          fontFamily: 'Lato-Bold',
                          color: '#fff',
                          marginTop: moderateScale(5),
                        }}>
                        {item.gwei} gwei
                      </Text>

                      <View
                        style={{
                          flexDirection: 'row',
                          marginTop: moderateScale(5),
                        }}>
                        <Text
                          style={{
                            fontSize: moderateScale(10),
                            fontFamily: 'Lato-Bold',
                            color: 'gray',
                          }}>
                          {index != 2
                            ? `$${item.cost.toFixed(2)}~${item.time} min`
                            : `$${item.cost.toFixed(2)}~${item.time} sec`}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </LinearGradient>
                );
              })}
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
                      padding: moderateScale(10),
                      paddingHorizontal: moderateScale(20),
                      borderRadius: moderateScale(15),
                    }}
                    key={item.percent}
                    onPress={() =>
                      setAmounts(
                        index == 0
                          ? '1.99988'
                          : index == 1
                          ? '4.05444'
                          : index == 2
                          ? '5.45333'
                          : index == 3
                          ? '9.99999'
                          : '0',
                      )
                    }>
                    <Text
                      style={{
                        fontSize: moderateScale(10),
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
              onPress={()=>navigation.navigate('Confirmation')}
              >
              <Text
                style={{
                  fontSize: moderateScale(12),
                  fontFamily: 'Lato-Bold',
                  color: '#fff',
                  textAlign: 'center',
                }}>
                Next
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
