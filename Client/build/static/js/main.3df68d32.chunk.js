(this.webpackJsonpchoice_picks=this.webpackJsonpchoice_picks||[]).push([[0],{7:function(e,t,n){},82:function(e,t,n){"use strict";n.r(t);var s=n(0),c=n(1),a=n.n(c),i=n(8),o=n.n(i),l=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,83)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),s(e),c(e),a(e),i(e)}))},r=(n(7),n(2)),d=n(3),j=n(5),m=n(4),b=n(13),u=n.n(b),h=(n(61),function(e){Object(j.a)(n,e);var t=Object(m.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(s.jsxs)("div",{class:"book",children:[Object(s.jsx)("br",{}),Object(s.jsx)("p",{class:"BookTitle",children:this.props.name}),Object(s.jsx)("img",{src:this.props.path,alt:"error loading preview",className:"bookPic"})]})}}]),n}(c.Component)),O=function(e){Object(j.a)(n,e);var t=Object(m.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(s.jsx)("div",{children:Object(s.jsxs)(u.a,{plugins:["infinite","arrows",{resolve:b.slidesToShowPlugin,options:{numberOfSlides:3}}],children:[Object(s.jsx)(h,{name:"Harry Potter",path:"https://images-na.ssl-images-amazon.com/images/I/81iqZ2HHD-L.jpg"}),Object(s.jsx)(h,{name:"Hunger Games",path:"https://images-na.ssl-images-amazon.com/images/I/61JfGcL2ljL.jpg"}),Object(s.jsx)(h,{name:"How to Code",path:"https://images-na.ssl-images-amazon.com/images/I/81mT0cKE0oL.jpg"}),Object(s.jsx)(h,{name:"Scythe",path:"https://images-na.ssl-images-amazon.com/images/I/61dMoTN7t1L.jpg"}),Object(s.jsx)(h,{name:"Dairy of a Wimpy Kid",path:"https://prodimage.images-bn.com/pimages/9781419741869_p0_v1_s550x406.jpg"})]})})}}]),n}(c.Component),p=function(e){Object(j.a)(n,e);var t=Object(m.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return this.props.book.nominated?Object(s.jsxs)("div",{className:"modal-content",children:[Object(s.jsx)("span",{onClick:function(t){return e.close(t)},className:"close",children:"\xd7"}),Object(s.jsx)("div",{id:"picture",className:"col1",children:Object(s.jsx)("img",{src:this.props.book.path,width:"350vh",height:"500vh",alt:"Unable to Load Picture"})}),Object(s.jsxs)("div",{id:"content",className:"col2",children:[Object(s.jsx)("h2",{children:Object(s.jsx)("u",{children:this.props.book.name})}),Object(s.jsx)("p",{children:"info abt books go here"})]})]}):Object(s.jsxs)("div",{className:"modal-content",children:[Object(s.jsx)("span",{onClick:function(t){return e.close(t)},className:"close",children:"\xd7"}),Object(s.jsx)("div",{id:"picture",className:"col1",children:Object(s.jsx)("img",{src:this.props.book.path,width:"350vh",height:"500vh",alt:"Unable to Load Picture"})}),Object(s.jsxs)("div",{id:"content",className:"col2",children:[Object(s.jsx)("h2",{children:Object(s.jsx)("u",{children:this.props.book.name})}),Object(s.jsx)("p",{children:"not nominated"}),Object(s.jsx)("form",{children:Object(s.jsx)("input",{type:"text",placeholder:"Name (First Last)"})}),Object(s.jsx)("button",{className:"button4",children:"Nominate!"})]})]})}},{key:"close",value:function(e){e.preventDefault(),document.getElementById("moreInfoBox").style.display="none",document.getElementById("moreInfoBox1").style.display="none"}}]),n}(c.Component),x=n(27),f=n.n(x),g=function(e){Object(j.a)(n,e);var t=Object(m.a)(n);function n(e){var s;return Object(r.a)(this,n),(s=t.call(this,e)).state={listOfBooks:[{name:"Dairy of a Wimpy Kid",path:"https://prodimage.images-bn.com/pimages/9781419741869_p0_v1_s550x406.jpg",nominated:!0},{name:"Scythe",path:"https://images-na.ssl-images-amazon.com/images/I/61dMoTN7t1L.jpg",nominated:!0},{name:"Harry Potter",path:"https://images-na.ssl-images-amazon.com/images/I/81iqZ2HHD-L.jpg",nominated:!1},{name:"How to Code",path:"https://images-na.ssl-images-amazon.com/images/I/81mT0cKE0oL.jpg",nominated:!1},{name:"Hunger Games",path:"https://images-na.ssl-images-amazon.com/images/I/61JfGcL2ljL.jpg",nominated:!0}],currentBook:null,showMoreInfo:!1,numOfBooks:4},s}return Object(d.a)(n,[{key:"render",value:function(){var e=this,t=null;return this.state.showMoreInfo&&null!=this.state.currentBook&&(t=Object(s.jsx)(p,{book:this.state.currentBook})),Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{className:"sidenav",children:this.filter()}),Object(s.jsx)("div",{className:"mainbar",children:this.renderBooks()}),Object(s.jsx)("div",{onClick:function(t){return e.close(t)},id:"moreInfoBox",className:"modal",children:t}),Object(s.jsx)("button",{id:"loadMoreBooks",onClick:function(t){return e.moreBooks(t)},children:"Load More Books"})]})}},{key:"filter",value:function(){var e=this,t=Object(s.jsxs)("div",{children:[Object(s.jsx)("h2",{className:"filter",children:"Filter"}),Object(s.jsx)("br",{}),Object(s.jsx)("a",{id:"downBtn",href:"#nav",children:Object(s.jsx)("div",{class:"openFilter"})})]}),n=Object(s.jsxs)("div",{children:[Object(s.jsx)("h2",{className:"filter",children:"Filter"}),Object(s.jsx)("br",{}),Object(s.jsx)("a",{id:"downBtn",href:"#nav",children:Object(s.jsx)("div",{class:"closeFilter"})})]});return Object(s.jsx)("div",{className:"recInput",children:Object(s.jsx)(f.a,{trigger:t,className:"filter",transitionTime:"200",triggerWhenOpen:n,children:Object(s.jsxs)("div",{className:"filterContent",children:[Object(s.jsxs)("ol",{children:[Object(s.jsxs)("div",{className:"filterCol1",children:[Object(s.jsx)("li",{children:"Genre:"}),Object(s.jsxs)("form",{children:[Object(s.jsx)("input",{type:"checkbox",className:"input2",id:"action",name:"genre"}),Object(s.jsx)("label",{for:"action",children:"Action"}),Object(s.jsx)("br",{}),Object(s.jsx)("input",{type:"checkbox",className:"input2",id:"adventure",name:"genre"}),Object(s.jsx)("label",{for:"adventure",children:"Adventure"}),Object(s.jsx)("br",{}),Object(s.jsx)("input",{type:"checkbox",className:"input2",id:"comedy",name:"genre"}),Object(s.jsx)("label",{for:"comedy",children:"Comedy"}),Object(s.jsx)("br",{}),Object(s.jsx)("input",{type:"checkbox",className:"input2",id:"mystery",name:"genre"}),Object(s.jsx)("label",{for:"mystery",children:"Mystery"}),Object(s.jsx)("br",{}),Object(s.jsx)("input",{type:"checkbox",className:"input2",id:"fantasy",name:"genre"}),Object(s.jsx)("label",{for:"fantasy",children:"Fantasy"}),Object(s.jsx)("br",{}),Object(s.jsx)("input",{type:"checkbox",className:"input2",id:"horror",name:"genre"}),Object(s.jsx)("label",{for:"horror",children:"Horror"}),Object(s.jsx)("br",{}),Object(s.jsx)("input",{type:"checkbox",className:"input2",id:"scifi",name:"genre"}),Object(s.jsx)("label",{for:"scifi",children:"Sci-Fi"}),Object(s.jsx)("br",{}),Object(s.jsx)("input",{type:"checkbox",className:"input2",id:"thriller",name:"genre"}),Object(s.jsx)("label",{for:"thriller",children:"Thriller"}),Object(s.jsx)("br",{}),Object(s.jsx)("input",{type:"checkbox",className:"input2",id:"romance",name:"genre"}),Object(s.jsx)("label",{for:"romance",children:"Romance"}),Object(s.jsx)("br",{})]})]}),Object(s.jsxs)("div",{className:"filterCol2",children:[Object(s.jsx)("li",{children:"Realism"}),Object(s.jsxs)("form",{children:[Object(s.jsx)("input",{type:"radio",className:"input2",id:"fiction",name:"realism"}),Object(s.jsx)("label",{for:"fiction",children:"Fiction"}),Object(s.jsx)("br",{}),Object(s.jsx)("input",{type:"radio",className:"input2",id:"nonFiction",name:"realism"}),Object(s.jsx)("label",{for:"nonFiction",children:"Non-Fiction"}),Object(s.jsx)("br",{})]}),Object(s.jsx)("li",{children:"Readability"}),Object(s.jsxs)("form",{children:[Object(s.jsx)("input",{type:"radio",className:"input2",id:"easy",name:"Readability"}),Object(s.jsx)("label",{for:"easy",children:"Quick/Easy Read"}),Object(s.jsx)("br",{}),Object(s.jsx)("input",{type:"radio",className:"input2",id:"medium",name:"Readability"}),Object(s.jsx)("label",{for:"medium",children:"Medium Read"}),Object(s.jsx)("br",{}),Object(s.jsx)("input",{type:"radio",className:"input2",id:"hard",name:"Readability"}),Object(s.jsx)("label",{for:"hard",children:"Long/Difficult Read"}),Object(s.jsx)("br",{})]})]})]}),Object(s.jsx)("button",{className:"button3",onClick:function(t){return e.filterBooks(t)},children:"Apply Filter"})]})})})}},{key:"filterBooks",value:function(e){e.preventDefault(),alert("worked")}},{key:"renderBooks",value:function(){var e=this,t=0;return Object(s.jsxs)("div",{children:[this.state.listOfBooks.slice(0,this.state.numOfBooks).map((function(e){e.nominated||t++})),this.state.listOfBooks.slice(0,this.state.numOfBooks+t).map((function(t,n){if(t.nominated)return Object(s.jsxs)("div",{className:"bookOutline",children:[Object(s.jsx)(h,{name:t.name,path:t.path}),Object(s.jsx)("button",{id:"moreInfoBtn",onClick:function(){return e.moreInfo(t)},children:"More Information"}),Object(s.jsx)("br",{})]},n)}))]})}},{key:"moreInfo",value:function(e){document.getElementById("moreInfoBox").style.display="block",this.setState({currentBook:e}),this.setState({showMoreInfo:!0})}},{key:"moreBooks",value:function(e){e.preventDefault();var t=this.state.numOfBooks+8;t>=this.state.listOfBooks.length&&(t=this.state.listOfBooks.length,document.getElementById("loadMoreBooks").style.display="none",alert("That is all the available books!")),this.setState({numOfBooks:t})}},{key:"close",value:function(e){e.preventDefault(),"moreInfoBox"==e.target.id&&(document.getElementById("moreInfoBox").style.display="none")}}]),n}(c.Component),y=n(9),v=n.p+"static/media/credentials.01fa0b42.txt",k=n(28),B=n.n(k),N=function(e){Object(j.a)(n,e);var t=Object(m.a)(n);function n(e){var s;Object(r.a)(this,n),s=t.call(this,e);var c=[];return fetch(v).then((function(e){return e.text()})).then((function(e){c.push(e.split("\n"))})),s.state={lines:c,newAccount:!1,content:!0,showImg:!1,path:""},s.handleSubmit=s.handleSubmit.bind(Object(y.a)(s)),s.handleNewAccount=s.handleNewAccount.bind(Object(y.a)(s)),s.signOut=s.signOut.bind(Object(y.a)(s)),s.addBook=s.addBook.bind(Object(y.a)(s)),s.loadPic=s.loadPic.bind(Object(y.a)(s)),s}return Object(d.a)(n,[{key:"render",value:function(){var e=this.state.newAccount?this.createNewAccount():null,t=this.state.content?this.content():null;return Object(s.jsxs)("div",{children:[Object(s.jsx)("br",{}),this.login(),Object(s.jsxs)("div",{id:"loginContent",children:[t,e]})]})}},{key:"toggle",value:function(){this.setState({newAccount:!this.state.newAccount}),this.setState({content:!this.state.content});try{document.getElementById("accPass").value="",document.getElementById("newU").value="",document.getElementById("newP").value="",document.getElementById("confirmP").value=""}catch(e){}}},{key:"content",value:function(){var e=this,t=this.state.showImg?Object(s.jsx)("img",{src:this.state.path,className:"previewImg"}):null,n=this.state.showImg?Object(s.jsx)("button",{className:"button2",onClick:function(t){return e.closePic(t)},children:"Close Picture"}):null;return Object(s.jsxs)("div",{className:"Content",children:[Object(s.jsx)("h1",{className:"header1",children:"Enter Book Information:"}),Object(s.jsxs)("form",{children:[Object(s.jsx)("div",{className:"col1",children:Object(s.jsxs)("div",{style:{padding:"5vh"},children:[Object(s.jsxs)("div",{children:[Object(s.jsx)("h3",{children:"General Info:"}),Object(s.jsx)("label",{children:Object(s.jsx)("input",{className:"addBookInputs",type:"text",id:"bTitle",placeholder:"Name",required:"required"})}),Object(s.jsx)("label",{children:Object(s.jsx)("input",{className:"addBookInputs",type:"text",id:"bAuthor",placeholder:"Author",required:"required"})}),Object(s.jsx)("label",{children:Object(s.jsx)("input",{className:"addBookInputs",type:"text",id:"fnominee",placeholder:"First Nominee",required:"required"})}),Object(s.jsx)("label",{children:Object(s.jsx)("input",{className:"addBookInputs",type:"text",id:"snominee",placeholder:"Second Nominee",required:"required"})}),Object(s.jsx)("label",{children:Object(s.jsx)("input",{className:"addBookInputs",type:"text",id:"tnominee",placeholder:"Third Nominee",required:"required"})}),Object(s.jsx)("label",{children:Object(s.jsx)("input",{className:"addBookInputs",type:"text",id:"becamecp",placeholder:"Became Choice Pick",required:"required"})}),Object(s.jsx)("label",{children:Object(s.jsx)("input",{className:"bookSummary",type:"textarea",id:"bSummary",placeholder:"Summary",required:"required"})})]}),Object(s.jsx)("br",{}),Object(s.jsxs)("div",{children:[Object(s.jsx)("h3",{children:"Additional Info:"}),Object(s.jsx)("p",{children:"*This information is not required, but is necessary for the website to recommend book.*"}),Object(s.jsx)("h4",{children:"Genre"}),Object(s.jsxs)("div",{children:[Object(s.jsxs)("label",{children:["Action:",Object(s.jsx)("input",{type:"checkbox",id:"bAdventure"})]}),Object(s.jsxs)("label",{children:["Adventure:",Object(s.jsx)("input",{type:"checkbox",id:"bAdventure"})]}),Object(s.jsxs)("label",{children:["Comedy:",Object(s.jsx)("input",{type:"checkbox",id:"bAdventure"})]}),Object(s.jsxs)("label",{children:["Mystery:",Object(s.jsx)("input",{type:"checkbox",id:"bAdventure"})]}),Object(s.jsxs)("label",{children:["Fantasy:",Object(s.jsx)("input",{type:"checkbox",id:"bAdventure"})]}),Object(s.jsxs)("label",{children:["Horror:",Object(s.jsx)("input",{type:"checkbox",id:"bAdventure"})]}),Object(s.jsxs)("label",{children:["Sci-Fi:",Object(s.jsx)("input",{type:"checkbox",id:"bAdventure"})]}),Object(s.jsxs)("label",{children:["Thriller:",Object(s.jsx)("input",{type:"checkbox",id:"bAdventure"})]}),Object(s.jsxs)("label",{children:["Romance:",Object(s.jsx)("input",{type:"checkbox",id:"bAdventure"})]})]}),Object(s.jsx)("h4",{children:"Readability"}),Object(s.jsxs)("div",{children:[Object(s.jsxs)("label",{children:["Quick & Easy Read:",Object(s.jsx)("input",{type:"radio",name:"readability",id:"bAdventure"})]}),Object(s.jsxs)("label",{children:["Medium Read:",Object(s.jsx)("input",{type:"radio",name:"readability",id:"bAdventure"})]}),Object(s.jsxs)("label",{children:["Difficult Read:",Object(s.jsx)("input",{type:"radio",name:"readability",id:"bAdventure"})]})]}),Object(s.jsx)("h4",{children:"Other Info"}),Object(s.jsxs)("div",{children:[Object(s.jsxs)("label",{children:["Fiction:",Object(s.jsx)("input",{type:"radio",name:"fiction",id:"bAdventure"})]}),Object(s.jsxs)("label",{children:["Non-Fiction:",Object(s.jsx)("input",{type:"radio",name:"fiction",id:"bAdventure"})]})]})]})]})}),Object(s.jsx)("div",{className:"col2",children:Object(s.jsx)("div",{style:{padding:"5vh"},children:Object(s.jsxs)("div",{children:[Object(s.jsx)("h3",{children:"Book Picture:"}),Object(s.jsxs)("label",{children:["Please provide a link a book image:",Object(s.jsx)("br",{}),Object(s.jsx)("input",{placeholder:"Book Image Link",className:"addBookInputs2",type:"text",id:"bImgPath"})]}),Object(s.jsx)("button",{className:"button2",onClick:function(t){return e.loadPic(t)},children:"Pre-View Picture"}),n,Object(s.jsx)("br",{}),t]})})}),Object(s.jsx)("button",{onClick:function(t){return e.addBook(t)},className:"button",children:"Add Book"})]}),Object(s.jsx)("button",{className:"button1",onClick:function(t){return e.toggle(t)},children:"New Account"}),Object(s.jsx)("button",{className:"button1",onClick:function(t){return e.signOut(t)},children:"Sign Out"})]})}},{key:"login",value:function(){return Object(s.jsxs)("div",{className:"login1",id:"login",children:[Object(s.jsx)("h1",{className:"loginHeader",children:"Login"}),Object(s.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(s.jsxs)("div",{style:{padding:"5vh"},children:[Object(s.jsx)("label",{children:Object(s.jsx)("input",{type:"text",id:"name",placeholder:"Username",required:"required"})}),Object(s.jsx)("label",{children:Object(s.jsx)("input",{type:"password",id:"password",placeholder:"Password",required:"required"})})]}),Object(s.jsx)("input",{className:"submitBtn",type:"submit",value:"Submit"})]})]})}},{key:"createNewAccount",value:function(){var e=this;return Object(s.jsxs)("div",{className:"login2",children:[Object(s.jsx)("h1",{className:"loginHeader",children:"Create New Account"}),Object(s.jsxs)("form",{onSubmit:this.handleNewAccount,children:[Object(s.jsxs)("div",{style:{padding:"5vh"},children:[Object(s.jsx)("label",{style:{paddingBottom:"5vh"},children:Object(s.jsx)("input",{type:"password",id:"accPass",placeholder:"Account Password:",required:"required"})}),Object(s.jsx)("label",{children:Object(s.jsx)("input",{type:"text",id:"newU",placeholder:"New Username",required:"required"})}),Object(s.jsx)("label",{children:Object(s.jsx)("input",{type:"password",id:"newP",placeholder:"New Password",required:"required"})}),Object(s.jsx)("label",{children:Object(s.jsx)("input",{type:"password",id:"confirmP",placeholder:"Confirm Password",required:"required"})})]}),Object(s.jsx)("input",{type:"submit",value:"Submit",className:"submitBtn"}),Object(s.jsx)("input",{type:"button",value:"Return",className:"returnBtn",onClick:function(t){return e.toggle(t)}})]})]})}},{key:"addBook",value:function(e){e.preventDefault();var t=document.getElementById("bTitle").value.trim(),n=document.getElementById("bAuthor").value.trim(),s=document.getElementById("fnominee").value.trim(),c=document.getElementById("snominee").value.trim(),a=document.getElementById("tnominee").value.trim(),i=document.getElementById("becamecp").value.trim();B.a.post("http://localhost:3001/create",{btitle:t,bauthor:n,fnominee:s,snominee:c,tnominee:a,becamecp:i}).then((function(e){alert("Added Successfully")}),(function(e){console.log(e)}))}},{key:"loadPic",value:function(e){e.preventDefault();var t=document.getElementById("bImgPath").value;this.setState({showImg:!0}),this.setState({path:t})}},{key:"closePic",value:function(e){e.preventDefault(),this.setState({showImg:!1})}},{key:"handleSubmit",value:function(e){e.preventDefault();for(var t=document.getElementById("name").value.trim(),n=document.getElementById("password").value.trim(),s=!1,c=0;c<this.state.lines[0].length;c++){var a=this.state.lines[0][c],i=a.indexOf(":")+2,o=a.indexOf(",");if(t===a.substring(i,o).trim())if(n===this.state.lines[0][c].substring(o+12).trim()){s=!0;break}}s?(document.getElementById("login").style.display="none",document.getElementById("loginContent").style.display="block"):(alert("Incorrect Credentials!"),document.getElementById("name").value="",document.getElementById("password").value="")}},{key:"handleNewAccount",value:function(e){if(e.preventDefault(),document.getElementById("accPass").value===document.getElementById("password").value){for(var t=document.getElementById("newU").value,n=!1,s=0;s<this.state.lines[0].length;s++){var c=this.state.lines[0][s],a=c.indexOf(":")+2,i=c.indexOf(",");c.substring(a,i).trim()===t&&(n=!0)}if(n)alert("Username already taken!"),document.getElementById("newU").value="";else{var o=document.getElementById("newP").value;if(o===document.getElementById("confirmP").value){this.toggle()}else alert("Passwords do not match!"),document.getElementById("newP").value="",document.getElementById("confirmP").value=""}}else alert("Incorrect password!"),document.getElementById("accPass").value=""}},{key:"signOut",value:function(){document.getElementById("login").style.display="block",document.getElementById("loginContent").style.display="none",document.getElementById("name").value="",document.getElementById("password").value=""}}]),n}(c.Component),I=function(e){Object(j.a)(n,e);var t=Object(m.a)(n);function n(e){var s;return Object(r.a)(this,n),(s=t.call(this,e)).state={listOfBooks:[{name:"Dairy of a Wimpy Kid",path:"https://prodimage.images-bn.com/pimages/9781419741869_p0_v1_s550x406.jpg",nominated:!0},{name:"Scythe",path:"https://images-na.ssl-images-amazon.com/images/I/61dMoTN7t1L.jpg",nominated:!0},{name:"Harry Potter",path:"https://images-na.ssl-images-amazon.com/images/I/81iqZ2HHD-L.jpg",nominated:!1},{name:"How to Code",path:"https://images-na.ssl-images-amazon.com/images/I/81mT0cKE0oL.jpg",nominated:!1},{name:"Hunger Games",path:"https://images-na.ssl-images-amazon.com/images/I/61JfGcL2ljL.jpg",nominated:!0}],currentBook:null,showMoreInfo:!1,numOfBooks:4},s}return Object(d.a)(n,[{key:"render",value:function(){var e=this,t=null;return this.state.showMoreInfo&&null!=this.state.currentBook&&(t=Object(s.jsx)(p,{book:this.state.currentBook})),Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{className:"mainbar",children:this.renderBooks()}),Object(s.jsx)("div",{onClick:function(t){return e.close(t)},id:"moreInfoBox1",className:"modal",children:t}),Object(s.jsx)("button",{id:"loadMoreBooks1",onClick:function(t){return e.moreBooks(t)},children:"Load More Books"})]})}},{key:"renderBooks",value:function(){var e=this,t=0;return Object(s.jsxs)("div",{children:[this.state.listOfBooks.slice(0,this.state.numOfBooks).map((function(e){e.nominated&&t++})),this.state.listOfBooks.slice(0,this.state.numOfBooks+t).map((function(t,n){if(!t.nominated)return Object(s.jsxs)("div",{className:"bookOutline",children:[Object(s.jsx)(h,{name:t.name,path:t.path}),Object(s.jsx)("button",{id:"moreInfoBtn",onClick:function(){return e.moreInfo(t)},children:"More Information"}),Object(s.jsx)("br",{})]},n)}))]})}},{key:"moreInfo",value:function(e){document.getElementById("moreInfoBox1").style.display="block",this.setState({currentBook:e}),this.setState({showMoreInfo:!0})}},{key:"moreBooks",value:function(e){e.preventDefault();var t=this.state.numOfBooks+8;t>=this.state.listOfBooks.length&&(t=this.state.listOfBooks.length,document.getElementById("loadMoreBooks1").style.display="none",alert("That is all the available books!")),this.setState({numOfBooks:t})}},{key:"close",value:function(e){e.preventDefault(),"moreInfoBox1"==e.target.id&&(document.getElementById("moreInfoBox1").style.display="none")}}]),n}(c.Component),w=n(29),E=n.n(w),C=function(e){Object(j.a)(n,e);var t=Object(m.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return Object(s.jsxs)("section",{className:"main-section alabaster",id:"contact",children:[Object(s.jsx)("span",{className:"copyright",children:"\xa9 Code For Change. All Rights Reserved"}),Object(s.jsxs)("div",{className:"credits",children:["Designed by ",Object(s.jsx)("a",{href:"https://codeforchange.herokuapp.com/",target:"__blank",children:"Code For Change"})," ",Object(s.jsx)("br",{})]}),Object(s.jsx)("center",{children:Object(s.jsx)("button",{onClick:function(){return e.setPage()},children:" Contact Us "})})]})}},{key:"setPage",value:function(){document.getElementById("choicePicks").style.display="none",document.getElementById("recommendations").style.display="none",document.getElementById("librarian").style.display="none",document.getElementById("nominations").style.display="none",document.getElementById("contacts").style.display="block",document.getElementById("title").innerHTML="Contact Page",E()("html, body").animate({scrollTop:0},"fast")}}]),n}(c.Component),P=n(30),S=n.n(P),A=function(e){Object(j.a)(n,e);var t=Object(m.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(s.jsx)("div",{className:"container",children:Object(s.jsx)("section",{className:"main-section alabaster",id:"contact",children:Object(s.jsxs)("div",{className:"row",children:[Object(s.jsxs)("div",{className:"col-lg-6",id:"contactInfo",children:[Object(s.jsxs)("div",{className:"contact-info-box",children:[Object(s.jsxs)("h3",{children:[Object(s.jsx)("i",{class:"fa fa-map-marker"}),"Address:"]}),Object(s.jsx)("span",{children:Object(s.jsx)("a",{target:"__blank",href:"https://www.google.com/maps/place/2140+E+116th+St,+Carmel,+IN+46032/@39.9585644,-86.1199571,17z/data=!3m1!4b1!4m5!3m4!1s0x8814ada097472ab5:0x9f4fc8c69992733e!8m2!3d39.9585603!4d-86.1177631",children:"2140 E 116th St, Carmel, IN 46032"})})]}),Object(s.jsxs)("div",{className:"contact-info-box",children:[Object(s.jsxs)("h3",{children:[Object(s.jsx)("i",{className:"fa fa-phone"}),"Phone:"]}),Object(s.jsx)("span",{children:Object(s.jsx)("a",{href:"tel: 5554280940",children:"(317) 814-3900"})})]}),Object(s.jsxs)("div",{className:"contact-info-box",children:[Object(s.jsxs)("h3",{children:[Object(s.jsx)("i",{className:"fa fa-pencil"}),"E-mail:"]}),Object(s.jsx)("span",{children:Object(s.jsx)("a",{target:"__blank",href:"mailto:jbeckman@carmelclaylibrary.org",children:"jbeckman@carmelclaylibrary.org"})})]}),Object(s.jsxs)("div",{className:"contact-info-box",children:[Object(s.jsxs)("h3",{children:[Object(s.jsx)("i",{class:"fab fa-facebook"}),"Facebook:"]}),Object(s.jsx)("a",{target:"__blank",href:"https://www.facebook.com/carmellib/",children:"Click Here"})]}),Object(s.jsxs)("div",{className:"contact-info-box",children:[Object(s.jsxs)("h3",{children:[Object(s.jsx)("i",{class:"fab fa-instagram"}),"Instagram:"]}),Object(s.jsx)("a",{target:"__blank",href:"https://www.instagram.com/carmel_library/?hl=en",children:"Click Here"})]}),Object(s.jsxs)("div",{className:"contact-info-box",children:[Object(s.jsxs)("h3",{children:[Object(s.jsx)("i",{class:"fab fa-twitter"}),"Twitter:"]}),Object(s.jsx)("a",{target:"__blank",href:"https://www.instagram.com/carmel_library/?hl=en",children:"Click Here"})]})]}),Object(s.jsx)("div",{className:"col-lg-6 col-sm-5 wow fadeInUp delay-05s",id:"contactBox",children:Object(s.jsxs)("div",{className:"form",children:[Object(s.jsx)("div",{id:"sendmessage",children:"Your message has been sent. Thank you!"}),Object(s.jsx)("div",{id:"errormessage"}),Object(s.jsxs)("form",{onSubmit:this.handleSubmit,action:"",method:"post",role:"form",className:"contactForm",children:[Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("input",{type:"text",name:"name",className:"form-control input-text",id:"name",placeholder:"Your Name","data-rule":"minlen:4","data-msg":"Please enter at least 4 chars"}),Object(s.jsx)("div",{className:"validation"})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("input",{type:"email",className:"form-control input-text",name:"email",id:"email",placeholder:"Your Email","data-rule":"email","data-msg":"Please enter a valid email"}),Object(s.jsx)("div",{className:"validation"})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("input",{type:"text",className:"form-control input-text",name:"subject",id:"subject",placeholder:"Subject","data-rule":"minlen:4","data-msg":"Please enter at least 8 chars of subject"}),Object(s.jsx)("div",{className:"validation"})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("textarea",{className:"form-control input-text text-area",name:"message",rows:"5","data-rule":"required","data-msg":"Please write something for us",placeholder:"Message"}),Object(s.jsx)("div",{className:"validation"})]}),Object(s.jsx)("div",{className:"text-center",children:Object(s.jsx)("button",{type:"submit",class:"input-btn",children:"Send Message"})})]})]})})]})})})}},{key:"handleSubmit",value:function(e){e.preventDefault(),S.a.sendForm("service_1qmh2dc","template_yznagmp",e.target,"user_o6t4c09ESEWOJ3hZSDIcV").then((function(t){alert("Message Sent"),e.target.reset()}),(function(e){alert("There was an error. Please try again later!")}))}}]),n}(c.Component);o.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(O,{})}),document.getElementById("choicePicks")),o.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(g,{})}),document.getElementById("recommendations")),o.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(N,{})}),document.getElementById("librarian")),o.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(I,{})}),document.getElementById("nominations")),o.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(A,{})}),document.getElementById("contacts")),o.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(C,{})}),document.getElementById("footer")),l()}},[[82,1,2]]]);
//# sourceMappingURL=main.3df68d32.chunk.js.map