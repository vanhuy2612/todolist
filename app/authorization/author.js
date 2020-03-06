'use strict'

class Author {
    secretKey = uuid.v4();// fix cung
    payload;
    tokens;
    constructor(payload){
        this.payload = payload;
    }

    async generateTokens(){

    }
}