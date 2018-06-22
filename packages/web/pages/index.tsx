import * as React from "react";
import { Button } from "javascript-af-ui";
import Layout from "../components/Layouts";

const Index: React.SFC<{}> = () => {
  return (
    <Layout>
      <Button varient={"inverted"}>Hello World</Button>;
    </Layout>
  );
};

export default Index;
