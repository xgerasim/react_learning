import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PostIndex from "./pages/posts/Index";
import MainIndex from "./pages/main/Index";
import PostShow from "./pages/posts/Show"
import PostCreate from "./pages/posts/Create";
import PostEdit from "./pages/posts/Edit";

import { ROUTES } from "./routes/routes";

function App() {

  return (
    <>
      <Router>

        <div className="bg-white py-4 border-b border-gray-200 w-full">
          <div className="w-1/2 mx-auto">
            <Link to={ROUTES.MAIN_INDEX} className="mr-4">Main</Link>
            <Link to={ROUTES.POST_INDEX} className="mr-4">Posts</Link>
          </div>
        </div>

        <div className="bg-gray-50 min-h-screen">
          <div className="w-1/2 mx-auto py-4">
            <Routes>
              <Route path={ROUTES.MAIN_INDEX} element={<MainIndex />}></Route>
              <Route path={ROUTES.POST_INDEX} element={<PostIndex />}></Route>
              <Route path={ROUTES.POST_CREATE} element={<PostCreate />}></Route>
              <Route path={ROUTES.POST_EDIT} element={<PostEdit />}></Route>
              <Route path={ROUTES.POST_SHOW} element={<PostShow />}></Route>
            </Routes>
          </div>
        </div>

      </Router>
    </>
  )
}

export default App
