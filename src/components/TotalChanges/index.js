import {useState, useEffect} from 'react'
import axios from 'axios'

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
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchCodeFrequencyData()
  }, [])

  return <div>{codeFrequencyData.map(item => console.log(item))}</div>
}

export default TotalChanges
