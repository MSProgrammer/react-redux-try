import React from "react";
import { mount } from "enzyme";
import Root from "Root";
import App from "components/App";
import moxios from "moxios";

beforeEach(() => {
  moxios.install();
  moxios.stubRequest("http://jsonplaceholder.typicode.com/comments", {
    status: 200,
    response: [{ name: "Fetched #1" }, { name: "Fetched #2" }]
  });
});

afterEach(() => {
  moxios.uninstall();
});
it("can fetch a list of Comment and Display them ", done => {
  //Attempt to render the *enire *App
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  );
  //Find the 'fetch Comment' button and Click it
  wrapped.find(".fetch-comments").simulate("click");
  //Expect to find a list of Comments!

  moxios.wait(() => {
    wrapped.update();
    expect(wrapped.find("li").length).toEqual(2);
    done();
  });
  //   expect(wrapped.find("li").length).toEqual(2);
});
