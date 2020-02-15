export class Todo {
    id:number;
    title:string;
   public complete:boolean;

constructor(values:Object={})
{
    Object.assign(this,values)
}
}