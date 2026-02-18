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

@Injectable({ providedIn: 'root' })
export class BlogReplyService {
  //const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycby_DFml0MP76uwaUu61ujvomYdDwEIssAVocoDYlI9b_bGLCPvvkHP4MqEWZXnHkyEm/exec';

  private readonly GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyNihcJg0UyGMlqaqdk5OoEysQfE4Maj0H9jxWrcEZJKm7FZtEy0jBkhFfLja_5IMX6/exec';
  private readonly PROXY_URL = 'https://corsproxy.io/?url='; // CORS proxy مجاني

  constructor(private readonly http: HttpClient) {}

  async sendReply(payload: BlogReplyPayload): Promise<void> {
    const url = this.PROXY_URL + encodeURIComponent(this.GOOGLE_SCRIPT_URL);

    await firstValueFrom(
      this.http.post(url, payload, {
        headers: { 'Content-Type': 'application/json' }
      })
    );
  }
}
