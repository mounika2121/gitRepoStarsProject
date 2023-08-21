import {useState, useEffect} from 'react'
import axios from 'axios'
import LineGraph from '../LineGraph'

const TotalChanges = props => {
  const {repoOwner, repoName} = props
  const [codeFrequencyData, setCodeFrequencyData] = useState([])
  const accessToken = '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'

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
        setCodeFrequencyData(response.data)
        // console.log(response.data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchCodeFrequencyData()
  }, [])

  return (
    <div>
      <LineGraph data={codeFrequencyData} />
    </div>
  )
}

export default TotalChanges
