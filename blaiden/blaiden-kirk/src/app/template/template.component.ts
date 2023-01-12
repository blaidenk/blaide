import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})

export class TemplateComponent implements OnInit {

  podcastUrl!: string;

  title = 'Blaiden Kirk';

  public isMenuOpen: boolean = false;

  public onSidenavClick(): void {
    this.isMenuOpen = false;
  }
  
  async ngOnInit() {

    const helloArray = [
      "hello",
      "bonjour",
      "hola",
      "hallo",
      "ciao",
      "こんにちは",
      "안녕하세요",
      "你好",
      "olá",
      "привет",
      "merhaba",
      "नमस्ते",
      "مرحبا",
      "สวัสดี",
      "שָׁלוֹם"
    ];

    // Get the element where you want to display the text
    const element = document.getElementById('hello') as HTMLElement;

    // Set the initial text
    element.innerHTML = helloArray[0];

    // Set the interval to switch the text every 3 seconds
    // Set the interval to switch the text every 3 seconds
setInterval(function() {
  // Get the index of the current text in the array
  const currentIndex = helloArray.indexOf(element.innerHTML);
  // Set the next text in the array, or start over if at the end of the array
const nextIndex = (currentIndex + 1) % helloArray.length;
// Add the "fade" class to the element to trigger the SCSS transition
element.classList.add('fade');
// Update the text and remove the "fade" class after the transition is complete
setTimeout(function() {
element.innerHTML = helloArray[nextIndex];
element.classList.remove('fade');
}, 500);
}, 3000);

  }
}

