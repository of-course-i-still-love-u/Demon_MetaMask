import React, {useState, useRef, useEffect} from 'react';
import {
  StatusBar,
  View,
  Image,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import LottieView from 'lottie-react-native';
import {formatNumber} from 'accounting-js';
import {AreaChart, Grid} from 'react-native-svg-charts';
import * as shape from 'd3-shape';
import AntDesign_Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

export default Assets = ({routeName}) => {
  console.log(routeName);
  const navigation = useNavigation();

  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState([
    {
      cmc_rank: 1,
      id: 1,
      logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1.png',
      market_cap: 1080998411272.9978,
      name: 'Bitcoin',
      percent_change_24h: -4,
      price: 57248.36981044872,
      symbol: 'BTC',
      exchange: 'Binance',
      holding: 9.2,
      profit: -1999,
      value: 124434,
      chartData: [
        50, 10, 40, 95, 100, 120, 111, 115, 111, 100, 122, 100, 90, 80, 50,
      ],
    },

    {
      cmc_rank: 14,
      id: 4172,
      logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/4172.png',
      market_cap: 15895365451.659525,
      name: 'Terra',
      percent_change_24h: 3.85,
      price: 39.8653809985922,
      symbol: 'LUNA',
      exchange: 'Coinbase',
      holding: 29.4,
      value: 443,
      profit: 10,
      chartData: [50, 10, 40, 95, 100, 120, 85, 91, 35, 53, 10, 24, 50, 20, 80],
    },
    {
      cmc_rank: 52,
      id: 2130,
      logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2130.png',
      market_cap: 3668037078.6375885,
      name: 'Enjin Coin',
      percent_change_24h: 7.14160538,
      price: 4.373981593839613,
      symbol: 'ENJ',
      exchange: 'Coinbase',
      holding: 100,
      value: 55,
      profit: 50,
      chartData: [50, 10, 40, 95, 100, 120, 85, 91, 35, 53, 10, 24, 50, 20, 80],
    },

    {
      cmc_rank: 32,
      id: 6210,
      logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/6210.png',
      market_cap: 6919551839.754169,
      name: 'The Sandbox',
      percent_change_24h: 19.41651551,
      price: 7.755205307900317,
      symbol: 'SAND',
      exchange: 'Coinbase',
      holding: 99.5,
      value: 322,
      profit: 2,
      chartData: [50, 10, 40, 95, 100, 120, 85, 91, 35, 53, 10, 24, 50, 20, 80],
    },

    {
      cmc_rank: 23,
      id: 1966,
      logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1966.png',
      market_cap: 9448675337.31087,
      name: 'Decentraland',
      percent_change_24h: 21.60430531,
      price: 5.1784279720345054,
      symbol: 'MANA',
      exchange: 'OKEx',
      holding: 238.34,
      value: 5444,
      profit: 5,
      chartData: [50, 10, 40, 95, 100, 120, 85, 91, 35, 53, 10, 24, 50, 20, 80],
    },
  ]);

  const [data_assets, setAata_assets] = useState([
    {
      cmc_rank: 1,
      id: 1,
      logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png',
      market_cap: 1080998411272.9978,
      name: 'Binance Coin',
      percent_change_24h: 3.84,
      price: 545.34,
      symbol: 'BNB',
      exchange: 'Binance',
      holding: 2.4,
      profit: -1999,
      value: 4444,
      chartData: [
        50, 10, 40, 95, 100, 120, 111, 70, 80, 100, 122, 100, 90, 120, 150,
      ],
    },

    {
      cmc_rank: 14,
      id: 4172,
      logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/4687.png',
      market_cap: 15895365451.659525,
      name: 'Binance USD',
      percent_change_24h: -0.1,
      price: 1.0,
      symbol: 'BUSD',
      exchange: 'Coinbase',
      holding: 29.4,
      value: 29.4,
      profit:10,
      chartData: [1, 1, 1, 1, 1, 1, 5, 1, 1, 1, 1, 1, 1, 1, 1],
    },
    {
      cmc_rank: 52,
      id: 2130,
      logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/6758.png',
      market_cap: 3668037078.6375885,
      name: 'SushiSwap',
      percent_change_24h: 7.14160538,
      price: 7.4,
      symbol: 'SUSHI',
      exchange: 'Coinbase',
      holding: 45,
      value: 140,
      profit: 0.5,
      chartData: [50, 10, 40, 95, 100, 120, 85, 91, 35, 53, 10, 24, 50, 20, 80],
    },

    {
      cmc_rank: 32,
      id: 6210,
      logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/7186.png',
      market_cap: 6919551839.754169,
      name: 'PancakeSwap',
      percent_change_24h: 19.41651551,
      price: 12.19,
      symbol: 'CAKE',
      exchange: 'Coinbase',
      holding: 99.5,
      value: 222,
      profit: 2,
      chartData: [50, 10, 40, 95, 100, 120, 85, 91, 35, 53, 10, 24, 50, 20, 80],
    },

    {
      cmc_rank: 23,
      id: 1966,
      logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/16093.png',
      market_cap: 9448675337.31087,
      name: 'Bitkub Coin',
      percent_change_24h: 99.99,
      price: 15.55,
      symbol: 'KUB',
      exchange: 'OKEx',
      holding: 555.55,
      value: 5555,
      profit: 4,
      chartData: [
        50, 10, 40, 95, 100, 120, 130, 100, 90, 80, 95, 50, 90, 120, 150,
      ],
    },
  ]);

  return (
    <FlatList
      // style={{marginTop: moderateScale(-20)}}
      data={routeName == 'Portfolio' ? data : data_assets}
      bounces={false}
      renderItem={({item, index}) => {
        return (
          <View
            style={{
              marginHorizontal: moderateScale(20),
              flexDirection: 'row',
              //backgroundColor: '#faf',
              alignItems: 'center',
            }}>
            <View style={{flexDirection: 'row', width: moderateScale(150)}}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#232222',
                  height: moderateScale(40),
                  width: moderateScale(40),
                  borderRadius: moderateScale(20),
                  marginVertical: moderateScale(10),
                  marginRight: moderateScale(5),
                }}>
                <Image
                  source={{
                    uri: `${item.logo}`,
                  }}
                  resizeMode="cover"
                  style={{
                    height: moderateScale(22),
                    width: moderateScale(22),
                    borderRadius: moderateScale(22 / 2),
                  }}
                />
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  //marginTop: moderateScale(5),
                  // backgroundColor: '#faa',
                  margin: moderateScale(5),
                }}>
                <Text
                  style={{
                    fontSize: moderateScale(14),
                    fontFamily: 'Lato-Bold',
                    color: '#fff',
                    marginRight: moderateScale(10),
                  }}>
                  {`${item.name} `}
                </Text>

                <View style={{flexDirection: 'row'}}>
                  <Text
                    style={{
                      fontSize: moderateScale(10),
                      fontFamily: 'Lato-Regular',
                      color: 'gray',
                    }}>
                    {item.price > 1000
                      ? `$${formatNumber(item.price, {precision: 0})}`
                      : `$${formatNumber(item.price)}`}
                  </Text>

                  <AntDesign_Icon
                    name={item.percent_change_24h > 0 ? 'caretup' : 'caretdown'}
                    size={moderateScale(7)}
                    color={item.percent_change_24h > 0 ? '#48A45B' : '#AA2C2C'}
                    style={{
                      marginLeft: moderateScale(5),
                      marginTop:
                        item.percent_change_24h > 0
                          ? moderateScale(4)
                          : moderateScale(2),
                      marginRight: moderateScale(2),
                    }}
                  />
                  <Text
                    style={{
                      fontSize: moderateScale(10),
                      fontFamily: 'Lato-Regular',
                      color:
                        item.percent_change_24h > 0 ? '#48A45B' : '#AA2C2C',
                    }}>
                    {item.percent_change_24h > 0
                      ? `${item.percent_change_24h.toFixed(2)}%`
                      : `${item.percent_change_24h.toFixed(2)}%`}
                  </Text>
                </View>
              </View>
            </View>
            <TouchableOpacity
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                //backgroundColor: '#faa',
              }}
              onPress={() => navigation.navigate('Transactions',{data_params:item})}>
              <AreaChart
                style={{
                  height: moderateScale(60),
                  width: moderateScale(100),
                  padding: moderateScale(4),
                  marginTop: moderateScale(-25),
                }}
                data={item.chartData}
                contentInset={{
                  top: moderateScale(10),
                  bottom: moderateScale(2),
                }}
                curve={shape.curveNatural}
                svg={{
                  fill:
                    item.percent_change_24h > 0
                      ? 'rgba(72,164,91,0.08)'
                      : 'rgba(170,44,44,0.4)',
                  stroke:
                    item.percent_change_24h > 0
                      ? 'rgba(72,164,91)'
                      : 'rgba(170,44,44)',
                }}></AreaChart>
            </TouchableOpacity>
            <View
              style={{
                flex: 1,
                justifyContent: 'space-around',
                alignItems: 'flex-end',
                //backgroundColor: '#faa',
              }}>
              <Text
                style={{
                  fontSize: moderateScale(14),
                  fontFamily: 'Lato-Bold',
                  color: '#fff',
                }}>
                {formatNumber(`${item.holding}`)}
              </Text>
              <Text
                style={{
                  fontSize: moderateScale(10),
                  fontFamily: 'Lato-Regular',
                  color: 'gray',
                }}>
                {item.holding < 1
                  ? `$${item.value.toFixed(8)}`
                  : '$' + formatNumber(`${item.value}`)}
              </Text>
            </View>
          </View>
        );
      }}
      keyExtractor={item => item.id}
    />
  );
};
