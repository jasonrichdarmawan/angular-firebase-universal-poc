import { Component, OnInit } from '@angular/core';
import { GetExperiencesDataSource } from '../../../data/datasources/get-experiences.datasource';
import { GetExperiencesUseCase } from '../../../domain/usecases/get-experiences.service';
import { Experience } from '../../../domain/entities/experiences.entity';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent implements OnInit {
  experiences: Experience[] = []

  constructor(private getExperiencesUseCase: GetExperiencesUseCase) { }

  ngOnInit(): void {
    this.getExperiencesUseCase.get()
      .then((response) => {
        this.experiences = response;
      })
      .catch((error) => {
        console.log(error);
      })
  }

}
