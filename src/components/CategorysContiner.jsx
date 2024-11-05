import React, { useEffect, useState } from 'react'
import { useFeedContext } from '../hooks/useFeedContext'
import News from './News'

const CategorysContiner = () => {
  const { feed } = useFeedContext()
  const [firstWithContent, setFirstWithContent] = useState(null)
  const nameCategorys = ['General', 'El Mundo', 'Negocios', 'Tecnología', 'Entretenimiento', 'Deporte', 'Ciencia', 'Salud']

  useEffect(() => {
    const index = feed.findIndex(item => item.content.length !== 0)

    if (index !== -1) {
      setFirstWithContent(index)
    }
  }, [feed])
  
  return (
    <div className='categorysContainer'>
      {
        feed.map((itemFeed, i) => {
          if (itemFeed.content.length !== 0) {

            return (
              <div key={itemFeed.category} className='categoryContainer'>
                <header className={i !== firstWithContent ? 'headerCategory' : ''}>
                  <h2 className='h2Header'>{nameCategorys[i]}</h2>
                </header>
                <div className='allNewsContainer'>
                {
                  itemFeed.content.map(({title, description, url, image, publishedAt}) => {
                    return (
                      <News key={url} category={itemFeed.category} title={title} description={description} url={url} image={image} publishedAt={publishedAt} />
                    )
                  })
                }
                </div>
              </div>
            )
          }
        })
      }
    </div>
  )
}

export default CategorysContiner
