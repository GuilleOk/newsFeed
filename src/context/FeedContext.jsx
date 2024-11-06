import { createContext, useReducer } from 'react'

// eslint-disable-next-line react-refresh/only-export-components
export const FeedContext = createContext()

const initialState = [  
  {
    category: 'general',
    content: []
  },
  {
    category: 'world',
    content: []
  },
  {
    category: 'business',
    content: []
  },
  {
    category: 'technology',
    content: []
  },
  {
    category: 'entertainment',
    content: []
  },
  {
    category: 'sports',
    content: []
  },
  {
    category: 'science',
    content: []
  },
  {
    category: 'health',
    content: []
  }
]

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_FEED': {
      const index = state.findIndex(item => action.payload.about === item.category)
      const index_exist = state[index].content.findIndex(item => action.payload.content.url === item.url)
      if (index_exist === -1) {
        let newState = structuredClone(state)
        const newContent = [action.payload.content, ...newState[index].content]
        newState[index].content = structuredClone(newContent)
        return newState
      }
    }
      
    // eslint-disable-next-line no-fallthrough
    case 'REMOVE_FROM_FEED': {
      const index = state.findIndex(item => action.payload.about === item.category)
      let actualState = structuredClone(state)
      const actualContent = actualState[index].content.filter(item => item.url !== action.payload.content.url)
      actualState[index].content = structuredClone(actualContent)
      return actualState
    }
      
    case 'CLEAR_FEED': {
      return initialState
    }
  }
}

const useFeedReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const addToFedd = post => dispatch({
    type: 'ADD_TO_FEED',
    payload: post
  })

  const removeFormFeed = post => dispatch({
    type: 'REMOVE_FROM_FEED',
    payload: post
  })

  const clearFeed = () => dispatch({
    type: 'CLEAR_FEED'
  })

  return {feed: state, addToFedd, removeFormFeed, clearFeed}
}

// eslint-disable-next-line react/prop-types
export function FeedProvider ({ children }) {
  const { feed, addToFedd, removeFormFeed, clearFeed } = useFeedReducer()
  
  return (
    <FeedContext.Provider value={{ feed, addToFedd, removeFormFeed, clearFeed }}>{ children }</FeedContext.Provider>
  )
}