import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TextInput,
  TouchableOpacity,
  LogBox,
} from 'react-native';
import {useRoute} from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import {moderateScale} from 'react-native-size-matters';
import AntDesign_Icon from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons_Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather_Icon from 'react-native-vector-icons/Feather';
import {VictoryBar, VictoryChart, VictoryAxis} from 'victory-native';
import Transactions from '../Share/transactions';

const comp_history = () => {
  LogBox.ignoreAllLogs();
  const menu_botton = [
    {
      menu: '1H',
      receiveData: [
        {x: 1, y: 80, y0: 20},
        {x: 2, y: 50, y0: 40},
        {x: 3, y: 20, y0: 5},
      ],
      sendData: [
        {x: 1, y: 20, y0: 1},
        {x: 2, y: 40, y0: 1},
        {x: 3, y: 5, y0: 1},
      ],
    },
    {
      menu: '24H',
      receiveData: [
        {x: 1, y: 80, y0: 20},
        {x: 2, y: 50, y0: 40},
        {x: 3, y: 20, y0: 5},
        {x: 4, y: 15, y0: 5},
      ],
      sendData: [
        {x: 1, y: 20, y0: 1},
        {x: 2, y: 40, y0: 1},
        {x: 3, y: 5, y0: 1},
        {x: 4, y: 5, y0: 1},
      ],
    },
    {
      menu: '7D',
      receiveData: [
        {x: 1, y: 80, y0: 20},
        {x: 2, y: 50, y0: 40},
        {x: 3, y: 20, y0: 5},
        {x: 4, y: 15, y0: 5},
        {x: 5, y: 40, y0: 10},
        {x: 6, y: 90, y0: 50},
      ],
      sendData: [
        {x: 1, y: 20, y0: 1},
        {x: 2, y: 40, y0: 1},
        {x: 3, y: 5, y0: 1},
        {x: 4, y: 5, y0: 1},
        {x: 5, y: 10, y0: 1},
        {x: 6, y: 50, y0: 1},
      ],
    },
    {
      menu: '1M',
      receiveData: [
        {x: 1, y: 80, y0: 20},
        {x: 2, y: 50, y0: 40},
        {x: 3, y: 20, y0: 5},
        {x: 4, y: 15, y0: 5},
        {x: 5, y: 40, y0: 10},
        {x: 6, y: 90, y0: 50},
        {x: 7, y: 100, y0: 20},
        {x: 8, y: 75, y0: 10},
      ],
      sendData: [
        {x: 1, y: 20, y0: 1},
        {x: 2, y: 40, y0: 1},
        {x: 3, y: 5, y0: 1},
        {x: 4, y: 5, y0: 1},
        {x: 5, y: 10, y0: 1},
        {x: 6, y: 50, y0: 1},
        {x: 7, y: 20, y0: 1},
        {x: 8, y: 10, y0: 1},
      ],
    },
    {
      menu: '1Y',
      receiveData: [
        {x: 1, y: 80, y0: 20},
        {x: 2, y: 50, y0: 40},
        {x: 3, y: 20, y0: 5},
        {x: 4, y: 15, y0: 5},
        {x: 5, y: 40, y0: 10},
        {x: 6, y: 90, y0: 50},
      ],
      sendData: [
        {x: 1, y: 20, y0: 1},
        {x: 2, y: 40, y0: 1},
        {x: 3, y: 5, y0: 1},
        {x: 4, y: 5, y0: 1},
        {x: 5, y: 10, y0: 1},
        {x: 6, y: 50, y0: 1},
      ],
    },
    {
      menu: 'ALL',
      receiveData: [
        {x: 1, y: 80, y0: 20},
        {x: 2, y: 50, y0: 40},
        {x: 3, y: 20, y0: 5},
        {x: 4, y: 15, y0: 5},
        {x: 5, y: 40, y0: 10},
        {x: 6, y: 90, y0: 50},
        {x: 7, y: 100, y0: 20},
        {x: 8, y: 75, y0: 10},
        {x: 9, y: 20, y0: 10},
        {x: 10, y: 40, y0: 10},
      ],
      sendData: [
        {x: 1, y: 20, y0: 1},
        {x: 2, y: 40, y0: 1},
        {x: 3, y: 5, y0: 1},
        {x: 4, y: 5, y0: 1},
        {x: 5, y: 10, y0: 1},
        {x: 6, y: 50, y0: 1},
        {x: 7, y: 20, y0: 1},
        {x: 8, y: 10, y0: 1},
        {x: 9, y: 10, y0: 1},
        {x: 10, y: 10, y0: 1},
      ],
    },
  ];

  const [isSelectTab, setIsSelectTab] = useState('1H');
  const [dataChartBarSend, setDataChartBarSend] = useState(
    menu_botton[0].sendData,
  );
  const [dataChartBarReceive, setDataChartBarReceive] = useState(
    menu_botton[0].receiveData,
  );
  const route = useRoute();
  const [search, setChangeText] = useState('');

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#151517'}}>
      <StatusBar animated={true} barStyle={'light-content'} />

      <View style={{marginHorizontal: moderateScale(20)}}>
        <Text
          style={{
            color: '#fff',
            fontFamily: 'Lato-Bold',
            fontSize: moderateScale(20),
            marginTop: moderateScale(10),
          }}>
          History
        </Text>
        <View
          style={{
            flexDirection: 'row',
            // backgroundColor: '#faa',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: moderateScale(20),
            marginBottom: moderateScale(10),
          }}>
          <View
            style={{
              backgroundColor: '#1F2124',

              height: moderateScale(40),
              borderRadius: moderateScale(50 / 2),
              justifyContent: 'flex-start',
              padding: moderateScale(5),
              paddingLeft: moderateScale(15),
              flexDirection: 'row',
              alignItems: 'center',
              flex: 1,
              marginRight: moderateScale(10),
            }}>
            <AntDesign_Icon
              name={'search1'}
              size={moderateScale(15)}
              color={'gray'}
              style={{marginRight: moderateScale(10)}}
            />
            <TextInput
              style={{
                height: moderateScale(20),
                color: '#fff',
                fontFamily: 'Lato-Regular',
                fontSize: moderateScale(12),
                flex: 1,
              }}
              onChangeText={text => setChangeText(text)}
              placeholderTextColor="gray"
              value={search}
              placeholder="Search TxID"
              //keyboardType="numeric"
            />
          </View>
          <TouchableOpacity
            style={{
              width: moderateScale(40),
              height: moderateScale(40),
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: moderateScale(20),
              borderColor: '#232222',
              borderWidth: 1.5,
            }}
            // onPress={() =>
            // }
          >
            <MaterialCommunityIcons_Icon
              name={'tune-vertical'}
              size={moderateScale(15)}
              color={'#fff'}
              //style={{marginRight: moderateScale(10)}}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            //backgroundColor: '#faa'
          }}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'flex-start',
              flexDirection: 'row',
              width: '50%',
              //backgroundColor: '#faa',
            }}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: 1.5,
                borderColor: '#48A45B',
                height: moderateScale(40),
                width: moderateScale(40),
                borderRadius: moderateScale(20),
                marginVertical: moderateScale(10),
                marginRight: moderateScale(10),
              }}>
              <Feather_Icon
                name={'arrow-down-left'}
                size={moderateScale(20)}
                color={'#48A45B'}
                //style={{marginTop: moderateScale(2)}}
                //onPress={() => navigation.navigate('Add_assets')}
              />
            </View>
            <View>
              <Text
                style={{
                  fontSize: moderateScale(12),
                  fontFamily: 'Lato-Bold',
                  color: 'gray',
                }}>
                Receive (In)
              </Text>
              <Text
                style={{
                  fontSize: moderateScale(14),
                  fontFamily: 'Lato-Bold',
                  color: '#fff',
                }}>
                $4,492.42
              </Text>
            </View>
          </View>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'flex-start',
              flexDirection: 'row',
              width: '50%',
              //backgroundColor: '#faa',
            }}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                //backgroundColor: 'rgba(0,146,255,0.05)',
                height: moderateScale(40),
                width: moderateScale(40),
                borderRadius: moderateScale(20),
                marginVertical: moderateScale(10),
                marginRight: moderateScale(10),
                borderWidth: 1.5,
                borderColor: '#4394FF',
              }}>
              <Feather_Icon
                name={'arrow-up-right'}
                size={moderateScale(20)}
                color={'#4394FF'}
                //style={{marginTop: moderateScale(2)}}
                //onPress={() => navigation.navigate('Add_assets')}
              />
            </View>
            <View>
              <Text
                style={{
                  fontSize: moderateScale(12),
                  fontFamily: 'Lato-Bold',
                  color: 'gray',
                }}>
                Send (Out)
              </Text>
              <Text
                style={{
                  fontSize: moderateScale(14),
                  fontFamily: 'Lato-Bold',
                  color: '#fff',
                }}>
                $5,292.62
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            // backgroundColor: '#faa',
            marginTop: moderateScale(10),
            alignItems: 'center',
            justifyContent: 'center',
            height: moderateScale(220),
          }}>
          <VictoryChart>
            <VictoryBar
              cornerRadius={{
                topLeft: moderateScale(10),
                bottomRight: moderateScale(10),
              }}
              barWidth={moderateScale(8)}
              style={{
                data: {fill: '#4394FF'},
              }}
              animate={{
                duration: 2000,
                onLoad: {duration: 1000},
              }}
              data={dataChartBarReceive}
            />
            <VictoryBar
              cornerRadius={{
                topLeft: moderateScale(10),
                bottomRight: moderateScale(10),
              }}
              barWidth={moderateScale(8)}
              style={{
                data: {fill: '#48A45B'},
              }}
              animate={{
                duration: 2000,
                onLoad: {duration: 1000},
              }}
              data={dataChartBarSend}
            />

            <VictoryAxis
              style={{
                tickLabels: {fill: 'transparent'},
                axis: {stroke: 'transparent'},
              }}
            />
          </VictoryChart>
        </View>
        <View
          style={{
            justifyContent: 'space-around',
            // backgroundColor: '#faa',
            width: '100%',
            flexDirection: 'row',
            marginBottom: moderateScale(20),
          }}>
          {menu_botton.map((item, index) => {
            return (
              <View key={item.menu}>
                <TouchableOpacity
                  key={item.menu}
                  style={{
                    width: moderateScale(45),
                    height: moderateScale(25),
                    borderWidth: 1.5,
                    borderColor:
                      isSelectTab == item.menu ? '#4394FF' : '#232222',
                    borderRadius: moderateScale(45 / 2),
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  onPress={() => {
                    setIsSelectTab(item.menu),
                      setDataChartBarSend(item.sendData),
                      setDataChartBarReceive(item.receiveData);
                  }}>
                  <Text
                    style={{
                      fontSize: moderateScale(10),
                      fontFamily: 'Lato-Bold',
                      textAlign: 'center',
                      color: 'gray',
                    }}>
                    {item.menu}
                  </Text>
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
      </View>
      <Transactions routeName={route.name} />
    </SafeAreaView>
  );
};

export default comp_history;
