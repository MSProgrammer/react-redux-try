import commentsReducer from "reducers/comments";
import { SAVE_COMMENT } from "actions/types";

it("handels actions of type SAVE_COMMENT", () => {
  const action = {
    type: SAVE_COMMENT,
    payload: "News Comment"
  };
  const newState = commentsReducer([], action);
  expect(newState).toEqual(["News Comment"]);
});

it("handels actions with unknow type ", () => {
  const newState = commentsReducer([], { type: "save_suhun" });
  expect(newState).toEqual([]);
});
