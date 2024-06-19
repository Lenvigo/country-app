import{A as I,B as P,C as F,D as L,E as w,F as X,G as D,H as g,I as M,J as Y,K as Z,O as ee,Q as te,R as ie,S as A,V as N,W as j,Y as ne,a as k,b as z,c as U,d as J,e as v,f as H,g as _,h as G,i as h,j as T,k as K,l as Q,m as B,n as s,o as f,p as d,q as m,r,s as n,t as p,u as W,v as x,w as C,x as R,y as a,z as u}from"./chunk-BJDN4QZU.js";var y=(()=>{let e=class e{constructor(i){this.http=i,this.apiUrl="https://restcountries.com/v3.1",this.cacheStore={byCapital:{term:"",countries:[]},byCountries:{term:"",countries:[]},byRegion:{region:"",countries:[]}},this.loadFromLocalStorage()}saveToLocalStorage(){localStorage.setItem("cacheStore",JSON.stringify(this.cacheStore))}loadFromLocalStorage(){localStorage.getItem("cacheStore")&&(this.cacheStore=JSON.parse(localStorage.getItem("cacheStore")))}getCountriesRequest(i){return this.http.get(i).pipe(U(()=>k([])))}searchCountryByAlphaCode(i){let o=`${this.apiUrl}/alpha/${i}`;return this.http.get(o).pipe(z(l=>l.length>0?l[0]:null),U(()=>k(null)))}searchCapital(i){let o=`${this.apiUrl}/capital/${i}`;return this.getCountriesRequest(o).pipe(v(l=>this.cacheStore.byCapital={term:i,countries:l}),v(()=>this.saveToLocalStorage()))}searchCountry(i){let o=`${this.apiUrl}/name/${i}`;return this.getCountriesRequest(o).pipe(v(l=>this.cacheStore.byCountries={term:i,countries:l}),v(()=>this.saveToLocalStorage()))}searchRegion(i){let o=`${this.apiUrl}/region/${i}`;return this.getCountriesRequest(o).pipe(v(l=>this.cacheStore.byRegion={region:i,countries:l}),v(()=>this.saveToLocalStorage()))}};e.\u0275fac=function(o){return new(o||e)(G(Z))},e.\u0275prov=H({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var me=t=>["/countries/by",t];function pe(t,e){t&1&&(r(0,"div",2),a(1,` No hay pa\xEDses que mostrar
`),n())}function ue(t,e){if(t&1&&(r(0,"tr")(1,"td"),a(2),n(),r(3,"td"),a(4),n(),r(5,"td"),p(6,"img",5),n(),r(7,"td"),a(8),n(),r(9,"td"),a(10),n(),r(11,"td"),a(12),F(13,"number"),n(),r(14,"td")(15,"a",6),a(16," + info. "),n()()()),t&2){let c=e.$implicit,i=e.index;s(2),u(i+1),s(2),u(c.flag),s(2),m("src",c.flags.svg,B)("alt",c.name.common),s(2),u(c.name.common),s(2),u(c.capital),s(2),u(L(13,8,c.population)),s(3),m("routerLink",P(10,me,c.cca3))}}function de(t,e){if(t&1&&(r(0,"table",3)(1,"thead")(2,"tr")(3,"th"),a(4,"#"),n(),r(5,"th"),a(6,"Icon"),n(),r(7,"th"),a(8,"Bandera"),n(),r(9,"th"),a(10,"Nombre"),n(),r(11,"th"),a(12,"Capital"),n(),r(13,"th"),a(14,"Poblaci\xF3n"),n(),p(15,"th"),n()(),r(16,"tbody"),d(17,ue,17,12,"tr",4),n()()),t&2){let c=C();s(17),m("ngForOf",c.countries)}}var b=(()=>{let e=class e{constructor(){this.countries=[]}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["countries-table"]],inputs:{countries:"countries"},decls:3,vars:2,consts:[["table",""],["class","alert alert-warning text-center",4,"ngIf","ngIfElse"],[1,"alert","alert-warning","text-center"],[1,"table","table-hover"],[4,"ngFor","ngForOf"],[3,"src","alt"],[3,"routerLink"]],template:function(o,l){if(o&1&&d(0,pe,2,0,"div",1)(1,de,18,1,"ng-template",null,0,w),o&2){let E=R(2);m("ngIf",l.countries.length===0)("ngIfElse",E)}},dependencies:[D,g,ie,M],styles:["img[_ngcontent-%COMP%]{width:25px}"]});let t=e;return t})();function ge(t,e){t&1&&p(0,"shared-loading-spinner")}var oe=(()=>{let e=class e{constructor(i){this.countriesService=i,this.countries=[],this.isLoading=!1,this.initialValue=""}ngOnInit(){this.countries=this.countriesService.cacheStore.byCapital.countries,this.initialValue=this.countriesService.cacheStore.byCapital.term}searchByCapital(i){this.isLoading=!0,this.countriesService.searchCapital(i).subscribe(o=>{this.countries=o,this.isLoading=!1})}};e.\u0275fac=function(o){return new(o||e)(f(y))},e.\u0275cmp=h({type:e,selectors:[["app-by-capital-page"]],decls:11,vars:3,consts:[[1,"row"],[1,"col"],["placeholder","buscar por capital",3,"onDebounce","initialValue"],[4,"ngIf"],[3,"countries"]],template:function(o,l){o&1&&(r(0,"h2"),a(1,"Por Capital"),n(),p(2,"hr"),r(3,"div",0)(4,"div",1)(5,"shared-search-box",2),x("onDebounce",function($){return l.searchByCapital($)}),n()()(),r(6,"div",0)(7,"div",1),p(8,"hr"),d(9,ge,1,0,"shared-loading-spinner",3),p(10,"countries-table",4),n()()),o&2&&(s(5),m("initialValue",l.initialValue),s(4),m("ngIf",l.isLoading),s(),m("countries",l.countries))},dependencies:[g,N,j,b]});let t=e;return t})();function ye(t,e){t&1&&p(0,"shared-loading-spinner")}var re=(()=>{let e=class e{constructor(i){this.countriesService=i,this.countries=[],this.initialValue="",this.isLoading=!1}ngOnInit(){this.countries=this.countriesService.cacheStore.byCountries.countries,this.initialValue=this.countriesService.cacheStore.byCountries.term}searchByCountry(i){this.isLoading=!0,this.countriesService.searchCountry(i).subscribe(o=>{this.countries=o,this.isLoading=!1})}};e.\u0275fac=function(o){return new(o||e)(f(y))},e.\u0275cmp=h({type:e,selectors:[["app-by-country-page"]],decls:10,vars:3,consts:[[1,"row"],[1,"col"],["placeholder","buscar por pais",3,"onDebounce","initialValue"],[4,"ngIf"],[3,"countries"]],template:function(o,l){o&1&&(r(0,"h2"),a(1,"Por Pa\xEDs"),n(),p(2,"hr"),r(3,"div",0)(4,"div",1)(5,"shared-search-box",2),x("onDebounce",function($){return l.searchByCountry($)}),n()()(),r(6,"div",0)(7,"div",1),d(8,ye,1,0,"shared-loading-spinner",3),p(9,"countries-table",4),n()()),o&2&&(s(5),m("initialValue",l.initialValue),s(3),m("ngIf",l.isLoading),s(),m("countries",l.countries))},dependencies:[g,N,j,b]});let t=e;return t})();var ve=t=>({"btn-outline-primary":t});function Ce(t,e){if(t&1){let c=W();r(0,"button",4),x("click",function(){let o=K(c).$implicit,l=C();return Q(l.searchByRegion(o))}),a(1),n()}if(t&2){let c=e.$implicit,i=C();m("ngClass",P(2,ve,i.selectedRegion===c)),s(),I("",c," ")}}var ae=(()=>{let e=class e{constructor(i){this.countriesService=i,this.countries=[],this.regions=["Africa","Americas","Asia","Europe","Oceania"],this.isLoading=!1}ngOnInit(){this.countries=this.countriesService.cacheStore.byRegion.countries,this.selectedRegion=this.countriesService.cacheStore.byRegion.region}searchByRegion(i){this.isLoading=!0,this.selectedRegion=i,this.countriesService.searchRegion(i).subscribe(o=>{this.countries=o,this.isLoading=!1})}};e.\u0275fac=function(o){return new(o||e)(f(y))},e.\u0275cmp=h({type:e,selectors:[["app-by-region-page"]],decls:9,vars:2,consts:[[1,"row"],[1,"col"],["class","btn mx-2",3,"ngClass","click",4,"ngFor","ngForOf"],[3,"countries"],[1,"btn","mx-2",3,"click","ngClass"]],template:function(o,l){o&1&&(r(0,"h2"),a(1,"Por Regi\xF3n"),n(),p(2,"hr"),r(3,"div",0)(4,"div",1),d(5,Ce,2,4,"button",2),n()(),r(6,"div",0)(7,"div",1),p(8,"countries-table",3),n()()),o&2&&(s(5),m("ngForOf",l.regions),s(3),m("countries",l.countries))},dependencies:[X,D,b]});let t=e;return t})();function Se(t,e){t&1&&(r(0,"div",2),a(1," Espere por favor "),n())}function xe(t,e){if(t&1&&(r(0,"div")(1,"div",3)(2,"div",4)(3,"h2"),a(4,"Pa\xEDs: "),r(5,"strong"),a(6),n()(),p(7,"hr"),n()(),r(8,"div",3)(9,"div",5)(10,"h3"),a(11,"Bandera"),n(),p(12,"img",6),n(),r(13,"div",7)(14,"h3"),a(15,"Informaci\xF3n"),n(),r(16,"ul",8)(17,"li",9)(18,"strong"),a(19,"Poblaci\xF3n:"),n(),a(20),F(21,"number"),n(),r(22,"li",9)(23,"strong"),a(24,"C\xF3digo:"),n(),a(25),n()()(),r(26,"div",10)(27,"div",7)(28,"h3"),a(29,"Traducciones: "),n(),r(30,"div",11)(31,"span",12),a(32),n(),r(33,"span",12),a(34),n(),r(35,"span",12),a(36),n(),r(37,"span",12),a(38),n(),r(39,"span",12),a(40),n(),r(41,"span",12),a(42),n(),r(43,"span",12),a(44),n(),r(45,"span",12),a(46),n(),r(47,"span",12),a(48),n()()()()()()),t&2){let c=C();s(6),u(c.country.name.common),s(6),m("src",c.country.flags.svg,B)("alt",c.country.name.common),s(8),I(" ",L(21,14,c.country.population)," "),s(5),I(" ",c.country.cca3," "),s(7),u(c.country.translations.spa.common),s(2),u(c.country.translations.gbr.common),s(2),u(c.country.translations.fra.common),s(2),u(c.country.translations.bre.common),s(2),u(c.country.translations.ita.common),s(2),u(c.country.translations.ara.common),s(2),u(c.country.translations.jap.common),s(2),u(c.country.translations.kor.common),s(2),u(c.country.translations.per.common)}}var se=(()=>{let e=class e{constructor(i,o,l){this.activatedRoute=i,this.countriesService=o,this.router=l}ngOnInit(){this.activatedRoute.params.pipe(J(({id:i})=>this.countriesService.searchCountryByAlphaCode(i))).subscribe(i=>i?this.country=i:this.router.navigateByUrl("home"))}};e.\u0275fac=function(o){return new(o||e)(f(ee),f(y),f(te))},e.\u0275cmp=h({type:e,selectors:[["app-country-page"]],decls:3,vars:2,consts:[["loading",""],[4,"ngIf","ngIfElse"],[1,"alert","alert-info","text-center"],[1,"row"],[1,"col-12"],[1,"col-4"],[1,"img-thumbnail",3,"src","alt"],[1,"col"],[1,"list-group"],[1,"list-group-item"],[1,"row","mt-2"],[1,"d-flex","flex-wrap"],[1,"badge","bg-primary","m-1"]],template:function(o,l){if(o&1&&d(0,Se,2,0,"ng-template",null,0,w)(2,xe,49,16,"div",1),o&2){let E=R(1);s(2),m("ngIf",l.country)("ngIfElse",E)}},dependencies:[g,M]});let t=e;return t})();var be=[{path:"by-capital",component:oe},{path:"by-country",component:re},{path:"by-region",component:ae},{path:"by/:id",component:se}],ce=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=T({type:e}),e.\u0275inj=_({imports:[A.forChild(be),A]});let t=e;return t})();var Qe=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=T({type:e}),e.\u0275inj=_({imports:[Y,ce,ne]});let t=e;return t})();export{Qe as CountriesModule};
