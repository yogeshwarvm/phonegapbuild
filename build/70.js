webpackJsonp([70],{1892:function(n,l,a){"use strict";function e(n){return u._42(0,[u._37(402653184,1,{wikiComponent:0}),(n()(),u._16(1,0,null,null,18,"ion-header",[],null,null,null,null,null)),u._15(2,16384,null,0,D.a,[y.a,u.p,u.K,[2,C.a]],null,null),(n()(),u._40(-1,null,["\n    "])),(n()(),u._16(4,0,null,null,14,"ion-navbar",[["class","toolbar"],["core-back-button",""]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,K.b,K.a)),u._15(5,49152,null,0,P.a,[V.a,[2,C.a],[2,M.a],y.a,u.p,u.K],null,null),u._15(6,212992,null,0,E.a,[P.a,L.a,j.a,A.a],null,null),(n()(),u._40(-1,3,["\n        "])),(n()(),u._16(8,0,null,3,3,"ion-title",[],null,null,null,B.b,B.a)),u._15(9,49152,null,0,F.a,[y.a,u.p,u.K,[2,J.a],[2,P.a]],null,null),(n()(),u._16(10,0,null,0,1,"core-format-text",[],null,null,null,null,null)),u._15(11,540672,null,0,N.a,[u.p,O.a,W.a,q.a,j.a,L.a,z.a,G.a,H.a,Q.a,S.a,U.a,[2,M.a],[2,X.a],[2,Y.a],Z.a,A.a],{text:[0,"text"]},null),(n()(),u._40(-1,3,["\n\n        "])),(n()(),u._16(13,0,null,2,4,"ion-buttons",[["end",""]],null,null,null,null,null)),u._15(14,16384,null,1,$.a,[y.a,u.p,u.K,[2,J.a],[2,P.a]],null,null),u._37(603979776,2,{_buttons:1}),(n()(),u._40(-1,null,["\n            "])),(n()(),u._40(-1,null,["\n        "])),(n()(),u._40(-1,3,["\n    "])),(n()(),u._40(-1,null,["\n"])),(n()(),u._40(-1,null,["\n"])),(n()(),u._16(21,0,null,null,13,"ion-content",[],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,nn.b,nn.a)),u._15(22,4374528,null,0,X.a,[y.a,L.a,ln.a,u.p,u.K,V.a,an.a,u.D,[2,C.a],[2,M.a]],null,null),(n()(),u._40(-1,1,["\n    "])),(n()(),u._16(24,0,null,2,6,"ion-refresher",[],[[2,"refresher-active",null],[4,"top",null]],[[null,"ionRefresh"]],function(n,l,a){var e=!0;if("ionRefresh"===l){e=!1!==n.component.wikiComponent.doRefresh(a)&&e}return e},null,null)),u._15(25,212992,null,0,en.a,[L.a,X.a,u.D,un.l],{enabled:[0,"enabled"]},{ionRefresh:"ionRefresh"}),(n()(),u._40(-1,null,["\n        "])),(n()(),u._16(27,0,null,null,2,"ion-refresher-content",[],[[1,"state",0]],null,null,tn.b,tn.a)),u._15(28,114688,null,0,on.a,[en.a,y.a],{pullingText:[0,"pullingText"]},null),u._32(131072,dn.a,[j.a,u.i]),(n()(),u._40(-1,null,["\n    "])),(n()(),u._40(-1,1,["\n\n    "])),(n()(),u._16(32,0,null,1,1,"addon-mod-wiki-index",[],null,[[null,"dataRetrieved"]],function(n,l,a){var e=!0;if("dataRetrieved"===l){e=!1!==n.component.updateData(a)&&e}return e},R.c,R.b)),u._15(33,245760,[[1,4]],0,d.a,[u.u,_n.a,[2,X.a],rn.a,sn.a,M.a,z.a,pn.a,cn.a,gn.a],{module:[0,"module"],courseId:[1,"courseId"],action:[2,"action"],pageId:[3,"pageId"],pageTitle:[4,"pageTitle"],wikiId:[5,"wikiId"],subwikiId:[6,"subwikiId"],userId:[7,"userId"],groupId:[8,"groupId"]},{dataRetrieved:"dataRetrieved"}),(n()(),u._40(-1,1,["\n"])),(n()(),u._40(-1,null,["\n"]))],function(n,l){var a=l.component;n(l,6,0);n(l,11,0,a.title);n(l,25,0,a.wikiComponent.loaded);n(l,28,0,u._19(1,"",u._41(l,28,0,u._29(l,29).transform("core.pulltorefresh")),""));n(l,33,0,a.module,a.courseId,a.action,a.pageId,a.pageTitle,a.wikiId,a.subwikiId,a.userId,a.groupId)},function(n,l){n(l,4,0,u._29(l,5)._hidden,u._29(l,5)._sbPadding);n(l,21,0,u._29(l,22).statusbarPadding,u._29(l,22)._hasRefresher);n(l,24,0,"inactive"!==u._29(l,25).state,u._29(l,25)._top);n(l,27,0,u._29(l,28).r.state)})}Object.defineProperty(l,"__esModule",{value:!0});var u=a(1),t=(a(0),a(9),a(4)),i=a(29),o=a(704),d=a(475),_=function(){function n(n){this.module=n.get("module")||{},this.courseId=n.get("courseId"),this.action=n.get("action")||"page",this.pageId=n.get("pageId"),this.pageTitle=n.get("pageTitle"),this.wikiId=n.get("wikiId"),this.subwikiId=n.get("subwikiId"),this.userId=n.get("userId"),this.groupId=n.get("groupId"),this.title=this.pageTitle||this.module.name}return n.prototype.updateData=function(n){this.title="string"==typeof n?n:this.pageTitle||n.title||this.title},n.prototype.ionViewDidEnter=function(){this.wikiComponent.ionViewDidEnter()},n.prototype.ionViewDidLeave=function(){this.wikiComponent.ionViewDidLeave()},n}(),r=function(){return function(){}}(),s=a(1344),p=a(1345),c=a(1346),g=a(1347),b=a(1348),f=a(1349),h=a(1350),I=a(1351),w=a(1352),k=a(1355),m=a(1356),v=a(1357),x=a(1358),R=a(1410),T=a(1431),D=a(434),y=a(7),C=a(36),K=a(1353),P=a(200),V=a(33),M=a(22),E=a(662),L=a(15),j=a(18),A=a(13),B=a(1354),F=a(335),J=a(247),N=a(40),O=a(2),W=a(5),q=a(10),z=a(3),G=a(26),H=a(6),Q=a(17),S=a(11),U=a(19),X=a(24),Y=a(34),Z=a(37),$=a(435),nn=a(184),ln=a(31),an=a(109),en=a(146),un=a(38),tn=a(201),on=a(158),dn=a(25),_n=a(209),rn=a(257),sn=a(288),pn=a(68),cn=a(44),gn=a(63),bn=a(61),fn=u._14({encapsulation:2,styles:[],data:{}}),hn=u._12("page-addon-mod-wiki-index",_,function(n){return u._42(0,[(n()(),u._16(0,0,null,null,1,"page-addon-mod-wiki-index",[],null,null,null,e,fn)),u._15(1,49152,null,0,_,[bn.a],null,null)],null,null)},{},{},[]),In=a(8),wn=a(23),kn=a(331),mn=a(332),vn=a(334),xn=a(333),Rn=a(433),Tn=a(661),Dn=a(108),yn=a(28),Cn=a(66),Kn=a(248);a.d(l,"AddonModWikiIndexPageModuleNgFactory",function(){return Pn});var Pn=u._13(r,[],function(n){return u._25([u._26(512,u.n,u._6,[[8,[s.a,p.a,c.a,g.a,b.a,f.a,h.a,I.a,w.a,k.a,m.a,v.a,x.a,R.a,T.a,hn]],[3,u.n],u.B]),u._26(4608,In.m,In.l,[u.x,[2,In.v]]),u._26(4608,wn.x,wn.x,[]),u._26(4608,wn.d,wn.d,[]),u._26(4608,kn.b,kn.a,[]),u._26(4608,mn.a,mn.b,[]),u._26(4608,vn.b,vn.a,[]),u._26(4608,xn.b,xn.a,[]),u._26(4608,j.a,j.a,[Rn.a,kn.b,mn.a,vn.b,xn.b,j.b,j.c]),u._26(512,i.a,i.a,[]),u._26(512,In.b,In.b,[]),u._26(512,wn.v,wn.v,[]),u._26(512,wn.i,wn.i,[]),u._26(512,wn.s,wn.s,[]),u._26(512,Tn.a,Tn.a,[]),u._26(512,t.a,t.a,[]),u._26(512,Dn.a,Dn.a,[]),u._26(512,yn.a,yn.a,[]),u._26(512,Cn.a,Cn.a,[]),u._26(512,o.a,o.a,[]),u._26(512,Tn.b,Tn.b,[]),u._26(512,r,r,[]),u._26(256,j.c,void 0,[]),u._26(256,j.b,void 0,[]),u._26(256,Kn.a,_,[])])})}});