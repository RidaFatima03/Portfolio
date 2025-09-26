// lib/projects.ts
export type Project = {
  title: string;
  href: string;
  description?: string;
  tags?: string[];
  thumbnail?: string; // path under /public
  alt?: string;
};

export const projects: Project[] = [
  {
    title: "Background Remover",
    href: "https://background-removerapp.netlify.app",
    description: "Client-side background removal UI demo.",
    tags: ["canvas", "image-processing", "UI"],
    thumbnail: "/projects/background-remover.webp",
    alt: "Screenshot of Background Remover web app",
  },
  {
    title: "Image → Pose",
    href: "https://image-to-pose.netlify.app",
    description: "Estimate/visualize human poses from images.",
    tags: ["vision", "ml", "webcam"],
    thumbnail: "/projects/pose-to-poster.webp",
    alt: "Screenshot of Image to Pose app",
  },
  {
    title: "Soundboard",
    href: "https://soundboard-webapp.netlify.app",
    description: "Triggerable audio pads with slick UI.",
    tags: ["audio", "p5.js", "UX"],
    thumbnail: "/projects/soundboard.webp",
    alt: "Screenshot of Soundboard app",
  },
  {
    title: "Audio-Reactive Visualiser",
    href: "https://audioreactivevisualiser.netlify.app",
    description: "Live waveform/spectrum visuals from mic.",
    tags: ["audio", "visuals", "p5.js"],
    thumbnail: "/projects/audio-reactive-visual.webp",
    alt: "Screenshot of audio reactive visualiser",
  },
  {
    title: "Pomodoro Timed",
    href: "https://pomodoro-timed.netlify.app",
    description: "Minimal pomodoro timer with sessions.",
    tags: ["productivity", "timer"],
    thumbnail: "/projects/pomodoro.webp",
    alt: "Screenshot of Pomodoro app",
  },
  {
    title: "Hangman",
    href: "https://hangman-rida.netlify.app",
    description: "Classic hangman web game.",
    tags: ["game", "vanilla-js"],
    thumbnail: "/projects/hangman.webp",
    alt: "Screenshot of Hangman game",
  },
  {
    title: "Tic-Tac-Toe",
    href: "https://tictac-toe-web-game.netlify.app",
    description: "Tic-tac-toe with basic AI.",
    tags: ["game", "logic"],
    thumbnail: "/projects/tictactoe.webp",
    alt: "Screenshot of Tic-Tac-Toe game",
  },
  {
    title: "Todo List",
    href: "https://web-apptodolist.netlify.app",
    description: "CRUD todos with persistence.",
    tags: ["crud", "localstorage"],
    thumbnail: "/projects/todolist.webp",
    alt: "Screenshot of Todo List app",
  },
  {
    title: "Wave Pattern Generator",
    href: "https://wave-pattern-gen.netlify.app",
    description: "Procedural wave patterns exportable as images.",
    tags: ["generative", "graphics"],
    thumbnail: "/projects/wavemaker.webp", // or /projects/wave-pattern-gen.webp
    alt: "Screenshot of Wave Pattern Generator",
  },
];
