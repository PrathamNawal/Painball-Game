// Visual themes for the 3D duel arenas. Pure data.
export const THEMES = [
  { id: 'desert', name: 'Sunset Desert', sky: ['#3b2a8c', '#d3558f', '#ffb27a'], sun: '#ffd39a', sunDir: [-0.5, 0.18, -1], fog: '#e58a8c', ground: '#e0806f', ground2: '#c9655f', hemi: ['#ffc9d6', '#7a3b63'], bunkers: ['#ff5d8f', '#ffd23f', '#4fe0d0'], props: 'palms', tint: [1.04, 0.98, 1.06], grid: 'rgba(255,230,210,.18)' },
  { id: 'beach', name: 'Candy Beach', sky: ['#38b6ff', '#8fe3ff', '#ffe8f3'], sun: '#fff4d0', sunDir: [0.4, 0.5, -1], fog: '#bdeeff', ground: '#ffd9a8', ground2: '#ffc690', hemi: ['#e6f9ff', '#d99a7a'], bunkers: ['#ff6fb5', '#38d9ff', '#ffe14d'], props: 'candy', tint: [1.0, 1.04, 1.08], grid: 'rgba(255,255,255,.35)' },
  { id: 'frost', name: 'Frost Park', sky: ['#2b4a9a', '#7fb2ee', '#e8f4ff'], sun: '#e8f3ff', sunDir: [0.3, 0.35, -1], fog: '#cfe4f7', ground: '#eaf3fb', ground2: '#d4e5f4', hemi: ['#ffffff', '#8fa8c8'], bunkers: ['#ff7a45', '#3fd1ff', '#7a5cff'], props: 'pines', tint: [0.98, 1.02, 1.1], grid: 'rgba(110,150,200,.25)' },
  { id: 'neon', name: 'Neon Night', sky: ['#07031a', '#2a0b57', '#7a1fa2'], sun: '#b56bff', sunDir: [0, 0.2, -1], fog: '#2a0b57', ground: '#150a33', ground2: '#0d0622', hemi: ['#7b61ff', '#1a0840'], bunkers: ['#00f5d4', '#ff2fb8', '#fff94a'], props: 'crystals', tint: [1.1, 0.95, 1.2], grid: 'rgba(120,255,240,.35)', glow: true },
  { id: 'jungle', name: 'Jungle Ruins', sky: ['#0f6b4f', '#59c98a', '#e3ffb5'], sun: '#fff1b0', sunDir: [-0.3, 0.45, -1], fog: '#a6e0a0', ground: '#6ec168', ground2: '#4ea658', hemi: ['#e8ffd8', '#3b6a3a'], bunkers: ['#ff9f1c', '#ff4d6d', '#2ec4b6'], props: 'ferns', tint: [0.98, 1.06, 0.98], grid: 'rgba(255,255,255,.28)' },
];
export const themeById = id => THEMES.find(t => t.id === id) || THEMES[0];
export const areaOfStage = n => Math.floor((Math.max(1, n) - 1) / 5) % THEMES.length;
export const OUTFITS = [
  { id: 'rookie', name: 'Rookie', cost: 0, color: '#3a7bff', hat: 'cap' },
  { id: 'ranger', name: 'Ranger', cost: 60, color: '#2ec47a', hat: 'helmet' },
  { id: 'ninja', name: 'Shadow', cost: 90, color: '#2b2f4a', hat: 'band' },
  { id: 'bolt', name: 'Bolt', cost: 120, color: '#ffcf33', hat: 'helmet' },
  { id: 'blaze', name: 'Blaze', cost: 150, color: '#ff4d4d', hat: 'cap' },
  { id: 'royal', name: 'Royal', cost: 220, color: '#b043ff', hat: 'crown' },
];
export const outfitOf = id => OUTFITS.find(o => o.id === id) || OUTFITS[0];
const FOE_OUTFITS = [{ color: '#ff7a1a', hat: 'cap' }, { color: '#e63946', hat: 'helmet' }, { color: '#2a9d8f', hat: 'band' }, { color: '#8338ec', hat: 'helmet' }, { color: '#f4a261', hat: 'cap' }];
export const foeOutfit = stage => FOE_OUTFITS[(stage - 1) % FOE_OUTFITS.length];
const NAMES = ['Dusty', 'Splatter', 'Mango', 'Pixel', 'Rusty', 'Turbo', 'Cinder', 'Pogo', 'Nova', 'Tango', 'Echo', 'Biscuit', 'Gizmo', 'Hex', 'Marble', 'Zephyr', 'Ricochet', 'Blitz'];
const TITLES = ['Rookie', 'Sneak', 'Ace', 'Phantom', 'Hawk', 'Captain', 'Ghost', 'Baron'];
export const foeName = stage => `${TITLES[Math.floor((stage - 1) / 3) % TITLES.length]} ${NAMES[(stage * 7) % NAMES.length]}`;
