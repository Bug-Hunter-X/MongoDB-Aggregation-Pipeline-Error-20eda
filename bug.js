```javascript
//Incorrect aggregation pipeline causing unexpected results
aggregate([{
    $match: { status: "A" }
  }, {
    $group: {
      _id: "$customerId",
      totalValue: { $sum: "$value" }
    }
  }, {
    $sort: { totalValue: -1 }
  }, {
    $limit: 10
}]).toArray(function(err, result){...
});
```