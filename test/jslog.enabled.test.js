describe("Our error log API, when enabled", function () {

  it("should handled the error correctly", function () {
    window.onerror.param.enabled = true;

    window.XMLHttpRequest = function () {
    };

    window.ActiveXObject = function() {
    };

    window.ActiveXObject.prototype.open = function (method, url, async) {
      expect(method).toBe('POST');
      expect(typeof url).toBe('string');
      expect(async).toBe(true);
      console.log("open success!");
    };

    window.ActiveXObject.prototype.setRequestHeader = function (header, value) {
      expect(header).toBe('Content-type');
      expect(value).toBe('application/x-form-urlencoded');
      console.log('setRequestHeader success!');
    };

    window.ActiveXObject.prototype.send = function (string) {
      expect(typeof string).toBe('string');
      console.log("send success!");
    };

    window.XMLHttpRequest.prototype.open = function (method, url, async) {
      expect(method).toBe('POST');
      expect(typeof url).toBe('string');
      expect(async).toBe(true);
      console.log("open success!");
    };

    window.XMLHttpRequest.prototype.setRequestHeader = function (header, value) {
      expect(header).toBe('Content-type');
      expect(value).toBe('application/x-form-urlencoded');
      console.log('setRequestHeader success!');
    };

    window.XMLHttpRequest.prototype.send = function (string) {
      expect(typeof string).toBe('string');
      console.log("send success!");
    };

    window.onerror('Error message', 'URL of the script where the error was raised', 0, 0, {});
  });

});