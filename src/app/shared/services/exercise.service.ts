import { Injectable, signal } from '@angular/core';
import { Exercise } from './exercise-item.model';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {

  private exercises = signal<Exercise[]>([
    {
      name: 'Jog',
      duration: 30,
    }
  ]);

//
getExercises(){
 return this.exercises.asReadonly();
}

//
addExercise(name: string, duration: number){
 if (name.trim() && duration > 0){
  this.exercises.update((list) => [...list, { name, duration}]);
 }
}

//
removeExercise(name: string){
  this.exercises.update((list) => list.filter((ex) => ex.name !== name));
}


}
