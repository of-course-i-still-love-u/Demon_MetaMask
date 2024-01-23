import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {VictoryPie, VictoryLabel} from 'victory-native';
import LottieView from 'lottie-react-native';
import LinearGradient from 'react-native-linear-gradient';

const {width, height} = Dimensions.get('screen');

export default PieChart = () => {
  const [isSelectTab, setIsSelectTab] = useState(2);
  const chartColor_set2 = [
    '#ff99b7',
    '#aec3ff',
    '#c6b9df',
    '#d0ffa1',
    '#ffffa6',
    '#8000FF',
  ];
  const chartColor = [
    '#ee1f26',
    '#f4be44',
    '#048c44',
    '#653830',
    '#8000FF',
    '#a65e58',
  ];

  const pieData = [
    {x: 'BTC', y: 40},
    {x: 'LUNA', y: 10},
    {x: 'ENJ', y: 10},
    {x: 'SAND', y: 20},
    {x: 'MANA', y: 20},
  ];

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          width: '90%',
          height: moderateScale(45),
          //backgroundColor:'#faa'
        }}>
        <TouchableOpacity
          style={{
            width: '50%',
            borderBottomColor: isSelectTab == 1 ? '#4394FF' : '#232222',
            borderBottomWidth: 2,
            justifyContent: 'center',
          }}
          onPress={() => setIsSelectTab(1)}>
          <Text
            style={{
              fontSize: moderateScale(14),
              fontFamily: 'Lato-Bold',
              color: isSelectTab == 1 ? '#4394FF' : '#fff',
              textAlign: 'center',
              marginRight: moderateScale(10),
            }}>
            Chart
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: '50%',
            borderBottomColor: isSelectTab == 2 ? '#4394FF' : '#232222',
            borderBottomWidth: 2,
            justifyContent: 'center',
          }}
          onPress={() => setIsSelectTab(2)}>
          <Text
            style={{
              fontSize: moderateScale(14),
              fontFamily: 'Lato-Bold',
              textAlign: 'center',
              color: isSelectTab == 2 ? '#4394FF' : '#fff',
              marginRight: moderateScale(10),
            }}>
            Allocation
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'space-between',
          width: '100%',
          alignItems: 'center',
          // backgroundColor:'#faa',
        }}>
        <LinearGradient
          colors={[
            '#00FFFF',
            '#17C8FF',
            '#329BFF',
            '#4C64FF',
            '#6536FF',
            '#8000FF',
          ]}
          start={{x: 0.0, y: 1.0}}
          end={{x: 1.0, y: 1.0}}
          style={{
            width: moderateScale(220),
            height: moderateScale(220),
            borderRadius: moderateScale(220 / 2),
            //backgroundColor: '#faa',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: moderateScale(20),
          }}>
          <View
            style={{
              width: moderateScale(215),
              height: moderateScale(215),
              borderRadius: moderateScale(215 / 2),
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#151517',
            }}>
            <VictoryPie
              // width={chartWidth}
              // height={chartHeight}
              width={moderateScale(280)}
              height={moderateScale(280)}
              cornerRadius={100}
              padAngle={4}
              style={{
                labels: {
                  fill: 'transparent',
                },
              }}
              data={pieData}
              colorScale={chartColor}
              innerRadius={moderateScale(100)}
            />
            <Text
              style={{
                fontSize: moderateScale(20),
                fontFamily: 'Lato-Black',
                color: '#fff',
                position: 'absolute',
                bottom: moderateScale(100),
              }}>
              $45,888.32
            </Text>
            <Text
              style={{
                fontSize: moderateScale(14),
                fontFamily: 'Lato-Regular',
                color: 'gray',
                position: 'absolute',
                bottom: moderateScale(75),
              }}>
              Total balance
            </Text>
          </View>
        </LinearGradient>
        <View
          style={{
            width: '90%',
            // backgroundColor: '#faf',
            borderBottomColor: '#232222',
            borderBottomWidth: moderateScale(1.5),
            paddingBottom: moderateScale(15),
            marginBottom: moderateScale(10),
          }}>
          <FlatList
            //style={{marginTop: moderateScale(-20)}}
            data={pieData}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            //bounces={false}
            renderItem={({item, index}) => {
              return (
                <View style={{flexDirection: 'row'}}>
                  <View
                    style={{
                      width: moderateScale(5),
                      height: moderateScale(10),
                      backgroundColor: chartColor[index],
                      borderRadius: moderateScale(5 / 2),
                      margin: moderateScale(2),
                      marginRight: moderateScale(5),
                    }}
                  />
                  <Text
                    style={{
                      fontSize: moderateScale(12),
                      fontFamily: 'Lato-Bold',
                      textAlign: 'center',
                      color: '#fff',
                      marginRight: moderateScale(5),
                    }}>
                    {item.x}
                  </Text>
                  <Text
                    style={{
                      fontSize: moderateScale(12),
                      fontFamily: 'Lato-Regular',
                      textAlign: 'center',
                      color: 'gray',
                      marginRight: moderateScale(10),
                    }}>
                    {`${item.y.toFixed(2)}%`}
                  </Text>
                </View>
              );
            }}
            keyExtractor={item => item.x}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width,
    height: moderateScale(350),
    alignItems: 'center',
    //justifyContent: 'flex-start',
    //backgroundColor: '#faa',
  },
});
