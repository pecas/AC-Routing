import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {
  departments = [
    {'id': 1, 'nombre': 'Angular'},
    {'id': 2, 'nombre': 'Node'},
    {'id': 3, 'nombre': 'Firebase'},
    {'id': 4, 'nombre': 'Web Api'},
    {'id': 5, 'nombre': 'Bootstrap'},
  ]

  constructor(private router: Router) { }

  onSelect(department){
    this.router.navigate(['/departments', department.id]);
  }

  ngOnInit() {
  }

}
