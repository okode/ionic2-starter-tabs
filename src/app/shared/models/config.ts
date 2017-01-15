export class Config {
    readonly name: string;
    constructor(name: string) {
        this.name = name;
    }
    readonly omdbApiBaseUrl = 'http://www.omdbapi.com';
}