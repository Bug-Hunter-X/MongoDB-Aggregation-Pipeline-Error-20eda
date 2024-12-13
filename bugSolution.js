```javascript
//Corrected aggregation pipeline
aggregate([{
    $match: { status: "A" }
  }, {
    $group: {
      _id: "$customerId",
      totalValue: { $sum: { $toDouble: "$value" } }
    }
  }, {
    $sort: { totalValue: -1 }
  }, {
    $limit: 10
}]).toArray(function(err, result){...
});
```