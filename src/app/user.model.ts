export interface Message{
    date:string;
    message:string;
    status:string;
}

export interface User{
    name:string;
    avatar:string;
    visible:true;
    messages: Message[];
}
