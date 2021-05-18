import isValidSearch from "components/Routes/QueryRoute/isValidSearch";

describe("isValidSearch", () => {
  it("should be true when search keys is empty", () => {
    const search = "?search_1=1&search_2=2";
    expect(isValidSearch(search)).toBeTruthy();
  });

  it("should be true when search keys is valid", () => {
    const search = "?search_1=1&search_2=2";
    expect(isValidSearch(search, ["search_1", "search_2"])).toBeTruthy();
  });

  it("should be false when search keys is invalid", () => {
    const search = "?search_1=1";
    expect(isValidSearch(search, ["search_1", "search_2"])).toBeFalsy();
  });
});
