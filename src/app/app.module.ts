import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { LayoutModule } from './views/layout/layout.module';
import { AuthGuard } from './core/guard/auth.guard';

import { AppComponent } from './app.component';
import { ErrorPageComponent } from './views/pages/error-page/error-page.component';

import { HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { AuthenticationService } from './core/services/authentication.service';
import { UserSessionService } from './core/services/usersession.service';
import { DataService } from './core/services/data.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AlertService } from './core/services/alert.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpInterceptorService } from './core/services/interceptor.service';
import { ComponentsModule } from './views/component/components.module';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { NoAccessComponent } from './views/pages/no-access/no-access.component';
import { HomeComponent } from './views/pages/home/home.component';
import { LevelComponent } from './views/pages/level/level.component';


@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent,
    NoAccessComponent,
    HomeComponent,
    LevelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    HttpClientModule,
    ComponentsModule,
    NgHttpLoaderModule.forRoot(),
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: "toast-top-right",
      preventDuplicates: true,
    }),
    ReactiveFormsModule,
    FormsModule,

  ],

  providers: [
    AuthGuard,
    AuthenticationService,
    UserSessionService,
    DataService,
    ToastrService,AlertService,

    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true,
    },
    // {
    //   provide: HIGHLIGHT_OPTIONS, // https://www.npmjs.com/package/ngx-highlightjs
    //   useValue: {
    //     coreLibraryLoader: () => import('highlight.js/lib/core'),
    //     languages: {
    //       xml: () => import('highlight.js/lib/languages/xml'),
    //       typescript: () => import('highlight.js/lib/languages/typescript'),
    //       scss: () => import('highlight.js/lib/languages/scss'),
    //     }
    //   }
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
