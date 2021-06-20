import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  
  brands:any[]=[
  ]
  models:any[]=[
  ]
  modelsValue:any=[

  ]
  bodystyle:any[]=[  
    "Sedan",
    "Van",
    "Hatchback",
    "Coupe",
    "SUV",
    "Station",
    "Cabriolet"
  ]
  selectedBrand:number;
  selectedModel:number;
  selectedBody:number;
  carsWithBrand=[];
  carsWithYear=[];
  carsWithinPrice=[];

  car=[
    {img:"../../../assets/9.jpg",brand:"BMW",model:"118i",price:200000},
    {img:"../../../assets/1.png",brand:"Audi",model:"118i",price:500000},
    {img:"../../../assets/4.jpg",brand:"Audi",model:"118i",price:320000},

  ]
   
  year:number=0;
  startPrice:number=0;
  endPrice:number=0;


  alt="car"

  image:string;    
 
  setValueZero(){
    this.selectedBrand=0;
    this.selectedModel=0;
    this.selectedBody=0;
  }


  constructor(private searchService:SearchService) { 
   
  }

  ngOnInit(): void {
    
    this.setValueZero();
    this.searchService.getAllBrands().subscribe(a=>{
     a.forEach(element => {
        this.brands.push(element.name);        
      });     
     })

  }
  updateModel(brand:number){

    this.models=[];
    this.modelsValue=[];
    this.searchService.getModels(brand).subscribe(a=>
      {
        a.forEach(element => {
          this.models.push(element.model);
          this.models=[... new Set(this.models)];
          this.modelsValue.push(element.modelId);
          this.modelsValue=[... new Set(this.modelsValue)];
          
        });
          
      })
    
  }

  search(){
    
    if(this.selectedBrand!=0&&this.selectedModel!=0&&this.selectedBody!=0){
     
      this.searchService.searchByAll(this.selectedBrand,this.selectedModel,this.selectedBody).subscribe(
        a=>{
          this.addPathToImage(a);
          console.log(a);
          this.car=a;
        }
      )
    }
    
    else if(this.selectedBrand!=0&&this.selectedModel!=0){
      this.searchService.searchByBrandModel(this.selectedBrand,this.selectedModel).subscribe(
        a=>{
          this.addPathToImage(a);
          console.log(a);
          this.car=a;
        }
      )
    }
    else if(this.selectedBrand!=0){
      this.searchService.getModels(this.selectedBrand).subscribe(a=>
        {
          this.addPathToImage(a);
          this.car=a;
          this.carsWithBrand=a;
        })
      console.log("brand ")
    }
    else if(this.selectedBody!=0){
      
      this.searchService.searchByBody(this.selectedBody).subscribe(a=>
        {
          
          this.addPathToImage(a);
          this.car=a;
          console.log(a);
        })
    }

    this.setValueZero();

   if(this.year!=0){
    this.searchService.searchByYear(this.year).subscribe(a=>
      { 
        this.carsWithYear=a;
        this.car=a;
        console.log(a);
      })
    }
    if(this.startPrice!=0 && this.endPrice!=0){
     this.searchService.searchByprice(this.startPrice,this.endPrice).subscribe(a=>
      { 
        this.carsWithinPrice=a;
        this.car=a;
        console.log(a);
      }) 
    }
     var intersection = this.carsWithYear.filter(item1 => this.carsWithinPrice.some(item2 => item1.img === item2.img))
    // this.car=intersection
     console.log(this.car)

      // this.year=this.startPrice=this.endPrice=null;
     
  }

  addPathToImage(a){
    for(var i=0;i<a.length;i++){
      a[i].img=`../../../assets/readyImgs/readyImgs/${a[i].img}`
    }

  }

}
