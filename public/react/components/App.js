import React, { useState, useEffect } from 'react'
import { Page } from './Page'
import { Form } from './Form'

// import and prepend the api url to any fetch calls
import apiURL from '../api'

export const App = () => {
  const [pages, setPages] = useState([])
  const [activePage, setActivePage] = useState(null);
  const [isAddingPage, setIsAddingPage] = useState(false);

  async function handleClick(slug) {
    const response = await fetch(`${apiURL}/wiki/${slug}`)
    const pageData = await response.json()
    setActivePage(pageData)
  }

  async function addPage(page) {
    const response = await fetch(`${apiURL}/wiki`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(page)
    })
    
    const newPage = await response.json()
    setPages([...pages, newPage])
    setIsAddingPage(false)
  }

  useEffect(() => {
    async function fetchPages () {
      try {
        const response = await fetch(`${apiURL}/wiki`)
        const pagesData = await response.json()
        setPages(pagesData)
      } catch (err) {
        console.log('Oh no an error! ', err)
      }
    }

    fetchPages()
  }, [])

  useEffect(() => {
    if (activePage) {
      document.title = `${activePage.title} - WikiVerse`
    } else if (isAddingPage) {
      document.title = 'Add a Page - WikiVerse'
    } else {
      document.title = 'Wikiverse'
    }
  }, [activePage, isAddingPage])

  if (isAddingPage) {
    return <Form onSubmit={addPage} setIsAddingPage={setIsAddingPage} />;
  }

  if (activePage) {
    return <Page {...activePage} setActivePage={setActivePage}/>
  }

  return (
		<main>
      <h1>WikiVerse</h1>
			<h2>📚 The home of interesting articles 📚</h2>
      { pages.map((page) => (
        <p>
          <b>
             <button 
               className="link" 
               type="button" 
               key={page.id} 
               onClick={() => handleClick(page.slug)}
             >
               {page.title}
             </button>
          </b>
        </p>
      ))}
      <p>
      <button onClick={() => setIsAddingPage(true)}>Add a Page</button>
      </p>
		</main>
  )
}
