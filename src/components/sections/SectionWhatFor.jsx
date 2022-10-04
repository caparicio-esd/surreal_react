import classNames from "classnames";
import React from "react";
import Button from "../global/Button/Button";
import {
  section,
  sectionContent,
  whatForContent,
  whatForContentCtas,
  whatForContentFeats,
  whatForContentFeat,
  featBody,
  featHeader,
} from "./SectionWhatFor.module.sass";

const SectionWhatFor = () => {
  return (
    <section className={classNames(section)}>
      <div className={classNames(sectionContent, whatForContent)}>
        <h2>Why use SurrealDB?</h2>
        <p>
          SurrealDB is an innovative NewSQL cloud database, suitable for
          serverless applications, jamstack applications, single-page
          applications, and traditional applications. It is unmatched in its
          versatility and financial value, with the ability for deployment on
          cloud, on-premise, embedded, and edge computing environments. For a
          hassle-free setup, get started with SurrealDB Cloud in one-click.
        </p>
        <div className={whatForContentCtas}>
          <Button type="outlined" size="xl" icon="ArrowRightIcon" shadowed iconRight>
            Jamstack apps
          </Button>
          <Button type="outlined" size="xl" icon="ArrowRightIcon" shadowed iconRight>
            Serverles apps
          </Button>
        </div>
        <div className={whatForContentFeats}>
          <div className={whatForContentFeat}>
            <div className={featHeader}>
              <img src="" alt="" />
              <h3>Develop easier</h3>
            </div>
            <div className={featBody}>
              There is no need for your team to learn new complicated database
              languages. Getting started with SurrealDB is as simple as one
              command - and advanced functionality is simple to understand,
              whilst still being fast and performant.
            </div>
          </div>
          <div className={whatForContentFeat}>
            <div className={featHeader}>
              <img src="" alt="" />
              <h3>Develop easier</h3>
            </div>
            <div className={featBody}>
              There is no need for your team to learn new complicated database
              languages. Getting started with SurrealDB is as simple as one
              command - and advanced functionality is simple to understand,
              whilst still being fast and performant.
            </div>
          </div>
          <div className={whatForContentFeat}>
            <div className={featHeader}>
              <img src="" alt="" />
              <h3>Develop easier</h3>
            </div>
            <div className={featBody}>
              There is no need for your team to learn new complicated database
              languages. Getting started with SurrealDB is as simple as one
              command - and advanced functionality is simple to understand,
              whilst still being fast and performant.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionWhatFor;
