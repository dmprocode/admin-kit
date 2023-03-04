import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Login from "./pages/login/Login";
import User from "./pages/user/user";
import New from "./pages/new/New";
import Product from "./pages/product/Product";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="Login" element={<Login />} />
            <Route path="user">
              <Route index element={<User />} />
              <Route path=":useraid" element={<Single />} />
              <Route path="new" element={<New />} />
            </Route>

            <Route path="product">
              <Route index element={<Product />} />
              <Route path=":useraid" element={<Single />} />
              <Route path="new" element={<New />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
