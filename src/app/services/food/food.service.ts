import { Injectable } from "@angular/core";
import { Food } from "src/app/shared/models/food";
import { sample_foods /* , sample_tags */ } from "src/data";
@Injectable({
  providedIn: "root",
})
export class FoodService {
  constructor() {}

  getAll(): Food[] {
    return sample_foods;
  }
  getAllByTag(tag: string): Food[] {
    if (tag === "All") return this.getAll();
    else return this.getAll().filter((food) => food.tags?.includes(tag));
  }
}
