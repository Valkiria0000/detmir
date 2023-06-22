import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/home-page/home-page";
import NotFound from "./pages/not-found/not-found";
import Header from "./components/header/header";
import { Provider } from "react-redux";
import { store } from "./redux/index";
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
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
