class Person {
    #name= 'rayhan'
    constructor() {
        console.log('calling...')
    }
    print() {
        console.log(this.#name);
    }
    /**
     * @param {string} name
     */
    set name(name) {
        try {
            this.#name = this.#sanityCheck(name)
        } catch (error) {
            console.log(error.message)
        }
    }
    get name() {
        return this.#name
    }
    #sanityCheck(props) {
        if (typeof props === 'string') {
            return props.trim().toLowerCase()
        } else {
            throw new Error('Please provide a valid name')
        }

    }
}

const p = new Person()
p.print()

p.name = "            tawhid     "
console.log(p.name)