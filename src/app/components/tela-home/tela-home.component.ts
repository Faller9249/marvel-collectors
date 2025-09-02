import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CharactersService } from '../../service/characters.service';
import { ComicsService } from '../../service/comics.service';
import { CreatorsService } from '../../service/creators.service';
import { EventosService } from '../../service/eventos.service';
import { SeriesService } from '../../service/series.service';
import { StoriesService } from '../../service/stories.service';

@Component({
  selector: 'app-tela-home',
  templateUrl: './tela-home.component.html',
  styleUrls: ['./tela-home.component.scss']
})
export class TelaHomeComponent implements OnInit {
  min = 0;
  max = 100;

  constructor(
    private charactersService: CharactersService,
    private comicsService: ComicsService,
    private creatorsService: CreatorsService,
    private eventosService: EventosService,
    private seriesService: SeriesService,
    private storiesService: StoriesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getByMarvel1();
    this.getByMarvel2();
    this.getByMarvel3();
    this.getByMarvel4();
    this.getByMarvel5();
    this.getByMarvel6();
  }

  getByMarvel1() {
    this.charactersService.getCharacters(0, 100).subscribe(
      (data: any) => {
        this.listCateg[0].item = data;
      },
      (error) => {
        console.log('Não conecto', error);
      }
    );
  }

  getByMarvel2() {
    this.comicsService.getComics(0, 100).subscribe(
      (data: any) => {
        this.listCateg[1].item = data;
      },
      (error) => {
        console.log('Não conecto', error);
      }
    );
  }

  getByMarvel3() {
    this.creatorsService.getCreators(0, 100).subscribe(
      (data: any) => {
        this.listCateg[2].item = data;
      },
      (error) => {
        console.log('Não conecto', error);
      }
    );
  }

  getByMarvel4() {
    this.eventosService.getEvents(0, 100).subscribe(
      (data: any) => {
        this.listCateg[3].item = data;
      },
      (error) => {
        console.log('Não conecto', error);
      }
    );
  }

  getByMarvel5() {
    this.storiesService.getStories(0, 100).subscribe(
      (data: any) => {
        this.listCateg[5].item = data;
      },
      (error) => {
        console.log('Não conecto', error);
      }
    );
  }

  getByMarvel6() {
    this.seriesService.getSeries(0, 100).subscribe(
      (data: any) => {
        this.listCateg[4].item = data;
      },
      (error) => {
        console.log('Não conecto', error);
      }
    );
  }

  listCateg = [
    {
      type: 'Characters',
      numb: Math.floor(Math.random() * (this.max - this.min + 1)) + this.min,
      item: ''
    },
    {
      type: 'Comics',
      numb: Math.floor(Math.random() * (this.max - this.min + 1)) + this.min,
      item: ''
    },
    {
      type: 'Creators',
      numb: Math.floor(Math.random() * (this.max - this.min + 1)) + this.min,
      item: ''
    },
    {
      type: 'Eventos',
      numb: Math.floor(Math.random() * (this.max - this.min + 1)) + this.min,
      item: ''
    },
    {
      type: 'Series',
      numb: Math.floor(Math.random() * (this.max - this.min + 1)) + this.min,
      item: ''
    },
    {
      type: 'Stories',
      numb: Math.floor(Math.random() * (this.max - this.min + 1)) + this.min,
      item: ''
    }
  ];
}
