function normal() {
    console.log(this);
}
normal();
const arrow = () => {
    console.log(this);
}
arrow()