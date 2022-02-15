import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

//  API Imports
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { RouterModule, Routes } from '@angular/router';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatNativeDateModule, MAT_DATE_FORMATS, MAT_DATE_LOCALE, MAT_NATIVE_DATE_FORMATS} from '@angular/material/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TelaHomeComponent } from './components/tela-home/tela-home.component';
import { TelaCharactersComponent } from './components/tela-characters/tela-characters.component';
import { TelaComicsComponent } from './components/tela-comics/tela-comics.component';
import { TelaCreatorsComponent } from './components/tela-creators/tela-creators.component';
import { TelaEventosComponent } from './components/tela-eventos/tela-eventos.component';
import { TelaSeriesComponent } from './components/tela-series/tela-series.component';
import { TelaStoriesComponent } from './components/tela-stories/tela-stories.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    TelaHomeComponent,
    TelaCharactersComponent,
    TelaComicsComponent,
    TelaCreatorsComponent,
    TelaEventosComponent,
    TelaSeriesComponent,
    TelaStoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatCardModule,
    MatFormFieldModule,
    MatCardModule,
		MatIconModule,
    MatSortModule,
		MatDialogModule,
		MatButtonModule,
		MatTableModule,
		MatSliderModule,
		FormsModule,
		DragDropModule,
		MatMenuModule,
		MatDividerModule,
		MatFormFieldModule,
		MatInputModule,
		MatSelectModule,
		MatToolbarModule,
    MatSliderModule,
		HttpClientModule,
		MatSnackBarModule,
    MatTabsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatSlideToggleModule,
    MatButtonToggleModule,
    MatAutocompleteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
