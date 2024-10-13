import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { ServicesComponent } from './app/services/services.component';
import { SpecialtiesComponent } from './app/specialties/specialties.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

bootstrapApplication(ServicesComponent, appConfig)
  .catch((err) => console.error(err));

bootstrapApplication(SpecialtiesComponent, appConfig)
  .catch((err) => console.error(err));