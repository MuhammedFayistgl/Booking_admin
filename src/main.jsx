import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ProSidebarProvider } from "react-pro-sidebar";

import "./main.scss";
import { Provider } from "react-redux";
import { store } from "./redux/Store/Store";
import { CustomProvider } from "rsuite";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProSidebarProvider>
      <Provider store={store}>
        <CustomProvider theme="dark">
          <App />
        </CustomProvider>
      </Provider>
    </ProSidebarProvider>
  </React.StrictMode>
);
