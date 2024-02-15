import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { EmployeeService } from './service/employee.service';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),provideHttpClient(),
  EmployeeService]
};
