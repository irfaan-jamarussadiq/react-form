import { Form, FormInput, FormTextArea } from "./components/Form.js"
import React, { useState, useEffect } from "react"

const App = () => {
    const handleSubmit = (event) => {
        event.preventDefault()
        alert(`Form submitted!`)
    }

    const [user, setUser] = useState({
        email: window.localStorage.getItem('email') || '',
        phone: window.localStorage.getItem('phone') || '',
        subject: window.localStorage.getItem('subject') || '',
        message: window.localStorage.getItem('message') || ''
    })

    const handleInputChange = (event) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        })
    }

    useEffect(() => {
        for (const [key, value] of Object.entries(user)) {
            window.localStorage.setItem(key, value)
        }
    }, [user])

    return (
        <div className="flex items-center justify-center bg-gradient-to-r from-green-200 to-cyan-500 p-5 h-screen">
            <div className="mx-auto w-full p-4 bg-white max-w-sm rounded overflow-hidden shadow-lg ">
                <h1 className="font-bold text-3xl text-center">Contact Us</h1>
                <Form onSubmit={handleSubmit}>
                    <FormInput 
                        label="Email"
                        id="email"
                        value={user.email} 
                        required={true}
                        onChange={handleInputChange} 
                    />

                    <FormInput 
                        label="Phone Number"        
                        id="phone"          
                        value={user.phone} 
                        onChange={handleInputChange} 
                    />

                    <FormInput 
                        label="Subject"  
                        id="subject"              
                        value={user.subject}
                        required={true} 
                        onChange={handleInputChange} 
                    />
                    
                    <FormTextArea 
                        label="Message" 
                        id="message"
                        value={user.message} 
                        onChange={handleInputChange} 
                    />
                </Form>  
            </div>
        </div>
    )
}

export default App