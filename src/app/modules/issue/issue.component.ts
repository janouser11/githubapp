import { Component, OnInit, Input, Inject } from "@angular/core";
import { Issue } from "src/app/models/issue";
import { MatDialog } from "@angular/material";
import { ModalComponent } from "./../modal/modal.component";
import { AutofillMonitor } from "@angular/cdk/text-field";

export interface DialogData {
  body: string;
}

@Component({
  selector: "app-issue",
  templateUrl: "./issue.component.html",
  styleUrls: ["./issue.component.scss"]
})
export class IssueComponent implements OnInit {
  @Input() issue: Issue;
  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  displayBody(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      height: "800px",
      data: { body: this.issue.body }
    });
  }
}
