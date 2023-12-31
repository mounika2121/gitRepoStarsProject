import {useState, useEffect} from 'react'
import axios from 'axios'
import LineGraph from '../LineGraph'

const TotalChanges = props => {
  const {repoOwner, repoName} = props
  const [codeFrequencyData, setCodeFrequencyData] = useState([])
  const [errorMessage, setErrorMessage] = useState('')
  const accessToken = 'Enter your access token'

  useEffect(() => {
    const fetchCodeFrequencyData = async () => {
      try {
        const headers = {
          'X-GitHub-Api-Version': '2022-11-28',
          Authorization: `Bearer ${accessToken}`,
        }

        const response = await axios.get(
          `https://api.github.com/repos/${repoOwner}/${repoName}/stats/code_frequency`,
          {headers},
        )

        if (response.status === 202) {
          setErrorMessage('Please refresh the page and try again :)')
        } else {
          setCodeFrequencyData(response.data)
          setErrorMessage('')
        }
      } catch (error) {
        console.error('Error fetching data:', error)
        setErrorMessage(
          'Unauthorized user, please enter your git access token and try again!',
        )
      }
    }

    fetchCodeFrequencyData()
  }, [repoOwner, repoName])

  return (
    <div>
      {errorMessage && <p>{errorMessage}</p>}
      {!errorMessage && <LineGraph data={codeFrequencyData} />}
    </div>
  )
}

export default TotalChanges
