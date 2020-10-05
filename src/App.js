import React, { Fragment } from "react";
import Accordion from "./Components/Accordion";
import Ellipsis from "./Components/Ellipsis";
import Avatar from "react-avatar";

const App = () => {
  const styleCenterLeft = {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  };

  return (
    <div>
      <Accordion
        styleTitle={{ display: "grid", gridTemplateColumns: "1fr 15fr 2fr" }}
        title={
          <Fragment>
            <Avatar
              className="avatar"
              size="100"
              round="50px"
              src="https://unsplash.com/photos/jzY0KRJopEI/download?force=true&w=640"
            />
            <div style={styleCenterLeft}>
              <div>Test....Test....Test....</div>
            </div>
            <div style={styleCenterLeft}>
              <Ellipsis width={25} fill="#777" />
            </div>
          </Fragment>
        }
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
    </div>
  );
};

export default App;
