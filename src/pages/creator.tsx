import type { NextPage } from "next";
import Head from "next/head";
import { CreatorView } from "../views";

const Creator: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Solana Scaffold</title>
        <meta
          name="description"
          content="Solana Scaffold"
        />
      </Head>
      <CreatorView />
    </div>
  );
};

export default Creator;
