import { Config } from './config';

export class ConfigPro extends Config {
    constructor() { super('PRODUCTION'); }
    readonly omdbApiBaseUrl = 'https://www.omdbapi.com';
}