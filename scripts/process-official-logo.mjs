import sharp from 'sharp'

const SRC = '/vercel/share/v0-project/public/assets/breakwall-official-source.png'
const OUT_DIR = '/vercel/share/v0-project/public/assets'
const WIDTH = 900
const OUTLINE = 14
const PAD = OUTLINE * 2

const base = await sharp(SRC)
  .resize({ width: WIDTH })
  .extend({ top: PAD, bottom: PAD, left: PAD, right: PAD, background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .ensureAlpha()
  .png()
  .toBuffer()

const { width, height } = await sharp(base).metadata()

const alpha = await sharp(base).extractChannel('alpha').threshold(40).png().toBuffer()
// libvips morphology treats dark pixels as foreground, so `erode` grows the white artwork mask.
const dilatedMask = await sharp(alpha).erode(OUTLINE).extractChannel(0).blur(1.2).toBuffer()

const whiteOutline = await sharp({
  create: { width, height, channels: 3, background: { r: 255, g: 255, b: 255 } },
})
  .joinChannel(dilatedMask)
  .png()
  .toBuffer()

await sharp(whiteOutline)
  .composite([{ input: base }])
  .png({ compressionLevel: 9 })
  .toFile(`${OUT_DIR}/breakwall-logo-official.png`)

console.log('wrote breakwall-logo-official.png', width, height)
