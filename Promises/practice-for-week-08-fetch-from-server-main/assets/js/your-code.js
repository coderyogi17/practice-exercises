export function getAllDogs() {
    // Your code here
  
    const url = "/dogs";
    return fetch(url);
  }
  
  export function getDogNumberTwo() {
    // Your code here
  
    const url = "/dogs/2";
    return fetch(url);
  }
  
  export function postNewDog() {
    // Your code here
  
    const url = "/dogs";
    const method = "POST";
    const headers = {
      "Content-Type": "application/x-www-form-urlencoded",
    };
  
    const body = new URLSearchParams({
      name: "SODA MAN",
      age: 100,
    });
    const options = {
      method: method,
      headers: headers,
      body: body,
    };
  
    return fetch(url, options);
  }
  
  export function postNewDogV2(name, age) {
    // Your code here
    const url = "/dogs";
    const method = "POST";
    const headers = {
      "Content-Type": "application/x-www-form-urlencoded",
    };
  
    const body = new URLSearchParams({
      name: name,
      age: age,
    });
    const options = {
      method: method,
      headers: headers,
      body: body,
    };
  
    return fetch(url, options);
  }
  
  export function deleteDog(id) {
    // Your code here
      // Your code here
      const url = `/dogs/${id}/delete`;
      const method = "POST";
      const headers = {
        "AUTH":"ckyut5wau0000jyv5bsrud90y"
      };
  
      const options = {
        method: method,
        headers: headers,
      };
    
      return fetch(url, options);
  }