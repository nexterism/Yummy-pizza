(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{129:function(e,t,a){},273:function(e,t,a){e.exports=a(548)},278:function(e,t,a){},361:function(e,t,a){},534:function(e,t,a){},544:function(e,t,a){},548:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(4),c=a.n(l),i=(a(278),a(63)),s=a(179),o=a.n(s),u=a(249),m=a(18),d=a.n(m),p="login_user",E="register_user",f="auth_user",h="logout_user",b="add_to_cart_user",y="get_cart_items_user",g="remove_cart_item_user",v="on_success_buy_user",O="/api/users";var j=a(28),x=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return function(l){var c=Object(j.c)(function(e){return e.user}),i=Object(j.b)();return Object(r.useEffect)(function(){i(function(){var e=d.a.get("".concat(O,"/auth")).then(function(e){return e.data});return{type:f,payload:e}}()).then(function(){var e=Object(u.a)(o.a.mark(function e(r){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,!r.payload.isAuth;case 2:if(!e.sent){e.next=6;break}t&&l.history.push("/login"),e.next=7;break;case 6:a&&!r.payload.isAdmin?l.history.push("/"):!1===t&&l.history.push("/");case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}())},[i,l.history,c.googleAuth]),n.a.createElement(e,Object.assign({},l,{user:c}))}},w=a(78),N=a(15),S=a(550),P=a(45),C=a(11),I=a(90),k=a(549);var D=function(e){return n.a.createElement("div",null,n.a.createElement(k.a,{autoplay:!0},e.images.map(function(e,t){return n.a.createElement("div",{key:t},n.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},n.a.createElement("img",{style:{width:"200px",height:"200px"},src:"https://nexterism-pizza.herokuapp.com/".concat(e),alt:"productImage"})))})))},_=a(555),z=_.a.Search;var q=function(e){var t=Object(r.useState)(""),a=Object(N.a)(t,2),l=a[0],c=a[1];return n.a.createElement("div",null,n.a.createElement(z,{type:"danger",value:l,onChange:function(t){c(t.currentTarget.value),e.refreshFunction(t.currentTarget.value)},placeholder:"Search By Typing...",style:{marginBottom:"50px"}}))},T=(a(361),S.a.Meta);var L=function(){var e=Object(r.useState)([]),t=Object(N.a)(e,2),a=t[0],l=t[1],c=Object(r.useState)(0),i=Object(N.a)(c,2),s=i[0],o=i[1],u=Object(r.useState)(8),m=Object(N.a)(u,2),p=m[0],E=(m[1],Object(r.useState)()),f=Object(N.a)(E,2),h=f[0],b=f[1],y=Object(r.useState)(""),g=Object(N.a)(y,2),v=g[0],O=g[1],j=Object(r.useState)({continents:[],price:[]}),x=Object(N.a)(j,2),k=x[0];x[1],Object(r.useEffect)(function(){_({skip:s,limit:p})},[]);var _=function(e){d.a.post("/api/product/getProducts",e).then(function(t){t.data.success?(e.loadMore?l([].concat(Object(w.a)(a),Object(w.a)(t.data.products))):l(t.data.products),b(t.data.postSize)):alert("Failed to fectch product datas")})},z=a.map(function(e,t){return n.a.createElement(P.a,{className:"col_sec",lg:6,md:8,xs:24},n.a.createElement(S.a,{style:{padding:"20px",backgroundColor:"transparent",border:"0px",textAlign:"center"},hoverable:!0,cover:n.a.createElement("a",{href:"/product/".concat(e._id)}," ",n.a.createElement(D,{images:e.images}))},n.a.createElement(T,{title:e.title,description:"$".concat(e.price)})))});return n.a.createElement("div",{style:{width:"100%",margin:"auto",position:"relative",top:"150px",overflowX:"hidden"}},n.a.createElement("div",{style:{textAlign:"center"}},n.a.createElement("h2",{className:"tname"}," ","Yummy Pizza ",n.a.createElement(C.a,{type:"HeartOutlined"})," ")),n.a.createElement("div",{className:"col_ser",style:{display:"flex",justifyContent:"center",margin:"auto"}},n.a.createElement(q,{refreshFunction:function(e){var t={skip:0,limit:p,filters:k,searchTerm:e};o(0),O(e),_(t)}})),0===a.length?n.a.createElement("div",{style:{display:"flex",height:"300px",justifyContent:"center",alignItems:"center"}},n.a.createElement("h2",null,"No post yet...")):n.a.createElement("div",null,n.a.createElement(I.a,{gutter:[16,16]},z)),n.a.createElement("br",null),n.a.createElement("br",null),h>=p&&n.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},n.a.createElement("button",{onClick:function(){var e=s+p;_({skip:e,limit:p,loadMore:!0,filters:k,searchTerm:v}),o(e)}},"Load More")))},A=a(142),F=a(40),M=a(552),B=a(551),R=a(556),$=a(188),V=M.a.Title;var U=Object(i.f)(function(e){var t=Object(j.b)(),a=!!localStorage.getItem("rememberMe"),l=Object(r.useState)(""),c=Object(N.a)(l,2),i=c[0],s=c[1],o=Object(r.useState)(a),u=Object(N.a)(o,2),m=u[0],E=u[1],f=function(){E(!m)},h=localStorage.getItem("rememberMe")?localStorage.getItem("rememberMe"):"";return n.a.createElement(A.a,{initialValues:{email:h,password:""},validationSchema:F.object().shape({email:F.string().email("Email is invalid").required("Email is required"),password:F.string().min(6,"Password must be at least 6 characters").required("Password is required")}),onSubmit:function(a,r){var n=r.setSubmitting;setTimeout(function(){var r={email:a.email,password:a.password};t(function(e){var t=d.a.post("".concat(O,"/login"),e).then(function(e){return e.data});return{type:p,payload:t}}(r)).then(function(t){t.payload.loginSuccess?(window.localStorage.setItem("userId",t.payload.userId),!0===m?window.localStorage.setItem("rememberMe",a.id):localStorage.removeItem("rememberMe"),e.history.push("/")):s("Check out your Account or Password again")}).catch(function(e){s("Check out your Account or Password again"),setTimeout(function(){s("")},3e3)}),n(!1)},500)}},function(e){var t=e.values,a=e.touched,r=e.errors,l=(e.dirty,e.isSubmitting),c=e.handleChange,s=e.handleBlur,o=e.handleSubmit;return e.handleReset,n.a.createElement("div",{className:"app"},n.a.createElement(V,{level:2},"Log In"),n.a.createElement("form",{onSubmit:o,style:{width:"350px"}},n.a.createElement(B.a.Item,{required:!0},n.a.createElement(_.a,{id:"email",prefix:n.a.createElement(C.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Enter your email",type:"email",value:t.email,onChange:c,onBlur:s,className:r.email&&a.email?"text-input error":"text-input"}),r.email&&a.email&&n.a.createElement("div",{className:"input-feedback"},r.email)),n.a.createElement(B.a.Item,{required:!0},n.a.createElement(_.a,{id:"password",prefix:n.a.createElement(C.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Enter your password",type:"password",value:t.password,onChange:c,onBlur:s,className:r.password&&a.password?"text-input error":"text-input"}),r.password&&a.password&&n.a.createElement("div",{className:"input-feedback"},r.password)),i&&n.a.createElement("label",null,n.a.createElement("p",{style:{color:"#ff0000bf",fontSize:"0.7rem",border:"1px solid",padding:"1rem",borderRadius:"10px"}},i)),n.a.createElement(B.a.Item,null,n.a.createElement(R.a,{id:"rememberMe",onChange:f,checked:m},"Remember me"),n.a.createElement("a",{className:"login-form-forgot",href:"/reset_user",style:{float:"right"}},"forgot password"),n.a.createElement("div",null,n.a.createElement($.a,{type:"primary",htmlType:"submit",className:"login-form-button",style:{minWidth:"100%"},disabled:l,onSubmit:o},"Log in")),"Or ",n.a.createElement("a",{href:"/register"},"register now!"))))})}),X=a(106),H=a.n(X),Y={labelCol:{xs:{span:24},sm:{span:8}},wrapperCol:{xs:{span:24},sm:{span:16}}},W={wrapperCol:{xs:{span:24,offset:0},sm:{span:16,offset:8}}};var J=function(e){var t=Object(j.b)();return n.a.createElement(A.a,{initialValues:{email:"",lastName:"",name:"",password:"",confirmPassword:""},validationSchema:F.object().shape({name:F.string().required("Name is required"),lastName:F.string().required("Last Name is required"),email:F.string().email("Email is invalid").required("Email is required"),password:F.string().min(6,"Password must be at least 6 characters").required("Password is required"),confirmPassword:F.string().oneOf([F.ref("password"),null],"Passwords must match").required("Confirm Password is required")}),onSubmit:function(a,r){var n=r.setSubmitting;setTimeout(function(){var r={email:a.email,password:a.password,name:a.name,lastname:a.lastname,image:"http://gravatar.com/avatar/".concat(H()().unix(),"?d=identicon")};t(function(e){var t=d.a.post("".concat(O,"/register"),e).then(function(e){return e.data});return{type:E,payload:t}}(r)).then(function(t){t.payload.success?e.history.push("/login"):alert(t.payload.err.errmsg)}),n(!1)},500)}},function(e){var t=e.values,a=e.touched,r=e.errors,l=(e.dirty,e.isSubmitting),c=e.handleChange,i=e.handleBlur,s=e.handleSubmit;return e.handleReset,n.a.createElement("div",{className:"app"},n.a.createElement("h2",null,"Sign up"),n.a.createElement(B.a,Object.assign({style:{minWidth:"375px"}},Y,{onSubmit:s}),n.a.createElement(B.a.Item,{required:!0,label:"Name"},n.a.createElement(_.a,{id:"name",placeholder:"Enter your name",type:"text",value:t.name,onChange:c,onBlur:i,className:r.name&&a.name?"text-input error":"text-input"}),r.name&&a.name&&n.a.createElement("div",{className:"input-feedback"},r.name)),n.a.createElement(B.a.Item,{required:!0,label:"Last Name"},n.a.createElement(_.a,{id:"lastName",placeholder:"Enter your Last Name",type:"text",value:t.lastName,onChange:c,onBlur:i,className:r.lastName&&a.lastName?"text-input error":"text-input"}),r.lastName&&a.lastName&&n.a.createElement("div",{className:"input-feedback"},r.lastName)),n.a.createElement(B.a.Item,{required:!0,label:"Email",hasFeedback:!0,validateStatus:r.email&&a.email?"error":"success"},n.a.createElement(_.a,{id:"email",placeholder:"Enter your Email",type:"email",value:t.email,onChange:c,onBlur:i,className:r.email&&a.email?"text-input error":"text-input"}),r.email&&a.email&&n.a.createElement("div",{className:"input-feedback"},r.email)),n.a.createElement(B.a.Item,{required:!0,label:"Password",hasFeedback:!0,validateStatus:r.password&&a.password?"error":"success"},n.a.createElement(_.a,{id:"password",placeholder:"Enter your password",type:"password",value:t.password,onChange:c,onBlur:i,className:r.password&&a.password?"text-input error":"text-input"}),r.password&&a.password&&n.a.createElement("div",{className:"input-feedback"},r.password)),n.a.createElement(B.a.Item,{required:!0,label:"Confirm",hasFeedback:!0},n.a.createElement(_.a,{id:"confirmPassword",placeholder:"Enter your confirmPassword",type:"password",value:t.confirmPassword,onChange:c,onBlur:i,className:r.confirmPassword&&a.confirmPassword?"text-input error":"text-input"}),r.confirmPassword&&a.confirmPassword&&n.a.createElement("div",{className:"input-feedback"},r.confirmPassword)),n.a.createElement(B.a.Item,W,n.a.createElement($.a,{onClick:s,type:"primary",disabled:l},"Submit"))))})},Q=a(554);var Z=function(e){return n.a.createElement(Q.a,{className:"left",mode:e.mode},n.a.createElement(Q.a.Item,{key:"mail"},n.a.createElement("a",{href:"/"},"Home")),n.a.createElement(Q.a.Item,{key:"pizza-menu"},n.a.createElement("a",{href:"/menu"},"Menu")))},K=a(559);var G=Object(i.f)(function(e){var t=Object(j.c)(function(e){return e.user});return t.userData&&!t.userData.isAuth?n.a.createElement(Q.a,{mode:e.mode},n.a.createElement(Q.a.Item,{key:"mail"},n.a.createElement("a",{href:"/login"},"Signin")),n.a.createElement(Q.a.Item,{key:"app"},n.a.createElement("a",{href:"/register"},"Signup"))):n.a.createElement(Q.a,{mode:e.mode},n.a.createElement(Q.a.Item,{key:"history"},n.a.createElement("a",{href:"/history"},"History")),n.a.createElement(Q.a.Item,{key:"upload"},n.a.createElement("a",{href:"/product/upload"},"Upload")),n.a.createElement(Q.a.Item,{className:"cart_bg",key:"cart",style:{paddingBottom:10,marginRight:10}},n.a.createElement(K.a,{count:t.userData&&t.userData.cart.length},n.a.createElement("a",{href:"/user/cart",style:{marginRight:-22,textDecoration:"none"}},n.a.createElement(C.a,{type:"shopping-cart",style:{fontSize:30,marginBottom:3}})))),n.a.createElement(Q.a.Item,{key:"logout"},n.a.createElement("a",{onClick:function(){d.a.get("".concat(O,"/logout")).then(function(t){200===t.status?e.history.push("/login"):alert("Log Out Failed")})}},"Logout")))}),ee=a(557);a(534);var te=function(){var e=Object(r.useState)(!1),t=Object(N.a)(e,2),a=t[0],l=t[1];return n.a.createElement("div",null,n.a.createElement("nav",{className:"spikes",style:{position:"fixed",zIndex:5,width:"100%"}},n.a.createElement("div",{className:"menu__logo"},n.a.createElement("a",{href:"/"},"Yummy Pizza")),n.a.createElement("div",{className:"menu__container"},n.a.createElement("div",{className:"menu_left"},n.a.createElement(Z,{mode:"horizontal"})),n.a.createElement("div",{className:"menu_rigth"},n.a.createElement(G,{mode:"horizontal"})),n.a.createElement($.a,{className:"menu__mobile-button",type:"primary",onClick:function(){l(!0)}},n.a.createElement(C.a,{type:"align-right"})),n.a.createElement(ee.a,{title:"Yummy Pizza",placement:"right",className:"menu_drawer",closable:!1,onClose:function(){l(!1)},visible:a},n.a.createElement(Z,{mode:"inline"}),n.a.createElement(G,{mode:"inline"})))))},ae=a(30),re=a(31),ne=a(33),le=a(32),ce=a(34),ie=(a(129),function(e){function t(){return Object(ae.a)(this,t),Object(ne.a)(this,Object(le.a)(t).apply(this,arguments))}return Object(ce.a)(t,e),Object(re.a)(t,[{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"header"},n.a.createElement("div",{className:"inner"},n.a.createElement("div",{className:"header-text text-center"},n.a.createElement("h1",null,"Welcome to our Shop"),n.a.createElement("h4",null,"Offering Yummy Pizza")))))}}]),t}(r.Component)),se=function(e){function t(){return Object(ae.a)(this,t),Object(ne.a)(this,Object(le.a)(t).apply(this,arguments))}return Object(ce.a)(t,e),Object(re.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("div",{className:"about container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-6 my-5"},n.a.createElement("img",{className:"aboutImage",src:"/images/about-1-600x400.jpg",alt:"aboutImage"})),n.a.createElement("div",{className:"col-md-6 my-5 text-right"},n.a.createElement("h1",{className:"text-danger text-center"},"About Our Shop"),n.a.createElement("p",{className:"py-3 text-center"},"sed do eiusmod tempor incididunt ut Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet, eiusmod tempor incididunt ut labore et consectetur adipiscing sed do eiusmod tempor incididunt ut Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet, eiusmod tempor incididunt ut labore et consectetur adipiscing sed do eiusmod tempor incididunt ut Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet, eiusmod tempor incididunt ut labore et consectetur adipiscing sed do eiusmod")))))}}]),t}(r.Component),oe=function(e){function t(){return Object(ae.a)(this,t),Object(ne.a)(this,Object(le.a)(t).apply(this,arguments))}return Object(ce.a)(t,e),Object(re.a)(t,[{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"ourCustomers text-center text-white py-5"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-3"},n.a.createElement("i",{class:"py-3 fa fa-smile-o","aria-hidden":"true"}),n.a.createElement("h1",null,"600"),n.a.createElement("h5",null,"Happy Customers")),n.a.createElement("div",{className:"col-md-3"},n.a.createElement("i",{class:"py-3 fa fa-shield","aria-hidden":"true"}),n.a.createElement("h1",null,"100+"),n.a.createElement("h5",null,"Feedback")),n.a.createElement("div",{className:"col-md-3"},n.a.createElement("i",{class:"py-3 fa fa-cutlery","aria-hidden":"true"}),n.a.createElement("h1",null,"8"),n.a.createElement("h5",null,"Products")),n.a.createElement("div",{className:"col-md-3"},n.a.createElement("i",{class:"py-3 fa fa-thumbs-o-up","aria-hidden":"true"}),n.a.createElement("h1",null,"225"),n.a.createElement("h5",null,"Ratings"))))))}}]),t}(r.Component),ue=function(e){function t(){return Object(ae.a)(this,t),Object(ne.a)(this,Object(le.a)(t).apply(this,arguments))}return Object(ce.a)(t,e),Object(re.a)(t,[{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"pizza text-center container py-5"},n.a.createElement("h1",{className:"text-danger"},"Our Pizza"),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-4"},n.a.createElement("img",{src:"/images/seller-2-200x200.png"}),n.a.createElement("h4",null,"Pizza Margherita"),n.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nibh urna")),n.a.createElement("div",{className:"col-md-4"},n.a.createElement("img",{src:"/images/seller-2-200x200.png"}),n.a.createElement("h4",null,"Pizza Margherita"),n.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nibh urna")),n.a.createElement("div",{className:"col-md-4"},n.a.createElement("img",{src:"/images/seller-2-200x200.png"}),n.a.createElement("h4",null,"Pizza Margherita"),n.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nibh urna")),n.a.createElement("div",{className:"col-md-4"},n.a.createElement("img",{src:"/images/seller-2-200x200.png"}),n.a.createElement("h4",null,"Pizza Margherita"),n.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nibh urna")),n.a.createElement("div",{className:"col-md-4"},n.a.createElement("img",{src:"/images/seller-2-200x200.png"}),n.a.createElement("h4",null,"Pizza Margherita"),n.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nibh urna")),n.a.createElement("div",{className:"col-md-4"},n.a.createElement("img",{src:"/images/seller-2-200x200.png"}),n.a.createElement("h4",null,"Pizza Margherita"),n.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nibh urna"))),n.a.createElement("div",null,n.a.createElement("h4",null,"For Order Click on ",n.a.createElement("a",{href:"/menu"},"Menu")))))}}]),t}(r.Component),me=function(e){function t(){return Object(ae.a)(this,t),Object(ne.a)(this,Object(le.a)(t).apply(this,arguments))}return Object(ce.a)(t,e),Object(re.a)(t,[{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"footer text-center pb-1 py-5"},n.a.createElement("h4",null,"Yummy Pizza"),n.a.createElement("i",{class:"fa fa-facebook text-secondary p-3","aria-hidden":"true"}),n.a.createElement("i",{class:"fa fa-twitter text-secondary p-3","aria-hidden":"true"}),n.a.createElement("i",{class:"fa fa-rss text-secondary p-3","aria-hidden":"true"}),n.a.createElement("i",{class:"fa fa-envelope text-secondary p-3","aria-hidden":"true"}),n.a.createElement("i",{class:"fa fa-instagram text-secondary p-3","aria-hidden":"true"}),n.a.createElement("p",{className:"text-white"},"\xa9Design by ",n.a.createElement("span",{className:"text-danger"},"Nexterism"))))}}]),t}(r.Component),de=function(e){function t(){return Object(ae.a)(this,t),Object(ne.a)(this,Object(le.a)(t).apply(this,arguments))}return Object(ce.a)(t,e),Object(re.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"home"},n.a.createElement(ie,null),n.a.createElement(se,null),n.a.createElement(oe,null),n.a.createElement(ue,null),n.a.createElement(me,null))}}]),t}(r.Component),pe=a(270);var Ee=function(e){var t=Object(r.useState)([]),a=Object(N.a)(t,2),l=a[0],c=a[1];return n.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},n.a.createElement(pe.a,{onDrop:function(t){var a=new FormData;a.append("file",t[0]),d.a.post("/api/product/uploadImage",a,{header:{"content-type":"multipart/form-data"}}).then(function(t){t.data.success?(c([].concat(Object(w.a)(l),[t.data.image])),e.refreshFunction([].concat(Object(w.a)(l),[t.data.image]))):alert("Failed to save the Image in Server")})},multiple:!1,maxSize:8e8},function(e){var t=e.getRootProps,a=e.getInputProps;return n.a.createElement("div",Object.assign({style:{width:"300px",height:"240px",border:"1px solid lightgray",display:"flex",alignItems:"center",justifyContent:"center"}},t()),n.a.createElement("input",a()),n.a.createElement(C.a,{type:"plus",style:{fontSize:"3rem"}}))}),n.a.createElement("div",{style:{display:"flex",width:"300px",height:"260px",overflowX:"scroll"}},l.map(function(t,a){return n.a.createElement("div",{onClick:function(){return function(t){var a=l.indexOf(t),r=Object(w.a)(l);r.splice(a,1),c(r),e.refreshFunction(r)}(t)}},n.a.createElement("img",{style:{minWidth:"300px",width:"300px",height:"240px"},src:"https://nexterism-pizza.herokuapp.com/".concat(t),alt:"productImg-".concat(a)}))})))},fe=M.a.Title,he=_.a.TextArea;var be=function(e){var t=Object(r.useState)(""),a=Object(N.a)(t,2),l=a[0],c=a[1],i=Object(r.useState)(""),s=Object(N.a)(i,2),o=s[0],u=s[1],m=Object(r.useState)(0),p=Object(N.a)(m,2),E=p[0],f=p[1],h=Object(r.useState)(1),b=Object(N.a)(h,2),y=b[0],g=(b[1],Object(r.useState)([])),v=Object(N.a)(g,2),O=v[0],j=v[1],x=function(t){if(t.preventDefault(),!l||!o||!E||!y||!O)return alert("fill all the fields first!");var a={writer:e.user.userData._id,title:l,description:o,price:E,images:O,continents:y};d.a.post("/api/product/uploadProduct",a).then(function(t){t.data.success?(alert("Product Successfully Uploaded"),e.history.push("/")):alert("Failed to upload Product")})};return n.a.createElement("div",{style:{maxWidth:"700px",margin:"auto",position:"relative",top:"150px"}},n.a.createElement("div",{style:{textAlign:"center",marginBottom:"2rem"}},n.a.createElement(fe,{level:2}," Upload Product")),n.a.createElement(B.a,{onSubmit:x},n.a.createElement(Ee,{refreshFunction:function(e){j(e)}}),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("label",null,"Title"),n.a.createElement(_.a,{onChange:function(e){c(e.currentTarget.value)},value:l}),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("label",null,"Description"),n.a.createElement(he,{onChange:function(e){u(e.currentTarget.value)},value:o}),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("label",null,"Price($)"),n.a.createElement(_.a,{onChange:function(e){f(e.currentTarget.value)},value:E,type:"number"}),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement($.a,{onClick:x},"Submit"),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null)))},ye=a(266),ge=a.n(ye);var ve=function(e){var t=Object(r.useState)([]),a=Object(N.a)(t,2),l=a[0],c=a[1];return Object(r.useEffect)(function(){if(e.detail.images&&e.detail.images.length>0){var t=[];e.detail.images&&e.detail.images.map(function(e){t.push({original:"https://nexterism-pizza.herokuapp.com/".concat(e),thumbnail:"https://nexterism-pizza.herokuapp.com/".concat(e)})}),c(t)}},[e.detail]),n.a.createElement("div",null,n.a.createElement(ge.a,{items:l}))},Oe=a(560);var je=function(e){var t=Object(r.useState)({}),a=Object(N.a)(t,2),l=a[0],c=a[1];return Object(r.useEffect)(function(){c(e.detail)},[e.detail]),n.a.createElement("div",null,n.a.createElement(Oe.a,{title:"Product Info"},n.a.createElement(Oe.a.Item,{label:"Price"}," ",l.price,"$"),n.a.createElement(Oe.a.Item,{label:"Sold"},l.sold),n.a.createElement(Oe.a.Item,{label:"View"}," ",l.views),n.a.createElement(Oe.a.Item,{label:"Description"}," ",l.description)),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},n.a.createElement($.a,{size:"large",shape:"round",type:"danger",onClick:function(){e.addToCart(e.detail._id)}},"Add to Cart"),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null)),n.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},n.a.createElement("h4",null,"You have to ",n.a.createElement("a",{href:"/login"},"Signin")," first to Add Product")))};var xe=function(e){var t=Object(j.b)(),a=e.match.params.productId,l=Object(r.useState)([]),c=Object(N.a)(l,2),i=c[0],s=c[1];return Object(r.useEffect)(function(){d.a.get("/api/product/products_by_id?id=".concat(a,"&type=single")).then(function(e){s(e.data[0])})},[]),n.a.createElement("div",{className:"postPage",style:{width:"100%",padding:"3rem 4rem",position:"relative",top:"100px"}},n.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},n.a.createElement("h1",null,i.title)),n.a.createElement("br",null),n.a.createElement(I.a,{gutter:[16,16]},n.a.createElement(P.a,{lg:12,xs:24},n.a.createElement(ve,{detail:i})),n.a.createElement(P.a,{lg:12,xs:24},n.a.createElement(je,{addToCart:function(e){t(function(e){var t=d.a.get("".concat(O,"/addToCart?productId=").concat(e)).then(function(e){return e.data});return{type:b,payload:t}}(e))},detail:i}))))};var we=function(e){var t=function(e){if(e.length>0){var t=e[0];return"https://nexterism-pizza.herokuapp.com/".concat(t)}};return n.a.createElement("div",null,n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Product Image"),n.a.createElement("th",null,"Product Quantity"),n.a.createElement("th",null,"Product Price"),n.a.createElement("th",null,"Remove from Cart"))),n.a.createElement("tbody",null,e.products&&e.products.map(function(a){return n.a.createElement("tr",{key:a._id},n.a.createElement("td",null,n.a.createElement("img",{style:{width:"70px"},alt:"product",src:t(a.images)})),n.a.createElement("td",null,a.quantity," EA"),n.a.createElement("td",null,"$ ",a.price," "),n.a.createElement("td",null,n.a.createElement("button",{className:"btn btn-danger",onClick:function(){return e.removeItem(a._id)}},"Remove"," ")," "))}))))},Ne=a(141),Se=a(553);function Pe(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}function Ce(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Pe(a,!0).forEach(function(t){Object(Ne.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Pe(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var Ie=function(e){var t=Se.a.Option,a={labelCol:{span:8},wrapperCol:{span:14}},r={required:"${label} is required!",types:{email:"${label} is not validate email!",number:"${label} is not a validate number!"},number:{range:"${label} must be between ${min} and ${max}"}},l=n.a.createElement(B.a.Item,{name:"prefix",style:{margin:"auto"}},n.a.createElement(Se.a,{style:{width:70}},n.a.createElement(t,{value:"86"},"+46"),n.a.createElement(t,{value:"87"},"+49"),n.a.createElement(t,{value:"86"},"+92"),n.a.createElement(t,{value:"87"},"+96")));return n.a.createElement("div",null,n.a.createElement("h2",null,"Delivery Address"),n.a.createElement("div",null,n.a.createElement(B.a,Object.assign({},a,{name:"nest-messages",validateMessages:r}),n.a.createElement(B.a.Item,{name:["user","name"],label:"Name",rules:[{required:!0}]},n.a.createElement(_.a,null)),n.a.createElement(B.a.Item,{name:["user","email"],label:"Email",rules:[{required:!0,type:"email"}]},n.a.createElement(_.a,null)),n.a.createElement(B.a.Item,{name:"phone",label:"Phone Number",rules:[{required:!0,message:"Please input your phone number!"}]},n.a.createElement(_.a,{addonBefore:l,style:{width:"100%",height:"50px"}})),n.a.createElement(B.a.Item,{name:["user","address"],label:"Address",rules:[{required:!0}]},n.a.createElement(_.a.TextArea,null)),n.a.createElement(B.a.Item,{wrapperCol:Ce({},a.wrapperCol,{offset:8})}))))},ke=a(558),De=a(91),_e=a(267),ze=a.n(_e),qe=function(e){function t(){return Object(ae.a)(this,t),Object(ne.a)(this,Object(le.a)(t).apply(this,arguments))}return Object(ce.a)(t,e),Object(re.a)(t,[{key:"render",value:function(){var e=this,t=this.props.toPay;return n.a.createElement(ze.a,{env:"sandbox",client:{sandbox:"AelMA7rUdxce2INjEX1y9KQ47L4J8Idv7rIROe3if2vnMqsIkIz5FFUvA5g-cZiRCnRl3X2EAZljDxWw",production:"YOUR-PRODUCTION-APP-ID"},currency:"USD",total:t,onError:function(e){console.log("Error!",e)},onSuccess:function(t){console.log("The payment was succeeded!",t),e.props.onSuccess(t)},onCancel:function(e){console.log("The payment was cancelled!",e)},style:{size:"large",color:"blue",shape:"rect",label:"checkout"}})}}]),t}(n.a.Component);var Te=function(e){var t=Object(j.b)(),a=Object(r.useState)(0),l=Object(N.a)(a,2),c=l[0],i=l[1],s=Object(r.useState)(!1),o=Object(N.a)(s,2),u=o[0],m=o[1],p=Object(r.useState)(!1),E=Object(N.a)(p,2),f=E[0],h=E[1];Object(r.useEffect)(function(){var a=[];e.user.userData&&e.user.userData.cart&&e.user.userData.cart.length>0&&(e.user.userData.cart.forEach(function(e){a.push(e.id)}),t(function(e,t){var a=d.a.get("/api/product/products_by_id?id=".concat(e,"&type=array")).then(function(e){return t.forEach(function(t){e.data.forEach(function(a,r){t.id===a._id&&(e.data[r].quantity=t.quantity)})}),e.data});return{type:y,payload:a}}(a,e.user.userData.cart)).then(function(e){e.payload.length>0&&b(e.payload)}))},[e.user.userData]);var b=function(e){var t=0;e.map(function(e){t+=parseInt(e.price,10)*e.quantity}),i(t),m(!0)};return n.a.createElement("div",{style:{width:"85%",margin:" auto",position:"relative",top:"150px",overflowX:"hidden"}},n.a.createElement("h1",null,"My Cart"),n.a.createElement("div",null,n.a.createElement(we,{products:e.user.cartDetail,removeItem:function(e){t(function(e){var t=d.a.get("/api/users/removeFromCart?_id=".concat(e)).then(function(e){return e.data.cart.forEach(function(t){e.data.cartDetail.forEach(function(a,r){t.id===a._id&&(e.data.cartDetail[r].quantity=t.quantity)})}),e.data});return{type:g,payload:t}}(e)).then(function(e){e.payload.cartDetail.length<=0?m(!1):b(e.payload.cartDetail)})}}),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-4 my-5"},u?n.a.createElement("div",{style:{marginTop:"3rem"}},n.a.createElement("h2",null,"Subtotal amount: $",c," "),n.a.createElement("h2",null,"Delivery amount: $",5," "),n.a.createElement("hr",{style:{width:"25%",marginLeft:"0",textAlign:"left"}}),n.a.createElement("h2",null,"Total amount: $",c+5," ")):f?n.a.createElement(ke.a,{status:"success",title:"Successfully Purchased Items"}):n.a.createElement("div",{style:{width:"100%",display:"flex",flexDirection:"column",justifyContent:"center"}},n.a.createElement("br",null),n.a.createElement(De.a,{description:!1}),n.a.createElement("p",null,"No Items In the Cart"))),n.a.createElement("div",{className:"col-md-8 my-5 text-center"},u&&n.a.createElement(Ie,null)))),n.a.createElement("div",{style:{display:"flex",justifyContent:"center",marginTop:"-80px",padding:"100px"}},u&&n.a.createElement(qe,{toPay:c,onSuccess:function(a){var r={cartDetail:e.user.cartDetail,paymentData:a};d.a.post("./api/user/successBuy",r).then(function(a){a.data.success?(h(!0),m(!1),t(function(e){var t=d.a.post("".concat(O,"/successBuy"),e).then(function(e){return e.data});return{type:v,payload:t}}({cart:a.data.cart,cartDetail:e.user.cartDetail}))):alert("Failed")})},transactionError:function(){console.log("Paypal error")},transactionCanceled:function(){console.log("Transaction canceled")}})))};var Le=function(e){var t=Object(r.useState)([]),a=Object(N.a)(t,2),l=(a[0],a[1]);return Object(r.useEffect)(function(){d.a.get("/api/users/getHistory").then(function(e){e.data.success?l(e.data.history):alert("Faild to get History")})},[]),n.a.createElement("div",{style:{width:"80%",margin:"auto",position:"relative",top:"150px"}},n.a.createElement("div",{style:{textAlign:"center"}},n.a.createElement("h1",null,"History")),n.a.createElement("br",null),n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Payment Id"),n.a.createElement("th",null,"Price"),n.a.createElement("th",null,"Quantity"),n.a.createElement("th",null,"Date of Purchase"))),n.a.createElement("tbody",null,e.user.userData&&e.user.userData.history&&e.user.userData.history.map(function(e){return n.a.createElement("tr",{key:e.id},n.a.createElement("td",null,e.id),n.a.createElement("td",null,e.price),n.a.createElement("td",null,e.quantity),n.a.createElement("td",null,e.dateOfPurchase))}))))};a(544);var Ae=function(){return n.a.createElement(r.Suspense,{fallback:n.a.createElement("div",null,"Loading...")},n.a.createElement(te,null),n.a.createElement("div",null,n.a.createElement(i.c,null,n.a.createElement(i.a,{exact:!0,path:"/",component:x(de,null)}),n.a.createElement(i.a,{exact:!0,path:"/menu",component:x(L,null)}),n.a.createElement(i.a,{exact:!0,path:"/login",component:x(U,!1)}),n.a.createElement(i.a,{exact:!0,path:"/register",component:x(J,!1)}),n.a.createElement(i.a,{exact:!0,path:"/product/upload",component:x(be,!0)}),n.a.createElement(i.a,{exact:!0,path:"/product/:productId",component:x(xe,null)}),n.a.createElement(i.a,{exact:!0,path:"/user/cart",component:x(Te,!0)}),n.a.createElement(i.a,{exact:!0,path:"/history",component:x(Le,!0)}))))},Fe=a(100),Me=a(75);function Be(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}function Re(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Be(a,!0).forEach(function(t){Object(Ne.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Be(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var $e=Object(Me.c)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return Re({},e,{register:t.payload});case p:return Re({},e,{loginSucces:t.payload});case f:return Re({},e,{userData:t.payload});case h:return Re({},e);case b:return Re({},e,{userData:Re({},e.userData,{cart:t.payload})});case y:return Re({},e,{cartDetail:t.payload});case g:return Re({},e,{cartDetail:t.payload.cartDetail,userData:Re({},e.userData,{cart:t.payload.cart})});case v:return Re({},e,{userData:Re({},e.userData,{cart:t.payload.cart}),cartDetail:t.payload.cartDetail});default:return e}}}),Ve=a(268),Ue=a.n(Ve),Xe=a(269),He=Object(Me.a)(Ue.a,Xe.a)(Me.d);c.a.render(n.a.createElement(j.a,{store:He($e,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())},n.a.createElement(Fe.a,null,n.a.createElement(Ae,null))),document.getElementById("root"))}},[[273,1,2]]]);
//# sourceMappingURL=main.ce9dbe8b.chunk.js.map