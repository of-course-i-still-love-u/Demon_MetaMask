import React, {useState, useRef, useEffect} from 'react';
import {View} from 'react-native';
import {useRoute} from '@react-navigation/native';
import PieChart from './piechart';
import Headers from '../Share/headers';
import Assets from '../Share/assets';

const comp_portfolio = () => {
  const [isLoading, setLoading] = useState(false);
  const route = useRoute();

  return (
    <View style={{flex: 1, backgroundColor: '#151517'}}>
      <Headers routeName={route.name} />
      <PieChart />
      <Assets routeName={route.name} />
    </View>
  );
};

export default comp_portfolio;
