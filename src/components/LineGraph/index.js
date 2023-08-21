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

class LineGraph extends Component {
  render() {
    const {data} = this.props

    const chartData = data.map((item, index) => ({
      name: `Week ${index + 1}`,
      Additions: item[1],
    }))

    return (
      <LineChart width={350} height={250} data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="Additions"
          stroke="blue"
          activeDot={{r: 8}}
        />
      </LineChart>
    )
  }
}

export default LineGraph
