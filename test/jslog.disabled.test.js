describe("Our error log API, when disabled", function () {

  it("should be installed on window.onerror and be a Function", function () {
    expect(window.onerror).toBeDefined();
    expect(typeof window.onerror === 'function').toBe(true);
  });

  it("should return false to indicate that the error has to be logged into console", function () {
    expect(window.onerror()).toBe(false);
  });

  it("should override previous onError", function () {
    expect(window.onerror.previousOnError).toBeDefined();
  });

  it("should have a param object to set options", function () {
    expect(window.onerror.param).toBeDefined();
  });
});