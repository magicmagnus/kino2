import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { useState } from "react"




const MainLayout = () => {
 

    return (


        <div className="flex flex-col justify-start h-screen bg-slate-900">
            <Header />
            <Outlet />
            <Footer />
        </div>


    )
}

export default MainLayout