import { Node } from '@swimlane/ngx-graph';
export interface UserInputNode extends Node { }
export interface PlayNumberNode extends Node {
    mp3FilePath?: string;

}