import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/home-page/home-page";

import NotFound from "./pages/not-found/not-found";
import Header from "./components/header/header";
import { Provider } from "react-redux";

import { store } from "./redux/index";
import ProductPage from "./pages/product-page/product-page";
const links = [
  {
    id: 1,
    link: "Товары",
    path: "/",
  },
  { id: 2, link: "Заказы", path: "/заказы" },
];
function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header links={links} />
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/:id" element={<ProductPage />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
