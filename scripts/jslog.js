/**
 * Library for the setting of a new window.onerror
 * which send the log to the specified server
 */
(function (window, undefined) {

  /* check the existence of an other window.onerror */
  var previousOnError = undefined;
  if (window.onerror) {
    console.warn("window.onerror already set");
    previousOnError = window.onerror;
  }

  /**
   * Creation of new xhr into a try catch
   * @param errMessage
   * @param errURL
   * @param line
   * @param col
   * @returns {*}
   */
  function processError(errMessage, errURL, line, col) {
    try {
      var httpRequest = false;
      var errorObject = {
        errMessage : errMessage,
        errURL : errURL,
        line : line,
        col : col
      };

      var sending = JSON.stringify(errorObject);

      /* set a new request */
      if (window.XMLHttpRequest) { // for all browser except IE
        httpRequest = new XMLHttpRequest();
      } else if (window.ActiveXObject) {// IE exception
        httpRequest = new ActiveXObject("Microsot.XMLHTTP");
      }

      if (!httpRequest) { //if not able to create a request
        console.error("Error failed to create new request");
      }

      /* send the request */
      httpRequest.open('POST', onerror.param.url, true);
      httpRequest.setRequestHeader('Content-type', 'application/json');
      httpRequest.send(sending);
    } catch (logginError) {
      console.error("Error logging failed");
      return 1;
    }
    return false;
  }

  /**
   * Definition of window.onerror
   * @param errMessage
   * @param errURL
   * @param line
   * @param col
   * @param errorObject
   * @returns {*}
   */
  window.onerror = function (errMessage, errURL, line, col, errorObject) {

    if (onerror.param.enabled) {
      return processError(errMessage, errURL, line, col);
    }

    if (previousOnError && !__karma__) {
      return previousOnError(errMessage, errURL, line, col, errObject);
    }

    return false;
  };

  window.onerror.previousOnError = previousOnError;

  /* setup params */
  window.onerror.param = {
    url: "http://localhost",
    enabled: false
  };

})(window);

