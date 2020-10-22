import { Component, OnInit, Input } from '@angular/core';
import { Edge, Node, Layout } from '@swimlane/ngx-graph';
import { DagreNodesOnlyLayout } from './customDagreNodesOnly';
import * as shape from 'd3-shape';
import { PlayNumberNode, UserInputNode } from 'src/models/models';
export class Employee {
  id: string;
  name: string;
  office: string;
  role: string;
  backgroundColor: string;
  upperManagerId?: string;
}

@Component({
  selector: 'ngx-graph-org-tree',
  templateUrl: './ngx-graph-org-tree.component.html',
  styleUrls: ['./ngx-graph-org-tree.component.css']
})
export class NgxGraphOrgTreeComponent implements OnInit {
  @Input() employees: Employee[] = [];

  public nodes: Node[] = [];
  public links: Edge[] = [];
  public layoutSettings = {
    orientation: 'TB'
  };
  public curve: any = shape.curveLinear;
  public layout: Layout = new DagreNodesOnlyLayout();

  selectedNode: Node;
  sourceNode: Node;
  isSourceNodeSelect: boolean = false;
  currentNodeId: number = 1;
  constructor() {
    this.employees = [
      {
        id: '1',
        name: 'Employee 1',
        office: 'Office 1',
        role: 'Manager',
        backgroundColor: '#DC143C'
      },
      {
        id: '2',
        name: 'Employee 2',
        office: 'Office 2',
        role: 'Engineer',
        backgroundColor: '#00FFFF',
        upperManagerId: '1'
      },
      {
        id: '3',
        name: 'Employee 3',
        office: 'Office 3',
        role: 'Engineer',
        backgroundColor: '#00FFFF',
        upperManagerId: '1'
      },
      {
        id: '4',
        name: 'Employee 4',
        office: 'Office 4',
        role: 'Engineer',
        backgroundColor: '#00FFFF',
        upperManagerId: '1'
      },
      {
        id: '5',
        name: 'Employee 5',
        office: 'Office 5',
        role: 'Student',
        backgroundColor: '#8A2BE2',
        upperManagerId: '4'
      }
    ];
  }

  public ngOnInit(): void {

    this.selectedNode = { id: '', label: '' } as Node;


    const node: Node = {
      id: this.currentNodeId.toString(),
      label: 'IVR Welcome',
      data: {
        // office: 'Office Name',
        // role: 'Role',
        backgroundColor: '#DEE5DE'
      }
    };
    this.addStartNode(node);
    this.nodeclicked(this.nodes[0]);

  }

  public getStyles(node: Node): any {
    return {
      'background-color': node.data.backgroundColor
    };
  }
  nodeclicked(selected: any) {
    //alert('You can now add new node under '+ selected.label);
    if (this.isSourceNodeSelect) {
      this.sourceNode = selected;
      this.isSourceNodeSelect = false;
    }
    this.selectedNode = selected;
    var ind = this.nodes.indexOf(selected);
  }
  addNewNode() {

    const node: Node = {
      id: this.currentNodeId.toString(),
      label: 'New Node',
      data: {
        office: 'Office Name',
        role: 'Role',
        backgroundColor: '#8A2BE2'
      }
    };

    this.nodes.push(node);

    const edge: Edge = {
      source: this.selectedNode.id.toString(),
      target: this.currentNodeId.toString(),
      label: '',
      data: {
        linkText: 'Manager of'
      }
    };

    this.links.push(edge);
    this.nodes = [...this.nodes];
    this.currentNodeId = this.currentNodeId + 1;
  }
  addAquaNode() {

    const node: Node = {
      id: this.currentNodeId.toString(),
      label: 'New Node',
      data: {
        office: 'Office Name',
        role: 'Role',
        backgroundColor: '#00FFFF'
      }
    };

    this.nodes.push(node);

    const edge: Edge = {
      source: this.selectedNode.id.toString(),
      target: this.currentNodeId.toString(),
      label: '',
      data: {
        linkText: 'Manager of'
      }
    };

    this.links.push(edge);
    this.nodes = [...this.nodes];
    this.currentNodeId = this.currentNodeId + 1;
  }
  addBlueNode() {

    const node: Node = {
      id: this.currentNodeId.toString(),
      label: 'New Node',
      data: {
        office: 'Office Name',
        role: 'Role',
        backgroundColor: '#8A2BE2'
      }
    };

    this.nodes.push(node);

    const edge: Edge = {
      source: this.selectedNode.id.toString(),
      target: this.currentNodeId.toString(),
      label: '',
      data: {
        linkText: 'Manager of'
      }
    };

    this.links.push(edge);
    this.nodes = [...this.nodes];
    this.currentNodeId = this.currentNodeId + 1;
  }
  playAudio() {
    alert('we can play mp3 audio after that');
  }
  addUserInput() {

    const node: UserInputNode = {
      id: this.currentNodeId.toString(),
      label: 'User Input',
      data: {
        // office: 'Office Name',
        // role: 'Role',
        backgroundColor: '#00FFFF'
      }
    };
    this.addNode(node);
  }
  addPlayNumber() {
    const node: PlayNumberNode = {
      mp3FilePath: 'https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3',
      id: this.currentNodeId.toString(),
      label: 'Play Number',
      data: {
        // office: 'Office Name',
        // role: 'Role',
        backgroundColor: '#a0d945'
      }
    };
    this.addNode(node);
  }
  addRedNode() {

    const node: Node = {
      id: this.currentNodeId.toString(),
      label: 'New Node',
      data: {
        office: 'Office Name',
        role: 'Role',
        backgroundColor: '#DC143C'
      }
    };

    this.nodes.push(node);

    const edge: Edge = {
      source: this.selectedNode.id.toString(),
      target: this.currentNodeId.toString(),
      label: '',
      data: {
        linkText: 'Manager of'
      }
    };

    this.links.push(edge);
    this.nodes = [...this.nodes];
    this.currentNodeId = this.currentNodeId + 1;
  }
  addNode(node: Node) {
    this.nodes.push(node);

    const edge: Edge = {
      source: this.selectedNode.id.toString(),
      target: this.currentNodeId.toString(),
      //label: 'Then..',
      data: {
        linkText: 'Manager of'
      }
    };

    this.links.push(edge);
    this.nodes = [...this.nodes];
    this.currentNodeId = this.currentNodeId + 1;

    this.nodeclicked(this.nodes[this.nodes.length-1]);

  }
  addStartNode(node: Node) {



    this.nodes.push(node);

    this.nodes = [...this.nodes];
    this.currentNodeId = this.currentNodeId + 1;
  }
  removeNode() {
    var ind = this.nodes.indexOf(this.selectedNode);
    this.nodes.splice(ind, 1);
    this.nodes = [...this.nodes];
    var removableLinks = this.links.filter(x => x.target == this.selectedNode.id)
    removableLinks.forEach(element => {
      var ind = this.links.indexOf(element);
      this.links.splice(ind, 1);
    });
  }
  addLink() {
    const edge: Edge = {
      source: this.sourceNode.id.toString(),
      target: this.selectedNode.id.toString(),
      label: '',
      data: {
        linkText: 'Manager of'
      }
    };

    this.links.push(edge);
    this.links = [...this.links];
  }
  clear() {
    this.nodes = [];
    this.links = [];
  }
  setAsSourceNode() {
    this.isSourceNodeSelect = true;
  }
}

