import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RatingModule } from "ng-starrating";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { SearchComponent } from "./search/search.component";
import { FormsModule } from "@angular/forms";
import { TagsComponent } from "./tags/tags.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    NotFoundComponent,
    SearchComponent,
    TagsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, RatingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
