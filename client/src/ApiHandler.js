

class ApiHandler{
    static makeCall(object, urls, type) {
        var url = "http://localhost:3000"+ urls;
        console.log(url);
        console.log(type);
        console.log(object);
        var results;

        if (type === 'GET') {
            return fetch(url , {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            })
            .then((resp) => resp.json())
            .then((data) =>  console.log(data))
            .catch(function(error) {
                console.log(error);
            });
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
