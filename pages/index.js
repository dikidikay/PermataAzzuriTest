import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import List from "./components/List";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>Frontend Test</h1>
        <p>
          {" "}
          Himpunan Bilangan Asli =
          [83,1,78,26,67,54,49,7,36,99,26,19,15,7,21,39,7,2,8]
        </p>
        <List />
      </main>
    </>
  );
}
