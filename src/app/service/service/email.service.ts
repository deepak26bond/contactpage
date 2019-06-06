import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class EmailService {
  
  constructor(private http: HttpClient) { 
    
    
  }
  sendEmail(formData) {

    const httpOptions = {
    
    headers: new HttpHeaders({
    
    'Content-Type': 'application/json',
    
    'Authorization': ''
    
    })
    
    };
    
    
    const body = {
    
    "personalizations": [{
    
    "to": [{
    
    "email": formData.email
    
    }]
    
    }],
    
    "from": {
    
    "email": "dvpartners@gmail.com"
    
    },
    
    "subject": "Thanks for contacting!",
    
    "content": [{
    
    "type": "text/plain",
    
    "value": `Hi ${formData.first_name},
    \n Thanks for contacting DV Partners.\n We will get back to you soon.
    \nDV Partners`
    
    }]
    
    };
    
    const url = 'https://cors-anywhere.herokuapp.com/https://api.sendgrid.com/v3/mail/send';
    
    return this.http.post(url, body, httpOptions);
    
    }



    sendAdminEmail(formData) {

      const httpOptions = {
      
      headers: new HttpHeaders({
      
      'Content-Type': 'application/json',
      
      'Authorization': ''
      
      })
      
      };
      
      
      const body = {
      
      "personalizations": [{
      
      "to": [{
      
      "email": "deepak_agarwal@outlook.com"
      
      }]
      
      }],
      
      "from": {
      
      "email": "dvpartners@gmail.com"
      
      },
      
      "subject": `User Contacted on DV Partners - ${formData.first_name}`,
      
      "content": [{
      
      "type": "text/plain",
      
      "value": `Hi Admin,
      \n User contacted for DV Partners.\n Users Email - ${formData.email}\n Users Message - ${formData.comment}
      \nDV Partners`
      
      }]
      
      };
      
      const url = 'https://cors-anywhere.herokuapp.com/https://api.sendgrid.com/v3/mail/send';
      
      return this.http.post(url, body, httpOptions)
      
      }


}
