export interface Person {
    name: string;
  }

export interface TreeNode {
  name: string;
  disabled?: boolean;
  children?: TreeNode[];
}

export interface FlatNode {
  expandable: boolean;
  name: string;
  level: number;
  disabled: boolean;
}

export interface ChartData{
  id: number,
  subject: string,
  requsterName: string, 
  createdDate: string,
  status: string,
  priority: string,
  assignTo: string,
}