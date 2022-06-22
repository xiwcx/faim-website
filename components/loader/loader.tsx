import { styleVars } from "../../utils/styles/index.css";
import * as styles from "./loader.css";

const totalDuration = 0.6 as const;
const singleDuration = totalDuration / 3;

export const Loader = () => (
  <div className={styles.container}>
    <svg
      className={styles.loader}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 30"
    >
      <rect x="0" y="0" width="4" height="10" fill={styleVars.color.yellow}>
        <animateTransform
          attributeType="xml"
          attributeName="transform"
          type="translate"
          values="0 0; 0 20; 0 0"
          begin="0"
          dur={`${totalDuration}s`}
          repeatCount="indefinite"
        />
      </rect>
      <rect x="10" y="0" width="4" height="10" fill={styleVars.color.yellow}>
        <animateTransform
          attributeType="xml"
          attributeName="transform"
          type="translate"
          values="0 0; 0 20; 0 0"
          begin={`${singleDuration}s`}
          dur={`${totalDuration}s`}
          repeatCount="indefinite"
        />
      </rect>
      <rect x="20" y="0" width="4" height="10" fill={styleVars.color.yellow}>
        <animateTransform
          attributeType="xml"
          attributeName="transform"
          type="translate"
          values="0 0; 0 20; 0 0"
          begin={`${singleDuration * 2}s`}
          dur={`${totalDuration}s`}
          repeatCount="indefinite"
        />
      </rect>
    </svg>
  </div>
);
