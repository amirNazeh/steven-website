import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
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
  private readonly GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxcdk2ejPo7XO4Whr2RdR8AIuZcw_kjWFU8l3ZGoHkf6c8Xx6qMkh8k0QmwYXLjfiHx/exec';

  constructor(private readonly http: HttpClient) {}

  async sendReply(payload: BlogReplyPayload): Promise<void> {
    const params = new HttpParams()
      .set('Blogname', payload.Blogname)
      .set('BlogLink', payload.BlogLink)
      .set('clientemail', payload.clientemail)
      .set('Clientname', payload.Clientname)
      .set('Comment', payload.Comment);

    await firstValueFrom(
      this.http.get(this.GOOGLE_SCRIPT_URL, { params })
    );
  }
}
