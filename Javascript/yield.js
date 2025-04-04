function* test() {
    let rand = Math.ceil(Math.random() * 100)
    while (true) {
        yield rand
    }
}
const genObj = test();

function createUser(name, email) {
    return {
        id: genObj.next().value,
        name,
        email
    }
}
function response({code, msg, data}) {
    console.log({
        code,
        msg,
        data
    })
}

function controller(req, _res = {}) {
    const { name, email } = req.body
    try {
        if (name | email) {
            throw new Error('Credential Error')
        }
        const res = createUser(name, email)
        response({
            code: 201,
            msg: 'user is created',
            data: res
        })
    } catch (err) {
        console.log(err.message)
    }
}
controller({
    body: {
        name: 'Rayhan',
        email: "rayhan@gmail.com"
    }
})
controller({
    body: {
        name: 'Rayhan',
        email: "rayhan@gmail.com"
}})
controller({
    body: {
        name: 'Rayhan',
        email: "rayhan@gmail.com"
    }
})
controller({
    body: {
        name: 'Rayhan',
        email: "rayhan@gmail.com"
}})