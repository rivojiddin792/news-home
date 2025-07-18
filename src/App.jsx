import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import styled from "styled-components";

const AppWrapper = styled.div`
  font-family: 'Inter', sans-serif;
  background-color: #fff;
  color: #000;
  padding: 20px;
  max-width: 1110px;
  margin: 0 auto;
`;

function Page({ title }) {
  return <h1>{title}</h1>;
}

// Layout with conditional footer
function Layout() {
  const location = useLocation();
  const showFooter = location.pathname === "/";

  return (
    <AppWrapper>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/new" element={<Page title="New Page" />} />
        <Route path="/popular" element={<Page title="Popular Page" />} />
        <Route path="/trending" element={<Page title="Trending Page" />} />
        <Route path="/categories" element={<Page title="Categories Page" />} />
      </Routes>
      {showFooter && <Footer />}
    </AppWrapper>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
