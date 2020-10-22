import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Node } from '@swimlane/ngx-graph';

@Component({
  selector: 'app-node-properties',
  templateUrl: './node-properties.component.html',
  styleUrls: ['./node-properties.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => NodePropertiesComponent),
    multi: true
  }]
})
export class NodePropertiesComponent implements OnInit, ControlValueAccessor {
  @Input() node: Node;
  constructor() { }
  writeValue(value: Node): void {
    this.node = value;
    this.updateChanges();
  }
  onLabelChange(value){
    this.node.label = value;
    this.onChange(this.node);
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }
  onChange: (_: any) => void = (_: any) => { };
  onTouched: () => void = () => { };
  updateChanges() {
    this.onChange(this.node);
  }
  ngOnInit(): void {
  }
  isPlayNumber(node){
    return node?.mp3FilePath;
  }


}
