import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import jsPDF from 'jspdf';

import autoTable from 'jspdf-autotable'

@Component({
  selector: 'app-invoice-details',
  standalone: false,
  
  templateUrl: './invoice-details.component.html',
  styleUrl: './invoice-details.component.css'
})

export class InvoiceDetailsComponent {

  shareData:any;
  constructor(){}
  
  
  ngOnInit():void{
  const navigation = window.history.state;
  if(navigation){
    this.shareData = navigation.response;
  }
  }

  downloadPDF(): void {
    // Get the HTML content to print (assuming the entire section is wrapped in 'print-section' div)
    const element = document.getElementById('print-section');

    if (!element) {
      alert('No content found to generate the PDF.');
      return;
    }

    // Create a jsPDF instance
    const doc = new jsPDF('p', 'mm', 'a4');

    // Use the jsPDF HTML renderer to render the element
    doc.html(element, {
      callback: (doc: { save: (arg0: string) => void; }) => {
        // Save the generated PDF
        doc.save('Invoice.pdf');
      },
      x: 10, // Optional, adjust the x-coordinate
      y: 10, // Optional, adjust the y-coordinate
      html2canvas: {
        scale: 0.5, // Adjust the scale for content rendering
      },
    });
  }

  
}
