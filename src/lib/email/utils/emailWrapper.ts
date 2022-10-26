export interface EmailWrapper {
  emails : Email[];
  total : number;
}

export interface Message {
  description : string;
}

export interface Email {
  id : number;
  title : string;
  vote : boolean;
  label : string;
  typeOfPeople : string;
  timestamp : string;
  visible : boolean;
  description : Message;
  elien : Elien;
}

export interface Elien {
  name : string;
  email : string;
  label : string;
  role : string;
  token : string;
  icon : string;
}

export interface FilterAction {
  id: number;
  newEmail: boolean;
  inbox: boolean;
  starred: boolean;
  send: boolean;
  draft: boolean;
  spam: boolean;
  important: boolean;
  bin: boolean;
}

export interface Label {
  id: number;
  filterPrimary: boolean;
  filterSocial: boolean;
  filterWork: boolean;
  filterFriends: boolean;
  newLabel: boolean;
}

export interface RootObject {
  actions: FilterAction;
  label: Label;
}

export interface WrapperObject{
  inbox: RootObject
}


export interface Entity {
  id: number;
  name: string;
  email?: any;
  label?: any;
  role?: any;
  password: string;
  token?: any;
  icon?: any;
}


export interface MessageChat {
  id: number;
  description: string;
  receiver: Entity;
  sender: Entity;
}

export interface Chat {
  id: number;
  title: string;
  vote: boolean;
  label: number;
  typeOfPeople: string;
  timestamp: Date;
  visible: boolean;
  messages: MessageChat[];
}
