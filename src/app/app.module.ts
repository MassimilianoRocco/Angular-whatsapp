import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { HeaderComponent } from "./header/header.component";
import { ChatBoxComponent } from "./chat-box/chat-box.component";
import { LeftBoxComponent } from "./left-box/left-box.component";
import { CardComponent } from "./left-box/card/card.component";
import { CommonModule, DatePipe } from "@angular/common";

@NgModule({
    declarations: [AppComponent, HeaderComponent, ChatBoxComponent, LeftBoxComponent, CardComponent],
    imports: [BrowserModule, CommonModule, DatePipe],
    bootstrap:[AppComponent],

})
export class AppModule{

}