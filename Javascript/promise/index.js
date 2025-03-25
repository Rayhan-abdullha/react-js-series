function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data received");
        }, 1000);
    });
}

fetchData()
    .then((result) => console.log(result))  // Handle success
    .catch((error) => console.log(error)); // Handle error

console.log("Hello, world!");