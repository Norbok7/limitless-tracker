import { Component, inject, input } from '@angular/core';
import { ExerciseService } from '../../../../shared/services/exercise.service';
import { ExerciseFormComponent } from '../exercise-form/exercise-form.component';
import { ExerciseItemComponent } from '../exercise-item/exercise-item.component';
import { Exercise } from '../../../../shared/services/exercise-item.model';

@Component({
  selector: 'app-exercise-list',
  imports: [ExerciseItemComponent, ExerciseFormComponent],
  templateUrl: './exercise-list.component.html',
  styleUrl: './exercise-list.component.css',
})
export class ExerciseListComponent {
  exercise = input<Exercise>()
  
  private exerciseService = inject(ExerciseService);

  exercises = this.exerciseService.getExercises();

}
