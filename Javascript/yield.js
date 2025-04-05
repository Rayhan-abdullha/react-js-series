function genRandom() {
    let rand = 0
    return function* () {
        while (true) {
            let rand1 = Math.ceil(Math.random() * 10)
            while (rand === rand1) {
                rand1 = Math.ceil(Math.random() * 10)
            }
            rand = rand1
            yield rand1
        }
    }
}

const randomId = genRandom()
const id = randomId().next().value

function createUser(name, email) {
    return {
        id,
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
        if (!name | !email) {
            throw new Error('Credential Error')
        } else {
            const res = createUser(name, email)
            response({
                code: 201,
                msg: 'user is created',
                data: res
            })
        }
      
    } catch (err) {
        console.log({
            code: 400,
            msg: err.message
        })
    }
}
controller({
    body: {
        email: "rayhan@gmail.com"
    }
})
controller({
    body: {
        name: 'Nazim',
        email: "nazim@gmail.com"
}})
controller({
    body: {
        name: 'abir',
        email: "abir@gmail.com"
    }
})