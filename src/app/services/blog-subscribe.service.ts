import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BlogSubscribeService {
  private readonly SUBSCRIBE_URL = 'https://script.google.com/macros/s/AKfycbzSPnuzKS7MuMez_1vZlU2e2eY0qRtORlFH_cxvgnpTni3nFHYUg7k_6v1dKBu9AewI/exec';

  constructor(private readonly http: HttpClient) {}

  async subscribeEmail(email: string): Promise<void> {
    const params = new HttpParams().set('email', email);
    await firstValueFrom(this.http.get(this.SUBSCRIBE_URL, { params }));
  }
}
