import PageLoader from "./components/PageLoader";
import Layout from "./components/Layout";
import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import { useAuth } from "@clerk/react";
import CartPage from "./pages/CartPages";

function App() {
  const { isLoaded } = useAuth();

  if (!isLoaded) return <PageLoader />;

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
