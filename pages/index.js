import Head from "next/head";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Main() {
  return (
    <>
      <Head>
        <title>Create Next APP</title>
        <meta name="description" content="generate by creact next app" />
        <meta name="viewport" content="width-device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <p>Content</p>
      <Footer />
    </>
  )
}