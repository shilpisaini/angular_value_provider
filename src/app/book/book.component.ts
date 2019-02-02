import { Component, OnInit, InjectionToken, Inject } from '@angular/core';
import { Book } from '../book';


const JAVA_BOOK = new Book('Learning Java', 'Java');
export const HELLO_MESSAGE = new InjectionToken<string>('Hello!');

@Component({
  selector: 'app-book',
  providers: [ 
    { provide: Book, useValue: JAVA_BOOK },
    { provide: HELLO_MESSAGE, useValue: 'Hello World!' }
  ],
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.sass']
})
export class BookComponent implements OnInit {

  constructor(private book: Book, 
    @Inject(HELLO_MESSAGE) private message: string) { }

ngOnInit() {
}


}
