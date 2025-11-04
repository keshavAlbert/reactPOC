import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import {
  sharedStateFeatureKey,
  sharedStateReducer
} from './shared-state/store/shared-state.reducer';
import { SharedStateEffects } from './shared-state/store/shared-state.effects';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({ [sharedStateFeatureKey]: sharedStateReducer }),
    EffectsModule.forRoot([SharedStateEffects])
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
