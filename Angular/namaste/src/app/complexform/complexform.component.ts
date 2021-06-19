import { Component, OnInit } from "@angular/core";
import { FormBuilder , FormArray , Validators } from "@angular/forms";

@Component({
  selector: "app-complexform",
  templateUrl: "./complexform.component.html",
  styleUrls: ["./complexform.component.css"],
})
export class ComplexformComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  newtenant = this.fb.group({
    HeadDetails: this.fb.group({
      headName: ["" , Validators.required],
      headGender: [""],
      headContactno: [""],
      checkinDate: ["select date",Validators.required],
      checkoutDate: ["select date",Validators.required],
      address:[''],
      roomNo : ['',Validators.required]
    }),
    SpouseDetails: this.fb.group({
      spouseName: [""],
      spouseGender: [""],
      spouseContactno: [""],
    }),
    ChildrenDetails: this.fb.array([
      this.fb.group({
        childName: [""],
        childGender: [""],
        childAge: [""],
      }),
    ]),
  });
  get ChildrenDetails() {
    return this.newtenant.get('ChildrenDetails') as FormArray;
  }

  addchild(){
    this.ChildrenDetails.push(
      this.fb.group({
        childName: [""],
        childGender: [""],
        childAge: [""],
      }),
    )
  }

  removechild(index){
    this.ChildrenDetails.removeAt(index)
  }

  submit(data){
    console.log(data);
    
  }
}
