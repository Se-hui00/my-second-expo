//state(내장 컴포넌트 가져오기)

import React, { UseState } from 'react';
import { Text, View } from 'react-native';
import MyButton from './components/MyButton';
import MyButton2 from './components/MyButton2';


//UI 컴포넌트(함수 or 클래스)
export default function App() {

  const f = (evt, txt) => { //함수
    console.log(txt, evt);
  };
  const obj = { //객체
    name: '홍길동',
    age: 30,
  };

  return (  //JSX문법을 따른다
    <View>
      <Text>Hello World~!</Text>
      <MyButton
        title="등록"
        b={obj}
        c="3"
        onclick={evt => {
          f(evt, '등록');
        }}
      />
      <MyButton title="수정"
        onclick={evt => {
          f(evt, '수정');
        }}
      />
      <MyButton
        onclick={evt => {
          f(evt, '삭제');
        }}
      />
      <MyButton2 />
    </View>
  );
}

