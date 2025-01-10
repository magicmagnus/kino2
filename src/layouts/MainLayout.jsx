import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { useState, useEffect } from "react"
import { HOUR_WIDTH, START_HOUR } from '../utils/utils'

const MainLayout = () => {
    

    return (
        <div className="flex flex-col justify-start h-screen no-scrollbar bg-zinc-900">
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default MainLayout