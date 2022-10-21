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
