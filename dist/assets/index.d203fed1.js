var Me=Object.defineProperty,je=Object.defineProperties;var We=Object.getOwnPropertyDescriptors;var q=Object.getOwnPropertySymbols;var Be=Object.prototype.hasOwnProperty,Ne=Object.prototype.propertyIsEnumerable;var U=(e,t,n)=>t in e?Me(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,g=(e,t)=>{for(var n in t||(t={}))Be.call(t,n)&&U(e,n,t[n]);if(q)for(var n of q(t))Ne.call(t,n)&&U(e,n,t[n]);return e},v=(e,t)=>je(e,We(t));var X=(e,t,n)=>(U(e,typeof t!="symbol"?t+"":t,n),n);import{W as Ue,s as i,C as Z,r as b,j as d,a as o,b as K,c as J,d as _e,e as Ge,u as He,F as _,f as Ve,L as Ye,g as qe,U as G,h as $,i as Q,k as Xe,R as Ze,l as Ke,m as Je,n as Qe,o as ee,B as et,p as tt,q as te,t as rt,v as nt,P as ot}from"./vendor.9f82f589.js";const it=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const c of r)if(c.type==="childList")for(const a of c.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const c={};return r.integrity&&(c.integrity=r.integrity),r.referrerpolicy&&(c.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?c.credentials="include":r.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(r){if(r.ep)return;r.ep=!0;const c=n(r);fetch(r.href,c)}};it();const st=Ue`
  * {
      box-sizing: border-box;
  }

  body {
    font-size: 15px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #0c0b0bc5;
  }

  body,html {
    margin: 0;
    padding: 0;
  }
`,C=i.div`
	display: flex;
	flex-direction: row;
`,w=i.div`
	display: flex;
	flex-direction: column;
`,re=Z`
	&::before {
		content: '';
		border: 0.5px solid black;
		opacity: 0.5;
		margin: 0 0.5rem;
	}
`;Z`
	&::after {
		content: '';
		border: 0.5px solid black;
		opacity: 0.5;
		margin: 0 0.5rem;
	}
`;const ct=i(w)`
	width: 100vw;
	height: 100vh;
	justify-content: center;
	align-items: center;
`;class at extends b.exports.Component{constructor(){super(...arguments);X(this,"state",{hasError:!1})}static getDerivedStateFromError(t){return{hasError:!0}}componentDidCatch(t,n){console.error("Uncaught error:",t,n)}render(){return this.state.hasError?d(ct,{children:[o("h1",{children:"Oops, something went terribly wrong :/"}),o("h2",{children:"We're sorry!"}),o("h3",{children:"Try to refresh the page and try again!"})]}):this.props.children}}var L;(function(e){e.IDLE="idle",e.LOADING="loading",e.ERROR="error"})(L||(L={}));const ne="https://fakestoreapi.com",dt=[{name:"Harry",associatedCartId:1,favoriteProductId:3},{name:"Ron",associatedCartId:3,favoriteProductId:1},{name:"Hermione",associatedCartId:2,favoriteProductId:5},{name:"Ginny",associatedCartId:4,favoriteProductId:1},{name:"Luna",associatedCartId:6,favoriteProductId:12}];async function oe(e,t){const s=[...new Set(e)].map(r=>K.get(`${ne}/${t}/${r}`));return(await Promise.all(s)).map(r=>r.data)}async function lt(e){const t=e.map(({acceptedProducts:n,date:s,disregardedProducts:r,userId:c,id:a})=>{const p=[...n,...r].map(({productData:m,amount:h})=>({id:m.id,amount:h})),l={userId:c,date:s,products:p};return K.put(`${ne}/carts/${a}`,l)});return(await Promise.all(t)).map(n=>n.data)}const j=J("getAllCartsByUserCartId",async(e,{rejectWithValue:t,dispatch:n})=>{try{const s=await oe(e,"carts");if(s.length){const r=new Map;for(const l of s){const m=l.products;for(const{productId:h}of m)r.has(h)||r.set(h,h)}const c=[...r.values()],a=await oe(c,"products");return n(ht(a)),s.map(l=>{const m=l.products.map(h=>a.find(u=>u.id===h.productId));return v(g({},l),{products:m})})}}catch(s){if(s instanceof Error)return t(s.message)}}),W=J("updateCartsOnPurchase",async(e,{getState:t,rejectWithValue:n})=>{const{shop:s}=t(),{checkoutCarts:r}=s;try{await lt(r)}catch(c){if(c instanceof Error)return n(c.message)}}),ut={wishListUsers:dt,carts:[],checkoutCarts:[],relevantProducts:[],selectedProductsRecord:{},status:L.IDLE,errorMessage:void 0},ie=_e({name:"shop",initialState:ut,reducers:{setRelevantProducts:(e,{payload:t})=>v(g({},e),{relevantProducts:t}),addToSelectedProducts:(e,{payload:t})=>{const{relevantProducts:n,carts:s,selectedProductsRecord:r}=e;let c={};for(const a of t){const{cartId:p,productId:l}=a;if(r[l])c=v(g(g({},c),r),{[l]:v(g({},r[l]),{amount:r[l].amount+1,originCartIdsList:[...r[l].originCartIdsList,p]})});else{const m=n.find(({id:f})=>f===l),h=s.filter(({products:f})=>f.some(({id:x})=>x===l)).map(({id:f})=>f),u=t.filter(({productId:f})=>f===l);if(u.length>1){const f=[...u.map(({cartId:x})=>x)];c=v(g(g({},c),r),{[l]:{productData:m,availableInCarts:h,originCartIdsList:f,amount:u.length}})}else c=v(g(g({},c),r),{[l]:{productData:m,availableInCarts:h,originCartIdsList:[p],amount:1}})}}return v(g({},e),{selectedProductsRecord:c})},removeSelectedProducts:(e,{payload:t})=>{const{cartId:n,productId:s}=t,r=e.selectedProductsRecord[s];let c={};return r.amount===1?(c=g({},e.selectedProductsRecord),delete c[s]):c=v(g({},e.selectedProductsRecord),{[s]:v(g({},r),{amount:r.amount-1,originCartIdsList:r.originCartIdsList.filter(a=>a!==n)})}),v(g({},e),{selectedProductsRecord:c})},clearAllSelectedProducts:e=>v(g({},e),{selectedProductsRecord:{}}),aggregateCheckoutCarts:e=>{const{carts:t,selectedProductsRecord:n}=e,s=t.map(r=>{const c=r.products;let a=[],p=[];for(const l of c){const m=n[l.id];m&&m.originCartIdsList.includes(r.id)?a=[...a,{productData:l,amount:1}]:p=[...p,{productData:l,amount:0}]}return{id:r.id,userId:r.userId,date:new Date,acceptedProducts:a,disregardedProducts:p}});return v(g({},e),{checkoutCarts:s})}},extraReducers:({addCase:e})=>{e(j.pending,t=>v(g({},t),{status:L.LOADING})),e(j.fulfilled,(t,{payload:n})=>v(g({},t),{status:L.IDLE,errorMessage:void 0,carts:n!=null?n:[]})),e(j.rejected,(t,{payload:n})=>v(g({},t),{status:L.ERROR,errorMessage:n==null?void 0:n.message})),e(W.pending,t=>v(g({},t),{status:L.LOADING})),e(W.fulfilled,t=>v(g({},t),{status:L.IDLE,errorMessage:void 0,checkoutCarts:[],selectedProductsRecord:{}})),e(W.rejected,(t,{payload:n})=>v(g({},t),{status:L.ERROR,errorMessage:n==null?void 0:n.message}))}}),{setRelevantProducts:ht,addToSelectedProducts:se,removeSelectedProducts:pt,clearAllSelectedProducts:ce,aggregateCheckoutCarts:mt}=ie.actions,ft=Ge({reducer:{shop:ie.reducer},devTools:!0}),O=()=>He(),gt=i.header`
	height: 4rem;
	display: flex;
	background-color: dodgerblue;
	box-shadow: 0 0 5px black;
	padding: 0 2rem;
	user-select: none;
`,bt=i(C)`
	align-items: center;

	&::after {
		content: '';
		height: 70%;
		border: 1px solid #ffffffa2;
		background: #ffffffa2;
		opacity: 0.7;
		margin-inline-start: 0.8rem;
	}
`,Ct=i.h1`
	font-size: 24px;
	color: #ffffffa2;
`,vt=i(_).attrs(({})=>({icon:Ve,size:"3x"}))`
	margin: 0 0.3em;
	color: #ffffffa2;
`,Pt=i(C)`
	justify-content: start;
	align-items: center;
	width: 70%;
	padding: 0 0.2rem;
	margin-inline-start: 0.2rem;
`,xt=i(Ye)`
	width: 8rem;
	height: 100%;
	color: #ffffffa2;
	text-decoration: none;
	font-size: 18px;
	padding: 0 1rem;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: all 0.2s ease;
	border-bottom: ${e=>e.$isActive?"8px solid #ffffffa2":""};
	background-color: ${e=>e.$isActive?"#b5c9f5a2":""};

	&:hover {
		background-color: #b5c9f5a2;
	}
	&:active {
		background-color: royalblue;
	}
`;function wt(){const e="Droppe XMAS",{pathname:t}=qe();return d(gt,{children:[d(bt,{children:[o(vt,{}),o(Ct,{children:e})]}),o(Pt,{children:[{to:"/",label:"Shop"},{to:"/checkout",label:"Checkout"}].map(({label:s,to:r})=>o(xt,{to:r,$isActive:t===r,children:s},s))})]})}const yt=G`
	0% {
		transform: scale(0);
		opacity: 0.2;
	}
	100% {
		transform: scale(1);
	}
`,St=G`
	0% {
		transform: scale(1);
	}
	100% {
		transform: scale(0);
		opacity: 0.2;
	}
`,ae=G`
	0% {
		transform: translate(0, 0);
	}
	100% {
		transform: translate(24px, 0);
	}
}
`,Lt=i.div`
	display: inline-block;
	position: relative;
	width: 80px;
	height: 80px;

	& div {
		position: absolute;
		top: 33px;
		width: ${e=>e.$size}px;
		height: ${e=>e.$size}px;
		border-radius: 50%;
		background: ${e=>e.$color};
		animation-timing-function: cubic-bezier(0, 1, 1, 0);

		&:nth-child(1) {
			left: 8px;
			animation: ${yt} 0.7s infinite;
		}
		&:nth-child(2) {
			left: 8px;
			animation: ${ae} 0.7s infinite;
		}
		&:nth-child(3) {
			left: 32px;
			animation: ${ae} 0.7s infinite;
		}
		&:nth-child(4) {
			left: 56px;
			animation: ${St} 0.7s infinite;
		}
	}
`;var H;(function(e){e.DEFAULT="default"})(H||(H={}));function It({type:e=H.DEFAULT,color:t="dodgerBlue",size:n=15}){return d(Lt,{className:"lds-ellipsis",$color:t,$size:n,children:[o("div",{}),o("div",{}),o("div",{}),o("div",{})]})}const $t=i.div`
	max-width: 100vw;
	max-height: 100vh;
	box-sizing: border-box;
	position: relative;
`,kt=i.main`
	/* calc 100vh (total page height) - header height */
	height: calc(100vh - 4rem);
	margin: 0 1.5rem;
	overflow: hidden;
`,Dt=i(C).attrs(()=>({children:o(It,{size:22})}))`
	width: inherit;
	height: inherit;
	justify-content: center;
	align-items: center;
`;function Rt({children:e}){const{status:t}=$(({shop:n})=>n);return d($t,{children:[o(wt,{}),o(kt,{children:t===L.LOADING?o(Dt,{}):e})]})}const Et=i(C)`
	overflow: auto;
`,de=i.section`
	width: 50%;
	height: auto;
	margin: 0 1rem;
`,le=i(C)`
	height: 3rem;
	align-items: center;
	justify-content: space-between;
	margin-top: 1rem;
`,ue=i.h3`
	margin: 0;
`,he=i.div`
	color: navy;
	cursor: pointer;

	&:hover {
		color: dodgerblue;
	}
`;function pe(e,t){const n=t>=50?50:t,s=e*(n/100),r=e-s;return{amountReduced:s,amountAfterDiscount:r}}function S(e,t="fi-FI"){return new Intl.NumberFormat(t,{style:"currency",currency:"EUR"}).format(e)}function At(e,t,n="asc"){return[...e].sort((s,r)=>{if(t in s&&t in r){const c=s[t],a=r[t];if(typeof c=="number"&&typeof a=="number")return Tt(c,a,n);if(typeof c=="string"&&typeof a=="string")return Ft(c,a,n)}return 0})}function Tt(e,t,n){return e===t?0:n==="asc"?e>t?1:-1:t>e?1:-1}function Ft(e,t,n){return e===t?0:n==="desc"?e.localeCompare(t):t.localeCompare(e)}var I;(function(e){e.FAVORITES="allFavorites",e.CHEAPEST="allCheapest",e.ALL_PRODUCTS="allProducts"})(I||(I={}));function Ot(e,t,n){return t.reduce((s,r)=>{const c=r.products;switch(e){case I.FAVORITES:{const a=zt(n,c,r);return[...s,{cartId:r.id,productId:a.id}]}case I.CHEAPEST:{const a=Mt(c);return[...s,{cartId:r.id,productId:a.id}]}case I.ALL_PRODUCTS:{for(const a of c)s=[...s,{cartId:r.id,productId:a.id}];return s}default:return s}},[])}function zt(e,t,n){const s=e.find(r=>r.associatedCartId===n.id);return t.find(r=>r.id===s.favoriteProductId)}function Mt(e){return e.reduce((t,n)=>t.price<n.price?t:n)}var z;(function(e){e.DEFAULT="default",e.DANGER="danger",e.CONFIRM="confirm"})(z||(z={}));const B={[z.DEFAULT]:{background:"white",color:"initial",hover:{background:"lightgrey"},active:{background:"white"}},[z.CONFIRM]:{background:"navy",color:"white",hover:{background:"royalblue"},active:{background:"dodgerblue"}},[z.DANGER]:{background:"crimson",color:"white",hover:{background:"darkred"},active:{background:"pink"}}},jt=i.button`
	background-color: ${e=>B[e.$type].background};
	color: ${e=>B[e.$type].color};
	width: 100%;
	min-height: 2.5rem;
	cursor: ${e=>e.disabled?"unset":"pointer"};
	font-size: ${e=>e.$fontSize}px;
	transition: all 0.2s ease;
	display: flex;
	align-items: center;
	justify-content: center;
	pointer-events: ${e=>e.disabled?"none":"unset"};
	opacity: ${e=>e.disabled?"0.2":"unset"};

	&:hover {
		background-color: ${e=>!e.disabled&&B[e.$type].hover.background};
	}

	&:active {
		background-color: ${e=>!e.disabled&&B[e.$type].active.background};
	}
`;var D;(function(e){e.DEFAULT="default",e.DANGER="danger",e.CONFIRM="confirm"})(D||(D={}));function M({children:e,disabled:t,onClick:n,type:s=D.DEFAULT,fontSize:r=13}){return o(jt,{onClick:n,disabled:Boolean(t),$type:s,$fontSize:r,children:e})}const Wt=i(C)`
	width: 100%;
	border: 1px solid #8a8a8abc;
	padding: 0.5rem;
	justify-content: space-between;
`,Bt=i(w)`
	width: 30%;
	justify-content: space-between;
`,Nt=i(w)`
	justify-content: center;
	margin: 0.2rem 0;
`,Ut=i.span`
	font-size: 22px;
	margin-inline-end: 0.5rem;
	font-weight: bold;
`,_t=i.span`
	font-size: 15px;
`,Gt=i(w)`
	width: 60%;
`,Ht=i.span`
	font-weight: bold;
	font-size: 18px;
	margin: 0.5rem 0;
`,Vt=i.div`
	width: 100%;
	height: 100%;
	display: grid;
	grid-template-columns: ${e=>"1fr ".repeat(e.$numberOfFrs)}; // 1fr for each button
	grid-gap: 1rem;
`,Yt=i(_).attrs(({})=>({size:"lg"}))`
	margin-inline-start: 0.3rem;
`;function me(){const{selectedProductsRecord:e}=$(({shop:r})=>r),t=Object.values(e),{totalPrice:n,discountAmount:s}=t.reduce((r,c)=>{if(c.amount<=1)return v(g({},r),{totalPrice:r.totalPrice+c.productData.price});const a=c.productData.price*c.amount,p=c.amount*10,{amountAfterDiscount:l,amountReduced:m}=pe(a,p);return{totalPrice:l,discountAmount:r.discountAmount+m}},{totalPrice:0,discountAmount:0});return b.exports.useMemo(()=>({totalPrice:n,discountAmount:s}),[n,s])}function qt(){const{selectedProductsRecord:e,carts:t,wishListUsers:n}=$(({shop:u})=>u),s=O(),r=Q(),{discountAmount:c,totalPrice:a}=me(),p=u=>Ot(u,t,n),l=b.exports.useMemo(()=>[{name:I.FAVORITES,label:"Select all favorite products",presetData:p(I.FAVORITES)},{name:I.CHEAPEST,label:"Select cheapest products",presetData:p(I.CHEAPEST)},{name:I.ALL_PRODUCTS,label:"Select all products",presetData:p(I.ALL_PRODUCTS)}],[]),m=b.exports.useCallback(u=>{s(ce()),s(se(u))},[]),h=()=>{s(mt()),r("/checkout",{replace:!0})};return d(Wt,{children:[d(Gt,{children:[o(Ht,{children:"Preset selection options:"}),o(Vt,{$numberOfFrs:l.length,children:l.map(({name:u,label:f,presetData:x})=>o(M,{type:D.CONFIRM,onClick:()=>m(x),children:f},u))})]}),d(Bt,{children:[d(Nt,{children:[d(Ut,{children:["Total: ",S(a)]}),d(_t,{children:["You saved: ",S(c)]})]}),d(M,{disabled:!Object.values(e).length,fontSize:16,type:D.CONFIRM,onClick:h,children:["Checkout ",o(Yt,{icon:Xe})]})]})]})}const V=i.span.attrs(({amount:e})=>({children:`Favorite ${e&&e>1?`x${e}`:""}`}))`
	display: inline-block;
	font-size: 10px;
	padding: 0.2rem;
	color: white;
	background: goldenrod;
	border-radius: 8px;
	margin-inline-start: 0.5rem;
	user-select: none;
`,Xt=i(C)`
	align-items: baseline;
	font-size: 11px;
	margin: 0.2rem 0.2rem 0.2rem 0;
`,fe=i.span`
	margin-inline-start: 0.2rem;
`;function Y({rateData:e}){return d(Xt,{children:[o(Ze,{ratingValue:0,initialValue:e.rate,size:16,readonly:!0}),d(fe,{children:[e.rate," out of 5"]}),d(fe,{children:[" - Rated by ",e.count," reviewers"]})]})}const ge=i(C)`
	height: 7rem;
	border-bottom: 1px solid #8a8a8abc;
	padding: 0 0.2rem;
`,be=i(C)`
	height: auto;
	width: 8rem;
	justify-content: center;
	padding: 0.5rem;
`,Ce=i.img`
	max-width: 100%;
	height: auto;
`,ve=i(w)`
	width: calc(100% - 8rem);
	padding: 0.5rem;
`,Pe=i.span`
	font-size: 16px;
	font-weight: bold;
	color: ${e=>e.$isFavorite&&"goldenrod"};
`;i.span`
	font-size: 12px;
	font-weight: bold;
`;const xe=i.span`
	font-weight: bold;
	font-size: 17px;
	color: ${e=>e.$isFavorite&&"goldenrod"};
`,Zt=i.span`
	font-size: 15px;
	margin-inline-start: 0.2rem;
`,we=i(C)`
	align-items: center;
	height: 5rem;
`,ye=i.span`
	font-weight: bold;
	font-size: 13px;

	${e=>!e.$hideDivider&&re}
`,Kt=i(C)`
	font-size: 13px;
`,Jt=i.span`
	margin: 0 0.1rem;
	color: ${e=>e.$isFavorite?"goldenrod":"initial"};

	/* set a comma after each name except for the last one */
	&:not(:last-child) {
		&::after {
			content: ' - ';
			color: initial;
		}
	}
`,Qt=i(_).attrs(({$isPurchased:e})=>({icon:e?Ke:Je}))`
	color: ${e=>e.$isPurchased?"dodgerblue":"crimson"};
	margin-inline-start: 0.2rem;
`;function er({productData:e,selectionAmount:t,availableInCarts:n,originCartIds:s}){const{title:r,image:c,price:a,rating:p}=e,{wishListUsers:l}=$(({shop:y})=>y),m=b.exports.useMemo(()=>t>1,[t]),{formattedPrice:h,formattedAmountReduced:u}=b.exports.useMemo(()=>{if(!m)return{formattedPrice:S(a),formattedDiscountAmount:0};const y=a*t,A=t*10,{amountAfterDiscount:F,amountReduced:T}=pe(y,A);return{formattedPrice:S(F),formattedAmountReduced:S(T)}},[a,t]),f=b.exports.useMemo(()=>l.filter(({associatedCartId:y})=>n.includes(y)),[n,l]),x=b.exports.useMemo(()=>l.filter(({favoriteProductId:y})=>y===e.id),[l,e]),k=Boolean(x.length);return d(ge,{children:[o(be,{children:o(Ce,{alt:`Image of ${r}`,src:c})}),d(ve,{children:[d(Pe,{$isFavorite:k,children:[r,k&&o(V,{amount:x.length})]}),o(Y,{rateData:p}),d(we,{children:[d(xe,{$isFavorite:k,children:[h,m&&d(Zt,{children:["(",S(a)," x ",t,")"]})]}),m&&o(ye,{children:`Discount: ${t*10}% (-${u})`})]}),d(Kt,{children:[o(ye,{$hideDivider:!0,children:"Available for:"}),f.map(({name:y,associatedCartId:A})=>{const F=s.includes(A),T=x.map(({name:N})=>N).includes(y);return d(Jt,{$isFavorite:T,children:[y,o(Qt,{icon:!0,$isPurchased:F})]},y)})]})]})]})}const tr=i(w)`
	border: 1px solid #8a8a8abc;
	height: 65vh;
	margin: 0.5rem 0;
	overflow: auto;
`,rr=i(w)`
	width: 100%;
	height: 100%;
	justify-content: center;
	align-items: center;
	user-select: none;
`;function nr(){const{selectedProductsRecord:e}=$(({shop:r})=>r),t=O(),n=b.exports.useMemo(()=>Object.values(e).length>0,[e]);return d(de,{children:[d(le,{children:[o(ue,{children:"Your shopping cart:"}),o(he,{onClick:()=>t(ce()),children:"Clear cart"})]}),o(tr,{children:n?Object.values(e).map(({amount:r,availableInCarts:c,originCartIdsList:a,productData:p})=>o(er,{productData:p,availableInCarts:c,selectionAmount:r,originCartIds:a},p.id)):d(rr,{children:[o("h3",{children:"You currently have no products selected"}),o("span",{children:"Start selecting products from the Wish List and/or from the Presets at the bottom"})]})}),o(qt,{})]})}const or=i.div`
	display: flex;
	flex-direction: ${e=>e.$flexDirection};
	max-width: 100%;
	flex-wrap: wrap;
`,ir=i(C)`
	align-items: center;
	justify-content: center;
	margin: 0 0.3rem;

	input {
		cursor: pointer;
		width: 18px;
		height: 18px;
	}
	label {
		font-size: 14px;
		cursor: pointer;
		user-select: none;
	}
`;function sr({items:e,flexDirection:t="row"}){return o(or,{$flexDirection:t,children:e.map(({label:n,name:s,isChecked:r,onChange:c,disabled:a})=>d(ir,{children:[o("input",{type:"checkbox",id:s,name:s,checked:r,onChange:c,disabled:a}),o("label",{htmlFor:s,children:n})]},s))})}const cr=i.select`
	height: 100%;
`,ar=i(C)`
	justify-content: center;
	align-items: center;
`,dr=i.span`
	margin-inline-end: 0.2rem;
	font-size: 13px;
`;function lr({name:e,onChange:t,options:n,disabled:s,outerLabel:r=""}){return d(ar,{children:[r&&o(dr,{children:r}),o(cr,{name:e,onChange:t,disabled:s,children:n.map(({label:c,value:a})=>o("option",{value:a,children:c},c))})]})}const ur=i(C)`
	font-size: ${e=>e.$fontSize}px;
	margin-bottom: 0.2rem;
`,hr=i.span`
	margin-inline-end: 0.4rem;
	font-weight: bold;
	width: 5rem;
`,pr=i.span``;function Se({label:e,value:t,fontSize:n=13}){return d(ur,{$fontSize:n,children:[d(hr,{children:[e,":"]}),o(pr,{children:t})]})}const mr=i(C)`
	height: auto;
	border-bottom: 1px solid #8a8a8abc;
	padding: 0 1rem 0 0.2rem;
`,fr=i(C)`
	height: auto;
	width: 8rem;
	justify-content: center;
	padding: 0.5rem;
`,gr=i.img`
	max-width: 100%;
	height: auto;
`,br=i(w)`
	width: calc(100% - 8rem - 6rem);
	padding: 0.5rem;
`,Cr=i.span`
	font-size: 16px;
	font-weight: bold;
	color: ${e=>e.$isFavorite&&"goldenrod"};
`;i.span`
	font-size: 12px;
	font-weight: bold;
`;const vr=i(w)`
	width: 6rem;
	align-items: center;
	justify-content: center;
`,Pr=i.span`
	font-weight: bold;
	font-size: 18px;
	margin: 0.5rem 0;
	color: ${e=>e.$isFavorite&&"goldenrod"};
`;function xr({productData:e,isFavorite:t,cartId:n,isSelected:s}){const r=O(),{title:c,image:a,price:p,rating:l,description:m,category:h,id:u}=e,f=S(p),x=b.exports.useCallback(()=>{const y={productId:u,cartId:n};return r(s?pt(y):se([y]))},[s]),k=b.exports.useMemo(()=>s?"Remove from cart":"Add to cart",[s]);return d(mr,{children:[o(fr,{children:o(gr,{alt:`Image of ${c}`,src:a})}),d(br,{children:[d(Cr,{$isFavorite:t,children:[c,t&&o(V,{})]}),o(Y,{rateData:l}),o(Se,{label:"Category",value:h}),o(Se,{label:"Description",value:m})]}),d(vr,{children:[o(Pr,{$isFavorite:t,children:f}),o(M,{type:s?D.DANGER:D.CONFIRM,onClick:x,children:k})]})]})}var wr=b.exports.memo(xr);const Le=i(w)`
	width: 100%;
	border: 1px solid #8a8a8abc;
	margin: 0.5rem 0;
	border-top-left-radius: 0.3rem;
	border-top-right-radius: 0.3rem;
	box-shadow: 1px 1px 1px #8a8a8abc;
`,Ie=i(C)`
	width: 100%;
	border-bottom: 1px solid #8a8a8abc;
	padding: 0.5rem;
	justify-content: space-between;
	align-items: end;
`,$e=i(w)``,ke=i.span`
	font-weight: bold;
	margin-bottom: 0.2rem;
`,yr=i.span`
	font-size: 12px;
`,De=i(w)`
	width: 100%;
`,Sr=i(C)`
	width: 100%;
	padding: 0.5rem;
	font-size: 12px;
`,Lr=i.span`
	/* the footer item divider */
	&:not(:first-child) {
		${re}
	}
`,Re=i.span`
	font-weight: ${e=>e.$isValue?"bold":""};
	margin-inline-start: ${e=>e.$isValue?"0.2rem":""};
`;function Ir({WishListOwner:e,cartData:t,sortParameter:n,showFavoritesOnly:s}){const{date:r,products:c,id:a}=t,{name:p,favoriteProductId:l}=e,{selectedProductsRecord:m}=$(({shop:P})=>P),[h,u]=b.exports.useState(!0),f=`${p}'s Wish List`,x=`Created at: ${Qe(new Date(r),"MM/dd/yyyy")}`,k=c.reduce((P,R)=>P+R.price,0),y=b.exports.useMemo(()=>[{label:"Number of products in list",value:c.length},{label:"Total wish list price",value:S(k)}],[c,k]),A=P=>P===l,F=()=>u(P=>!P),T=b.exports.useMemo(()=>s?c.filter(P=>A(P.id)):c,[s,c]),N=b.exports.useMemo(()=>{const[P,R]=n.split("_");return At(T,P,R)},[c,n,T]);return d(Le,{children:[d(Ie,{children:[d($e,{children:[o(ke,{children:f}),o(yr,{children:x})]}),o(he,{onClick:F,children:h?"Hide products":"Show products"})]}),h&&o(De,{children:N.map((P,R)=>{const Fe=Object.values(m).find(({productData:Oe,originCartIdsList:ze})=>ze.includes(a)&&Oe.id===P.id);return o(wr,{productData:P,isFavorite:A(P.id),cartId:a,isSelected:Boolean(Fe)},`${P.id}_${R}`)})}),o(Sr,{children:y.map(({label:P,value:R})=>d(Lr,{children:[d(Re,{children:[P,":"]}),o(Re,{$isValue:!0,children:R})]},P))})]})}const $r=i(C)`
	margin-inline-end: 1rem;
`,kr=i(w)`
	width: 100%;
	height: calc(100vh - 9rem);
	overflow: auto;
`;var E;(function(e){e.TITLE_DESC="title_desc",e.TITLE_ASC="title_asc",e.MOST_EXPENSIVE="price_desc",e.CHEAPEST="price_asc"})(E||(E={}));const Dr=[{value:E.TITLE_DESC,label:"Product Title - A-Z"},{value:E.TITLE_ASC,label:"Product Title - Z-A"},{value:E.CHEAPEST,label:"Cheapest"},{value:E.MOST_EXPENSIVE,label:"Most expensive"}];function Rr(){const[e,t]=b.exports.useState(E.TITLE_DESC),[n,s]=b.exports.useState(!1),{wishListUsers:r,carts:c}=$(({shop:u})=>u),a=c.length,p=b.exports.useMemo(()=>a===0?"No Wish Lists available currently:":a===1?"There is one Wish List available:":`There are ${a} Wish Lists available:`,[a]),l=u=>{const f=u.target.value;t(x=>x!==f?f:x)},m=b.exports.useCallback(()=>s(u=>!u),[s]),h=b.exports.useMemo(()=>[{label:"Show favorite products only",name:"favorites",isChecked:n,onChange:m}],[n]);return d(de,{children:[d(le,{children:[o(ue,{children:p}),d($r,{children:[o(lr,{options:Dr,name:"sort",onChange:l,outerLabel:"Sort list products:"}),o(sr,{items:h})]})]}),o(kr,{children:c.map(u=>{const f=r.find(x=>x.associatedCartId===u.id);return o(Ir,{cartData:u,WishListOwner:f,sortParameter:e,showFavoritesOnly:n},u.id)})})]})}function Er(){return $(({shop:e})=>e),d(Et,{children:[o(Rr,{}),o(nr,{})]})}const Ar=i.section`
	width: 100%;
	height: calc(100vh - 4rem);
	display: flex;
	margin: 0.2rem 1rem;
`,Tr=i.div`
	height: 100%;
	width: 60%;
	overflow: auto;
`,Fr=i(w)`
	width: 40%;
	align-items: center;
`,Or=i.h2`
	font-size: 25px;
	font-weight: bold;
	text-decoration: underline;
	align-self: center;
`,zr=i(w)`
	width: 50%;
	align-items: center;
	font-size: 20px;
`,Mr=i(C)`
	width: 100%;
	justify-content: space-between;
	margin: 0.4rem 0;
`,jr=i.span`
	font-weight: bold;
`,Wr=i(w)`
	width: 50%;
	margin: 2rem 0;
`,Ee=i.span`
	font-size: 22px;
`,Br=i.span`
	margin-top: 0.5rem;
	border-top: 1px solid black;
	font-size: 36px;
	font-weight: bold;
`,Nr=i(C)`
	width: 90%;
	height: 3rem;
	margin-top: 1rem;
`,Ur=i(w)`
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
`,_r=i.a`
	cursor: pointer;
	color: dodgerblue;
`;function Ae({productData:e,isFavorite:t}){const{title:n,image:s,price:r,rating:c}=e;return d(ge,{children:[o(be,{children:o(Ce,{alt:`Image of ${n}`,src:s})}),d(ve,{children:[d(Pe,{$isFavorite:t,children:[n,t&&o(V,{})]}),o(Y,{rateData:c}),o(we,{children:o(xe,{$isFavorite:t,children:S(r)})})]})]})}const Te=i(C)`
	justify-content: center;
	align-items: center;
	font-size: 15px;
	border-bottom: 1px solid #8a8a8abc;
	font-weight: bold;
	padding: 0.3rem 0;
	color: ${e=>e.$isSelected?"dodgerblue":"crimson"};
`,Gr=i.span`
	font-size: 13px;
`;function Hr({cartData:e,wishListOwner:t}){const n=a=>a===t.favoriteProductId,{acceptedProducts:s,disregardedProducts:r}=e,c=[...s,...r].length;return d(Le,{children:[o(Ie,{children:d($e,{children:[o(ke,{children:`${t.name}'s Wish List`}),d(Gr,{children:["Total of ",c," products: ",s.length," Accepted, ",r.length," ","Rejected"]})]})}),d(De,{children:[Boolean(s.length)&&d(ee,{children:[o(Te,{$isSelected:!0,children:"Accepted products:"}),s.map(a=>o(Ae,{productData:a.productData,isFavorite:n(a.productData.id)},`${a.productData.id}_${e.id}`))]}),Boolean(r.length)&&d(ee,{children:[o(Te,{children:"Rejected products:"}),r.map(a=>o(Ae,{productData:a.productData,isFavorite:n(a.productData.id)},`${a.productData.id}_${e.id}`))]})]})]})}function Vr(){const{checkoutCarts:e,wishListUsers:t,selectedProductsRecord:n}=$(({shop:h})=>h),s=Q(),r=O(),{discountAmount:c,totalPrice:a}=me(),p=b.exports.useMemo(()=>[{label:"Number of wish lists",value:t.length},{label:"Number of accepted products",value:e.reduce((h,u)=>h+=u.acceptedProducts.length,0)},{label:"Number of rejected products",value:e.reduce((h,u)=>h+=u.disregardedProducts.length,0)}],[t,e]),l=()=>s("/"),m=()=>{s("/"),r(W())};return!e.length||!Object.values(n).length?d(Ur,{children:[o("h1",{children:"Nothing to checkout currently!"}),d("span",{children:[o(_r,{onClick:l,children:"Go back"})," to the shop, select some items and click on checkout in order to proceed"]})]}):d(Ar,{children:[o(Tr,{children:e.map(h=>{const u=t.find(f=>f.associatedCartId===h.id);return o(Hr,{cartData:h,wishListOwner:u})})}),d(Fr,{children:[o(Or,{children:"Your Checkout Summary:"}),o(zr,{children:p.map(({label:h,value:u})=>d(Mr,{children:[d(jr,{children:[h,":"]})," ",u]}))}),d(Wr,{children:[d(Ee,{children:["Price before discount: ",S(a+c)]}),d(Ee,{children:["Discount: ",S(c)]}),d(Br,{children:["Total: ",S(a)]})]}),d(Nr,{children:[o(M,{onClick:l,fontSize:18,children:"Go back to shop"}),o(M,{onClick:m,fontSize:25,type:D.CONFIRM,children:"Confirm"})]})]})]})}function Yr(){const e=O(),{wishListUsers:t,status:n}=$(({shop:s})=>s);return b.exports.useEffect(()=>{const s=t.map(r=>r.associatedCartId);e(j(s))},[]),d(et,{children:[o(st,{}),o(Rt,{children:n===L.IDLE&&d(tt,{children:[o(te,{path:"/",element:o(Er,{})}),o(te,{path:"/checkout",element:o(Vr,{})})]})})]})}rt.render(o(nt.StrictMode,{children:o(at,{children:o(ot,{store:ft,children:o(Yr,{})})})}),document.getElementById("root"));
