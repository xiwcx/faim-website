import { D, pipe } from "@mobily/ts-belt";
import type { NextPage } from "next";
import LayoutDefault from "../../components/layout-default/layout-default";
import { rawVars, styleVars } from "../../utils/styles/index.css";
import { style } from "../../utils/styles/global.css";

const colorSwatches = pipe(
  D.mapWithKey(styleVars.color, (key, value) => (
    <div className={style.colorSwatchContainer} key={key}>
      <span
        className={style.colorSwatch}
        style={{ backgroundColor: value }}
      ></span>
      <p>{key}</p>
      <p>{rawVars.color[key]}</p>
    </div>
  )),
  D.values
);

const Styleguide: NextPage = () => {
  return (
    <LayoutDefault>
      <h1>Styleguide</h1>

      <section>
        <h2>Colors</h2>

        {colorSwatches}
      </section>
    </LayoutDefault>
  );
};

export default Styleguide;
