import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { BellIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

function HeaderBar(props) {
  const navigate = useNavigate();

  function handleLogoClick() {
    navigate("/");
    console.log("로고 클릭됨");
  }

  return (
    <Flex w="100%" h="100%">
      <Box
        ml="10px"
        mt="14px"
        w="200px"
        h="60px"
        bg="white"
        textAlign="center"
        lineHeight="60px"
        onClick={handleLogoClick}
      >
        프로젝트 로고
      </Box>
      <Box
        w="55px"
        h="55px"
        borderRadius="55px"
        ml="113px"
        mt="14px"
        border="1px solid white"
      >
        <BellIcon w="50px" h="50px" color="white" />
      </Box>
    </Flex>
  );
}

export default HeaderBar;
