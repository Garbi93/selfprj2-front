import React from "react";
import { Circle, Flex } from "@chakra-ui/react";

function FooterBar(props) {
  return (
    <Flex h="100%" w="100%" justifyContent="space-evenly" mt="17.5px">
      <Circle w="65px" h="65px" bg="white">
        지출내역
      </Circle>
      <Circle w="65px" h="65px" bg="white">
        수입내역
      </Circle>
      <Circle w="65px" h="65px" bg="white">
        소식공유
      </Circle>
      <Circle w="65px" h="65px" bg="white">
        로그인/회원가입
      </Circle>
    </Flex>
  );
}

export default FooterBar;
