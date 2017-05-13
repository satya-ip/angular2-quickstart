import { Component } from '@angular/core';

@Component({
    selector: 'user',
    template: `<h1>
    Hello {{name}}
    <p><strong>Email:</strong> {{email}}</p>
    <p><strong>Address:</strong>{{address.stree}} {{address.city}} {{address.state}}</h1>`,
})
export class UserComponent {
    name : string;
    email : string;
    address : address;

    constructor() {
        this.name = 'John Doe';
        this.email = 'john@gmail.com';
        this.address = {
            street: '12 main street',
            city: 'New York',
            state: 'NY'
        }
    }

}

interface address {
    street : string;
    city : string;
    state : string;
}