var $ = require('jquery')
// $.ajaxSetup({
//     async: false
//   });

class ApiHandler{
    static makeCall(object, urls, type) {
        // sends a request to the dpla api and returns a list of json objects
        // example call: ApiWrapper.makeCall({language:"english"})
        // date should be YYYY-MM-DD
        var url = "35.196.7.68:3000"+ urls;
        var results;

        if (type === 'get') {
            fetch(url , {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    firstParam: 'yourValue',
                    secondParam: 'yourOtherValue',
                })
            })
        }
        return results
    }


}
export default ApiWrapper;
