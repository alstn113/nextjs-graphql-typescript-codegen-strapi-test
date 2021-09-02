import Head from "next/head";

interface Props {
  title: string;
  content: string;
}

function HeaderInfo({ title, content }: Props) {
  return (
    <Head>
      <title>NEXT TEST - {title}</title>
      <meta content={content} />
    </Head>
  );
}

HeaderInfo.defaultProps = {
  title: "NEXT TEST",
  content: "about nextjs",
};

export default HeaderInfo;
