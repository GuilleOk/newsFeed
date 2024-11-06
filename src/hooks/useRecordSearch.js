import { useRef } from "react"
import { useFeedContext } from "./useFeedContext"

export const useRecordSearch = () => {
  const recordSearch = useRef([])
  const { feed } = useFeedContext()

  const getRecordSearch = ({ about })=> {
    const indexCategory = feed.findIndex(item => item.category === about)
    const positionCategory = {category: about, index: indexCategory}
    if (recordSearch.current.length === 0) {
      recordSearch.current = [positionCategory]
    } else {
      const indexRecord = recordSearch.current.findIndex(item => item.category === about)
      if (indexRecord === -1) {
        recordSearch.current = [positionCategory, ...recordSearch.current]
      } else {
        const itemRecord = recordSearch.current[indexRecord]
        recordSearch.current.splice(indexRecord, 1) // elimino la categoría con su posición en feed 
                                                    // que necesito poner al inicio
        recordSearch.current.unshift(itemRecord) // la pongo al inicio
      }
    }
  }

  return {recordSearch: recordSearch.current, getRecordSearch}
}