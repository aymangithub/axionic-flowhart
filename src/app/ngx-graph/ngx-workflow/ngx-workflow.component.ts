import { Component, OnInit } from '@angular/core';
import { Edge, Node, Layout } from '@swimlane/ngx-graph';

@Component({
  selector: 'app-ngx-workflow',
  templateUrl: './ngx-workflow.component.html',
  styleUrls: ['./ngx-workflow.component.css']
})
export class NgxWorkflowComponent implements OnInit {
  nodes: any[] = [
    {
      id: 'first',
      label: 'A'
    }, {
      id: 'second',
      label: 'B'
    }, {
      id: 'third',
      label: 'C'
    }
  ];
  links: any[] = [
    {
      id: 'a',
      source: 'first',
      target: 'second',
      label: 'is parent of'
    }, {
      id: 'b',
      source: 'first',
      target: 'third',
      label: 'custom label'
    }
  ];
  constructor() { }
  addnode() {
    const node: Node = {
      id: 'dfd',
      label: 'New Node',
      data: {
        office: 'Office Name',
        role: 'Role',
        backgroundColor: '#8A2BE2'
      }
    };

    this.nodes.push(node);

    this.nodes = [...this.nodes];
  }
  sourceNode:Node;
  isSourceNodeSelect:boolean=false;
  selectedNode: Node;
  nodeclicked(selected: any) {
    console.log('nodeclicked function. selected: ', selected);
    this.selectedNode = selected;
    if(this.isSourceNodeSelect)
    {
    this.sourceNode=selected;
      this.isSourceNodeSelect=false;
    }
    this.selectedNode=selected;
    var ind = this.nodes.indexOf(selected);
  }
  public getStyles(node: Node): any {
    //console.log('getstylenode function. node:', node);
    return {
      'background-color': node.data.backgroundColor
    };
  }
  currentNodeId:number=6;

  addStartNode()
  {

    const node: Node = {
      id: this.currentNodeId.toString(),
      label: 'New Node',
      data: {
        office: 'Office Name',
        role: 'Role',
        backgroundColor: '#3CFF33'
      }
    };

    this.nodes.push(node);

    this.nodes = [...this.nodes];
    this.currentNodeId=this.currentNodeId+1;
  }
  ngOnInit(): void {
  }

}
