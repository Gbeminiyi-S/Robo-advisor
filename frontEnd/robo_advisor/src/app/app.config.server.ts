import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuardService } from './services/auth_guard/auth-guard.service';
import { AuthService } from './services/auth/auth.service';
import { AuthInterceptor } from './services/auth_interceptor/auth.interceptor';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    HttpClientModule,
    AuthGuardService,
    AuthService,
    AuthInterceptor
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
