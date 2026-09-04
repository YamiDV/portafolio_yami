import { Component, signal } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { Skills } from './components/skills/skills';

@Component({
  selector: 'app-root',
  imports: [
    Navbar,
    Hero,
    Skills
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}