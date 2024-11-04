/* eslint-disable no-irregular-whitespace */
import React, { useEffect, useRef, useState } from 'react'
import { useSearch } from '../hooks/useSearch'
import { useFeedContext } from '../hooks/useFeedContext'

const Header = () => {
  const [category, setCategory] = useState('')
  const [theme, setTheme] = useState('')
  const { postsToShow, getPosts } = useSearch()
  const previousPost = useRef()
  const { feed, addToFedd } =useFeedContext()

  const handleCategory = (e) => {
    setCategory(e.target.value)
  }

  const handleInputChange = (e) => {
    setTheme(e.target.value)
  }

  useEffect(() => {
    console.log('theme: ', theme.trim().toUpperCase())
  }, [theme])

  useEffect(() => {
    if (postsToShow !== undefined || postsToShow !== previousPost.current) {
      const { about, content } = postsToShow
      content.forEach(item => addToFedd({ about, content: item }))
      previousPost.current = postsToShow
    }
    console.log('feed: ', feed)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postsToShow])
  
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    await getPosts({ category, theme })
  }

  return (
    <div>
      <div className="navbar">
        <div className='logoHeader'><strong>AllNews</strong></div>
        <div className='headerContainer'>
          <button value='general' onClick={handleCategory}>General</button>
        </div>
        <div className='headerContainer'>
          <button value='world' onClick={handleCategory}>El Mundo</button>
        </div>
        <div className='headerContainer'>
          <button value='business' onClick={handleCategory}>Negocios</button>
        </div>
        <div className='headerContainer'>
          <button value='technology' onClick={handleCategory}>Tecnología</button>
        </div>
        <div className='headerContainer'>
          <button value='entertainment' onClick={handleCategory}>Entretenimiento</button>
        </div>
        <div className='headerContainer'>
          <button value='sports' onClick={handleCategory}>Deporte</button>
        </div>
        <div className='headerContainer'>
          <button value='science' onClick={handleCategory}>Ciencia</button>
        </div>
        <div className='headerContainer' id='salud'>
          <button value='health' onClick={handleCategory}>Salud</button>          
        </div>
        <div className='formHeaderContainer' id='search'>
          <form className='formHeader' onSubmit={handleSubmit} >
            <input type="text" value={theme} className='inputSearch' onChange={handleInputChange} />
            <button className='buttonFormHeader'>🔎​</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Header
