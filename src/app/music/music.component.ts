import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { SearchEntry } from '../interfaces/search-entry.interface';
import { ItuneService } from '../search/itune.service';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MusicComponent implements OnInit, OnDestroy{

  public searchControl!: FormControl;
  public results: Array<SearchEntry> = []
  private unsubscribe: Subject<any> = new Subject<any>();

  constructor(private ituneService: ItuneService, private cdRef: ChangeDetectorRef){
    
  }

  public iTunesSearch(term: string) {
    this.ituneService.getITunesResults(term).pipe(
        takeUntil(this.unsubscribe)
    ).subscribe(res => {
        this.results = res.results;
        this.cdRef.detectChanges();
    });
  }

  ngOnInit(): void {
    this.searchControl = new FormControl('', Validators.required);
  }

  ngOnDestroy(): void {
    this.unsubscribe.next(void 0);
    this.unsubscribe.complete();
  }

}
