export const games = [
 { slug:'elden-ring', title:'Elden Ring', genre:'action RPG', deckFps:'40 FPS', allyFps:'60 FPS', storage:60, preset:'Balanced 40 FPS', notes:'Cap at 40, medium textures, shadows low, motion blur off. Great OLED fit.' },
 { slug:'baldurs-gate-3', title:'Baldur\'s Gate 3', genre:'RPG', deckFps:'30 FPS', allyFps:'45 FPS', storage:150, preset:'Quality 30 FPS', notes:'Use FSR balanced, cap 30, lower crowd and shadow settings in busy city zones.' },
 { slug:'cyberpunk-2077', title:'Cyberpunk 2077', genre:'open-world RPG', deckFps:'30 FPS', allyFps:'45-60 FPS', storage:85, preset:'Performance 30/40', notes:'Use Steam Deck preset as baseline, FSR quality/balanced, no ray tracing.' },
 { slug:'stardew-valley', title:'Stardew Valley', genre:'cozy sim', deckFps:'60 FPS', allyFps:'60 FPS', storage:2, preset:'Battery Saver', notes:'Excellent battery game. Cap refresh lower for long flights.' },
 { slug:'hades-ii', title:'Hades II', genre:'roguelike', deckFps:'60 FPS', allyFps:'60+ FPS', storage:10, preset:'High 60 FPS', notes:'Fast-loading and ideal handheld controls. Keep VSync on and cap for battery.' },
 { slug:'palworld', title:'Palworld', genre:'survival crafting', deckFps:'30 FPS', allyFps:'45 FPS', storage:40, preset:'Low/Medium Stability', notes:'Prioritize stable frame pacing; lower view distance and shadows.' },
 { slug:'diablo-iv', title:'Diablo IV', genre:'ARPG', deckFps:'40 FPS', allyFps:'60 FPS', storage:90, preset:'Balanced 40 FPS', notes:'Texture quality depends on VRAM/storage. Great with controller UI.' },
 { slug:'no-mans-sky', title:'No Man\'s Sky', genre:'space survival', deckFps:'40 FPS', allyFps:'50 FPS', storage:20, preset:'Balanced Exploration', notes:'Cap 40 for smoother battery play; reduce planet quality if stuttering.' },
 { slug:'balatro', title:'Balatro', genre:'deckbuilder', deckFps:'60 FPS', allyFps:'60 FPS', storage:1, preset:'Ultra Battery Saver', notes:'Tiny install, excellent on every handheld, ideal OLED travel game.' },
 { slug:'red-dead-redemption-2', title:'Red Dead Redemption 2', genre:'open-world', deckFps:'30 FPS', allyFps:'40 FPS', storage:120, preset:'Cinematic 30 FPS', notes:'Use Vulkan, cap 30, favor medium textures and lower volumetrics.' }
] as const;
