/**
 * Created by alexandre on 28/09/15.
 */
(function(window, undefined){

        /* check the existance of an other window.onerror */

        if (window.onerror){
            console.log("Error window.onerror ever setting");
            return false;
        }

        /* definition of window.onerror */
        window.onerror = function(errMessage, errURL, line, col){
            try {
                var httpRequest = false;
                var sending = 'Err : ' + errMessage + ' at ' + errURL + ' in line ' + line +
                    ':' + col;


                /* set a new request */

                if (window.XMLHttpRequest){ // for all browser except IE
                    httpRequest = new XMLHttpRequest();
                }
                else if (window.ActiveXObject){// IE exception
                    httpRequest = new ActiveXObject("Microsot.XMLHTTP");
                }

                if(!httpRequest){ //if not able to create a request
                    console.log("Error failed to create new request");
                    return false;
                }

                /* send the request */

                httpRequest.open('POST', onerror.param.url, true);
                httpRequest.setRequestHeader('Content-type', 'application/x-form-urlencoded');
                httpRequest.send(sending);
            } catch ( logginError) {
                console.log( "Error logging failed" );
            }
            return false;
        };

        /* setup params */
        window.onerror.param = {
            url : "http://localhost:80",
            loaded : true
        };
})(window);
