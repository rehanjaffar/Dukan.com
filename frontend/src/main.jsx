import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Provider } from 'react-redux'
import { store } from "./store/store.jsx";
import ProductContextProvider from "./context/ProductContext.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ProductContextProvider>
      <App />
      </ProductContextProvider>

    </Provider>
   
  </React.StrictMode>
);
