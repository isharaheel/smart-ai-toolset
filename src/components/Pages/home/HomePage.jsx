import React from "react";
import Title from "../../title/Title";
import TitleImg from "../../titleImg/TitleImg";
import Features from "../../features/Features";
import BigIcon from "../../bigIcon/BigIcon";
import Cards from "../../cards/Cards";
import Pricing from "../../pricing/Pricing";
import Cards2 from "../../cards2/Cards2";
import Users from "../../users/Users";
import SupportPage from "../../support/Support";
import BlogSection from "../../blogs/blogs";
import ConfirmSection from "../../confirm/Confirm";
import UpdateSection from "../../update/UpdateSection";
import Footer from "../../footer/Footer";
import UserData from "../../usersCards/UsersCards";

export default function HomePage() {
    return(
        <>
        <Title/>
        <TitleImg/>
        <Features/>
        <Cards/>
        <BigIcon/>
        <Cards2/>
        <Pricing/>
        <Users/>
        <UserData/>
        <SupportPage/>
        <BlogSection/>
        <ConfirmSection/>
        <UpdateSection/>
        <Footer/>
        
        
        
        </>
    )
}