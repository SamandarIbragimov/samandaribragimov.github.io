import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_model/Project';
import { Tag } from '../_model/Tag';
import { ProjectsService } from '../_services/projects.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  projects = {} as Project[];

  isCollapsed: boolean = true;
  typescript: boolean = false;
  angular: boolean = false;
  python: boolean = false;
  django: boolean = false;
  java: boolean = false;
  spring: boolean = false;
  csharp: boolean = false;
  dotnet: boolean = false;

  filtering: boolean = false;

  constructor(private titleService:Title, private projectService:ProjectsService ){
    this.titleService.setTitle('Samandar Ibragimov - Portfolio');
  }

  ngOnInit(): void {
      this.projects = this.projectService.GetProjects();
  }

  Filter(){
    let filterTags: Tag[] = [];

    if(this.typescript){
      filterTags.push(Tag.TYPESCRIPT); 
    }
    if(this.angular){
      filterTags.push(Tag.ANGULAR); 
    }
    if(this.python){
      filterTags.push(Tag.PYTHON); 
    }
    if(this.django){
      filterTags.push(Tag.DJANGO); 
    }
    if(this.java){
      filterTags.push(Tag.JAVA); 
    }
    if(this.spring){
      filterTags.push(Tag.SPRING); 
    }
    if(this.csharp){
      filterTags.push(Tag.CSHARP); 
    }
    if(this.dotnet){
      filterTags.push(Tag.DOTNET); 
    }

    if(this.typescript || this.angular || this.python || this.django || this.java || this.spring || this.csharp || this.dotnet){
      this.filtering = true;
    }
    else{
      this.filtering = false;
    }

    this.projects = this.projectService.GetProjectsByFilter(filterTags);
  }

  ResetFilters(){
    this.typescript = false;
    this.angular = false;
    this.python = false;
    this.django = false;
    this.java = false;
    this.spring = false;
    this.csharp = false;
    this.dotnet = false;
    this.filtering = false;

    this.projects = this.projectService.GetProjects();
  }
}
