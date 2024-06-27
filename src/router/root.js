// import { createBrowserRouter } from "react-router-dom";
// import { lazy, Suspense } from "react";
//
// const Loading = <div className="bg-orange-700">Loading....</div>;
// const Main = lazy(() => import("../pages/MainPage"));
//
// const root = createBrowserRouter([
//   {
//     path: "",
//     element: (
//       <Suspense fallback={Loading}>
//         <Main />
//       </Suspense>
//     ),
//   },
// ]);
//
// export default root;

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import MainPage from "../pages/MainPage";

const root = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<MainPage />}></Route>),
);
export default root;
