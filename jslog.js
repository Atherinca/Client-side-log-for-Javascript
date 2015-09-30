/**
 * Created by alexandre on 28/09/15.
 */

(function(window,undefined){

    window.server = undefined;

    window.onerror = function(errMessage, errURL, line, col){
        try {
            var httpRequest = false;
            var sending = 'Err : ' + errMessage + ' at ' + errURL + ' in line ' + line +
                ':' + col;

            if (window.XMLHttpRequest){
                httpRequest = new XMLHttpRequest();
            }
            else if (window.ActiveXObject){
                httpRequest = new ActiveXObject("Microsot.XMLHTTP");
            }
            if(!httpRequest){
                console.log("Erreur impossible de créer une requête!");
                return false;
            }
            httpRequest.open('POST', window.server, true);
            httpRequest.setRequestHeader('Content-type', 'application/x-form-urlencoded');
            httpRequest.send(sending);
        } catch ( logginError) {
            console.log( "Error logging failed" );
        }
        return false;
    };
}(window));