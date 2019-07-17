# miniapp-sortable
## 小程序实现拖拽排序

网上找了一轮拖动排序都不好使，自己整了一个。<br>  

大概是这么完成的：<br> 
1-使用movable-area、movable-view组件，使得小程序可以动画拖拽<br> 
2-当页面一进来先为每一个项标记到坐标.因为每一个项是一个movable-view，而movable-view初始是position:absolute;top:0;的<br> 
3-监听bindtouchend、bindtouchstart事件，开始拖动和结束拖动进行排序处理，目前是整个列表重新排序渲染<br> 
4-当开始拖动列表项时记录被拖动的列表页（默认列表就是array）<br> 
5-当拖动结束后，取得当前结束拖动的坐标，判断该坐标在哪个位置（列表项的索引）<br> 
6-使用拖动项与结束的位置的项进行替换。整个列表进行重排。<br> 

注：目前真机调试发现拖动卡顿，感觉是动画导致的<br> 
