import { useState } from "react"
import { dateConverter } from "../helpers/dateConverter"

export const useSearch = () => {
  const [postsToShow, setPostToShow] = useState()
  
  const getPosts = async ({ category, theme }) => {
    const url = theme !== '' ? `https://gnews.io/api/v4/top-headlines?category=${category}&lang=es&q=${theme}&apikey=f61c1e72a43a165de8b2202084e4d34c` : `https://gnews.io/api/v4/top-headlines?category=${category}&lang=es&apikey=f61c1e72a43a165de8b2202084e4d34c`
    
    try {
      const response = await fetch(url)
      if (response.ok) {
        const data = await response.json()
        const { articles } = data
        const answer = articles.map(item => ({
          title: item.title,
          description: item.description,
          url: item.url,
          image: item.image,
          publishedAt: dateConverter({date: item.publishedAt})
        }))
        setPostToShow({about: category, content: answer})
      } else {
        throw new Error('Problema en el fetch')
      }
    } catch (error) {
      console.error(error)
    }
  }

  return {postsToShow, getPosts}
}