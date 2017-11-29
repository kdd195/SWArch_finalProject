

class ApiHandler{
    static makeCall(object, urls, type) {
        var url = "http://35.196.7.68:3000"+ urls;
        console.log(url);
        console.log(type);
        var results;

        if (type === 'GET') {
            return fetch(url , {
                method: 'GET',
                headers: {
                    'Origin': 'http://35.196.7.68',
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
                // body: JSON.stringify(object)
            })
            // .then((resp) => resp.text())
            // .then(json => {
            //     console.log(json);
            // })
            // .then(function(data) {
            //     results = data;
            // })
            .then(function(response) {
                return response.json();
            })
            .then(function(json){
                results = json;
            })


            // .then((response) => response.json())
            // .then((responseJson) => {
            //      return responseJson;
            // })
        }
        if (type === 'POST') {
            return fetch(url , {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(object)
            })
            .then((response) => response.json())
            .then((responseJson) => {
                 return responseJson;
             })
        }
        return results
    }


}
export default ApiHandler;
