/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-irregular-whitespace */
import { useEffect, useRef, useState } from 'react'
import { useSearch } from '../hooks/useSearch'
import { useFeedContext } from '../hooks/useFeedContext'

const Header = ({ getRecordSearch }) => {
  const [category, setCategory] = useState('')
  const [theme, setTheme] = useState('')
  const { postsToShow, getPosts } = useSearch()
  const previousPost = useRef('something')
  const [search, setSearch] = useState(false)
  const { addToFedd } = useFeedContext()

  const initialLoad = async () => {
    getRecordSearch({about: 'general'})
    await getPosts({ category: 'general', theme })
    setSearch(true)
  }

  const handleCategory = async(e) => {
    const category = e.target.value
    setCategory(category)
  }

  const handleInputChange = (e) => {
    setTheme(e.target.value)
  }
  
  const handleFocus = () => {
    setTheme('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    getRecordSearch({about: category})
    await getPosts({ category, theme })
    setSearch(true)
  }

  useEffect(() => {
    initialLoad()
  }, [])

  useEffect(() => {
    if (postsToShow !== undefined && postsToShow !== previousPost.current && search) {
      const { about, content } = postsToShow
      content.forEach(item => addToFedd({ about, content: item }))
      previousPost.current = postsToShow
      setSearch(false)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search])

  return (
    <div>
      <div className="navbar">
        <div className='logoHeader'><strong>AllNews</strong></div>
        <div className='headerContainer'>
          <button value='general' className={'general' === category ? 'buttonHeaderClick' : 'buttonHeader'} onClick={handleCategory}>General</button>
        </div>
        <div className='headerContainer'>
          <button value='world' className={'world' === category ? 'buttonHeaderClick' : 'buttonHeader'} onClick={handleCategory}>El Mundo</button>
        </div>
        <div className='headerContainer'>
          <button value='business' className={'business' === category ? 'buttonHeaderClick' : 'buttonHeader'} onClick={handleCategory}>Negocios</button>
        </div>
        <div className='headerContainer'>
          <button value='technology' className={'technology' === category ? 'buttonHeaderClick' : 'buttonHeader'} onClick={handleCategory}>Tecnología</button>
        </div>
        <div className='headerContainer'>
          <button value='entertainment' className={'entertainment' === category ? 'buttonHeaderClick' : 'buttonHeader'} onClick={handleCategory}>Entretenimiento</button>
        </div>
        <div className='headerContainer'>
          <button value='sports' className={'sports' === category ? 'buttonHeaderClick' : 'buttonHeader'} onClick={handleCategory}>Deporte</button>
        </div>
        <div className='headerContainer'>
          <button value='science' className={'science' === category ? 'buttonHeaderClick' : 'buttonHeader'} onClick={handleCategory}>Ciencia</button>
        </div>
        <div className='headerContainer' id='salud'>
          <button value='health' className={'health' === category ? 'buttonHeaderClick' : 'buttonHeader'} onClick={handleCategory}>Salud</button>          
        </div>
        <div className='formHeaderContainer' id='search'>
          <form className='formHeader' onSubmit={handleSubmit} >
            <input type="text" value={theme} className='inputSearch' onChange={handleInputChange} onFocus={handleFocus} />
            <button className='buttonFormHeader'>🔎​</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Header
