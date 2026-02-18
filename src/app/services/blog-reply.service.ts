import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

export type BlogReplyPayload = {
  Blogname: string;
  BlogLink: string;
  clientemail: string;
  Clientname: string;
  Comment: string;
};

//const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycby_DFml0MP76uwaUu61ujvomYdDwEIssAVocoDYlI9b_bGLCPvvkHP4MqEWZXnHkyEm/exec';
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyNihcJg0UyGMlqaqdk5OoEysQfE4Maj0H9jxWrcEZJKm7FZtEy0jBkhFfLja_5IMX6/exec';

@Injectable({ providedIn: 'root' })
export class BlogReplyService {
  constructor(private readonly http: HttpClient) {}

  async sendReply(payload: BlogReplyPayload): Promise<void> {
    await firstValueFrom(
      this.http.post(GOOGLE_SCRIPT_URL, payload, {
        headers: { 'Content-Type': 'application/json' }
      })
    );
  }
}
