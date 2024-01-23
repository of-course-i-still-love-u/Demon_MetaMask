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
import {AreaChart, Grid} from 'react-native-svg-charts';
import AntDesign_Icon from 'react-native-vector-icons/AntDesign';
import * as shape from 'd3-shape';
import {formatNumber} from 'accounting-js';

const {width, height} = Dimensions.get('screen');

export default Chart_price = ({data, eth_logo}) => {
  const [isSelectTab, setIsSelectTab] = useState('1H');
  const [item, setItem] = useState(data);
  const [isSelectChart, setIsSelectChart] = useState(item.chartData);

  //console.log(item, '==item==');

  const menu_botton = [
    {
      menu: '1H',
      chartData: [
        50, 10, 40, 95, 100, 120, 111, 115, 111, 100, 122, 100, 90, 80, 50, 121,
        111, 115, 120,
      ],
    },
    {
      menu: '24H',
      chartData: [
        50, 10, 40, 95, 100, 120, 111, 45, 54, 66, 77, 100, 90, 80, 50, 121,
        111, 115, 120,
      ],
    },
    {
      menu: '7D',
      chartData: [
        50, 10, 40, 95, 34, 55, 65, 77, 111, 100, 122, 100, 90, 80, 50, 121,
        111, 115, 120,
      ],
    },
    {
      menu: '1M',
      chartData: [
        50, 10, 40, 95, 55, 44, 33, 22, 11, 100, 122, 100, 90, 80, 50, 121, 111,
        115, 120,
      ],
    },
    {
      menu: '1Y',
      chartData: [
        50, 10, 40, 95, 100, 120, 99, 99, 88, 100, 77, 100, 90, 80, 50, 121,
        111, 115, 120,
      ],
    },
    {
      menu: 'ALL',
      chartData: [
        50, 10, 40, 95, 44, 33, 222, 115, 90, 65, 122, 100, 90, 80, 50, 121,
        111, 115, 120,
      ],
    },
  ];

  return (
    <View style={styles.container}>
      <View
        style={{
          //flex: 1,
          justifyContent: 'space-between',
          width: '100%',
          alignItems: 'center',
          // backgroundColor: '#faf',
        }}>
        <View
          style={{
            width: '90%',
            //backgroundColor: '#faa',
            paddingBottom: moderateScale(15),
            marginBottom: moderateScale(10),
            marginTop: moderateScale(20),
            borderTopWidth: 1.5,
            borderColor: '#232222',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View style={{flexDirection: 'row'}}>
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
              {eth_logo ? (
                <Image
                  source={require(`../../assets/images/Asset_card/eth.png`)}
                  resizeMode="contain"
                  style={{
                    height: moderateScale(22),
                    width: moderateScale(22),
                  
                  }}
                />
              ) : (
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
              )}
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
                  fontSize: moderateScale(10),
                  fontFamily: 'Lato-Regular',
                  color: 'gray',
                }}>
                {`${item.name}  ${item.symbol} `}
              </Text>
              <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
                <Text
                  style={{
                    fontSize: moderateScale(14),
                    fontFamily: 'Lato-Bold',
                    color: '#fff',
                    marginRight: moderateScale(10),
                  }}>
                  {item.price > 1000
                    ? `$${formatNumber(item.price, {precision: 0})}`
                    : `$${formatNumber(item.price)}`}
                </Text>
                <Text
                  style={{
                    fontSize: moderateScale(10),
                    fontFamily: 'Lato-Regular',
                    color: item.profit > 0 ? '#48A45B' : '#AA2C2C',
                  }}>
                  {`$${item.profit.toFixed(2)} `}
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              // width: moderateScale(45),
              height: moderateScale(20),
              backgroundColor:
                item.percent_change_24h > 0 ? '#48A45B' : '#AA2C2C',
              borderRadius: moderateScale(20),
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              padding: moderateScale(2),
              paddingHorizontal: moderateScale(4),
            }}>
            <AntDesign_Icon
              name={item.percent_change_24h > 0 ? 'caretup' : 'caretdown'}
              size={moderateScale(7)}
              color={'#fff'}
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
                fontFamily: 'Lato-Bold',
                color: '#fff',
                marginRight: moderateScale(2),
              }}>
              {item.percent_change_24h > 0
                ? `${item.percent_change_24h.toFixed(2)}%`
                : `${item.percent_change_24h.toFixed(2)}%`}
            </Text>
          </View>
        </View>
      </View>

      <AreaChart
        style={{
          height: moderateScale(200),
          width: '100%',
          padding: moderateScale(4),
          marginVertical: moderateScale(20),
        }}
        data={isSelectChart}
        contentInset={{
          top: moderateScale(10),
          bottom: moderateScale(2),
        }}
        curve={shape.curveNatural}
        svg={{
          fill: 'rgba(67,148,255,0.05)',

          stroke: 'rgba(67,148,255,1)',
        }}
      />
      <View
        style={{
          justifyContent: 'space-around',
          //backgroundColor: '#faa',
          width: '90%',
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
                  borderColor: isSelectTab == item.menu ? '#4394FF' : '#232222',
                  borderRadius: moderateScale(45 / 2),
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={() => {
                  setIsSelectTab(item.menu), setIsSelectChart(item.chartData);
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
