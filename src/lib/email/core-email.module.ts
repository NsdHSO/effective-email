import {ModuleWithProviders, NgModule, Optional, SkipSelf} from "@angular/core";
import {EmailModule} from "./email.module";

@NgModule({})
export class CoreEmailModule {
  static forRoot() : ModuleWithProviders<EmailModule> {
    return {
      ngModule: EmailModule,
    };
  }

  constructor(@Optional() @SkipSelf() parent : CoreEmailModule) {
    if(parent) {
      throw new Error("Parent {CORE EMAIL} is loaded");
    }
  }
}
