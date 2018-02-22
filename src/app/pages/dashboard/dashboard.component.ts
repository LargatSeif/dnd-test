import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  //CRA
  public widgets2 = [
    {
      "name": "Mon CRA1",
      "type": "CRA",
      "width": "4",
      "position": "1",
      "removable": false,
      "used": true
    },
    {
      "name": "Mon CRA2",
      "type": "CRA",
      "width": "4",
      "position": "1",
      "removable": false,
      "used": true
    },
    {
      "name": "Mon CRA3",
      "type": "CRA",
      "width": "4",
      "position": "1",
      "removable": false,
      "used": true
    }
  ]

  //CONGE
  public widgets1 = [
    {
      "name": "Mes Congés1",
      "type": "CONGE",
      "width": "4",
      "position": "0",
      "removable": false,
      "used": true
    },
    {
      "name": "Mes Congés2",
      "type": "CONGE",
      "width": "4",
      "position": "0",
      "removable": false,
      "used": true
    },
    {
      "name": "Mes Congés3",
      "type": "CONGE",
      "width": "4",
      "position": "0",
      "removable": false,
      "used": true
    }
  ];

  //FRAIS
  public widgets3 = [
    {
      "name": "Mes Frais1",
      "type": "FRAIS",
      "width": "2",
      "position": "2",
      "removable": true,
      "used": false
    },
    {
      "name": "Mes Frais2",
      "type": "FRAIS",
      "width": "2",
      "position": "2",
      "removable": true,
      "used": false
    },
    {
      "name": "Mes Frais3",
      "type": "FRAIS",
      "width": "2",
      "position": "2",
      "removable": true,
      "used": false
    }
  ]



  CRA = [];

  CONGE = [];

  FRAIS = [];
  



  droppedItems = [];
  fruitDropEnabled = true;
  dragEnabled = true;

  onListDrop(e: any) {
    if (e.dragData.type == "CRA") {
      this.widgets2.push(e.dragData);
      this.removeItem(e.dragData, this.CRA);
    }
    if (e.dragData.type == "CONGE") {
      this.widgets1.push(e.dragData);
      this.removeItem(e.dragData, this.CONGE);
    }
    if (e.dragData.type == "FRAIS") {
      this.widgets3.push(e.dragData);
      this.removeItem(e.dragData, this.FRAIS);
    } 
    else {
      console.log('onListDrop ERROR')
    }

  }

  onCONGEDrop(e: any) {//col-4-2
    let prev = e.nativeEvent.srcElement.previousSibling.previousElementSibling.classList;
      let next = e.nativeEvent.srcElement.nextSibling.nextElementSibling.classList;
      console.log(e.nativeEvent.srcElement)
      console.log('next'+next)
  
    if (this.CONGE.length == 0) {

      this.CONGE.unshift(e.dragData);
      this.removeItem(e.dragData, this.widgets1);

    }else{

      this.CONGE.unshift(e.dragData);
      let prev = e.nativeEvent.srcElement.previousSibling.previousElementSibling.classList;

      if(prev[3] == '1' && next[0]  ==  'col-md-2') {
        this.removeItem(e.dragData, this.CRA);
      }
      else if (prev[0] == 'col-md-2' && next[3]=='2' ) {

        this.removeItem(e.dragData, this.widgets1);
      } 
    }
    
    //this.removeItem(e.dragData, this.widgets1);
  }

  onCRADrop(e: any) {//col-4-1
      let prev = e.nativeEvent.srcElement.previousSibling.previousElementSibling.classList;
      let next = e.nativeEvent.srcElement.nextSibling.nextElementSibling.classList;
      console.log('prev'+prev)
      console.log('next'+next)
      console.log(e.nativeEvent.srcElement.getAttribute('data-src'))
     
    if (this.CONGE.length == 0) {
      this.CRA.unshift(e.dragData);
      this.removeItem(e.dragData, this.widgets2);
    }else{
      this.CRA.unshift(e.dragData);

      let prev = e.nativeEvent.srcElement.previousSibling.previousElementSibling.classList;
      let next = e.nativeEvent.srcElement.nextSibling.nextElementSibling.classList;
      console.log('prev'+prev)
      console.log('next'+next)

      if(prev[3] == '2' && next[0]  ==  'col-md-4') {
        this.removeItem(e.dragData, this.CONGE);
      } 
      else if (prev[0] == 'col-md-2' && next[3]=='2' ) {
        this.removeItem(e.dragData, this.widgets2);
      }
    }
      
     
  }

  onFRAISDrop(e: any) {
    this.FRAIS.unshift(e.dragData);
    this.removeItem(e.dragData, this.widgets3);
  }




  onAnyDrop(e: any) {
    this.droppedItems.push(e.dragData);

    if (e.dragData.type == 'CRA') {
      console.log(e.dragData);
      this.removeItem(e.dragData, this.widgets2);
    } else
      if (e.dragData.type == 'CONGE') {
        this.removeItem(e.dragData, this.widgets1);
      } else
        if (e.dragData.type == 'FRAIS') {
          this.removeItem(e.dragData, this.widgets3);
        } else {
          console.log('error')
        }
  }

  removeItem(item: any, list: Array<any>) {
    let index = list.map(function (e) {
      return e.name
    }).indexOf(item.name);
    list.splice(index, 1);
  }

}
