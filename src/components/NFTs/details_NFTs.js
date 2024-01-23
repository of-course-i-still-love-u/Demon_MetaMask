import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  FlatList,
  Image,
  ScrollView,
} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {useRoute} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import Headers from '../Share/headers';
import Entypo_Icon from 'react-native-vector-icons/Entypo';

const details_NFTs = () => {
  const [isLoading, setLoading] = useState(false);

  const route = useRoute();
  const navigation = useNavigation();
  const data = route.params.data_params;

  console.log(data, '====data====!');

  return (
    <View style={{flex: 1, backgroundColor: '#151517'}}>
      <Headers routeName={route.name} data={data} />
      <View
        style={{
          flex: 1,
          marginHorizontal: moderateScale(20),
          //backgroundColor:'#faa'
        }}>
        <ScrollView style={{}}>
          <View
            style={{
              alignItems: 'center',
              // backgroundColor: '#faa',
              height: moderateScale(350),
              marginTop: moderateScale(20),
            }}>
            <Image
              source={{
                uri: `${data.image}`,
              }}
              resizeMode="cover"
              style={{
                height: '100%',
                width: '100%',
                borderRadius: moderateScale(20),
              }}
            />
          </View>
          <Text
            style={{
              color: '#fff',
              fontFamily: 'Lato-Bold',
              fontSize: moderateScale(20),
              marginTop: moderateScale(20),
            }}>
            {data.name}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              //backgroundColor: '#faa',
              alignItems: 'center',
              marginVertical: moderateScale(20),
            }}>
            <Image
              source={{
                uri: `${data.profile_image}`,
              }}
              resizeMode="cover"
              style={{
                height: moderateScale(35),
                width: moderateScale(35),
                borderRadius: moderateScale(35 / 2),
                marginRight: moderateScale(10),
              }}
            />
            <View>
              <Text
                style={{
                  color: 'gray',
                  fontFamily: 'Lato-Regular',
                  fontSize: moderateScale(12),
                }}>
                Collection
              </Text>
              <Text
                style={{
                  color: '#fff',
                  fontFamily: 'Lato-Bold',
                  fontSize: moderateScale(14),
                  marginTop: moderateScale(2),
                }}>
                {data.collection_name}
              </Text>
            </View>
          </View>
          <View
            style={{
              // backgroundColor: '#faf',
              borderBottomWidth: 1.5,
              borderBottomColor: '#232222',
              paddingBottom: moderateScale(20),
            }}>
            <Text
              style={{
                color: 'gray',
                fontFamily: 'Lato-Regular',
                fontSize: moderateScale(10),
                textAlign: 'justify',
              }}>
              {data.description}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: moderateScale(20),
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                color: '#fff',
                fontFamily: 'Lato-Regular',
                fontSize: moderateScale(12),
              }}>
              {data.address}
            </Text>
            <Text
              style={{
                color: '#fff',
                fontFamily: 'Lato-Regular',
                fontSize: moderateScale(12),
              }}>
              {data.token_id}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: moderateScale(5),
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                color: 'gray',
                fontFamily: 'Lato-Regular',
                fontSize: moderateScale(12),
              }}>
              Contract Address
            </Text>
            <Text
              style={{
                color: 'gray',
                fontFamily: 'Lato-Regular',
                fontSize: moderateScale(12),
              }}>
              Token ID
            </Text>
          </View>
        </ScrollView>
      </View>
      <View
        style={{
          flexDirection: 'row',
          //backgroundColor: '#faa',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: moderateScale(25),
          marginHorizontal: moderateScale(20),
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: 'rgba(67,148,255,1)',
            width: '80%',
            padding: moderateScale(15),
            borderRadius: moderateScale(15),
          }}>
          <Text
            style={{
              fontSize: moderateScale(12),
              fontFamily: 'Lato-Bold',
              color: '#fff',
              textAlign: 'center',
            }}>
            Send
          </Text>
        </TouchableOpacity>
        <View
          style={{
            width: moderateScale(45),
            height: moderateScale(45),
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: moderateScale(15),
            borderColor: '#232222',
            borderWidth: 1.5,
          }}>
          <Entypo_Icon name="share" size={moderateScale(20)} color="#fff" />
        </View>
      </View>
    </View>
  );
};

export default details_NFTs;
