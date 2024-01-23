import React, {useState, useRef, useEffect} from 'react';
import {
  StatusBar,
  View,
  Dimensions,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  Animated,
  LayoutAnimation,
} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
const {width, height} = Dimensions.get('screen');
import Entypo_Icon from 'react-native-vector-icons/Entypo';
import AntDesign_Icon from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';

export default Headers = ({routeName, data}) => {
  const navigation = useNavigation();
  //console.log(data,'====data====');

  const chain_details = [
    {
      logo: require('../../assets/images/Asset_card/binance-coin-bnb-logo.png'),
      name: 'Smart Chain',
      colors: ['#181818', '#BA8B02'],
    },
    {
      logo: require('../../assets/images/Asset_card/eth.png'),
      name: 'Ethereum',
      colors: ['#181818', '#bdc3c7'],
    },
    {
      logo: require('../../assets/images/Asset_card/matic-token-icon.png'),
      name: 'Polygon',
      colors: ['#181818', '#7F00FF'],
    },
    {
      logo: require('../../assets/images/Asset_card/polkadot.png'),
      name: 'Polkadot',
      colors: ['#181818', '#FC466B'],
    },
    {
      logo: require('../../assets/images/Asset_card/fantom.png'),
      name: 'Fantom',
      colors: ['#181818', '#3F5EFB'],
    },
  ];

  const [chain, setChain] = useState(chain_details[0]);
  const [show, setShow] = useState(false);
  const animated = new Animated.Value(0);
  const duration = 2000;

  if (show) {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animated, {
          toValue: 10,
          duration: duration,
          useNativeDriver: true,
        }),
        Animated.timing(animated, {
          toValue: 0,
          duration: duration,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }

  // useEffect(() => {

  // }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated={true} barStyle={'light-content'} />

      <View
        style={{
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: moderateScale(20),
          flexDirection: 'row',
          backgroundColor: '#151517',
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
          }}
          onPress={() => routeName != 'Home' ? navigation.goBack():null}>
          {routeName != 'Home' ? (
            <Entypo_Icon
              name="chevron-small-left"
              size={moderateScale(25)}
              color="#fff"
            />
          ) : (
            <Image
              source={require('../../assets/images/Header/profile_image.png')}
              resizeMode="cover"
              style={{
                height: moderateScale(35),
                width: moderateScale(35),
                borderRadius: moderateScale(35 / 2),
              }}
            />
          )}
        </TouchableOpacity>

        {routeName != 'Home' ? (
          <Text
            style={{
              fontSize: moderateScale(14),
              fontFamily: 'Lato-Black',
              color: '#fff',
            }}>
            {routeName == 'Add_assets'
              ? 'Add assets'
              : routeName == 'Transactions' || routeName == 'Details_NFTs'
              ? data.name
              : 'Portfolio'}
          </Text>
        ) : (
          <TouchableOpacity
            onPress={() => {
              if (show == false) {
                setShow(!show);
              } else {
                setShow(false);
              }
              LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
            }}>
            <LinearGradient
              colors={chain.colors}
              start={{x: 0.0, y: 0.5}}
              end={{x: 1.0, y: 1.5}}
              style={{
                width: moderateScale(125),
                height: moderateScale(35),
                borderRadius: moderateScale(20),
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around',
                paddingHorizontal: moderateScale(5),
                //backgroundColor: '#faf',
              }}>
              <Image
                source={chain.logo}
                resizeMode="contain"
                style={{
                  height: moderateScale(15),
                  width: moderateScale(15),
                }}
              />
              <Text
                style={{
                  fontSize: moderateScale(12),
                  fontFamily: 'Lato-Regular',
                  color: '#fff',
                }}>
                {chain.name}
              </Text>
              <AntDesign_Icon
                name="caretdown"
                size={moderateScale(7)}
                color="#fff"
                //style={{marginTop: moderateScale(2)}}
              />
            </LinearGradient>
          </TouchableOpacity>
        )}
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
          onPress={() =>
            routeName == 'Home'
              ? navigation.navigate('Add_assets')
              : routeName == 'Portfolio_Drawer'
              ? navigation.toggleDrawer()
              : null
          }>
          {routeName == 'Portfolio_Drawer' ? (
            <Entypo_Icon name="cog" size={moderateScale(18)} color="#fff" />
          ) : routeName == 'Transactions' || routeName == 'Details_NFTs' ? (
            <Entypo_Icon
              name="dots-three-horizontal"
              size={moderateScale(18)}
              color="#fff"
            />
          ) : (
            <Entypo_Icon name="plus" size={moderateScale(20)} color="#fff" />
          )}
        </TouchableOpacity>
      </View>

      {routeName == 'Home' && show && (
        <Animated.View
          style={{
            //backgroundColor: '#faa',

            paddingVertical: moderateScale(10),
            transform: [{translateY: animated}],
          }}>
          <FlatList
            // style={{marginTop: moderateScale(-20)}}
            data={chain_details}
            bounces={true}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    setChain(item),
                      setShow(false),
                      LayoutAnimation.configureNext(
                        LayoutAnimation.Presets.spring,
                      );
                  }}>
                  <LinearGradient
                    colors={item.colors}
                    start={{x: 0.0, y: 0.5}}
                    end={{x: 1.0, y: 1.5}}
                    style={{
                      height: moderateScale(35),
                      borderRadius: moderateScale(20),
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-around',
                      paddingHorizontal: moderateScale(15),
                      marginHorizontal: moderateScale(5),
                      //backgroundColor: '#faf',
                    }}>
                    <Image
                      source={item.logo}
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
                        fontFamily: 'Lato-Regular',
                        color: '#fff',
                      }}>
                      {item.name}
                    </Text>
                  </LinearGradient>
                </TouchableOpacity>
              );
            }}
            keyExtractor={item => item.name}
          />
        </Animated.View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    backgroundColor: '#151517',
  },
});
