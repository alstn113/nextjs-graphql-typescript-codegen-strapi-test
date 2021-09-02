import Head from "next/head";

function HeaderInfo({ title, contents, keyword }) {
  return (
    <Head>
      <title>NEXT TEST - {title}</title>
      <meta contents={contents} />
      <meta keyword={keyword} />
    </Head>
  );
}

HeaderInfo.defaultProps = {
  title: "NEXT TEST",
  contents: "about next.js",
  keyword: "hahaha",
};

export default HeaderInfo;
