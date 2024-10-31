import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading
          as="h1"
          className={clsx("hero__title header-title", styles["header-title"])}
        >
          {siteConfig.title}
        </Heading>
        <p className={clsx("hero__subtitle", styles["header-description"])}>
          Add <span className={clsx(styles["tagline"])}>Stylish Borders</span>{" "}
          with Ease
        </p>
        <div className={styles.buttons}>
          <Link
            className={clsx(
              "button button--secondary button--lg",
              styles["quick-start-button"]
            )}
            to="/docs/intro"
          >
            Quick Start
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
