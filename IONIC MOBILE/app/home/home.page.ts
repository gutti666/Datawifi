import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router, RouterEvent, ActivatedRoute } from '@angular/router';
import { GetMenuService } from '../service/get-menu.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { GetContenmenuService } from "../service/get-contenmenu.service";
import { getLocaleTimeFormat } from '@angular/common';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public datas :any=[];
  public menu :any=[];
  public menu2:any =[];
  public data:string;
public i :number=0;
  go:boolean;
  constructor(
    private Getmenu:GetMenuService,
    private router:Router,
    private nav:NavController,
    private Getconten:GetContenmenuService) {}
    ngOnInit(): void {
       

     
      this.getmenu();
    }
    goto(id:Number){
      this.nav.navigateForward('/contmenu/'+id);
  
    }

  
getmenu(){
  this.Getmenu.get_menu().subscribe(rest=>{
    this.datas= rest;
  // console.log(this.datas);
    
   
 
  });

}}