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
  private readonly GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyTKEpuM7dsVbpu4Uqpo7mdbpplJiihs7pkCkiGW1_SK8N3reo0sk05o9Ksb2wI0riJ/exec';

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
