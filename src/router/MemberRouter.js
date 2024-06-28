import { lazy, Suspense } from "react";

const Loading = <div className="bg-orange-700">Loading....</div>;
const Login = lazy(() => import("../pages/member/LoginPage"));

const MemberRouter = () => {
  return [
    {
      path: "login",
      element: (
        <Suspense fallback={Loading}>
          <Login />
        </Suspense>
      ),
    },
  ];
};

export default MemberRouter;
