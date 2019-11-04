import gql from "graphql-tag";

export const GET_ALL_REPOS = gql`
  query getPublicRepos($queryString: String!, $first: Int = 12, $afterCursor: String) {
    rateLimit {
      cost
      remaining
			resetAt
    }
    search(query: $queryString, type: REPOSITORY, after: $afterCursor, first: $first) {
      repositoryCount
      pageInfo {
        endCursor
				startCursor
      }
      edges {
        node {
          ... on Repository {
						__typename
            id
            name
            description
						url
						openGraphImageUrl
            owner {
              login
              url
							avatarUrl
							__typename
            }
          }
        }
      }
    }
  }
`;

export const GET_REPO_BY_ID = gql`
query getRepoById($id: ID!) {
	node(id:$id) {
    ... on Repository {
      __typename
			id 
			name
			description
			createdAt
			forkCount
			homepageUrl
			openGraphImageUrl
			url
			pushedAt
			updatedAt
			owner {
				login
				url
				avatarUrl
			}
    }
  }
}
`;
