import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContentComponent } from './content/content.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { LinksComponent } from './links/links.component';

@NgModule({
  declarations: [
    ToolbarComponent,
    NavbarComponent,
    ContentComponent,
    LinksComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
  ],
  exports: [
    ToolbarComponent,
    NavbarComponent,
    ContentComponent,
    LinksComponent,
  ],
})
export class SharedModule {}
