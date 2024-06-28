import React from "react";
import { Button, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function FooterBar(props) {
  return (
    <Flex h="100%" w="100%" justifyContent="space-evenly" mt="17.5px">
      <Button w="65px" h="65px" bg="white" borderRadius="35px">
        <Link to={"/spending"}>지출내역</Link>
      </Button>
      <Button w="65px" h="65px" bg="white" borderRadius="35px">
        <Link to={"/income"}>수입내역</Link>
      </Button>
      <Button w="65px" h="65px" bg="white" borderRadius="35px">
        <Link to="/board">소식공유</Link>
      </Button>
      <Button w="65px" h="65px" bg="white" borderRadius="35px">
        <Link to="/Member/login">
          로그인/ <br />
          회원가입
        </Link>
      </Button>
    </Flex>
  );
}

export default FooterBar;
