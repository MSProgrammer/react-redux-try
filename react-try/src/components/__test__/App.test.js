import React from "react";
// import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import App from "../app";
import CommentBox from "components/commentBox";
import CommentList from "components/commentList";
let wrapped;

beforeEach(() => {
  wrapped = shallow(<App />);
});

it(" The App , Shows a Comment Box", () => {
  expect(wrapped.find(CommentBox).length).toEqual(1);
  // console.log(wrapped);

  //   const div = document.createElement("div");

  //   ReactDOM.render(<App />, div);

  //   // Looks inside the div
  //   //And Check to see if the CommentBox is in there

  //   //   expect(div.innerHTML).toContain("Comment Box");
  //   expect(div).toHaveAnInstanceOf("CommentBox");
  //   ReactDOM.unmountComponentAtNode(div);
});
it("The App CommentList", () => {
  expect(wrapped.find(CommentList).length).toEqual(1);
});
