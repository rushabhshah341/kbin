import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class RuntimeConfigService {
    private environment: any;
    $config: Promise<any>
    $resolve: Function
    $reject: Function
    constructor(private http: HttpClient) {
        this.$config = new Promise<any>((resolve, reject) => {
            this.$resolve = resolve;
            this.$reject = reject;
        });
    }

    public setEnvironment(environment: any) {
        this.environment = environment;
    }

    /**
     * We need to retrieve our suffix from the current URL. We don't have access to TARGET environment variable and
     * we need this URL to retrieve the $config...
     */
    private getSuffix() {
        if (this.environment.production) {
            if (this.environment.subDomain) {
                const idx = window.location.hostname.indexOf(this.environment.subDomain);
                if (idx !== -1) {
                    return window.location.hostname.substring(
                        idx + this.environment.subDomain.length,
                        window.location.hostname.indexOf(
                            '.',
                            idx + this.environment.subDomain.length
                        )
                    );
                }
            }
            return "";
        }
        else {
            return 'dev';
        }
    }
    getConfig(field: string = "") {
        if (this.environment.production) {
            let suffix = this.getSuffix();
            let headers = new HttpHeaders({
                'Content-Type': 'application/json',
                'X-Api-Version': this.environment.apiVersion
            });
            let url = `https://${this.environment.subDomain}${suffix}.albany.edu/$config`;
            if (field) {
                url += `/${field}`;
            }
            return this.http.get<Object>(url, { headers: headers });
        }
        else {
            return Observable.create(obs => {
                obs.next(this.environment.runtime);
            });
        }
    }
}
