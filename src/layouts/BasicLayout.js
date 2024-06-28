import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Center,
} from "@chakra-ui/react";
import HeaderBar from "./HeaderBar";
import FooterBar from "./FooterBar";

function BasicLayout({ children }) {
  return (
    <Center mt="20">
      <Card
        w="393px"
        h="852px"
        shadow="1px 1px 3px 1px #dadce0"
        border="1px solid silver"
      >
        <CardHeader w="100%" h="95px" bg="green.400" p="0">
          <HeaderBar />
        </CardHeader>
        <CardBody w="100%" h="657px" p="0">
          {children}
        </CardBody>
        <CardFooter w="100%" h="100px" bg="blue.400" p="0">
          <FooterBar />
        </CardFooter>
      </Card>
    </Center>
  );
}

export default BasicLayout;
