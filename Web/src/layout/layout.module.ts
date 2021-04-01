import { NgModule } from '@angular/core';

import { MaterialModule } from 'core/material.module';
import { SharedModule } from 'core/shared.module';
import { NgFormsModule } from 'core/ng.forms.module';
import { CoreModule } from 'core/core.module';
import { ConfigModule } from 'config/config.module';
import { AppFormsModule } from 'forms/forms.module';
import { ServicesModule } from 'services/services.module';

import { MainComponent } from './main/main.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { NavSearchComponent } from './nav-search/nav-search.component';
import { BackDropComponent } from './back-drop/back-drop.component';
import { PageContentComponent } from './page-content/page-content.component';
import { CloudsComponent } from './clouds/clouds.component';

@NgModule({
  imports: [
    MaterialModule,
    SharedModule,
    NgFormsModule,
    CoreModule,
    ConfigModule,
    AppFormsModule,
    ServicesModule
  ],
  declarations: [
    MainComponent,
    NavComponent,
    HeaderComponent,
    SideNavComponent,
    NavSearchComponent,
    BackDropComponent,
    PageContentComponent,
    CloudsComponent
  ],
  exports: [
    MainComponent
  ]
})
export class LayoutModule {}
