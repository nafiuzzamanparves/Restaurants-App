import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { OrderService } from '../shared/order.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  feedbackForm: FormGroup;

  showSlider: boolean = true;

  constructor(private formBuilder: FormBuilder, private api: OrderService) { }

  ngOnInit(): void {
    this.feedbackForm = this.formBuilder.group({
      name: '',
      email: '',
      feedback: ''
    })
  }

  postFeedback() {
    this.api.postFeedback(this.feedbackForm.value).subscribe(res => {
      alert('Your Feedback is Successfully saved')
    },
      err => alert('Something is wrong')
    )
  }
}
