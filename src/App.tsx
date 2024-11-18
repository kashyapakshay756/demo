import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import "./App.css";
import "./assets/styles/admin.css";
import "./assets/styles/responsive.css";
import AllRoutes from "./routes/Routes";
import store from "./services/redux/store";

const App = () => {
  const persistStore = store();
  return (
    <Provider store={persistStore.store}>
      <PersistGate loading={null} persistor={persistStore.persistor}>
        <div className="App">
          <AllRoutes />
        </div>
      </PersistGate>
    </Provider>
  );
};

export default App;
