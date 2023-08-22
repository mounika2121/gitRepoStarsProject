import {Component} from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts'

class ContributorGraph extends Component {
  render() {
    const {data} = this.props
    const chartData = data.slice(0, 4).map((item, index) => ({
      week: `Week ${index + 1}`,
      Additions: item.weeks[0].a,
      Deletions: item.weeks[0].d,
      Commits: item.weeks[0].c,
    }))

    return (
      <LineChart width={320} height={250} data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="week"
          label={{value: 'Week', position: 'insideBottom', offset: -10}}
        />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="Additions"
          stroke="blue"
          activeDot={{r: 8}}
        />
        <Line
          type="monotone"
          dataKey="Deletions"
          stroke="red"
          activeDot={{r: 8}}
        />
        <Line
          type="monotone"
          dataKey="Commits"
          stroke="green"
          activeDot={{r: 8}}
        />
      </LineChart>
    )
  }
}

export default ContributorGraph
