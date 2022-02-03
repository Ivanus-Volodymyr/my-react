import {IUser} from "../interfaces/user.interfaces";

const user: IUser = {age: 20}


function incAge(user: IUser, inc: number): IUser {
    user.age += inc
    return user
}


function sum(a: number, b: number): number {
    return a + b;
}

function showSum(a: number, b: number): void {
    console.log(a + b);
}

console.log(sum(1, 5));
showSum(12, 44)
console.log(incAge(user, 3));

