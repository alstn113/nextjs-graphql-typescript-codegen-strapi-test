import { getDataFromTree } from "@apollo/client/react/ssr";
import { get } from "lodash";

import withApollo from "../../lib/withApollo";
import HeaderInfo from "../../components/HeaderInfo";
import SiteHeader from "../../components/SiteHeader";
import { useGetReviewQuery } from "../../generated";

function ReviewDetails({ query }) {
  const id = get(query, "id");
  const { data, loading, error } = useGetReviewQuery({ variables: { id } });
  if (loading) return <div>loading...</div>;
  if (error) return <div>Error :(</div>;
  return (
    <>
      <HeaderInfo title="REVIEW DETAILS" />
      <SiteHeader />
      {data && (
        <div className="review-card">
          <div className="rating">{data.review.rating}</div>
          <h2>{data.review.title}</h2>
          {data.review.categories.map((c) => (
            <small key={c.id}>{c.name}</small>
          ))}

          <p>{data.review.body}</p>
        </div>
      )}
    </>
  );
}

export default withApollo(ReviewDetails, { getDataFromTree });
