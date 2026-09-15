import { Component, signal } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { Skills } from './components/skills/skills';
import { Experience } from './components/experience/experience';
import { Projects } from './components/projects/projects';

@Component({
  selector: 'app-root',
  imports: [
    Navbar,
    Hero,
    Skills,
    Experience,
    Projects
],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}