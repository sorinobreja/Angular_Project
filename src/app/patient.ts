export class Patient {
    familyName: string;
    givenName: string;
    dateOfBirth: string;
    gender: string;
    cnp: string;
    phoneNumber: string;
    orderNumber: number
    constructor(
         values: Object = {}
    ) { Object.assign(this, values); }
}
