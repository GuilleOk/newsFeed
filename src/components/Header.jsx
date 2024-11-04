/* eslint-disable no-irregular-whitespace */
import React, { useContext, useEffect, useRef, useState } from 'react'
import { useSearch } from '../hooks/useSearch'
import { useFeedContext } from '../hooks/useFeedContext'

const Header = () => {
  const [category, setCategory] = useState('')
  const [theme, setTheme] = useState('')
  const { postsToShow, getPosts } = useSearch()
  const previousPost = useRef('something')
  const [search, setSearch] = useState(false)
  const { feed, addToFedd } = useFeedContext()
  const categorysForInitialSearch = ['general', 'world', 'business', 'business', 'technology', 'entertainment', 'sports', 'science', 'health']

  const handleCategory = (e) => {
    setCategory(e.target.value)
  }

  const handleInputChange = (e) => {
    setTheme(e.target.value)
  }

  // useEffect(() => {
  //   const load = async () => {
  //     setSearch(true)  
  //     for (const categoria of categorysForInitialSearch) {
  //       await getPosts({ category: categoria, theme: '' })
  //       if (postsToShow !== undefined && postsToShow !== previousPost.current) {
  //         const { about, content } = postsToShow
  //         console.log('content: ', content)
  //         content.forEach(item => addToFedd({ about, content: item }))
  //         previousPost.current = postsToShow
  //         setTimeout(()=> {}, 100)
  //       }
  //     }
  //     setSearch(false)
  //   }
  //   load()
  // }, [])
  

  useEffect(() => {
    console.log('category: ', category)
    console.log('theme: ', theme.trim().toUpperCase())
  }, [category, theme])

  useEffect(() => {
    if (postsToShow !== undefined && postsToShow !== previousPost.current && search) {
      const { about, content } = postsToShow
      console.log('content: ', content)
      content.forEach(item => addToFedd({ about, content: item }))
      previousPost.current = postsToShow
      setSearch(false)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search])
  
  useEffect(() => {
    console.log('feed: ', feed)
  }, [feed])
  

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('category: ', category)
    console.log('theme: ', theme)
    await getPosts({ category, theme })
    setSearch(true)
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
