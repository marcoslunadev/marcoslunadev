/* GSAP 3.13 + ScrollTrigger desde npm (empaquetados y con hash por Vite, sin CDN).
   Se exponen en window porque app.js y animations.js comprueban su presencia. */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

window.gsap = gsap;
window.ScrollTrigger = ScrollTrigger;
