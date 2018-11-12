import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { testListComponent } from './tests/test-list-component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star-component';
import { HttpClientModule } from '@angular/common/http';
import { testDetailComponent } from './tests/test-detail.component';
import { WelcomeComponent } from './home/welcome.component';
import { RouterModule } from '@angular/router';
import { PresentationComponent } from './presentation/presentation.component';

@NgModule({
  declarations: [
    AppComponent,
    testListComponent,
    ConvertToSpacesPipe,
    StarComponent,
    testDetailComponent,
    WelcomeComponent,
    PresentationComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'tests', component: testListComponent },
      { path: 'tests/:id', component: testDetailComponent },
      { path: 'welcome', component: WelcomeComponent },
      { path: 'presentation', component: PresentationComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ])
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
