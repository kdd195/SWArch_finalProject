import qs from 'qs';

class ApiHandler{
    static makeCall(object, urls, type) {
        var url = "http://localhost:3000"+ urls;
        console.log('********API CALL*********')
        console.log(type);
        console.log(url);
        console.log(object);
        console.log('********API CALL*********')
        var results;
        var array = [];

        if (type === 'GET') {
            results = fetch(url , {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            })
            .then((resp) => {return resp.json();})
            .then((data) => {array = data.slice(); console.log(data)})
            .catch(function(error) {
                console.log(error);
            });
        }

        if (type === 'POST') {
            return fetch(url , {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/x-www-form-urlencoded ',
                },
                body: qs.stringify(object)
            })
            .then((resp) => resp.json())
            .then((data) =>  console.log(data))
            .catch(function(error) {
                console.log(error);
            });
        }

        if (type === 'PUT') {
            return fetch(url , {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/x-www-form-urlencoded ',
                },
                body: qs.stringify(object)
            })
            .then((resp) => resp.json())
            .then((data) =>  console.log(data))
            .catch(function(error) {
                console.log(error);
            });
        }

        if (type === 'DELETE') {
            return fetch(url , {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(object)
            })
            .then((resp) => resp.json())
            .then((data) =>  console.log(data))
            .catch(function(error) {
                console.log(error);
            });
        }
        console.log('made it here')
        console.log(array)
        return array

    }


}
export default ApiHandler;
