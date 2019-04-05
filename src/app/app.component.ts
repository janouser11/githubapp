import { Component } from "@angular/core";
import { GithubapiService } from "./http/githubapi.service";
import { Issue } from "./models/issue";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "GithubIssues";
  issues: Issue[] = [];
  error = null;
  searchText: string = "";
  faSearch = faSearch;

  constructor(private githubapi: GithubapiService) {}

  ngOnInit() {
    //on load, fetch data
    this.showAngularIssue();
  }

  inputChange() {
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
