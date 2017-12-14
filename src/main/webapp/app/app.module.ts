import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ngx-webstorage';

import { JhipsterBfpocSharedModule, UserRouteAccessService } from './shared';
import { JhipsterBfpocAppRoutingModule} from './app-routing.module';
import { JhipsterBfpocHomeModule } from './home/home.module';
import { JhipsterBfpocAdminModule } from './admin/admin.module';
import { JhipsterBfpocAccountModule } from './account/account.module';
import { JhipsterBfpocEntityModule } from './entities/entity.module';
import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

// jhipster-needle-angular-add-module-import JHipster will add new module here

import {
    JhiMainComponent,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ErrorComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        JhipsterBfpocAppRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        JhipsterBfpocSharedModule,
        JhipsterBfpocHomeModule,
        JhipsterBfpocAdminModule,
        JhipsterBfpocAccountModule,
        JhipsterBfpocEntityModule,
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        FooterComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class JhipsterBfpocAppModule {}
