import React, {useState} from "react";
import {Text, Pressable} from 'react-native';


const MyButton2 = () => {

  let [count, setCount] = useState(0);
  // == let [state, setState] = useState(initialState);

  return (
    <Pressable
      onPressIn={() => {
        setCount(++count);
      }}
    >
      <Text>{count}</Text>
    </Pressable>
  );
}

export default MyButton2;