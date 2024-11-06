import Header from './components/Header'
import CategorysContiner from './components/CategorysContiner'
import { useRecordSearch } from './hooks/useRecordSearch'
import Footer from './components/footer'

const App = () => {
  const { recordSearch, getRecordSearch } = useRecordSearch()

  return (
    <div>
      <Header getRecordSearch={getRecordSearch} />
      <CategorysContiner recordSearch={recordSearch} />
      <Footer />
    </div>
  )
}

export default App
