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
    <li>
      <img src={avatar} alt="avatar" />
      <div>
        <h1>
          <a href={htmlUrl} target="_blank" rel="noreferrer">
            {name}
          </a>
        </h1>
        <p>{description}</p>
        <div>
          <p>{starCount}</p>
          <p>{openIssuesCount}</p>
        </div>
      </div>
      <p>
        Submitted at {moment(createdAt).fromNow()} by {owner}
      </p>
    </li>
  )
}
export default RepoDetailsList
