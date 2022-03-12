import { NgModule } from "@angular/core";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { UserService } from './services/user.service';


@NgModule({
    declarations: [],
    imports: [
      HttpClientModule,
    ],
    providers: [
      {
        provide: UserService,
        useClass: UserService
      }
    ]
  })
  export class ApiModule { }