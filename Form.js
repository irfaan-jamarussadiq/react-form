import React, { useState, useEffect } from "react"

const FormField = ({ fieldName, inputName, value, onChange }) => (
    <>
        <label 
            className="font-bold" 
            aria-label={inputName}
            htmlFor={inputName}
        >
            {fieldName}
        </label>
        <div>
            <input 
                className="container w-2/3 p-1 my-1 border-solid border-2 border-black-600"
                name={inputName}
                id={inputName}
                required={['subject', 'email'].includes(inputName)}                  
                value={value || ''} 
                onChange={onChange}
            />
        </div>
    </>
)

const FormTextBox = ({ label, onChange, textID }) => (
    <>
        <label 
            className="font-bold inline-block mt-4" 
            aria-label="message" 
            htmlFor={label}
        >
            {label}
        </label>
        <div>
            <textarea 
                className="container h-32 mb-4 p-2 border-solid border-2 border-black-600 placeholder:italic placeholder:text-gray-400"
                name="message"
                id={label}
                onChange={onChange} 
                value={textID || ''}
                placeholder="Enter your message here ..." 
            />
        </div>
    </>
)

const Form = () => {
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
        <form className="mt-4" onSubmit={handleSubmit}>
            <FormField 
                fieldName="Email"
                inputName="email"                  
                value={user.email} 
                onChange={handleInputChange} 
            />

            <FormField 
                fieldName="Phone Number" 
                inputName="phone"                  
                value={user.phone} 
                onChange={handleInputChange} 
            />

            <FormField 
                fieldName="Subject" 
                inputName="subject"                  
                value={user.subject} 
                onChange={handleInputChange} 
            />
            
            <FormTextBox 
                label='Message' 
                onChange={handleInputChange} 
                textID={user.message} 
            />

            <button 
                type="submit" 
                className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-2 mb-4"
            >
                Submit
            </button>
        </form>
    )  
}

export default Form
