import{o as t,c as a,t as d,a as e,F as _,r as h,u,b as n,d as p,e as g}from"./app.45637294.js";const b=["datetime"],f={name:"Date",props:{date:Object},setup(s){const o=s;function i(){return new Date(o.date.time).toISOString()}return(l,r)=>(t(),a("time",{datetime:i()},d(s.date.string),9,b))}},x=JSON.parse('[{"title":"Example Post","href":"/posts/example-post.html","date":{"time":1654344000000,"string":"June 4, 2022"},"excerpt":"\\r\\nexample lipsum dorem sorem salamander alomet or something\\r\\n\\r\\n"}]'),v=e("h1",{id:"blog",tabindex:"-1"},[n("Blog "),e("a",{class:"header-anchor",href:"#blog","aria-hidden":"true"},"#")],-1),y=e("h2",{id:"most-recent-articles",tabindex:"-1"},[n("Most Recent Articles "),e("a",{class:"header-anchor",href:"#most-recent-articles","aria-hidden":"true"},"#")],-1),B=e("br",null,null,-1),D=e("br",null,null,-1),N={class:"py-12"},V={class:"VPBox"},k={style:{"margin-top":"0px","margin-bottom":"8px"}},M=["href"],O=n(" - "),S=["innerHTML"],T=["href"],R='{"title":"Blog","description":"","frontmatter":{},"headers":[{"level":2,"title":"Most Recent Articles","slug":"most-recent-articles"}],"relativePath":"blog.md"}',L={name:"blog.md"},j=Object.assign(L,{setup(s){return(o,i)=>(t(),a("div",null,[v,y,B,D,e("div",null,[(t(!0),a(_,null,h(u(x),({title:l,href:r,date:m,excerpt:c})=>(t(),a("div",N,[e("article",null,[e("div",V,[e("h3",k,[e("a",{class:"text-gray-900",href:r},d(l),9,M),O,p(f,{date:m},null,8,["date"])]),c?(t(),a("div",{key:0,style:{"margin-bottom":"8px"},innerHTML:c},null,8,S)):g("",!0),e("a",{class:"link","aria-label":"read more",href:r},"Read more \u2192",8,T)])])]))),256))])]))}});export{R as __pageData,j as default};
