import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.css']
})
export class YoutubeComponent implements OnInit {

  @Input()

  url1: string = "https://www.youtube.com/embed/MDLn5-zSQQI?autoplay=1";
  url2: string="https://www.youtube.com/embed/1PnVor36_40?autoplay=1";
  url3: string="https://www.youtube.com/embed/7g8Gg2QVdeU?autoplay=1";
  url4: string="https://www.youtube.com/embed/m80E1K75vDI?autoplay=1";
  url5: string="https://www.youtube.com/embed/Ati-oip_HcU?autoplay=1";
  urlSafe: SafeResourceUrl | undefined;

  text='';

  video1="HTML Tutorial";
  video2="CSS Tutorial";
  video3="BOOTSTRAP Tutorial";
  video4="Deep Focus";
  video5="Angular Tutorial";


  constructor(public sanitizer: DomSanitizer) { }
  
  ngOnInit() {
    
  }

  playvideo(){
    this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.url1);
    this.text=this.video1;
  }
  playvideo1(){
    this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.url2);
    this.text=this.video2;
  }
  playvideo2(){
    this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.url3);
    this.text=this.video3;
  }
  playvideo3(){
    this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.url4);
    this.text=this.video4;
  }
  playvideo4(){
    this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.url5);
    this.text=this.video5;
  }

}

