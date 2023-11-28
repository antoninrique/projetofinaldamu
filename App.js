import React from 'react';
import { SafeAreaView } from 'react-native';
import Chat from './components/chat';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Chat/>
    </SafeAreaView>
  );
};

export default App;