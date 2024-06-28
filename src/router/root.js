import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import MemberRouter from "./MemberRouter";
import BoardRouter from "./BoardRouter";

const Loading = <div className="bg-orange-700">Loading....</div>;
const Main = lazy(() => import("../pages/MainPage"));
const Spending = lazy(() => import("../pages/spending/SpendingListPage"));
const Income = lazy(() => import("../pages/income/IncomeListPage"));

const root = createBrowserRouter([
  {
    path: "",
    element: (
      <Suspense fallback={Loading}>
        <Main />
      </Suspense>
    ),
  },
  {
    // 지출 관련 기능 페이지 라우터
    path: "spending",
    element: (
      <Suspense fallback={Loading}>
        <Spending />
      </Suspense>
    ),
  },
  {
    // 수입 관련 기능 페이지 라우터
    path: "income",
    element: (
      <Suspense fallback={Loading}>
        <Income />
      </Suspense>
    ),
  },
  {
    // 소식 관련 기능 페이지 라우터
    path: "board",
    children: BoardRouter(),
  },
  {
    // 회원 관련 기능 페이지 라우터
    path: "member",
    children: MemberRouter(),
  },
]);

export default root;
