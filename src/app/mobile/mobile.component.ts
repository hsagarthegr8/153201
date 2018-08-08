import { Component, OnInit } from "@angular/core";

import { MobileService } from "./mobile.service";
import { Mobile } from "./mobile.interface";

@Component({
  selector: "app-mobile",
  templateUrl: "./mobile.component.html",
  styleUrls: ["./mobile.component.css"]
})
export class MobileComponent implements OnInit {
  mobiles: Mobile[] = [];
  logs: string[] = []

  constructor(private mobileService: MobileService) {}

  ngOnInit() {
    this.fetchMobiles();
  }

  /** This function fetch mobiles from the MobileService */
  fetchMobiles(): void {
    this.mobileService.fetchMobiles().subscribe((mobiles: Mobile[]) => {
      this.mobiles = mobiles;
      this.logs.push('Fetched Mobiles List')
    });
  }

  /** This function deletes a mobile from the array according to given id. */
  deleteMobile(id: number): void {
    this.mobiles = this.mobiles.filter((mobile: Mobile) => mobile.mobId != id)
    this.logs.push(`Deleted the mobile having id: ${id}`)
  }

  /** This function sorts the array accordng to the given key. */
  sortBy(key: string): void {
    this.mobiles.sort((mobile1, mobile2) => {
      if (mobile1[key] < mobile2[key]) return -1;
      return 1;
    });
    this.logs.push(`Sorted the mobile list by ${key}`)
  }

  /** This function will clear all the logs */
  clearLogs() {
    this.logs = []
  }

}
