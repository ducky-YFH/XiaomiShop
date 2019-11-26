let express = require('express');
let router = express.Router();
let path = require('path');
let fs = require('fs');

let phoneList = fs.readFileSync(path.join(__dirname, '../data/phonelist.json'), 'utf-8');
let detailData1 = fs.readFileSync(path.join(__dirname, '../data/detail.json'), 'utf-8');
let detailData2 = fs.readFileSync(path.join(__dirname, '../data/detail2.json'), 'utf-8');
let categoryData = fs.readFileSync(path.join(__dirname, '../data/category.json'), 'utf-8');

router.get('/phonelist', function (req, res) {
  res.json(JSON.parse(phoneList))
});

router.get('/detail', function (req, res) {
  // 查询数据库，获取数据
  if (req.query.id == 1) {
    res.json(JSON.parse(detailData1))
  }else if(req.query.id ==2){
    res.json(JSON.parse(detailData2))
  }
   else {
    res.json(401, { status: 0 })
  }
})

router.get('/category', function (req, res) {
  res.json(JSON.parse(categoryData))
});

module.exports = router;
