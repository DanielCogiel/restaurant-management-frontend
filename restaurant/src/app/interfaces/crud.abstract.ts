import { Injectable } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Injectable()
export abstract class Crud<T> {
  elements!: T []
  protected constructor(private _router: Router, private _activatedRoute: ActivatedRoute) {}
  abstract deleteElement(event: Event, id: number): void;
  goToEditPage(event: Event, id: number): void {
    event.stopPropagation();
    event.preventDefault();
    this._router.navigate([`${id}/edit`], {relativeTo: this._activatedRoute});
  }
  goToCreatePage(): void {
    this._router.navigate(['create'], {relativeTo: this._activatedRoute});
  }
  goToSpecificCustomer(id: number) {
    this._router.navigate([`${id}`], {relativeTo: this._activatedRoute});
  }
}





