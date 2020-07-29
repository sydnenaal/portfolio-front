import Head from "next/head";
import { useRef } from "react";

import styles from "./style.module.sass";
import { FirstSection, Footer, ProjectsSection } from "components";

const Home: React.FC = () => {
  const projectsRef = useRef<HTMLHeadingElement>();

  return (
    <>
      <Head>
        <title>Home page</title>
        <link
          rel="stylesheet"
          type="text/css"
          href="/assets/fonts/Gilroy/stylesheet.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        ></link>
      </Head>
      <div className={styles.main}>
        <FirstSection
          bottomSectionRef={projectsRef}
          backgroundTitle="Case Studies"
          forwardTitle="Insight into thoughtful and thoroughful process behind great
          results"
        />
        <ProjectsSection reference={projectsRef} />
        <Footer />
      </div>
    </>
  );
};

export default Home;
