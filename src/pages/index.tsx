import type { NextPage } from "next";
import Head from "next/head";

import Header from "../components/Navbar";
import { Text, Spacer, Image } from "@nextui-org/react";
import { Box } from "../components/Box";
import { Layout } from "../components/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Certificado</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div>
          <Header />

          <Box css={{ px: "$12", mt: "$8", "@xsMax": { px: "$10" } }}>
            <Image
              width={1480}
              src="/curricle_page_1.svg"
              alt="Default Image"
            />
            <Spacer y={1} />

           
          </Box>
        </div>
      </main>
    </Layout>
  );
};

export default Home;
