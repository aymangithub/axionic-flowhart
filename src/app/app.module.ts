import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxGraphModule } from '@swimlane/ngx-graph';
import { Graph1Component } from './graph1/graph1.component';
import { NgxWorkflowComponent } from './ngx-graph/ngx-workflow/ngx-workflow.component';
import { NgxGraphOrgTreeComponent } from './ngx-graph-org-tree/ngx-graph-org-tree.component';
import { NodePropertiesComponent } from './node-properties/node-properties.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    Graph1Component,
    NgxWorkflowComponent,
    NgxGraphOrgTreeComponent,
    NodePropertiesComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxGraphModule,
    BrowserAnimationsModule,
  ],
  exports: [NgxWorkflowComponent, NgxGraphOrgTreeComponent,NodePropertiesComponent]
,
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
