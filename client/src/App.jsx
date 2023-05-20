import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  HomePage,
  PostPage,
  PostPageMovie,
  PostPageRegister,
} from "./page/index";
import { EditUser, EditMovies } from "./component/index";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="edit/:id" element={<EditUser />} />
        <Route path="editMovies/:id" element={<EditMovies />} />
        <Route path="/post" element={<PostPage />} />
        <Route path="/postregister" element={<PostPageRegister />} />
        <Route path="/postmovie" element={<PostPageMovie />} />
      </Routes>
    </Router>
  );
};
export default App;
