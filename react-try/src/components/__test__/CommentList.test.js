import React from "react";
import { mount } from "enzyme";
import CommentList from "components/CommentList";

import Root from "root";

let wrapped;

beforeEach(() => {
  const initialState = {
    comments: ["Comment 1", "Comment 2"]
  };

  wrapped = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  );
});

it("creates one LI per Comment", () => {
  expect(wrapped.find("li").length).toEqual(2);
});

it("Shows the Text in each Comment", () => {
  console.log(wrapped.render().text());
  // expect(wrapped.render().text()).toEqual(
  //   "Add A CommentSubmit CommentComment 1Comment 2"
  // );
  // expect(wrapped.render().text()).toEqual("Comment 2");
});
