import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";
import ContentLoader from "react-content-loader";

const MyLoader = () => (
  <div className="d-flex  justify-content-center align-content-center flex-wrap">
    <ContentLoader>
      <rect x="80" y="17" rx="4" ry="4" width="400" height="20" />
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
      {isLoading ? (
        <MyLoader /> // Display the loader while loading
      ) : (
        <App className="App" /> // Render the App component when loading is complete
      )}
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RootComponent />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
