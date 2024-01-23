import React, {useState, useRef, useEffect} from 'react';
import {
  StatusBar,
  View,
  Image,
  Text,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';

export default Collectibles = ({routeName, NFTs_data}) => {
  console.log(NFTs_data, '===NFTs_data===');
  console.log(routeName);

  const [isLoading, setLoading] = useState(false);
  const navigation = useNavigation();
  const [data_collectibles, setData_collectibles] = useState([
    {
      id: 0,
      image:
        'https://lh3.googleusercontent.com/uwspAHre51ziNFKI2lIl_D4pao6ZvYvS2rJzF9424uORm7b4ub6wtJpIGb8C7Peo5kQkPIK6TtBuWOkGF1hPqjKqeh7zDZNeCb5oEw=w600',
    },

    {
      id: 1,
      image:
        'https://lh3.googleusercontent.com/8rcACjX985504xNvDtHx7AWTDaHcGBol5StYWjWOJvS1_3v2wFat1PKmko_3OBJXgG-cOH7ZWEjuBenfPcH5U5_1XmQmyIK01zCVxA=w600',
    },
    {
      id: 2,
      image:
        'https://lh3.googleusercontent.com/i7Cdm8tgUb2HqyfVHo08mRicoK1kb9qeAd3nM2Qwa0kd3ftVL3zEnG37bKW0LqA0I7kyZUOrhVpBVJminOs8dwGWdC7dX5CdB8CcdFo=w600',
    },

    {
      id: 3,
      image:
        'https://lh3.googleusercontent.com/LjzXDgfQqWGUA_MMNlQbt6nZ1zX5PaUjZR7514T7HFQCMH--V_R7Nh0GTzS0coVUZmt66A99S2_aWltsVT9PQ8kErLGN9KZSnF3t=w600',
    },

    {
      id: 4,
      image:
        'https://lh3.googleusercontent.com/zQ2lVK2EwQsBLQ3n7Css1W2s3aRjxskdy4wJdeBOs65C4F12EUyt20fFcpJ4vyy63hKtg1znl5U7cvgTvQqcX75ZvxiEo2x2zXfTOA=s0',
    },
    {
      id: 5,
      image:
        'https://lh3.googleusercontent.com/uwspAHre51ziNFKI2lIl_D4pao6ZvYvS2rJzF9424uORm7b4ub6wtJpIGb8C7Peo5kQkPIK6TtBuWOkGF1hPqjKqeh7zDZNeCb5oEw=w600',
    },

    {
      id: 6,
      image:
        'https://lh3.googleusercontent.com/8rcACjX985504xNvDtHx7AWTDaHcGBol5StYWjWOJvS1_3v2wFat1PKmko_3OBJXgG-cOH7ZWEjuBenfPcH5U5_1XmQmyIK01zCVxA=w600',
    },
    {
      id: 7,
      image:
        'https://lh3.googleusercontent.com/i7Cdm8tgUb2HqyfVHo08mRicoK1kb9qeAd3nM2Qwa0kd3ftVL3zEnG37bKW0LqA0I7kyZUOrhVpBVJminOs8dwGWdC7dX5CdB8CcdFo=w600',
    },

    {
      id: 8,
      image:
        'https://lh3.googleusercontent.com/LjzXDgfQqWGUA_MMNlQbt6nZ1zX5PaUjZR7514T7HFQCMH--V_R7Nh0GTzS0coVUZmt66A99S2_aWltsVT9PQ8kErLGN9KZSnF3t=w600',
    },

    {
      id: 9,
      image:
        'https://lh3.googleusercontent.com/zQ2lVK2EwQsBLQ3n7Css1W2s3aRjxskdy4wJdeBOs65C4F12EUyt20fFcpJ4vyy63hKtg1znl5U7cvgTvQqcX75ZvxiEo2x2zXfTOA=s0',
    },
  ]);

  useEffect(() => {
    // get_api();
  }, []);

  const get_api = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://api.opensea.io/api/v1/collection/maduea`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': 'e9cce91d370244a197e78815d306b9d6'
          },
        },
      );
      const resData = await response.json();
      console.log(resData, '====resData===');

      //   let mapData = [];
      //   let api_data = resData.data;

      //   api_data.map((data, index) => {
      //     mapData.push({
      //       id: data.id,
      //       cmc_rank: data.cmc_rank,
      //       name: data.name,
      //       symbol: data.symbol,
      //       price: data.quote.USD.price,
      //       percent_change_24h: data.quote.USD.percent_change_24h,
      //       market_cap: data.quote.USD.market_cap,
      //       logo: `https://s2.coinmarketcap.com/static/img/coins/64x64/${data.id}.png`,
      //     });
      //   });
      //   setData(mapData);
      //   console.log(mapData, '===mapData====');
    } catch (error) {
      console.error(error);
    } finally {
      console.log('===API_DONE====');
      setLoading(false);
    }
  };

  return (
    <View style={{flex: 1, flexDirection: 'row'}}>
      {/* <ScrollView> */}

      <FlatList
        // style={{marginTop: moderateScale(-20)}}
        data={routeName == 'NFTs' ? NFTs_data : data_collectibles}
        scrollEnabled={true}
        renderItem={({item, index}) => {
          return item.id <= 5  ? (
            <TouchableOpacity
              style={{
                //flex: 1,
                height:
                  index % 2 != 0 ? moderateScale(150) : moderateScale(200),
                // backgroundColor: '#faa',
                borderRadius: moderateScale(20),
                marginBottom: moderateScale(10),
                marginLeft: moderateScale(20),
                marginRight: moderateScale(5),
              }}
              onPress={() => navigation.navigate('Details_NFTs',{data_params:item})}>
              <Image
                source={{
                  uri: `${item.image}`,
                }}
                resizeMode="cover"
                style={{
                  height: '100%',
                  width: '100%',
                  borderRadius: moderateScale(20),
                }}
              />
            </TouchableOpacity>
          ) : null;
        }}
        keyExtractor={item => item.image}
      />
      <FlatList
        // style={{marginTop: moderateScale(-20)}}
        data={routeName == 'NFTs' ? NFTs_data : data_collectibles}
        scrollEnabled={true}
        renderItem={({item, index}) => {
          return item.id > 5  ? (
            <TouchableOpacity
              style={{
                //flex: 1,
                height:
                  index % 2 == 0 ? moderateScale(150) : moderateScale(200),
                //backgroundColor: '#faa',
                borderRadius: moderateScale(20),
                marginBottom: moderateScale(20),
                marginRight: moderateScale(20),
                marginLeft: moderateScale(10),
              }}
              onPress={() => navigation.navigate('Details_NFTs',{data_params:item})}>
              <Image
                source={{
                  uri: `${item.image}`,
                }}
                resizeMode="cover"
                style={{
                  height: '100%',
                  width: '100%',
                  borderRadius: moderateScale(20),
                }}
              />
            </TouchableOpacity>
          ) : null;
        }}
        keyExtractor={item => item.image}
      />

      {/* </ScrollView> */}
    </View>
  );
};
