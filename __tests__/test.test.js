import React from "react";
import {shallow} from "enzyme";
import renderer from "react-test-renderer";

import App from "../pages/test";

describe("With Enzyme", () => {
  it('App shows "Hello World!"', () => {
    const app = shallow(<App />);

    expect(app.find("p").text()).toEqual("Hello World!");
  });
});

describe("With Snapshot Testing", () => {
  it('App shows "Hello world!"', () => {
    const component = renderer.create(<App />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
