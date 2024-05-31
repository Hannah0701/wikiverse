import React, { useState } from 'react'

export const Form = (props) => {
    const [data, setData] = useState({
        title: '',
        content: '',
        name: '',
        email: '',
        tags: '',
    })

    function handleChange(event) {
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.addPage(data)
    };

    return (
        <>
            <button 
              type="button"
              className="backButton" 
              onClick={props.goHome}
            >
                Back to Wiki home
            </button>
            <h2>Add a Page</h2>
            <form onSubmit={handleSubmit}>
                <p>
                    <label htmlFor="title">
                        Title: 
                        <input 
                          type="text" 
                          name="title" 
                          id="title" 
                          value={data.title} 
                          onChange={handleChange} 
                        />
                    </label>
                </p>
                    <p>
                    <label htmlFor="content">
                        Content: 
                        <textarea 
                          name="content" 
                          id="content" 
                          value={data.content} 
                          onChange={handleChange} 
                        />
                    </label>
                </p>
                <p>
                    <label htmlFor="name">
                        Name: 
                        <input 
                          type="text" 
                          name="name" 
                          id="name" 
                          value={data.name} 
                          onChange={handleChange} 
                        />
                    </label>
                </p>
                <p>
                    <label htmlFor="email">
                        Email: 
                        <input 
                          type="text" 
                          name="email" 
                          id="email" 
                          value={data.email}
                          onChange={handleChange} 
                        />
                    </label>
                </p>
                <p>
                    <label htmlFor="tags">
                        Tags: 
                        <input 
                          type="text" 
                          name="tags" 
                          id="tags" 
                          value={data.tags} 
                          onChange={handleChange} 
                        />
                    </label>
                </p>
                <button type="submit">Add Article</button>
            </form>
        </>
    )
}