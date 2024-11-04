import { useState } from "react"
import { dateConverter } from "../helpers/dateConverter"

export const useSearch = () => {
  const [postsToShow, setPostToShow] = useState()
  
  const getPosts = async ({ category, theme }) => {
    const url = theme !== undefined
      ? `https://gnews.io/api/v4/top-headlines?category=${category}&lang=es&q=${theme}&apikey=f61c1e72a43a165de8b2202084e4d34c`
      : `https://gnews.io/api/v4/top-headlines?category=${category}&lang=es&apikey=f61c1e72a43a165de8b2202084e4d34c`
    
    const response = await fetch(url)
    const data = await response.json()
    const answer = data.map(item => ({
      title: item.title,
      description: item.description,
      url: item.url,
      image: item.image,
      publishedAt: dateConverter({date: item.publishedAt})
    }))

    setPostToShow({about: category, content: answer})
  }

  return {postsToShow, getPosts}
}