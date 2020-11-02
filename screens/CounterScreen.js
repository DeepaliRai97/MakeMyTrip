// CounterScreen.js
import React from 'react';
import { Button, Text, View } from 'react-native';
import { observer } from 'mobx-react';
import { CounterStoreContext } from '../store/counterStroe';

const CounterScreen = observer((props) => {
  const { count, increment, decrement } = React.useContext(CounterStoreContext);

  return (
    <View>
      <Text>{`Clicked ${count} times!`}</Text>
      <Button title="Increment" onPress={increment} />
      <Button title="Decrement" onPress={decrement} />
     </View> 
    
  );
});
export default CounterScreen