montageDefine("ce6bbbb","tests/DomUtils/03-by_type",{dependencies:["../.."],factory:function(e,t){var n=e("../..");t.name="Get elements by type",t.getElements=function(e){return n.getElements({tag_type:"script"},e,!0)},t.getByFunction=function(e){return n.getElementsByTagType("script",e,!0)},t.expected=[];for(var i=0;20>i;i++)t.expected.push({type:"script",name:"script",attribs:{},children:[{data:"text",type:"text"}]})}});