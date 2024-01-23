import React, {useState, useRef, useEffect} from 'react';
import {View, TouchableOpacity, Text, FlatList} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {useRoute} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import Headers from './headers';
import Chart_price from '../Home/chart_price';
import Feather_Icon from 'react-native-vector-icons/Feather';

export default Transactions = ({routeName}) => {
  const [isLoading, setLoading] = useState(false);
  const [isSelectTab, setIsSelectTab] = useState(1);

  const route = useRoute();
  const navigation = useNavigation();
  if (routeName != 'History') {
    var data = route.params.data_params;
    var eth_logo = route.params.eth_logo;
  }

  //console.log(eth_logo,'===data===')
  const transactions_history_chartBar = [
    {
      action: 'Receive',
      amount: '+99.909 KUB',
      status: 'Succeeded',
      address: '0x888...4A4A9A6',
    },
    {
      action: 'Approve ETH',
      amount: '-0.054 ETH',
      status: 'Succeeded',
      address: '0xb9a9...4A4A9A6',
    },
    {
      action: 'Receive',
      amount: '+1.040 ETH',
      status: 'Succeeded',
      address: '0xb888...4A4A9A6',
    },
    {
      action: 'Receive',
      amount: '+0.55 ETH',
      status: 'Succeeded',
      address: '0xb888...4A4A9A6',
    },
    {
      action: 'Send',
      amount: '-1.154 ETH',
      status: 'Succeeded',
      address: '0xb9a9...4A4A9A6',
    },
  ];

  const transactions_history = [
    {
      action: 'Receive',
      amount: '+0.1 ETH',
      status: 'Succeeded',
      address: '0x888...4A4A9A6',
    },
    {
      action: 'Send',
      amount: '-0.054 ETH',
      status: 'Succeeded',
      address: '0xb9a9...4A4A9A6',
    },
    {
      action: 'Receive',
      amount: '+1.040 ETH',
      status: 'Succeeded',
      address: '0xb888...4A4A9A6',
    },
    {
      action: 'Receive',
      amount: '+0.55 ETH',
      status: 'Succeeded',
      address: '0xb888...4A4A9A6',
    },
    {
      action: 'Send',
      amount: '-1.154 ETH',
      status: 'Succeeded',
      address: '0xb9a9...4A4A9A6',
    },
  ];
  //console.log(data, '====data====');

  return (
    <View style={{flex: 1, backgroundColor: '#151517'}}>
      {routeName != 'History' ? (
        <>
          <Headers routeName={route.name} data={data} />
          <Chart_price data={data} eth_logo={eth_logo} />
        </>
      ) : null}

      <View
        style={{
          flexDirection: 'row',
          height: moderateScale(35),
          // backgroundColor: '#faf',
          marginBottom: moderateScale(20),
          borderBottomWidth: moderateScale(1.5),
          borderColor: '#232222',
          justifyContent: 'space-between',
          marginHorizontal: moderateScale(20),
        }}>
        <Text
          style={{
            fontSize: moderateScale(16),
            fontFamily: 'Lato-Bold',
            textAlign: 'center',
            color: '#fff',
            // marginRight: moderateScale(10),
          }}>
          Transactions
        </Text>
        <Text
          style={{
            fontSize: moderateScale(12),
            fontFamily: 'Lato-Bold',
            textAlign: 'center',
            color: 'gray',
            // marginRight: moderateScale(10),
          }}>
          View all
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          //backgroundColor: '#faa',
          marginHorizontal: moderateScale(20),
        }}>
        <Text
          style={{
            fontSize: moderateScale(10),
            fontFamily: 'Lato-Bold',
            color: 'gray',
          }}>
          6 Dec,2077
        </Text>
        <FlatList
          // style={{marginTop: moderateScale(-20)}}
          data={
            routeName != 'History'
              ? transactions_history
              : transactions_history_chartBar
          }
          bounces={true}
          renderItem={({item, index}) => {
            return (
              <View style={{flexDirection: 'row'}}>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor:
                      item.action == 'Send'
                        ? 'rgba(0,146,255,0.05)'
                        : item.action == 'Approve ETH'
                        ? 'rgba(103,72,164,0.05)'
                        : 'rgba(72,164,91,0.05)',
                    height: moderateScale(40),
                    width: moderateScale(40),
                    borderRadius: moderateScale(20),
                    marginVertical: moderateScale(10),
                    marginRight: moderateScale(10),
                  }}>
                  <Feather_Icon
                    name={
                      item.action == 'Send'
                        ? 'arrow-up-right'
                        : item.action == 'Approve ETH'
                        ? 'check'
                        : 'arrow-down-left'
                    }
                    size={moderateScale(20)}
                    color={
                      item.action == 'Send'
                        ? '#4394FF'
                        : item.action == 'Approve ETH'
                        ? '#6748a4'
                        : '#48A45B'
                    }
                    style={{marginTop: moderateScale(2)}}
                  />
                </View>
                <TouchableOpacity
                  style={{
                    flex: 1,
                    // backgroundColor: '#faa',
                    marginTop: moderateScale(15),
                  }}
                  onPress={() => navigation.navigate('Details_history',{data_params:item})}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Text
                      style={{
                        fontSize: moderateScale(14),
                        fontFamily: 'Lato-Bold',
                        color: '#fff',
                      }}>
                      {`${item.action}`}
                    </Text>
                    <Text
                      style={{
                        fontSize: moderateScale(14),
                        fontFamily: 'Lato-Bold',
                        color: '#fff',
                      }}>
                      {`${item.amount}`}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Text
                      style={{
                        fontSize: moderateScale(10),
                        fontFamily: 'Lato-Bold',
                        color: 'gray',
                      }}>
                      {item.action == 'Send'
                        ? ` To: ${item.address} `
                        : ` From: ${item.address} `}
                    </Text>
                    <Text
                      style={{
                        fontSize: moderateScale(10),
                        fontFamily: 'Lato-Bold',
                        color: '#48A45B',
                      }}>
                      {`${item.status} `}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            );
          }}
          keyExtractor={item => item.amount}
        />
      </View>
    </View>
  );
};
