/**
  随机获取名言.

  author:prd.
  version:2016.7.22
  note:名言均来自[一个](https://www.wufazhuce.com)

  使用示例(关于使用的调用,请参考最底部的函数.):
        1.先引入本js.
        2.在想使用的地方,调用getMingYan()函数即可获取名言.[getMingYanHref()获取可以跳转至One的名言,getMingYanContent():只获取名言内容]
        3.名言中存储为json数据,index对应One的每一期号,content是名言.
        4.请尊重版权,在展示名言的同时,可将名言链接至One.例如:<a href="https://wufazhuce.com/one/14">是狼是人，日久见心。</br> - </br>小饭</a>其中的14为期号.
*/
var mingyan = [
  {'index':1, 'content':'海阔凭鱼跃,天高任鸟飞。<br>阮阅《诗话总龟前集》'},
  {'index':2, 'content':'慕强便会世俗<br>鲁迅'}
];

/**
  随机获取名言.

  直接调用此函数即可.
*/
function getMingYan(){
  return mingyan[Math.floor(Math.random() * mingyan.length)];
}

/*
只获取内容.
*/
function getMingYanContent(){
  var item = getMingYan();
  return item['content'];
}
