const express = require('express')
const path = require('path')
const {mergePdf} = require('./merge')

const app = express()
const port = 3000
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })
app.use('/static', express.static('Public'))


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'Templates/index.html'))
})
app.post('/merge', upload.array('pdfs', 2), async (req, res, next)=> {
  // console.log(req.files)
 await mergePdf(path.join(__dirname,req.files[0].path),path.join(__dirname,req.files[1].path))
  // res.send({data: req.files})
 res.redirect("http://localhost:3000/static/merged.pdf")
  // req.files is array of `photos` files
  // req.body will contain the text fields, if there were any
})


app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})

