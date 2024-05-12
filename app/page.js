import Head from "next/head";
import Hero from "./components/Hero";
import Services from "./components/Services";

const page = () => {
  return (
    <>
      <Head>
        <title></title>
        <meta name="description" content="" />
      </Head>
      <Hero />
      <Services />
    </>
  );
};

export default page;
