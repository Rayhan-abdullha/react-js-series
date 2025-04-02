const fetchUser = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            id: 1,
            name: "Rayhan Abdullah"
        })
    }, 2000);
});
// fetchUser.then(user => console.log(user));
const fetchPosts = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([
            {
                id: 1,
                author: "Rayhan Abdullah",
                title: "JavaScript is a programming language used to create interactive effects within web browsers."
            }
        ])
    }, 1000);
})
fetchPosts.then(posts => {
    console.log(posts)
});


if (true) {
    var a = 10
}
console.log(a)
console.log("loading...")
