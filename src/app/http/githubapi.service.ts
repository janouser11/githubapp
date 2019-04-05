import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import * as moment from "moment";
import { Issue } from "../models/issue";

@Injectable({
  providedIn: "root"
})
export class GithubapiService {
  baseUrl = "https://api.github.com/";
  dateSevenDaysAgo = moment()
    .subtract(7, "d")
    .format("YYYY-MM-DD");
  constructor(private http: HttpClient) {}

  getAngularIssues() {
    // endpoint + name of owner/projectname
    const endpoint = "repos/angular/angular/issues";
    const fullUrl = this.baseUrl + endpoint;
    const options = {
      params: new HttpParams().set("since", this.dateSevenDaysAgo)
    };
    return this.http.get<Issue[]>(fullUrl, options);
  }
}
