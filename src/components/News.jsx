/* eslint-disable react/prop-types */
// import React from 'react'
import { useFeedContext } from '../hooks/useFeedContext'

const News = ({ category, title, description, url, image, publishedAt }) => {
  const { removeFormFeed } = useFeedContext()
  const handleRemove = ({ category, url }) => {
    removeFormFeed({about: category, content: {url}})
  }
  return (
    <div className='newsContainer'>
      <div className='remvoveContainer'>
        <img src="../../public/images/remove.png" alt="remove" className='removeImage' onClick={() => handleRemove({ category, url })} />
      </div>
      <img src={image} alt={title} className='imageNews' />
      <a href={url} className='newsLink' target="_blank" rel="noopener noreferrer"><h3>{title}</h3></a>
      <p>{description}</p>
      <small className='dateNews'>{ publishedAt }</small>
    </div>
  )
}

export default News
