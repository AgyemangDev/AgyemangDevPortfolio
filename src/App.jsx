"use client"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import {Portfolio} from "./components/portfolio/Portfolio"
import { AnimatePresence } from "framer-motion"


function App() {
  return (
    <Router>
     <Portfolio/>
    </Router>
  )
}

export default App

