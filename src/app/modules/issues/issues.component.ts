import { Component, OnInit, Input } from "@angular/core";
import { Issue } from "src/app/models/issue";

@Component({
  selector: "app-issues",
  templateUrl: "./issues.component.html",
  styleUrls: ["./issues.component.sass"]
})
export class IssuesComponent implements OnInit {
  @Input() issues: Issue[];

  constructor() {}

  ngOnInit() {}
}
