import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Weiqi offers an effortlessly enjoyable experience with its easy-to-use 
        interface, making it perfect for both beginners and experienced players. 
        The game’s simple design ensures a smooth and intuitive experience, 
        allowing you to focus on strategy and fun without the need for complicated setup.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Weiqi lets you focus on what truly matters — the strategy and depth of the game. 
        With its streamlined interface and intuitive design, you can fully immerse yourself 
        in the game, free from distractions and unnecessary complexity.
      </>
    ),
  },
  {
    title: 'Optimized for Performance',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Weiqi is designed with performance in mind, ensuring a fast and responsive experience. 
        Whether you're navigating through complex strategies or enjoying a smooth game flow, 
        the optimized performance lets you focus on what matters, without lag or delays.
      </>
    ),
  }
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
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
