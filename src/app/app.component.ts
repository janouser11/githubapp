import { Component } from "@angular/core";
import { GithubapiService } from "./http/githubapi.service";
import { Issue } from "./models/issue";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.sass"]
})
export class AppComponent {
  title = "GithubIssues";
  issues: Issue[] = [];
  error = null;
  searchText: string = "";
  constructor(private githubapi: GithubapiService) {}

  ngOnInit() {
    //on load, fetch data
    this.showAngularIssue();
  }

  inputChange() {
    console.log(this.searchText);
    this.issues.filter(x => x.body.includes(this.searchText));
  }
  showAngularIssue() {
    this.githubapi.getAngularIssues().subscribe(
      (data: Issue[]) => {
        this.issues = [...data];
        console.log(this.issues);
      },
      error => (this.error = error)
    );
  }
}
