import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Title from "./components/title/Title";
import TitleImg from "./components/titleImg/TitleImg";
import Features from "./components/features/Features";
import Cards from "./components/cards/Cards";
import BigIcon from "./components/bigIcon/BigIcon";
import Cards2 from "./components/cards2/Cards2";
import Pricing from "./components/pricing/Pricing";
import Users from "./components/users/Users";
import SupportPage from "./components/support/Support";
import UserData from "./components/usersCards/UsersCards";
import BlogSection from "./components/blogs/blogs";
import ConfirmSection from "./components/confirm/Confirm";
import UpdateSection from "./components/update/UpdateSection";
import Footer from "./components/footer/Footer";
import AboutPage from "./components/Pages/aboutUs/AboutUs";
import HomePage from "./components/Pages/home/HomePage";
import PricingPage from "./components/Pages/pricingPage/PricingPage";
import BlogGridPage from "./components/Pages/BlogGrid/BlogGrid";
import BlogSinglePage from "./components/Pages/blogSingle/BlogSingle";
import SignInPage from "./components/Pages/signIn/SignInPage";
import SignUpPage from "./components/Pages/signUp/SignUp";
import ErrorPage from "./components/Pages/error/ErrorPage";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/pricing" element={<PricingPage/>}/>
        <Route path="/BlogGrid" element={<BlogGridPage/>}/>
        <Route path="/BlogSingle" element={<BlogSinglePage/>}/>
        <Route path="/SignIn" element={<SignInPage/>}/>
        <Route path="/SignUp" element={<SignUpPage/>}/>
        <Route path="/error" element={<ErrorPage/>}/>




        <Route
          path="/"
          element={
            <>
              <Title />
              <TitleImg />
              <section id="features">
              <Features/>
              </section>
              <Cards />
              <BigIcon />
              <Cards2 />
              <section id="pricing">
              <Pricing />
              </section>
              <Users />
              <UserData />
              <section id="support">
              <SupportPage />
              </section>
              <BlogSection />
              <ConfirmSection />
              <UpdateSection />
              <Footer />
            </>
          }
        />
      </Routes>
    </>
  );
}
