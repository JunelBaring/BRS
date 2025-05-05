import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // 🔁 This includes NgFor, NgClass, Pipes

@Component({
  selector: 'app-my-reservations',
  standalone: true, // make sure this is a standalone component
  imports: [CommonModule], // ✅ this fixes *ngFor, ngClass, titlecase
  templateUrl: './my-reservations.component.html',
  styleUrls: ['./my-reservations.component.css']
})
export class MyReservationsComponent {
  reservations = [
    {
      facility: 'Barangay Hall',
      date: '2025-05-10',
      time: '9:00 AM - 12:00 PM',
      status: 'approved'
    },
    {
      facility: 'Gymnasium',
      date: '2025-05-12',
      time: '2:00 PM - 5:00 PM',
      status: 'pending'
    }
  ];
}
