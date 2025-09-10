import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

export default function Layout() {
  return (
    <div className="bg-gray-950 min-h-screen w-full">
      <Navbar />
      <ScrollToTop />
      <Outlet />   
      <Footer />
    </div>
  );
}
