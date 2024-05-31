import React from 'react'

export const Page = (props) => {
    const deletePage = () => {
        const isConfirmed = window.confirm(
            'Are you sure you want to delete this page?'
        )

        if(isConfirmed) {
            props.deletePage(props.slug)
        }
    }

    return (
    <>
        <button 
            className="backButton" 
            onClick={props.goHome}
        >
            Back to Wiki home
        </button>
        <h2>{props.title}</h2>
        <p>
          <b>
              Author:
          </b> 
          {props.author.name}
        </p>
        <p>
          <b>
              Published:
          </b> 
          {new Date(props.createdAt).toLocaleDateString()}
        </p>
        <p>
          <b>
              Content:
          </b>
          {props.content}
        </p>
        <p>
          <b>
              Tags:
          </b>
        </p>
        <ul>
            {props.tags.map((tag) => (
              <li key={tag.id}>{tag.name}</li>
            ))}
        </ul>
        <p>
        <button 
          type="button" 
          onClick={deletePage}
        >
          Delete this page
        </button>
        </p>
    </>
  );

}
