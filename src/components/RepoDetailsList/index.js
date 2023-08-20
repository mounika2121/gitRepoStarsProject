import moment from 'moment'
import './index.css'

const RepoDetailsList = props => {
  const {
    avatar,
    owner,
    name,
    htmlUrl,
    description,
    starCount,
    openIssuesCount,
    createdAt,
  } = props
  return (
    <li className="repo-container">
      <img src={avatar} alt="avatar" className="profile-image" />
      <div>
        <h1 className="name">
          <a href={htmlUrl} target="_blank" rel="noreferrer">
            {name}
          </a>
        </h1>
        <p className="description">{description}</p>
        <div className="star-and-issues">
          <p className="count">Stars: {starCount}</p>
          <p className="count">Issues: {openIssuesCount}</p>
        </div>
      </div>
      <p className="submit-para">
        Submitted at <span>{moment(createdAt).fromNow()}</span> by {owner}
      </p>
      <div>
        <select onChange={e => e.target.value}>
          <option value="commit">Commit</option>
          <option value="additions">Additions</option>
          <option value="deletions">Deletions</option>
        </select>
      </div>
    </li>
  )
}
export default RepoDetailsList
