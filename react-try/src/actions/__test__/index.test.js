import { saveComment } from "actions";
import { SAVE_COMMENT } from "actions/types";

describe("saveComment", () => {
  it("has the Correct type", () => {
    const action = saveComment();
    expect(action.type).toEqual(SAVE_COMMENT);
  });

  it("has the Correct payload", () => {
    const action = saveComment("New Comment");
    expect(action.payload).toEqual("New Comment");
  });
});

describe("fetchComment", () => {
  it("has the Correct type", () => {});

  it("has the Correct payload", () => {});
});
