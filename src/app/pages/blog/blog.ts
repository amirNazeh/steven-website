import { Component } from '@angular/core';
import { BlogCard } from '../../components/blog-card/blog-card';
import { BLOG_SECTION, PopularBlog, BlogPost } from '../../data/blog-popular-data';
import { TOPIC_FILTERS, TOPIC_POSTS, TYPE_FILTERS, TopicFilter } from '../../data/blog-topics-data';
import { Hero } from '../../components/hero/hero';
import { BlogSubscribeService } from '../../services/blog-subscribe.service';

@Component({
  selector: 'app-blog-page',
  imports: [BlogCard ,Hero],
  templateUrl: './blog.html',
  styleUrl: './blog.scss'
})
export class BlogPage {
  readonly section = BLOG_SECTION;
  readonly popularPosts: BlogPost[] = PopularBlog;
  readonly topicFilters: TopicFilter[] = TOPIC_FILTERS;
  readonly typeFilters: TopicFilter[] = TYPE_FILTERS;
  private readonly topicSource: BlogPost[] = TOPIC_POSTS;

  selectedFilter = this.topicFilters[0]?.value ?? 'all';
  selectedType = this.typeFilters[0]?.value ?? 'all';
  subscribeMessage = '';
  isSubscribing = false;

  constructor(private readonly blogSubscribeService: BlogSubscribeService) {}

  get filteredTopics(): BlogPost[] {
    return this.topicSource.filter((post) => {
      const matchesTopic = this.selectedFilter === 'all' || post.category === this.selectedFilter;
      const matchesType = this.selectedType === 'all' || post.type === this.selectedType;
      return matchesTopic && matchesType;
    });
  }

  selectFilter(value: string): void {
    this.selectedFilter = value;
  }

  selectType(value: string): void {
    this.selectedType = value;
  }

  async subscribe(event: Event, email: string): Promise<void> {
    event.preventDefault();
    const trimmed = email.trim();
    if (!trimmed) {
      this.subscribeMessage = 'Please enter a valid email.';
      return;
    }
    this.isSubscribing = true;
    this.subscribeMessage = '';
    try {
      await this.blogSubscribeService.subscribeEmail(trimmed);
      this.subscribeMessage = 'Thanks! You are on the list.';
    } catch {
      this.subscribeMessage = 'Something went wrong. Please try again.';
    } finally {
      this.isSubscribing = false;
    }
  }
}
