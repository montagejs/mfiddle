montageDefine("ce6bbbb","tests/DomUtils/02-by_tagname",{dependencies:["../.."],factory:function(e,t){var n=e("../..");t.name="Get elements by tagName",t.getElements=function(e){return n.getElements({tag_name:"tag2"},e,!0)},t.getByFunction=function(e){return n.getElementsByTagName("tag2",e,!0)},t.expected=[];for(var i=0;20>i;i++)t.expected.push({type:"tag",name:"tag2",attribs:{},children:[{data:" text ",type:"text"}]})}});