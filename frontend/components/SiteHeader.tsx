import Link from "next/link";
import { useGetCategoriesQuery } from "../generated";

function SiteHeader() {
  const { loading, data, error } = useGetCategoriesQuery();

  if (loading) return <p>Loading categories</p>;
  if (error) return <p>Error fetching categories :( </p>;

  return (
    <div className="site-header">
      <Link href="/">
        <a>
          <h1>Minsoo Reviews</h1>
        </a>
      </Link>
      <nav className="categories">
        <span>Filter reviews by categories : </span>
        {data &&
          data.categories.map((category) => (
            <Link key={category.id} href={`/category/${category.id}`}>
              <a> {category.name}</a>
            </Link>
          ))}
      </nav>
    </div>
  );
}

export default SiteHeader;
