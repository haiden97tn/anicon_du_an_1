import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-detail-project',
  templateUrl: './detail-project.component.html',
  styleUrls: ['./detail-project.component.css']
})
export class DetailProjectComponent implements OnInit {

  categoryId: string;
  category: any;

  constructor(private route: ActivatedRoute, private categoryService: CategoryService) { }

  async ngOnInit() {
    this.route.params.subscribe(params => {
      this.categoryId = params['xxx'];
    });
    this.categoryService.findById(this.categoryId).subscribe(data => {
      this.category = data.data.ListData[0];
    })
  }

}
