import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  
   
    
  }
 
  info = '';
  months = ["January", "February", "March", "April", "May", "June", "July", 
      "August", "September", "October", "November", "December"]; 
      
      month_value = 'January'

      red_true = true;

      piping(t){

        t = 50;
        return t;
      }

      keyup(e){
        console.log(e);
    
        
      }

      toggle(e){

        this.red_true = !this.red_true;
        console.log(e);
        
      }

      Submit(e){
        console.log(e);
        this.month_value = e.value ;
       
      }

      changemonth(e){
        this.info = `you selected ${e.value} click submit to update `
      }

}
