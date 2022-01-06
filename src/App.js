import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import Routes from "./routes";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes></Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
