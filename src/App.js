import Form from "./components/Form.js"
import React from "react"

const App = () => (
    <div className="flex items-center justify-center bg-gradient-to-r from-green-200 to-cyan-500 p-5 h-screen">
        <div className="mx-auto w-1/3 p-4 bg-white max-w-sm rounded overflow-hidden shadow-lg ">
            <h1 className="font-bold text-3xl text-center">Contact Us</h1>
            <Form />
        </div>
    </div>
    
)

export default App