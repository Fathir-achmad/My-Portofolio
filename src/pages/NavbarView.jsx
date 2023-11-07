import { Box } from "@chakra-ui/react"
import { Outlet } from "react-router-dom"
import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"


export const NavbarView = () => {
    return (
        <Box>
            <Navbar />
            <Outlet /> 
            <Footer />
        </Box>
    )
}