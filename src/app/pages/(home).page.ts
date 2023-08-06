import { MarkdownComponent, injectContent } from '@analogjs/content';
import { Component } from '@angular/core';
import { PostAttributes } from '../interfaces/post-attributes';
import { AsyncPipe, CommonModule, NgIf } from '@angular/common';

@Component({
  standalone: true,
  imports: [MarkdownComponent, AsyncPipe, NgIf],
  styles: [
    `
      .hero {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        margin-bottom: 3em;
      }

      .logo {
        width: 300px;
      }

      .description {
        color: #718096;
      }

      h1 {
        font-size: 2em;
        line-height: 1.2;
      }

      .code {
        color: #4299e1;
      }
    `,
  ],
  template: `<div class="hero">
      <img class="logo" src="utsc-logo.svg" />
      <h1>
        <span class="code">{{ courseCode }}</span> - {{ courseTitle }}
      </h1>
      <p class="description">{{ description }}</p>
      <p>
        Instructors: <a target="_blank" href="https://choy.in">Cho Yin Yong</a>,
        <a target="_blank" href="https://aleksanderbodurri.com"
          >Aleksander Bodurri</a
        >
      </p>
    </div>
    <ng-container *ngIf="post$ | async as post">
      <analog-markdown [content]="post.content"></analog-markdown>
    </ng-container> `,
})
export default class HomePage {
  courseCode = 'CSCD01';
  courseTitle = 'Engineering Large Software Systems';
  description = `
  An introduction to the theory and practice of large-scale software system design, development,
  and deployment. Project management; advanced UML; requirements engineering; verification and
  validation; software architecture; performance modeling and analysis; formal methods in software
  engineering.
  `;
  post$ = injectContent<PostAttributes>();
}