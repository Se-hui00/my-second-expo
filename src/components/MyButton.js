import React from "react";
import { Pressable, Text } from "react-native";
import PropTypes from 'prop-types';

const MyButton = ({ title, b, c, onclick }) => { //props 객체 분해
  console.log(title, b, c);
  return (
    <Pressable
      onPressIn = {onclick}
      // onPressIn = {evt => {
      //   console.log(evt.target);
      // }}
    >
      <Text>{title}</Text>
    </Pressable>
  );
};

// 기본값 설정
//    defaultProps : title값을 등록하지 않은 경우 default값으로 "기본버튼"을 쓰고 싶다
MyButton.defaultProps = {
  title: '기본버튼',
};

// 타입 필수 여부
//    propTypes : title은 string타입이고 필수, b는 object타입, onclick은 func타입이고 필수
MyButton.propTypes = {
  title: PropTypes.string.isRequired,
  b: PropTypes.object,
  onclick: PropTypes.func.isRequired,
}

export default MyButton;




