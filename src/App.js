import {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import moment from 'moment'
import axios from 'axios'
import {CircularProgress} from '@mui/material'
import RepoList from './components/RepoList'

const App = () => {
  const [data, setData] = useState([])
  const [appError, setError] = useState('')
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)

  const priorDate = moment().subtract(30, 'days').format('YYYY-MM-DD')

  const loadRepositories = () => {
    axios
      .get(
        `https://api.github.com/search/repositories?q=created:>${priorDate}&sort=stars&order=desc&page=${page}`,
      )
      .then(response => {
        setData(prevData => [...prevData, ...response.data.items])
        setLoading(false)
      })
      .catch(() => {
        setError('An error occurred')
        setLoading(false)
      })
  }

  useEffect(() => {
    loadRepositories()
  }, [page])

  const handleScroll = () => {
    const scrolledToBottom =
      window.innerHeight + window.scrollY >= document.body.offsetHeight

    if (scrolledToBottom && !loading) {
      setPage(prevPage => prevPage + 1)
      setLoading(true)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="container">
      <h1 className="text-center text-info">Most Starred Repos</h1>
      <RepoList data={data} />
      {loading && (
        <div className="text-center">
          <CircularProgress style={{color: '#36D7B7'}} size={60} />
        </div>
      )}
    </div>
  )
}

export default App
