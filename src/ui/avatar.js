// Procedurally painted cartoon avatars (no image assets).
const SK = ['#f1c9a5', '#d9a078', '#a56a46', '#7a4a2e', '#ffdcbc'];
export function drawAvatar(cv, { color = '#3a7bff', skin = 0, hat = 'cap', hair = '#2b1d14', mood = 'happy' } = {}) {
  const x = cv.getContext('2d'), w = cv.width, h = cv.height; x.clearRect(0, 0, w, h);
  const bg = x.createLinearGradient(0, 0, 0, h); bg.addColorStop(0, '#3b3f5c'); bg.addColorStop(1, '#1d2036'); x.fillStyle = bg; x.fillRect(0, 0, w, h);
  x.fillStyle = color; x.beginPath(); x.ellipse(w / 2, h * 1.02, w * 0.42, h * 0.3, 0, 0, Math.PI * 2); x.fill();
  x.fillStyle = SK[skin % SK.length]; x.beginPath(); x.ellipse(w / 2, h * 0.5, w * 0.27, h * 0.31, 0, 0, Math.PI * 2); x.fill();
  x.fillStyle = hair; x.beginPath(); x.ellipse(w / 2, h * 0.32, w * 0.28, h * 0.17, 0, Math.PI, 0); x.fill();
  x.fillStyle = '#12162a'; x.fillRect(w * 0.2, h * 0.42, w * 0.6, h * 0.16); x.fillStyle = color; x.globalAlpha = 0.8; x.fillRect(w * 0.23, h * 0.455, w * 0.54, h * 0.07); x.globalAlpha = 1;
  x.strokeStyle = '#12162a'; x.lineWidth = Math.max(2, w * 0.03); x.lineCap = 'round'; x.beginPath();
  if (mood === 'happy') x.arc(w / 2, h * 0.6, w * 0.09, 0.15 * Math.PI, 0.85 * Math.PI); else x.arc(w / 2, h * 0.7, w * 0.09, 1.15 * Math.PI, 1.85 * Math.PI); x.stroke();
  x.fillStyle = color;
  if (hat === 'helmet') { x.beginPath(); x.ellipse(w / 2, h * 0.34, w * 0.31, h * 0.2, 0, Math.PI, 0); x.fill(); }
  else if (hat === 'band') { x.fillStyle = '#ff3d71'; x.fillRect(w * 0.2, h * 0.3, w * 0.6, h * 0.07); }
  else if (hat === 'crown') { x.fillStyle = '#ffd23f'; x.beginPath(); x.moveTo(w * 0.28, h * 0.3); x.lineTo(w * 0.34, h * 0.12); x.lineTo(w * 0.42, h * 0.26); x.lineTo(w * 0.5, h * 0.08); x.lineTo(w * 0.58, h * 0.26); x.lineTo(w * 0.66, h * 0.12); x.lineTo(w * 0.72, h * 0.3); x.fill(); }
  else { x.beginPath(); x.ellipse(w / 2, h * 0.3, w * 0.3, h * 0.17, 0, Math.PI, 0); x.fill(); x.fillRect(w * 0.5, h * 0.27, w * 0.34, h * 0.05); }
  x.strokeStyle = 'rgba(255,255,255,.25)'; x.lineWidth = 2; x.strokeRect(1, 1, w - 2, h - 2);
}
