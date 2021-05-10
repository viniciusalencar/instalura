/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {ScrollView, FlatList} from 'react-native';

import Header from './src/components/Header';
import Photo from './src/components/Photo';

const data = [
  {
    id: 1,
    user: 'Marina',
  },
  {
    id: 2,
    user: 'Ricardo',
  },
  {
    id: 3,
    user: 'Vinicius',
  },
];

const App = () => {
  return (
    <ScrollView>
      <FlatList
        data={data}
        keyExtractor={(item, index) => item.id.toString()}
        renderItem={({item}) => (
          <>
            <Header nameUser={item.user} />
            <Photo />
          </>
        )}
      />
    </ScrollView>
  );
};

export default App;
