import React, {useState, useRef, useEffect} from 'react';
import {
  StatusBar,
  View,
  Image,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import AntDesign_Icon from 'react-native-vector-icons/AntDesign';
import {useRoute} from '@react-navigation/native';
import Headers from '../Share/headers';

export default Add_assets = () => {
  const route = useRoute();

  const [isLoading, setLoading] = useState(false);

  const [filterData, setFilterData] = useState([]);
  const [data_assets, setData_assets] = useState([
    {
      isChecked: false,
      cmc_rank: 1,
      id: 1,
      logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png',
      market_cap: 1080998411272.9978,
      name: 'Binance Coin',
      percent_change_24h: 3.84,
      price: 545.34,
      symbol: 'BNB',
      exchange: 'Binance',
      holding: 0.0455,
      profit: '-1999',
      value: 4444,
      chartData: [
        50, 10, 40, 95, 100, 120, 111, 70, 80, 100, 122, 100, 90, 120, 150,
      ],
    },

    {
      isChecked: false,
      cmc_rank: 14,
      id: 2,
      logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/4687.png',
      market_cap: 15895365451.659525,
      name: 'Binance USD',
      percent_change_24h: -0.1,
      price: 1.0,
      symbol: 'BUSD',
      exchange: 'Coinbase',
      holding: 19.4444,
      value: 29.4,
      profit: '+10',
      chartData: [1, 1, 1, 1, 1, 1, 5, 1, 1, 1, 1, 1, 1, 1, 1],
    },
    {
      isChecked: false,
      cmc_rank: 52,
      id: 3,
      logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/6758.png',
      market_cap: 3668037078.6375885,
      name: 'SushiSwap',
      percent_change_24h: 7.14160538,
      price: 7.4,
      symbol: 'SUSHI',
      exchange: 'Coinbase',
      holding: 5.5678,
      value: 140,
      profit: '+0.5',
      chartData: [50, 10, 40, 95, 100, 120, 85, 91, 35, 53, 10, 24, 50, 20, 80],
    },

    {
      isChecked: false,
      cmc_rank: 32,
      id: 4,
      logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/7186.png',
      market_cap: 6919551839.754169,
      name: 'PancakeSwap',
      percent_change_24h: 19.41651551,
      price: 12.19,
      symbol: 'CAKE',
      exchange: 'Coinbase',
      holding: 0.0055,
      value: 222,
      profit: '+2',
      chartData: [50, 10, 40, 95, 100, 120, 85, 91, 35, 53, 10, 24, 50, 20, 80],
    },

    {
      isChecked: false,
      cmc_rank: 23,
      id: 5,
      logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/16093.png',
      market_cap: 9448675337.31087,
      name: 'Bitkub Coin',
      percent_change_24h: 99.99,
      price: 15.55,
      symbol: 'KUB',
      exchange: 'OKEx',
      holding: 5.5555,
      value: 5555,
      profit: '+4',
      chartData: [
        50, 10, 40, 95, 100, 120, 130, 100, 90, 80, 95, 50, 90, 120, 150,
      ],
    },
    {
      isChecked: false,
      cmc_rank: 24,
      id: 6,
      logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3890.png',
      market_cap: 9448675337.31087,
      name: 'Polygon',
      percent_change_24h: 99.99,
      price: 15.55,
      symbol: 'MATIC',
      exchange: 'OKEx',
      holding: 1.0201,
      value: 5555,
      profit: '+4',
      chartData: [
        50, 10, 40, 95, 100, 120, 130, 100, 90, 80, 95, 50, 90, 120, 150,
      ],
    },
    {
      isChecked: false,
      cmc_rank: 24,
      id: 7,
      logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/7083.png',
      market_cap: 9448675337.31087,
      name: 'Uniswap',
      percent_change_24h: 99.99,
      price: 15.55,
      symbol: 'UNI',
      exchange: 'OKEx',
      holding: 0.4002,
      value: 5555,
      profit: '+4',
      chartData: [
        50, 10, 40, 95, 100, 120, 130, 100, 90, 80, 95, 50, 90, 120, 150,
      ],
    },
    {
      isChecked: false,
      cmc_rank: 24,
      id: 8,
      logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5805.png',
      market_cap: 9448675337.31087,
      name: 'Avalanche',
      percent_change_24h: 99.99,
      price: 15.55,
      symbol: 'AVAX',
      exchange: 'OKEx',
      holding: 0.0,
      value: 5555,
      profit: '+4',
      chartData: [
        50, 10, 40, 95, 100, 120, 130, 100, 90, 80, 95, 50, 90, 120, 150,
      ],
    },
    {
      isChecked: false,
      cmc_rank: 24,
      id: 9,
      logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2010.png',
      market_cap: 9448675337.31087,
      name: 'Cardano',
      percent_change_24h: 99.99,
      price: 15.55,
      symbol: 'ADA',
      exchange: 'OKEx',
      holding: 0.0,
      value: 5555,
      profit: '+4',
      chartData: [
        50, 10, 40, 95, 100, 120, 130, 100, 90, 80, 95, 50, 90, 120, 150,
      ],
    },
    {
      isChecked: false,
      cmc_rank: 24,
      id: 10,
      logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/6636.png',
      market_cap: 9448675337.31087,
      name: 'Polkadot',
      percent_change_24h: 99.99,
      price: 15.55,
      symbol: 'DOT',
      exchange: 'OKEx',
      holding: 0.0,
      value: 5555,
      profit: '+4',
      chartData: [
        50, 10, 40, 95, 100, 120, 130, 100, 90, 80, 95, 50, 90, 120, 150,
      ],
    },
    {
      isChecked: false,
      cmc_rank: 24,
      id: 11,
      logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/74.png',
      market_cap: 9448675337.31087,
      name: 'Dogecoin',
      percent_change_24h: 99.99,
      price: 15.55,
      symbol: 'DOGE',
      exchange: 'OKEx',
      holding: 0.0,
      value: 5555,
      profit: '+4',
      chartData: [
        50, 10, 40, 95, 100, 120, 130, 100, 90, 80, 95, 50, 90, 120, 150,
      ],
    },
    {
      isChecked: false,
      cmc_rank: 24,
      id: 12,
      logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/825.png',
      market_cap: 9448675337.31087,
      name: 'Tether',
      percent_change_24h: 99.99,
      price: 15.55,
      symbol: 'USDT',
      exchange: 'OKEx',
      holding: 1.0,
      value: 5555,
      profit: '+4',
      chartData: [
        50, 10, 40, 95, 100, 120, 130, 100, 90, 80, 95, 50, 90, 120, 150,
      ],
    },
  ]);

  const [forceUpdate, setForceUpdate] = useState(false);
  const [search, setChangeText] = React.useState('');

  const onCheck = (item, index) => {
    const selected = data_assets.findIndex(i => i.id === item.id);
    if (data_assets[selected].isChecked == false) {
      data_assets[selected].isChecked = true;
      setData_assets(data_assets);
    } else {
      data_assets[selected].isChecked = false;
      setData_assets(data_assets);
    }

    if (forceUpdate == false) {
      setForceUpdate(!forceUpdate);
    } else {
      setForceUpdate(false);
    }
  };

  const searchFilterFunction = text => {
    setChangeText(text);

    if (text.length >= 2) {
      let filter = data_assets.filter(
        item => item.symbol == text.toUpperCase(),
      );
      if (filter.length > 0) {
        setFilterData(filter);
      }

      console.log(filter, '====filter==');
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: '#151517'}}>
      <Headers routeName={route.name} />
      {/* { console.log(search)} */}

      <View
        style={{
          backgroundColor: '#1F2124',
          marginHorizontal: moderateScale(20),
          marginTop: moderateScale(20),
          height: moderateScale(40),
          borderRadius: moderateScale(50 / 2),
          justifyContent: 'flex-start',
          padding: moderateScale(5),
          paddingLeft: moderateScale(15),
          marginBottom: moderateScale(10),
          flexDirection: 'row',
          alignItems: 'center',
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
          onChangeText={text => searchFilterFunction(text)}
          placeholderTextColor="gray"
          value={search}
          placeholder="Search assets"
          //keyboardType="numeric"
        />
      </View>

      <FlatList
        // style={{marginTop: moderateScale(-20)}}
        data={search == '' ? data_assets : filterData}
        bounces={true}
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
                      fontSize: moderateScale(12),
                      fontFamily: 'Lato-Bold',
                      color: '#fff',
                      marginRight: moderateScale(10),
                    }}>
                    {`${item.holding.toFixed(4)} ${item.symbol}`}
                  </Text>

                  <View style={{flexDirection: 'row'}}>
                    <Text
                      style={{
                        fontSize: moderateScale(10),
                        fontFamily: 'Lato-Regular',
                        color: 'gray',
                      }}>
                      {`${item.name} `}
                    </Text>
                  </View>
                </View>
              </View>

              <View
                style={{
                  flex: 1,
                  justifyContent: 'space-around',
                  alignItems: 'flex-end',
                  //backgroundColor: '#faa',
                }}>
                <TouchableOpacity
                  style={{
                    width: moderateScale(25),
                    height: moderateScale(25),
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: moderateScale(25 / 2),
                    borderColor: '#232222',
                    borderWidth: 1.5,
                  }}
                  onPress={() => {
                    onCheck(item, index);
                  }}>
                  {item.isChecked == true ? (
                    <AntDesign_Icon
                      name={'checkcircle'}
                      size={moderateScale(21)}
                      color={'#48A45B'}
                      style={{}}
                    />
                  ) : null}
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
        keyExtractor={item => item.id}
      />
    </View>
  );
};
