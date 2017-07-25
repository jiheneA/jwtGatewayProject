import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { JwtgatewayHelloJhipsterModule } from './hello-jhipster/hello-jhipster.module';
import { JwtgatewayRegionMySuffixModule } from './region/region-my-suffix.module';
import { JwtgatewayCountryMySuffixModule } from './country/country-my-suffix.module';
import { JwtgatewayLocationMySuffixModule } from './location/location-my-suffix.module';
import { JwtgatewayDepartmentMySuffixModule } from './department/department-my-suffix.module';
import { JwtgatewayTaskMySuffixModule } from './task/task-my-suffix.module';
import { JwtgatewayEmployeeMySuffixModule } from './employee/employee-my-suffix.module';
import { JwtgatewayJobMySuffixModule } from './job/job-my-suffix.module';
import { JwtgatewayJobHistoryMySuffixModule } from './job-history/job-history-my-suffix.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        JwtgatewayHelloJhipsterModule,
        JwtgatewayRegionMySuffixModule,
        JwtgatewayCountryMySuffixModule,
        JwtgatewayLocationMySuffixModule,
        JwtgatewayDepartmentMySuffixModule,
        JwtgatewayTaskMySuffixModule,
        JwtgatewayEmployeeMySuffixModule,
        JwtgatewayJobMySuffixModule,
        JwtgatewayJobHistoryMySuffixModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JwtgatewayEntityModule {}
