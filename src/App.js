import React from "react";
import { RouterProvider } from "react-router-dom";
import root from "./router/root";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <RouterProvider router={root} />
    </ChakraProvider>
  );
}

export default App;
