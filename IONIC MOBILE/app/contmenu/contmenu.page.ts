import { Component, OnInit } from '@angular/core';
import { GetContenmenuService } from "../service/get-contenmenu.service";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contmenu',
  templateUrl: './contmenu.page.html',
  styleUrls: ['./contmenu.page.scss'],
})
export class ContmenuPage implements OnInit {
  public contenido:any=[];
  constructor(private get:GetContenmenuService,private router:ActivatedRoute) { }

  ngOnInit() {
   let id = parseInt( this.router.snapshot.paramMap.get('id'));
    this.get.get_contmenu(id).subscribe(data=>{
      this.contenido= data;
      ;
    })
  }

}
