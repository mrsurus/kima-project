export interface Person {
  name: string
}

export interface Drawer {
  name: string,
  active: boolean,
  bgcolor: string,
  color: string,
  textcolor: string,
  activbgcolor: string,
  hovertextcolor: string,
  textsize: string,
}

export interface icon {
  active: boolean
  iconcolor:string,
  hovericoncolor:string,
  activeiconcolor:string,
  iconsize:string,
}


export interface TreeNode {
  name: string;
  disabled?: boolean;
  children?: TreeNode[];
  level?: any;
}

export interface FlatNode {
  expandable: boolean;
  name: string;
  level?: any;
  disabled?: boolean;
}

export interface ChartData {
  id: number,
  subject: string,
  requsterName: string,
  createdDate: string,
  status: string,
  priority: string,
  assignTo: string,
}

