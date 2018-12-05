import { Injectable } from '@angular/core';
import {RuntimeConfigService} from "./runtime-config";
import {environment} from "../../environments/environment";

@Injectable()
export class EnvVariablesService {
    public environment: any;

    constructor(private runtimeConfig: RuntimeConfigService) {

    }

    setupEnvironment() {
        return this.runtimeConfig.$config.then(() => {
            this.environment = environment.runtime;
            console.log(this.environment);
        });
    }
}
