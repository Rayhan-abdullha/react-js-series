function fetchData(callback) {
    setTimeout(() => {
        callback("Data received");
    }, 1000);
}

fetchData((result) => {
    console.log(result);
});

console.log("Hello, world!");