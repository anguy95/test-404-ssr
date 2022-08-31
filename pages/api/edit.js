export default function handler(req, res) {
  res.setPreviewData({
    preview: true
  })
  res.end('Preview mode enabled')
}
