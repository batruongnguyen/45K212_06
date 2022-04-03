import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Phone from "./pages/Phone/Phone";
import AllReview from "./pages/AllReview/AllReview";
import Helmet from "react-helmet";

function App() {
  return (
    <Router>
    <Helmet>
      <title>Beauty Spa</title>
    </Helmet>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/phone" element={<Phone />} />

          <Route path="/all-review" element={<AllReview />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
