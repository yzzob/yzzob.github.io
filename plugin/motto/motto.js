var mingyan = [
  '海阔凭鱼跃,天高任鸟飞。<br1>阮阅《诗话总龟前集》',
  '慕强便会世俗<br1>鲁迅',
  '你想活出怎样的人生<br1>宫崎骏',
  '滚滚长江东逝水，浪花淘尽英雄。是非成败转头空。<br>青山依旧在，几度夕阳红。<br>白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢。<br>古今多少事，都付笑谈中。<br1>杨慎 《临江仙·滚滚长江东逝水》',
  'I love you so much,<br>I just don\'t like you anymore.<br1>《one day》',
  'ta都还没认输,<br>你凭什么说你击败了我:).<br1>鲁迅',
  'ta赞美的是人类领袖,<br>从来不是一个不败的帝国.<br1>'
];
function getMingYan(){
  return mingyan[Math.floor(Math.random() * mingyan.length)];
}

function getMingYanContent(){
  return getMingYan();
}

