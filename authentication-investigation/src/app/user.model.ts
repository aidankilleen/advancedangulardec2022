export class User {
    
    constructor(public email?:string, 
                public password?: string, 
                public roles?: string[], 
                public iat?: number, 
                public exp?: number) {

    }
}