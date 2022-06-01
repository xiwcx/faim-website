import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <Head>
        <title>Faim</title>
      </Head>
      <header>
        <h1>Faim</h1>
      </header>
      <main>
        <img src="https://c.tenor.com/nPxAn9NBqfIAAAAC/beavis-computer.gif" />
        <p>work in progress</p>
      </main>
    </div>
  );
};

export default Home;
