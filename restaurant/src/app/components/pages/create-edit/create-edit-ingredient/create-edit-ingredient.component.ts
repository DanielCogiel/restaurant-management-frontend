import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Params} from "@angular/router";
import {first} from "rxjs";

@Component({
  selector: 'app-create-edit-ingredient',
  templateUrl: './create-edit-ingredient.component.html',
  styleUrls: ['./create-edit-ingredient.component.scss']
})
export class CreateEditIngredientComponent {
  isEdit: boolean = false;
  formGroup: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required]],
    isGluten: [false]
  })
  constructor(
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.activatedRoute
      .params
      .pipe(first())
      .subscribe((params: Params) => {
        if (params['id']) {
          this.isEdit = true;
          this.formGroup = this.formBuilder.group({
            name: ['Papryka', [Validators.required]],
            isGluten: [true, [Validators.required]]
          });
        }
      })
  }
  onSubmit() {
    if (this.formGroup.valid)
      console.log(this.formGroup.value)
  }
}
