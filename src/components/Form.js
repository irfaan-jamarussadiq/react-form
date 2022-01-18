import React from "react"

function FormInput({ type='text', label, id, required=false, value, onChange }) {
    return (
        <div> 
            <label className="font-bold block" aria-label={label} htmlFor={id}>{label}</label>
            <input 
                className="container w-2/3 p-1 my-1 border-solid border-2 border-black-600" 
                id={id} 
                type={type} 
                required={required}
                value={value} 
                onChange={onChange}                
            />
        </div>
    )
}

function FormTextArea({ label, id, onChange }) {
    return (
        <>
            <label 
                className="font-bold inline-block mt-4"
                aria-label="message"  
                htmlFor={id}
            >
                {label}
            </label>
            <textarea 
                className="container h-32 mb-4 p-2 border-solid border-2 border-black-600 placeholder:italic placeholder:text-gray-400"
                name="message"
                id={id} 
                wrap="hard" 
                onChange={onChange} 
                value={id}
                placeholder="Enter your message here ..." 
            />
        </>
    )
}

const Form = ({children, handleSubmit}) => {
    return (
        <form className="mt-4" onSubmit={handleSubmit}>
            { children }
            <button 
                type="submit" 
                className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-2 mb-4"
            >
                Submit
            </button>
        </form>
    )
}

export { Form, FormInput, FormTextArea }