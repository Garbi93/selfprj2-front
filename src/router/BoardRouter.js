import { lazy, Suspense } from "react";

const Loading = <div className="bg-orange-700">Loading....</div>;
const BoardList = lazy(() => import("../pages/board/BoardListPage"));
const BoardView = lazy(() => import("../pages/board/BoardViewPage"));

const BoardRouter = () => {
  return [
    {
      path: "",
      element: (
        <Suspense fallback={Loading}>
          <BoardList />
        </Suspense>
      ),
    },
    {
      path: "view",
      element: (
        <Suspense fallback={Loading}>
          <BoardView />
        </Suspense>
      ),
    },
  ];
};

export default BoardRouter;
