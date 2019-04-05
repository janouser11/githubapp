import { Pipe, PipeTransform } from "@angular/core";
import { Issue } from "../models/issue";

@Pipe({
  name: "keywordFilter"
})
export class KeywordFilterPipe implements PipeTransform {
  transform(issues: Issue[], searchText: string): any {
    if (searchText.length === 0) return issues;
    const filteredIssue = issues.filter(x => x.body.includes(searchText));
    return filteredIssue;
  }
}
