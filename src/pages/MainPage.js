import React from "react";
import BasicLayout from "../layouts/BasicLayout";
import { Card, Flex } from "@chakra-ui/react";

function MainPage() {
  return (
    <BasicLayout>
      <Flex justifyContent="center" mt="90px">
        <Card
          w="370px"
          h="300px"
          bg="gray.300"
          fontSize="4xl"
          fontWeight="bold"
          textAlign="center"
          lineHeight="300px"
        >
          메인 페이지 입니다.
        </Card>
      </Flex>
    </BasicLayout>
  );
}

export default MainPage;
