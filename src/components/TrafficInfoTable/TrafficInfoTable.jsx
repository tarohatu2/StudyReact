import { React } from 'react' 
import PropTypes from 'prop-types'
import style from './TrafficInfoTable.module.css'

export const TrafficInfoTable = ({ info, caption }) => { 
  const rows = info.map((data, index) => {
    const { distance, direction, reason, title } = data
    return (
      <tr id={`jam-${index}`}>
        <td>{direction}</td>
        <td>{title}</td>
        <td>{reason}</td>
        <td>{distance}</td>
      </tr>
    )
  })
  return (
    <table>
      <caption>{caption}</caption>
      <tr>
        <th>方面</th>
        <th>IC・JCT</th>
        <th>事由</th>
        <th>距離</th>
      </tr>
      {rows}
    </table>
  )
}

TrafficInfoTable.propTypes = {
  info: PropTypes.array.isRequired,
  caption: PropTypes.string.isRequired
}