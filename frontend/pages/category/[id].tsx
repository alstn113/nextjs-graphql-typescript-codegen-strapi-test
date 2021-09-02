import { getDataFromTree } from "@apollo/client/react/ssr";
import Link from "next/link";
import { useRouter } from "next/router";

import withApollo from "../../lib/withApollo";
import HeaderInfo from "../../components/HeaderInfo";
import SiteHeader from "../../components/SiteHeader";
import { useGetCategoryQuery } from "../../generated";

function Category() {
  const router = useRouter();
  const { id } = router.query;
  const { data, loading, error } = useGetCategoryQuery({ variables: { id } });
  if (loading) return <div>loading...</div>;
  if (error) return <div>Error :(</div>;
  return (
    <>
      <HeaderInfo title="CATEGORY" />
      <SiteHeader />
      <div>
        <h2>{data.category.name}</h2>
        {data.category.reviews.map((review) => (
          <div key={review.id} className="review-card">
            <div className="rating">{review.rating}</div>
            <h2>{review.title}</h2>
            {review.categories.map((c) => (
              <small key={c.id}>{c.name}</small>
            ))}
            <p>{review.body.substring(0, 100)}</p>
            <Link href={`/details/${review.id}`}>
              <a> Read More</a>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default withApollo(Category, { getDataFromTree });
