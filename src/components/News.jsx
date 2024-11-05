/* eslint-disable react/prop-types */
import React from 'react'

const News = ({ title, description, url, image, publishedAt }) => {
  return (
    <div className='newsContainer'>
      <img src={image} alt={title} className='imageNews' />
      <a href={url}><h3>{title}</h3></a>
      <p>{description}</p>
      <small className='dateNews'>{ publishedAt }</small>
    </div>
  )
}

export default News
