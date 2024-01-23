import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  SafeAreaView,
  StatusBar,
  TextInput,
  Image,
  Alert,
  FlatList
} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {useRoute} from '@react-navigation/native';
import AntDesign_Icon from 'react-native-vector-icons/AntDesign';
import Collectibles from '../Share/collectibles';
import {formatNumber} from 'accounting-js';
import LottieView from 'lottie-react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Closecircleo from 'react-native-vector-icons/AntDesign';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const comp_NFTs = () => {
  const [isLoading, setLoading] = useState(true);
  const [isLimit, setIsLimit] = useState(10);
  const [isLoading_Assets, setIsLoading_Assets] = useState(true);
  const [search, setChangeText] = useState('');
  const [filterData, setFilterData] = useState([]);
  const route = useRoute();
  const [data_NFTs, setData_NFTs] = useState([]);
  const [NFTs_image_asset, setNFTs_image_asset] = useState([]);
  const [isCancel, setIsCancel] = useState(false);

  useEffect(() => {
    get_storage();
    //get_api();
  }, []);

  const get_api = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://api.opensea.io/api/v1/collection/bastard-gan-punks-v2`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': 'e9cce91d370244a197e78815d306b9d6'
          },
        },
      );

      if (response.status == 200) {
        const resData = await response.json();
        //console.log(resData, '====resData===');
        var address = resData.collection.primary_asset_contracts[0].address;
        setData_NFTs(resData.collection);
        await AsyncStorage.setItem(
          'NFTs_collection',
          JSON.stringify(resData.collection),
        );
      } else {
        Alert.alert('status : ', response);
      }
    } catch (error) {
      console.error(error);
    } finally {
      console.log(address, '===address====');
      setLoading(false);
      try {
        setIsLoading_Assets(true);
        const response_asset = await fetch(
          `https://api.opensea.io/api/v1/assets?asset_contract_address=${address}&order_direction=desc&offset=0&limit=${isLimit}`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'x-api-key': 'e9cce91d370244a197e78815d306b9d6'
            },
          },
        );
        if (response_asset.status == 200) {
          const resData_asset = await response_asset.json();
          //console.log(resData_asset.assets, '====resData_asset===');
          let DataAssets = resData_asset.assets;
          let mapDataAssets = [];

          DataAssets.map((data, index) => {
            mapDataAssets.push({
              id: index,
              token_id: data.token_id,
              name: data.name,
              collection_name: data.asset_contract.name,
              profile_image: data.asset_contract.image_url,
              image: data.image_url,
              description: data.description,
              address: data.asset_contract.address,
            });
          });

          setNFTs_image_asset(mapDataAssets);
          await AsyncStorage.setItem(
            'NFTs_assets',
            JSON.stringify(mapDataAssets),
          );
        } else {
          Alert.alert('status : ', response_asset);
        }
      } catch (error) {
        console.error(error);
      } finally {
        console.log('===API_DONE_2====');
        setIsLoading_Assets(false);
      }
    }
  };

  const get_storage = async () => {
    let nft_c = await AsyncStorage.getItem('NFTs_collection');
    let nft_a = await AsyncStorage.getItem('NFTs_assets');
    if (nft_c != undefined) {
      let NFTs_collection = JSON.parse(nft_c);
      console.log(NFTs_collection, '===NFTs_collection===');
      setData_NFTs(NFTs_collection);
      setLoading(false);
    }

    if (nft_a != undefined) {
      let NFTs_assets = JSON.parse(nft_a);
      console.log(NFTs_assets, '===NFTs_assets===');
      setNFTs_image_asset(NFTs_assets);
      setIsLoading_Assets(false);
    } else {
      get_api();
    }
  };

  const searchFilterFunction = text => {
    setChangeText(text);

    if (text.length >= 2) {
      let filter = NFTs_image_asset.filter(
        item => item.id == text.toUpperCase(),
      );
      if (filter.length > 0) {
        setFilterData(filter);
      }

      console.log(filter, '====filter==');
    }
  };

  const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View
        style={{
          height: 0.5,
          width: "100%",
          backgroundColor: "#A6A6A6",
        }}
      />
    );
  };
  const ItemView = ({ item }) => {
    return (
      // Flat List Item

      <TouchableOpacity
        style={{
            padding: 12,
            width: "100%",
            //backgroundColor: "#faa",
          }
        }
      >
        <Text
          style={{
            fontSize: 12,
            color: "#000",
          }}
          // onPress={async () => {
          //   setIsCancel(false);
          //   setSearch("");
          //   getAPI_mutual_fund_comparison_search_fund_name(" ");
          //   setHide(true);
          //   await setCount(count + 1);
          //   if (!onPressItem.includes(item.fund_name)) {
          //     setOnPressItem([...onPressItem, item.fund_name.toUpperCase()]);
          //   } else {
          //     alert(strings.duplicate_select);
          //   }
          // }}
        >
          {item.name.toUpperCase()}
        </Text>
      </TouchableOpacity>
    );
  };

  const testUi = () => {
    return (
      <View
        style={{
          position: 'absolute',
          width: '100%',
          backgroundColor: 'white',
          //backgroundColor: "#faf",
          zIndex: 99999,
          top: moderateScale(20),
          height: hp(55),
          borderWidth: 1,
          borderColor: '#CECECE',
          borderBottomLeftRadius: moderateScale(5),
          borderBottomRightRadius: moderateScale(5),
          padding: moderateScale(20),
        }}>
        <Text
          style={{
            fontSize: moderateScale(12),
            color: '#000',

            marginBottom: moderateScale(10),
          }}>
          Select Fund
        </Text>
        <View
          style={{
            width: '100%',
            height: moderateScale(20),
            backgroundColor: isCancel == true ? '#fff' : '#EBEAEA',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}>
          {isCancel == false ? (
            <Text
              style={{
                fontSize: moderateScale(11),
                color: '#646464',
              }}>
              {search}
            </Text>
          ) : (
            <TextInput
              style={{
                fontSize: moderateScale(11),
                color: '#646464',
                width: '100%',
                borderWidth: 1,
                padding: 0,
              }}
              onChangeText={text => searchFilterFunction(text)}
            />
          )}

          <Closecircleo
            size={11}
            name="closecircleo"
            color="#A6A6A6"
            onPress={() => {
              searchFilterFunction(''), setIsCancel(true);
            }}
            style={{
              right: 5,
              position: 'absolute',
            }}
          />
        </View>

        <FlatList
          data={filterData}
          keyExtractor={(item, index) => index.toString()}
          scrollEnabled={true}
          persistentScrollbar={true}
          showsVerticalScrollIndicator={true}
          ItemSeparatorComponent={
            NFTs_image_asset.length > 0 ? ItemSeparatorView : null
          }
          renderItem={filterData.length > 0 ? ItemView : null}
        />

        <View
          style={{
            //backgroundColor: "#faf",
            height: moderateScale(30),
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={
              {
                zIndex: 1,
                height: moderateScale(25),
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 0,
                backgroundColor: '#EBEAEA',
              }
            }
            onPress={() => {
              searchFilterFunction(''),
                setHide(true),
                setIsCancel(false),
                setLoading(false);
            }}>
            <Text
              style={
                {
                  color: '#646464',
                  fontSize: 12,
                  zIndex: 1,
                }
              }>
              Close
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#151517'}}>
      <StatusBar animated={true} barStyle={'light-content'} />

      {isLoading || isLoading_Assets ? (
        <View
          style={{
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <LottieView
            style={{height: moderateScale(250)}}
            source={require('../loading-nft-cards.json')}
            autoPlay
            loop
          />
        </View>
      ) : (
        <View style={{marginHorizontal: moderateScale(20)}}>
          <Text
            style={{
              color: '#fff',
              fontFamily: 'Lato-Bold',
              fontSize: moderateScale(20),
              marginTop: moderateScale(10),
            }}>
            NFTs
          </Text>
          <View
            style={{
              backgroundColor: '#1F2124',
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
              placeholder="Search items, collections, and accounts"
              //keyboardType="numeric"
            />
          </View>
          {/* {testUi()} */}
          <View
            style={{
              height: moderateScale(140),
              // backgroundColor: '#faf',
              borderRadius: moderateScale(20),
              marginTop: moderateScale(10),
            }}>
            <Image
              source={{
                uri: `${data_NFTs.banner_image_url}`,
              }}
              resizeMode="cover"
              overflow="hidden"
              style={{
                height: '100%',
                width: '100%',
                borderRadius: moderateScale(20),
              }}
            />
          </View>
          <View style={{alignItems: 'center'}}>
            <View
              style={{
                width: moderateScale(70),
                height: moderateScale(70),
                marginTop: moderateScale(-40),
                borderRadius: moderateScale(70 / 2),
                //backgroundColor: '#faa',
                borderWidth: moderateScale(2.5),
                borderColor: '#000',
              }}>
              <Image
                source={{
                  uri: `${data_NFTs.image_url}`,
                }}
                resizeMode="cover"
                overflow="hidden"
                style={{
                  height: '100%',
                  width: '100%',
                  borderRadius: moderateScale(70 / 2),
                }}
              />
            </View>
            <Text
              style={{
                color: '#fff',
                fontFamily: 'Lato-Bold',
                fontSize: moderateScale(20),
                marginTop: moderateScale(10),
              }}>
              {data_NFTs.name}
            </Text>
            <Text
              style={{
                color: 'gray',
                fontFamily: 'Lato-Bold',
                fontSize: moderateScale(12),
                marginTop: moderateScale(10),
              }}>
              {data_NFTs.stats != undefined
                ? `${formatNumber(data_NFTs.stats.count, {
                    precision: 0,
                  })}  items`
                : '0'}
            </Text>
          </View>
        </View>
      )}
      <View
        style={{
          flex: 1,
          marginTop: moderateScale(20),
        }}>
        {isLoading_Assets || isLoading ? null : (
          <Collectibles routeName={route.name} NFTs_data={NFTs_image_asset} />
        )}
      </View>
    </SafeAreaView>
  );
};

export default comp_NFTs;
