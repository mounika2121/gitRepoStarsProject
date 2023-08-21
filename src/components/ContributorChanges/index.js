import {useState, useEffect} from 'react'
import axios from 'axios'
import ContributorGraph from '../ContributorGraph'

const ContributorChanges = props => {
  const {repoOwner, repoName} = props
  const [codeFrequencyData, setCodeFrequencyData] = useState([])
  const accessToken = 'token'

  useEffect(() => {
    const fetchCodeFrequencyData = async () => {
      try {
        const headers = {
          Accept: 'application/vnd.github+json',
          'X-GitHub-Api-Version': '2022-11-28',
          Authorization: `Bearer ${accessToken}`,
        }

        const response = await axios.get(
          `https://api.github.com/repos/${repoOwner}/${repoName}/stats/contributors`,
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
      <ContributorGraph data={codeFrequencyData} />
    </div>
  )
}

export default ContributorChanges
