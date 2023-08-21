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
      name: `Data Point ${index + 1}`,
      middleValue: item[1],
    }))

    return (
      <LineChart width={500} height={300} data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="middleValue"
          stroke="blue"
          activeDot={{r: 8}}
        />
      </LineChart>
    )
  }
}

export default LineGraph
