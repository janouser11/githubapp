import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";
import { MatGridListModule } from "@angular/material/grid-list";
import { AppComponent } from "./app.component";
import { IssuesComponent } from "./modules/issues/issues.component";
import { IssueComponent } from "./modules/issue/issue.component";
import { KeywordFilterPipe } from "./pipes/keyword-filter.pipe";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatChipsModule } from "@angular/material/chips";
import { MarkdownModule } from "ngx-markdown";
import { MatBadgeModule } from "@angular/material/badge";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";
import { ModalComponent } from "./modules/modal/modal.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
@NgModule({
  declarations: [
    AppComponent,
    IssuesComponent,
    IssueComponent,
    KeywordFilterPipe,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    BrowserAnimationsModule,
    FormsModule,
    MatGridListModule,
    MatExpansionModule,
    MatChipsModule,
    MarkdownModule.forRoot(),
    MatBadgeModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AppComponent, IssueComponent, ModalComponent]
})
export class AppModule {}
