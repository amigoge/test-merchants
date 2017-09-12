/**
 * PagesController
 *
 * @description :: Server-side logic for managing pages
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  // response fake data for front-end
  getDummyData:function(req,res){
    var data =fakeData;
    res.json(data);
  }
};
// array for test
var fakeData=[
  {
    "_id" : 0,
    "location" : "taichung",
    "title" : "XX盃市集-用愛發電吧",
    "content" : "測試用資料而已啦～",
    "raiseTime" : "2017-09-09T16:00:00.000Z",
    "createdAt" : "2017-09-02T08:36:32.140Z",
    "updatedAt" : "2017-09-02T08:36:32.140Z",
    "status" : "normal"
  },
  {
    "_id" : 1,
    "location" : "taichung",
    "title" : "XX盃市集-用愛發電吧",
    "content" : "測試用資料而已啦～",
    "raiseTime" : "2017-09-09T16:00:00.000Z",
    "createdAt" : "2017-09-02T08:36:32.140Z",
    "updatedAt" : "2017-09-02T08:36:32.140Z",
    "status" : "normal"
  },
  {
    "_id" : 2,
    "location" : "taichung",
    "title" : "XX盃市集-用愛發電吧",
    "content" : "測試用資料而已啦～",
    "raiseTime" : "2017-09-09T16:00:00.000Z",
    "createdAt" : "2017-09-02T08:36:32.140Z",
    "updatedAt" : "2017-09-02T08:36:32.140Z",
    "status" : "normal"
  }
];
