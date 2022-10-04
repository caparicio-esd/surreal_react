import React from "react";
import Button from "./../global/Button/Button";
import heroStyles from "./Hero.module.sass";

const Hero = () => {
  return (
    <div className={heroStyles.hero}>
      <div className={heroStyles.heroContent}>
        <div className={heroStyles.heroLeft}>
          <h1>
            SurrealDB is the <span className="gradient">ultimate</span> cloud <span className="gradient">database</span> for tomorrow's applications
          </h1>
          <h2>Develop easier.Build faster.Scale quicker.</h2>
          <p>
            Develop easier.Build faster.Scale quicker. With an SQL-style query
            language, real-time queries with highly-efficient related data
            retrieval, advanced security permissions for multi-tenant access,
            and support for performant analytical workloads, SurrealDB is the
            next generation serverless database.
          </p>
          <div className="ctas flex gap-4">
            <Button
              icon="CloudArrowDownIcon"
              size="xl"
              type="outlined"
              shadowed
            >
              Install
            </Button>
            <Button icon="DocumentTextIcon" size="xl" type="outlined" shadowed>
              Documentation
            </Button>
            <Button size="xl" type="primary" shadowed>
              Join cloud waitlist
            </Button>
          </div>
        </div>
        <div className={heroStyles.heroPicture}>
          <img src="/images/hero_logo.png" alt="hero_logo" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
