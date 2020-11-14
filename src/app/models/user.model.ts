export class User {
    constructor(public firstName: string,
                public lastName: string,
                public email: string,
                public boissonPreferer: string,
                public hobbies ?: string[] ){}
}
