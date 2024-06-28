import React from "react";
import BasicLayout from "../layouts/BasicLayout";
import { Card } from "@chakra-ui/react";

function MainPage() {
  // TODO: 비 로그인시 보여줄 페이지 (로그인 기능 추가 후 권한 분기 시켜줄때 활성화)
  // return (
  //   <BasicLayout>
  //     <Flex justifyContent="center" mt="90px">
  //       <Card
  //         w="370px"
  //         h="300px"
  //         bg="gray.300"
  //         fontSize="4xl"
  //         fontWeight="bold"
  //         textAlign="center"
  //         lineHeight="300px"
  //       >
  //         메인 페이지 입니다.
  //       </Card>
  //     </Flex>
  //   </BasicLayout>
  // );

  // 로그인 유저 메인 페이지 -------------------------------
  return (
    <BasicLayout>
      <Card justifyContent="center" alignItems="center" mt="90px">
        로그인 유저 메인페이지 영역
        <Card
          w="370px"
          h="300px"
          bg="gray.300"
          fontSize="4xl"
          fontWeight="bold"
          textAlign="center"
          lineHeight="300px"
        >
          지출비율 영역
        </Card>
        <Card
          w="370px"
          h="90px"
          mt="20px"
          bg="gray.300"
          fontSize="4xl"
          fontWeight="bold"
          textAlign="center"
          lineHeight="90px"
        >
          수입 비율 영역
        </Card>
      </Card>
    </BasicLayout>
  );
  // 로그인 유저 메인 페이지 -------------------------------
}

export default MainPage;
