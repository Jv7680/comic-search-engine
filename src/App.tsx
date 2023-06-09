import { Route, Routes } from "react-router-dom";
import { ROUTES } from "./routes/routes";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Loading from "./components/loading/Loading";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Loading />
      <Header />
      <Routes>
        {
          ROUTES.map((item, index) => {
            return (
              <Route
                key={index}
                path={item.route}
                element={item.screen}
              />
            );
          })
        }
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
