import "./App.css";
// import PostFetcher from "./components/PostFetcher";
// import NameFetcher from "./components/NameFetcher";
// import QuoteFetcher from "./components/QuoteFetcher";
import { ToastContainer } from "react-toastify";

import "react-toastify/ReactToastify.css";
import ToastifyInfo from "./components/ToastifyInfo";
import ToastifyError from "./components/ToastifyError";

function App() {
  return (
    <div>
      {/* <NameFetcher /> */}
      {/* <QuoteFetcher /> */}
      {/* <PostFetcher /> */}
      <ToastifyInfo />
      <ToastifyError />
      <ToastContainer />
    </div>
  );
}

export default App;