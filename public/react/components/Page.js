import React from 'react'

export const Page = ({ setActivePage, ...props}) => {
    return (
    <>
    <button className="backButton" onClick={() => setActivePage(null)}>Back to Wiki home</button>
      <h2>{props.title}</h2>
      <p><b>Author:</b> {props.author.name}</p>
      {/* <p><b>Published:</b> {props.createdAt}</p> */}
      <p><b>Published:</b> {new Date(props.createdAt).toLocaleDateString()}</p>
      <p><b>Content:</b>{props.content}</p>
      <p><b>Tags:</b> </p>
        <ul>
          {props.tags.map((tag) => (
            <li key={tag.id}>{tag.name}</li>
          ))}
        </ul>
    </>
  );

}
