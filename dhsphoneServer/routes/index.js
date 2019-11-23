let express = require('express');
let router = express.Router();
let path = require('path');
let fs = require('fs');

let phoneList = fs.readFileSync(path.join(__dirname, '../data/phonelist.json'), 'utf-8');
let detailData = fs.readFileSync(path.join(__dirname, '../data/detail.json'), 'utf-8');

router.get('/phonelist', function (req, res) {
  res.json(JSON.parse(phoneList))
});

router.get('/detail', function (req, res) {
  // 查询数据库，获取数据
  if (req.query.id <= 20) {
    res.json(JSON.parse(detailData))
  } else {
    res.json(401, { status: 0 })
  }
})

module.exports = router;
