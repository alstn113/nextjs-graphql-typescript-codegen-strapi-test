import gql from "graphql-tag";

export const REVIEWS = gql`
  query GetReviews {
    reviews {
      id
      title
      body
      rating
      categories {
        id
        name
      }
    }
  }
`;

export const REVIEW = gql`
  query GetReview($id: ID!) {
    review(id: $id) {
      id
      title
      body
      rating
      categories {
        id
        name
      }
    }
  }
`;

export const CATEGORY = gql`
  query GetCategory($id: ID!) {
    category(id: $id) {
      id
      name
      reviews {
        id
        title
        body
        rating
        categories {
          id
          name
        }
      }
    }
  }
`;

export const CATEGORIES = gql`
  query GetCategories {
    categories {
      id
      name
    }
  }
`;
