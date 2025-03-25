function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data received");
        }, 1000);
    });
}

async function getData() {
    try {
        const result = await fetchData();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

getData();  

console.log("Hello, world!");
