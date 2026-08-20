import sharp from 'sharp'

const SRC = '/vercel/share/v0-project/public/assets/breakwall-logo-source.jpg'
const OUT_DIR = '/vercel/share/v0-project/public/assets'

// 1) Decode to raw RGBA
const img = sharp(SRC).ensureAlpha()
const { data, info } = await img.raw().toBuffer({ resolveWithObject: true })
const { width: W, height: H, channels } = info
const px = new Uint8Array(data) // RGBA

const idx = (x, y) => (y * W + x) * channels
const isWhite = (i) => px[i] > 236 && px[i + 1] > 236 && px[i + 2] > 236

// 2) Flood-fill background (white connected to the border) -> alpha 0
const visited = new Uint8Array(W * H)
const stack = []
for (let x = 0; x < W; x++) {
  stack.push([x, 0], [x, H - 1])
}
for (let y = 0; y < H; y++) {
  stack.push([0, y], [W - 1, y])
}
while (stack.length) {
  const [x, y] = stack.pop()
  if (x < 0 || y < 0 || x >= W || y >= H) continue
  const p = y * W + x
  if (visited[p]) continue
  const i = idx(x, y)
  if (!isWhite(i)) continue
  visited[p] = 1
  px[i + 3] = 0 // transparent
  stack.push([x + 1, y], [x - 1, y], [x, y + 1], [x, y - 1])
}

// 3) Save full transparent logo
await sharp(Buffer.from(px), { raw: { width: W, height: H, channels } })
  .png()
  .trim()
  .toFile(`${OUT_DIR}/breakwall-logo-transparent.png`)

// 4) Build a solid-white MARK (lighthouse + breakwall bar), excluding the wordmark.
const markH = Math.round(H * 0.6)
const white = new Uint8Array(markH * W * channels)
for (let y = 0; y < markH; y++) {
  for (let x = 0; x < W; x++) {
    const si = idx(x, y)
    const di = (y * W + x) * channels
    const a = px[si + 3]
    white[di] = 255
    white[di + 1] = 255
    white[di + 2] = 255
    white[di + 3] = a
  }
}
await sharp(Buffer.from(white), { raw: { width: W, height: markH, channels } })
  .png()
  .trim()
  .toFile(`${OUT_DIR}/breakwall-mark-white.png`)

// 5) Dark-navy mark variant (for light backgrounds / future dark-mode toggle)
const navy = new Uint8Array(markH * W * channels)
for (let y = 0; y < markH; y++) {
  for (let x = 0; x < W; x++) {
    const si = idx(x, y)
    const di = (y * W + x) * channels
    navy[di] = 15
    navy[di + 1] = 34
    navy[di + 2] = 56
    navy[di + 3] = px[si + 3]
  }
}
await sharp(Buffer.from(navy), { raw: { width: W, height: markH, channels } })
  .png()
  .trim()
  .toFile(`${OUT_DIR}/breakwall-mark-navy.png`)

console.log('done', { W, H, markH })
