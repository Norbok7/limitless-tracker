import { AfterViewInit, Component, ElementRef, inject, viewChild } from '@angular/core';
import { ExerciseService } from '../../../../shared/services/exercise.service';
import { FormsModule} from '@angular/forms';
@Component({
  selector: 'app-exercise-form',
  imports: [FormsModule],
  templateUrl: './exercise-form.component.html',
  styleUrl: './exercise-form.component.css'
})
export class ExerciseFormComponent implements AfterViewInit {
  private exerciseService = inject(ExerciseService);

  private form = viewChild.required<ElementRef<HTMLFormElement>>('form')

  name: string = '';
  duration: number = 0;

    // TODO: use AfterViewInit
    ngAfterViewInit() {

      // logging the form element to ensure it is accessible
      console.log('ngAfterViewInit called: Form Element Available!', this.form().nativeElement);

      // adding an event listener to the form (if needed)
      this.form().nativeElement.addEventListener('submit', (event) => {
        console.log('Form submitted!' );
      });

  }


  addExercise() {
    this.exerciseService.addExercise(this.name, this.duration);
    this.resetForm();
  }

  resetForm() {
    this.name = '';
    this.duration = 0;
  }
}