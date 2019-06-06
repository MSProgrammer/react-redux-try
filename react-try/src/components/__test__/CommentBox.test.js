import React from "react";
import { mount } from "enzyme";
import CommentBox from "components/commentBox";

import Root from "Root";
let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <CommentBox />
    </Root>
  );
});

afterEach(() => {
  //   wrapped.unmont();
});

it("Has a text area ", () => {
  //find textarea in react dom
  expect(wrapped.find("textarea").length).toEqual(1);
});

it("Has a Button", () => {
  expect(wrapped.find("button").length).toEqual(2);
});

describe("the text area", () => {
  beforeEach(() => {
    wrapped.find("textarea").simulate("change", {
      target: { value: "New Comment" }
    });
    wrapped.update();
  });

  it("Has a text Area that user can type in ", () => {
    expect(wrapped.find("textarea").prop("value")).toEqual("New Comment");
  });

  it("when form is submitted text area gets emptied", () => {
    wrapped.find("textarea").simulate("change", {
      target: { value: "New Comment" }
    });
    wrapped.update();
    wrapped.find("form").simulate("submit");
    wrapped.update();
    expect(wrapped.find("textarea").prop("value")).toEqual("");
  });
});
