import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuardService } from './services/auth_guard/auth-guard.service';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    HttpClientModule,
    AuthGuardService,
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
