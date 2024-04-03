import { Component } from '@angular/core';

interface TableRow {
  email: string;
  contact: string;
  address: string;
}

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  displayedColumns: string[] = ['email', 'contact', 'address'];
  dataSource: TableRow[] = [
    { email: 'admin@example.com', contact: '123-456-7890', address: '123 Street, City' },
    { email: 'example2@example.com', contact: '456-789-1230', address: '456 Avenue, Town' },
  ];
}
