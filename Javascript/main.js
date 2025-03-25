function getUserData(callback) {
    setTimeout(() => {
        callback(null, { id: 10, name: "Rayhan Abdullah" });
    }, 2000);
}

getUserData((error, data) => {
    if (error) {
        console.log("Error:", error);
    } else {
        console.log("User Data:", data);
    }
});

// using promise
function getUserData1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ id: 1, name: "Rayhan Abdullah" });
        }, 1000);
    });
}

getUserData1()
    .then((data) => console.log("User Data:", data))
    .catch((error) => console.log("Error:", error));

// using async await
function getUserData2() {
    throw new Error("Something went wrong");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ id: 111, name: "Rayhan Abdullah" });
        }, 3000);
    });
}

async function fetchData2() {
    try {
        const data = await getUserData2();
        console.log("User Data:", data);
    } catch (error) {
        console.log("Error:", error.message);
    }
}

fetchData2();
