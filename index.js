let serialize = target =>
    Array.form(target.elements).reduce((acc, el) => {
        if (!el.name) return acc;
        acc[el.name] = el.value;
        return acc;
    }, {})

class User {
    static #url = 'https://jsonplaceholder.typicode.com/users';
    static #users = [];
    static #ul = document.createElement('ul');
    static #form = document.createElement('form');
    static #initialValues = {
        name: '',
        email: '',
    }

    constructor(data) {
        this.name = data.name;
        this.email = data.email;
    }
    static async getAll() {
        try {
            const response = await fetch(this.#url);
            if (!response.ok) throw response;
            this.#users = await response.json();
            return this.#users;
        } catch (e) {
            console.log('Error', e);
        }
    }

    static renderUser(u) {
        let li = document.createElement('li');
        li.innerText = u.name;
        return li;
    }

    static render() {;
        let users = this.#users;
        users.forEach(u => this.#ul.appendChild(this.renderUser(u)));

        return this.#ul;
    }

    static onSubmit(e){
        
        e.preventDefault();
        let data = serialize(e.target);
        let user = new User(data);
        const errors = user.validate();
    }

    validate() {
        let errors = {};
        if (!this.name) {
            errors.name = "nombre es obligatorio"
        }
        if (!this.email) {
            errors.email = "email es obligatorio"
        }

        return errors;
    }

    static formHTML({ data, errors }) {
        return `
        <form>
            <div>
                <label>Nombre:</label>
                <imput name="name" value="${data.name}" />
                ${errors.name || ''}
            </div>
            <div>
                <label>Correo:</label>
                <imput name="email" value="${data.email}" />
                ${errors.email || ''}
            </div>
            <imput type="submit" valeu="Enviar"/>
        </form> 
        `   
    }

    static renderForm(){
        this.#form.onsubmit = this.onSubmit;
        this.#form.innerHTML = this.formHTML({
            data: this.#initialValues,
            errors: {},
        });

        return this.#form;
    }
}
async function main() {
    const users = await User.getAll();
    const template = User.render();
    const form = User.renderForm();
    document.body.insertAdjacentElement('afterbegin', trmplate);
    document.body.insertAdjacentElement('afterbegin', form);
}

main();