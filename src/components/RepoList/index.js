import RepoDetailsList from '../RepoDetailsList'

const RepoList = ({data}) => (
  <div>
    <ul className="ul-list">
      {data.map(item => (
        <RepoDetailsList
          key={item.id}
          avatar={item.owner.avatar_url}
          owner={item.owner.login}
          name={item.name}
          htmlUrl={item.html_url}
          description={item.description}
          starCount={item.stargazers_count}
          openIssuesCount={item.open_issues_count}
          createdAt={item.created_at}
        />
      ))}
    </ul>
  </div>
)

export default RepoList
