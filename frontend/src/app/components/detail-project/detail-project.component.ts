import { Component, OnInit, Pipe } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-detail-project',
  templateUrl: './detail-project.component.html',
  styleUrls: ['./detail-project.component.css']
})


export class DetailProjectComponent implements OnInit {

  categoryId: string;
  category: any;
  YoutubeLink: string = '';
  videoURL: string;
  public safeUrl : SafeResourceUrl

  constructor(public _sanitizer: DomSanitizer, private route: ActivatedRoute, private categoryService: CategoryService,) {
    this.route.params.subscribe(params => {
      this.categoryId = params['xxx'];
    });
    this.categoryService.findById(this.categoryId).subscribe(data => {
      this.category = data.data.ListData[0];
      this.YoutubeLink = (this.category.YoutubeLink).slice(32);
      this.safeUrl = this._sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${this.YoutubeLink}`);
      console.log(this.safeUrl)
    })


  }

  async ngOnInit() {



  }
  getLink(){
    return `https://www.youtube.com/embed/${this.YoutubeLink}`

  }



}
