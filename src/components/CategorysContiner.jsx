/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import { useFeedContext } from '../hooks/useFeedContext'
import News from './News'

const CategorysContiner = ({ recordSearch }) => {
  const { feed } = useFeedContext()
  const nameCategorys = ['General', 'El Mundo', 'Negocios', 'Tecnología', 'Entretenimiento', 'Deporte', 'Ciencia', 'Salud']
  const [firsElement, setFirsElement] = useState('')

  useEffect(() => {
    if (recordSearch.length !== 0) {
      const i = recordSearch.findIndex(item => feed[item.index].content.length !== 0)
      if (i !== -1 && recordSearch.length !== 0) {
        setFirsElement(recordSearch[i].index)
      } else {
        setFirsElement(recordSearch[0].index)
      }
    }
    console.log('record: ', recordSearch)
  }, [feed])
  
  return (
    <div className='categorysContainer'>
      {
        recordSearch.map(itemRecord => {
          if (feed[itemRecord.index].content.length !== 0) {
            return (
              <div key={itemRecord.category} className='categoryContainer'>
                   <header className={firsElement !== itemRecord.index ? 'headerCategory' : ''}>
                     <h2 className='h2Header'>{nameCategorys[itemRecord.index]}</h2>
                   </header>
                   <div className='allNewsContainer'>
                   {
                     feed[itemRecord.index].content.map(({title, description, url, image, publishedAt}) => {
                       return (
                         <News key={url} category={itemRecord.category} title={title} description={description} url={url} image={image} publishedAt={publishedAt} />
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
