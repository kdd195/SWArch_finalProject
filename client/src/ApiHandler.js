

class ApiHandler{
    static makeCall(object, urls, type) {
        var url = "35.196.7.68:3000"+ urls;
        var results;

        if (type === 'GET') {
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
