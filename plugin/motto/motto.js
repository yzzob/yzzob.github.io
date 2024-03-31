var mingyan = [
  '海阔凭鱼跃,天高任鸟飞。</br> - </br>阮阅《诗话总龟前集》',
  '慕强便会世俗</br> - </br>鲁迅',
  '你想活出怎样的人生</br> - </br>宫崎骏',
  '滚滚长江东逝水，浪花淘尽英雄。是非成败转头空。<br>青山依旧在，几度夕阳红。<br>白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢。<br>古今多少事，都付笑谈中。</br> - </br>杨慎 《临江仙·滚滚长江东逝水》'
];
/**
  随机获取名言.

  直接调用此函数即可.
*/
function getMingYan(){
  return mingyan[Math.floor(Math.random() * mingyan.length)];
}

function getMingYanContent(){
  return getMingYan();
}

