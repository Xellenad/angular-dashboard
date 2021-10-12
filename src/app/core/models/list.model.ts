import {TaskItemModel} from "./task-item.model";

export interface ListModel {
  title: string;
  id: string;
  data: string;
  connectedTo: any;
  items: TaskItemModel[]
}
