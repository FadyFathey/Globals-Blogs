import React from "react";
import Heading from "../util/Heading";
import SubTitle from "../util/SubTitle";
import BLogsComp from "../util/BLogsComp";

const AllPostsPage = () => {
  return (
    <section>
      <Heading props={"All Posts"} />
      <SubTitle props={"Lorem ipsum dolor sit amet"} />
      <BLogsComp props={100} />
    </section>
  );
};

export default AllPostsPage;
