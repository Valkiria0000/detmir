import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/home-page/home-page";

import NotFound from "./pages/not-found/not-found";
import Header from "./components/header/header";
import { Provider } from "react-redux";

import { store } from "./redux/index";
import ProductPage from "./pages/product-page/product-page";
import OrderPage from "./pages/order-page/order-page";
import { paths } from "./paths";
const links = [
  {
    id: 1,
    link: "Товары",
    path: paths.home,
  },
  { id: 2, link: "Заказы", path: "/p" },
];
function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header links={links} />
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path={paths.home} element={<HomePage />} />
            <Route path={`${paths.product}/:id`} element={<ProductPage />} />
            <Route path="/order" element={<OrderPage />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
