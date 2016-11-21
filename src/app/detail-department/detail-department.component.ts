import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-department',
  templateUrl: './detail-department.component.html',
  styleUrls: ['./detail-department.component.css']
})
export class DetailDepartmentComponent implements OnInit {

  public departmentId;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.departmentId = id;
  }

}
