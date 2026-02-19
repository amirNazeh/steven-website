import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { BlogPost, PopularBlog } from '../../data/blog-popular-data';
import { TOPIC_POSTS } from '../../data/blog-topics-data';
import { BlogReplyService } from '../../services/blog-reply.service';
import { Hero } from '../../components/hero/hero';

@Component({
  selector: 'app-blog-detail',
  imports: [ReactiveFormsModule, Hero],
  templateUrl: './blog-detail.html',
  styleUrl: './blog-detail.scss'
})
export class BlogDetail {
  readonly post?: BlogPost;
  isSubmitting = false;
  submitMessage = '';
  readonly replyForm;
  private readonly storageKey = 'blog_reply_identity';

  constructor(
    private readonly route: ActivatedRoute,
    private readonly formBuilder: FormBuilder,
    private readonly replyService: BlogReplyService
  ) {
    const slug = this.route.snapshot.paramMap.get('slug');
    const allPosts = [...PopularBlog, ...TOPIC_POSTS];
    this.post = allPosts.find((item) => item.slug === slug);

    const saved = this.loadSavedIdentity();

    this.replyForm = this.formBuilder.group({
      name: [saved?.name ?? '', Validators.required],
      email: [saved?.email ?? '', [Validators.required, Validators.email]],
      comment: ['', Validators.required],
      save: [Boolean(saved)]
    });
  }

  share(platform: 'facebook' | 'linkedin' | 'twitter'): void {
    const url = this.currentUrl();
    const text = this.post?.title ?? 'Check this out';
    const shareUrl = this.buildShareUrl(platform, url, text);
    window.open(shareUrl, '_blank', 'noopener,noreferrer');
  }

  async copyLink(): Promise<void> {
    const url = this.currentUrl();
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(url);
      return;
    }
    const input = document.createElement('input');
    input.value = url;
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
  }

  async submitReply(): Promise<void> {
    if (!this.post || this.replyForm.invalid) {
      this.replyForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    this.submitMessage = '';

    try {
      const payload = {
        Blogname: this.post.title,
        BlogLink: this.currentUrl(),
        clientemail: this.replyForm.value.email ?? '',
        Clientname: this.replyForm.value.name ?? '',
        Comment: this.replyForm.value.comment ?? ''
      };

      await this.replyService.sendReply(payload);

      this.submitMessage = 'Thanks! Your comment was sent.';
      if (this.replyForm.value.save) {
        localStorage.setItem(this.storageKey, JSON.stringify({
          name: this.replyForm.value.name ?? '',
          email: this.replyForm.value.email ?? ''
        }));
        this.replyForm.patchValue({ comment: '' });
      } else {
        localStorage.removeItem(this.storageKey);
        this.replyForm.reset({ save: false });
      }
    } catch {
      this.submitMessage = 'Sorry, something went wrong. Please try again.';
    } finally {
      this.isSubmitting = false;
    }
  }

  private currentUrl(): string {
    return window.location.href;
  }

  private buildShareUrl(platform: 'facebook' | 'linkedin' | 'twitter', url: string, text: string): string {
    const encodedUrl = encodeURIComponent(url);
    const encodedText = encodeURIComponent(text);

    switch (platform) {
      case 'facebook':
        return `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
      case 'linkedin':
        return `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
      case 'twitter':
        return `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`;
    }
  }

  private loadSavedIdentity(): { name: string; email: string } | null {
    try {
      const raw = localStorage.getItem(this.storageKey);
      return raw ? (JSON.parse(raw) as { name: string; email: string }) : null;
    } catch {
      return null;
    }
  }

}
