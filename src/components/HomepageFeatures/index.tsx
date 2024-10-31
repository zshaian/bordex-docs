import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Most of the time it Works",
    description: (
      <>
        Generate stylish borders with a single function call! Most of the time
        they look great, but sometimes they play hard to get. Embrace the
        unpredictability!
      </>
    ),
  },
  {
    title: "Customizable with Limits",
    description: (
      <>
        Adjust your borders with a variety of settings, just be careful what you
        pass in! The wrong choice might lead to unexpected surprises.
      </>
    ),
  },
  {
    title: "Lots of Bugs",
    description: (
      <>
        This library has its fair share of lovable bugs! While it’s working
        sometimes, expect some quirks as improvements are made. Your patience is
        appreciated!
      </>
    ),
  },
];

function Feature({ title, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div
        style={{
          backgroundColor: "#960096",
          borderRadius:'30px',
          padding: "0.2rem 0rem",
          margin: "1.5rem 0rem",
        }}
      ></div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
