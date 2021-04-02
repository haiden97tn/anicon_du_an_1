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
  category: null;

  constructor(private route: ActivatedRoute, private categoryService: CategoryService) { }

  async ngOnInit() {
    await this.route.params.subscribe(params => {
      this.categoryId = params['xxx'];
    });
    await this.categoryService.findById(this.categoryId).subscribe(data => {
      this.category = data
      console.log(data)
    })
  }

}
