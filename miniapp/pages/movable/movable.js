Page({
  data: {
    _lineHeight: 50,//列表页的高度，要与css保持一致
    boxHeight: 0, //拖拽容器的高度
    curIndex: null,
    ismove: false, //当手指点中某一列表项时为true(高亮该列表项)
    data: [
      {text:"111111111111111",}, 
      { text:"22222222222222"}, 
      { text:"333333333333"}, 
      { text:"444444444444"}, 
      { text:"5555555555555"}, 
      { text:"666666666666"}, 
      { text:"7777777777777"}, 
      { text:"8888888888"}, 
      { text:"999999999999999999"}
    ]
  },
  onShow: function () {
    this.setData({
      data: this._getPos(this.data.data)
    })
  },
  _getPos(data){
    // 为列表项数据添加定位
    let arry = []
    data.forEach((val, index)=>{
      var a = val;
      a.y = index * this.data._lineHeight
      arry.push(a)
    })
    return arry
  },
  _getIndex(offsetTop){
    // 通过最终坐标获取是当前哪一个数组项
    // 返回的是index
    return offsetTop > 0 ? (offsetTop / this.data._lineHeight) : 0;
  },
  stratMove(e) {
    let index = this._getIndex(e.currentTarget.dataset.y);//获取当前点击的列表

    this.setData({
      curIndex: index,
      ismove: true
    })
  },
  endMove(e){
    let data = this.data.data,
      curIndex = this.data.curIndex, //拖动数组项的索引
      endY = e.changedTouches[0].pageY, //最终拖动列表项的坐标
      endIndex = 0, //最终被替换的数组项的索引
      lastPost = 0;//列表项的最大高度

    // 获取最终被替换的数组项的索引
    data.forEach((val, index)=>{
      lastPost = (index >= data.length - 1 ? data[index].y + this.data._lineHeight : data[index + 1].y);
      if (endY >= val.y && endY <= lastPost ){
        endIndex = index
      }
    })

    if (endY > lastPost){
      // 拖动超过最后一个的范围
      endIndex =  curIndex
    }

  // 替换数组项
    let itemdata = data[curIndex];
    data[curIndex] = data[endIndex]
    data[endIndex] = itemdata
    
    this.setData({
      data: this._getPos(data),
      ismove: false
    })  
  }
})
