import { HomeService } from './../../service/home.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tela-home',
  templateUrl: './tela-home.component.html',
  styleUrls: ['./tela-home.component.scss']
})
export class TelaHomeComponent implements OnInit {
  list: any;
  min = Math.ceil(0);
  max = Math.floor(100);
  imagem: any = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;

  filtro = [
    {
      page: 'characters',
      pageIndex: 'characters',
      pageSize: 'characters',
    },
  ];

  constructor(
    private serviceHome: HomeService,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    this.getByMarvel1();
    this.getByMarvel2();
    this.getByMarvel3();
    this.getByMarvel4();
    this.getByMarvel5();
    this.getByMarvel6();

  };


  getByMarvel1() {
    this.serviceHome
      .getApiCharacter(
        this.filtro[0].pageIndex,
        this.filtro[0].pageSize
      )
      .subscribe(
        (data: any) => {
          this.listCateg[0].item = data.data;
          //console.log(this.list.results[this.listCateg[0].numb].thumbnail.path + '.' + this.list.results[this.listCateg[0].numb].thumbnail.extension)
        },
        (error) => {
          // this.generic.openSnackBarError(error.error.message);
          console.log('Não conecto');
        }
      );
  };

  getByMarvel2() {
    this.serviceHome
      .getApiComics(
        this.filtro[0].pageIndex,
        this.filtro[0].pageSize
      )
      .subscribe(
        (data: any) => {
          this.list = data.data;
        },
        (error) => {
          // this.generic.openSnackBarError(error.error.message);
          console.log('Não conecto');
        }
      );
  };

  getByMarvel3() {
    this.serviceHome
      .getApiCreators(
        this.filtro[0].pageIndex,
        this.filtro[0].pageSize
      )
      .subscribe(
        (data: any) => {
          this.list = data.data;
        },
        (error) => {
          // this.generic.openSnackBarError(error.error.message);
          console.log('Não conecto');
        }
      );
  };

  getByMarvel4() {
    this.serviceHome
      .getApiEventos(
        this.filtro[0].pageIndex,
        this.filtro[0].pageSize
      )
      .subscribe(
        (data: any) => {
          this.list = data.data;
        },
        (error) => {
          // this.generic.openSnackBarError(error.error.message);
          console.log('Não conecto');
        }
      );
  };

  getByMarvel5() {
    this.serviceHome
      .getApiStories(
        this.filtro[0].pageIndex,
        this.filtro[0].pageSize
      )
      .subscribe(
        (data: any) => {
          this.list = data.data;
        },
        (error) => {
          // this.generic.openSnackBarError(error.error.message);
          console.log('Não conecto');
        }
      );
  };

  getByMarvel6() {
    this.serviceHome
      .getApiSeries(
        this.filtro[0].pageIndex,
        this.filtro[0].pageSize
      )
      .subscribe(
        (data: any) => {
          this.list = data.data;
          console.log
        },
        (error) => {
          // this.generic.openSnackBarError(error.error.message);
          console.log('Não conecto');
        }
      );
  };

  listCateg = [
    {
      type: 'Characters',
      numb: Math.floor(Math.random() * (this.max - this.min + 1)) + this.min,
      item: ''
    },{
      type: 'Comics',
      numb: Math.floor(Math.random() * (this.max - this.min + 1)) + this.min,
      item: ''
    },{
      type: 'Creators',
      numb: Math.floor(Math.random() * (this.max - this.min + 1)) + this.min,
      item: ''
    },{
      type: 'Eventos',
      numb: Math.floor(Math.random() * (this.max - this.min + 1)) + this.min,
      item: ''
    },{
      type: 'Series',
      numb: Math.floor(Math.random() * (this.max - this.min + 1)) + this.min,
      item: ''
    },{
      type: 'Stories',
      numb: Math.floor(Math.random() * (this.max - this.min + 1)) + this.min,
      item: ''
    }
  ]
}
