describe("Our error log API, when enabled", function () {

  it("should handled the error correctly", function () {
    window.onerror.param.enabled = true;


    window.XMLHttpRequest = function () {
    };
    window.XMLHttpRequest.prototype.open = function (method, url, async, user, password) {
      expect(method).toBe('POST');
    };
    window.XMLHttpRequest.prototype.setRequestHeader = function (header, value) {
      expect(header).toBe('Content-type');
    };
    window.XMLHttpRequest.prototype.send = function (method, url, async, user, password) {
      //TODO
    };

    window.onerror('Error message', 'URL of the script where the error was raised', 0, 0, {});
  });

});