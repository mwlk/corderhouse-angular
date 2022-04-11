import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Student } from 'src/app/models/student';
import { StudentService } from 'src/app/services/student.service';



@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  @ViewChild('TableStudents') TableStudents!: MatTable<any>
  // list: any = [];

  displayedColumns: string[] = ['ID','Name', 'Gender', 'Class', 'Club', 'Persona', 'Hairstyle', 'Color', 'action'];
  dataSource: Student[] = [];

  constructor(private _studentSvc: StudentService) {}

  ngOnInit(): void {
    this.dataSource = this._studentSvc.GetAllStudents();
    console.log(this.dataSource);
  }

  delete(id: number){
    this._studentSvc.DeleteStudent(id)

    this.TableStudents.renderRows()
  }
}
