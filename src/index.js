import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "./Context/ThemeContext";
import { store } from "./Store/store";
import { Provider } from "react-redux";
import "./Style/styles.css";

import ContentLoader from "react-content-loader";

const MyLoader = () => (
  <div className="center-screen">
    <ContentLoader>
      <rect x="60" y="17" rx="4" ry="4" width="200" height="20" />
    </ContentLoader>
  </div>
);

const RootComponent = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating an asynchronous task
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Replace with your actual data loading or any async operation
  }, []);

  return (
    <React.StrictMode>
      <ThemeProvider>
        <Provider store={store}>
          {isLoading ? <MyLoader /> : <App className="App" />}
        </Provider>
      </ThemeProvider>
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RootComponent />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
