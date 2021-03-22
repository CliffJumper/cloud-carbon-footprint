(window.webpackJsonp=window.webpackJsonp||[]).push([[24,7],{105:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),r=t(120),i=t(22);var c=function(e){var a=e.children,t=Object(i.default)().siteConfig,n=void 0===t?{}:t;return o.a.createElement(r.a,{title:"Hello from "+n.title,description:"Description will go into a meta tag in <head />"},o.a.createElement("main",null,a))},s=t(110),l=t(93),d=t.n(l),m=t(112),u=t(196),p=t(115),v=t(94),g=t.n(v);var f=function(){var e=Object(p.a)();return o.a.createElement("div",{className:g.a.callToActionBannerWrapper},o.a.createElement("div",{className:g.a.text},o.a.createElement("h2",null,"Cloud Carbon Emissions Measurement and Analysis Tool"),o.a.createElement("p",null,"Understand how your cloud usage impacts our environment and what you can do about it")),o.a.createElement(m.a,{to:"docs/getting-started"},o.a.createElement(u.a,{variant:"outlined",classes:{root:e.paddingLow},style:{borderColor:"#ffffff"}},"TRY NOW")))};var h=function(){var e=Object(i.default)().siteConfig,a=void 0===e?{}:e;return o.a.createElement("div",null,o.a.createElement("header",{className:Object(s.a)("hero hero--primary",d.a.heroBanner)},o.a.createElement("div",null,o.a.createElement("h1",{className:d.a.heroTitle},a.title),o.a.createElement("p",{className:Object(s.a)(d.a.heroSubtitle,d.a.heroNoMarginBottom)},"Free and Open Source"))),o.a.createElement(f,null))},b=t(95),E=t.n(b);var N=function(){var e=Object(p.a)();return o.a.createElement("div",{className:E.a.overviewContainer},o.a.createElement("div",{className:Object(s.a)(E.a.overviewItem,E.a.overviewItemImage)},o.a.createElement("img",{className:E.a.overviewImage,src:"img/cloud_carbon_footprint.png",alt:"Cloud carbon footprint tool screen capture"})),o.a.createElement("div",{className:Object(s.a)(E.a.overviewItem,E.a.overviewItemText)},o.a.createElement("p",{className:E.a.overviewTitle},"Get to know the carbon footprint of your cloud usage - and reduce it"),o.a.createElement("p",{className:E.a.overviewText},"Cloud Carbon Footprint is an open source tool that provides visibility and tooling to measure, monitor and reduce your cloud carbon emissions. We use best practice methodologies to convert cloud utilization into estimated energy usage and carbon emissions, producing metrics that can be shared with employees, investors, and other stakeholders."),o.a.createElement(m.a,{to:"docs/getting-started"},o.a.createElement(u.a,{variant:"contained",classes:{root:e.paddingLow}},"TRY NOW"))))},w=t(3),C=t(96),O=t.n(C),y=t(116),k=(t(1),t(126)),x=n.forwardRef((function(e,a){var t=e.classes,o=e.className,r=e.component,i=void 0===r?"div":r,c=e.square,l=void 0!==c&&c,d=e.elevation,m=void 0===d?1:d,u=e.variant,p=void 0===u?"elevation":u,v=Object(y.a)(e,["classes","className","component","square","elevation","variant"]);return n.createElement(i,Object(w.a)({className:Object(s.a)(t.root,o,"outlined"===p?t.outlined:t["elevation".concat(m)],!l&&t.rounded),ref:a},v))})),j=Object(k.a)((function(e){var a={};return e.shadows.forEach((function(e,t){a["elevation".concat(t)]={boxShadow:e}})),Object(w.a)({root:{backgroundColor:e.palette.background.paper,color:e.palette.text.primary,transition:e.transitions.create("box-shadow")},rounded:{borderRadius:e.shape.borderRadius},outlined:{border:"1px solid ".concat(e.palette.divider)}},a)}),{name:"MuiPaper"})(x),I=n.forwardRef((function(e,a){var t=e.classes,o=e.className,r=e.raised,i=void 0!==r&&r,c=Object(y.a)(e,["classes","className","raised"]);return n.createElement(j,Object(w.a)({className:Object(s.a)(t.root,o),elevation:i?8:1,ref:a},c))})),T=Object(k.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(I),A=n.forwardRef((function(e,a){var t=e.classes,o=e.className,r=e.component,i=void 0===r?"div":r,c=Object(y.a)(e,["classes","className","component"]);return n.createElement(i,Object(w.a)({className:Object(s.a)(t.root,o),ref:a},c))})),S=Object(k.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(A),L=[{title:"Reduce Cost",description:"Know where to target your optimizations, such as reducing the number and size of servers and requests. This decreases your usage and saves you money.",icon:"img/trending_down-black-24dp.svg",iconAlt:"Trending down icon"},{title:"Meet Sustainability Goals",description:"Measure your emissions over time and see what workloads are the dirtiest. Switch usage to regions with greener energy to meet your targets.",icon:"img/bar_chart-black-24dp.svg",iconAlt:"Bar chart icon"},{title:"Satisfy Investors and Employees",description:"Demonstrate a commitment to sustainability and enable stakeholders to measure cloud carbon emissions to inform decision making.",icon:"img/fact_check-black-24dp.svg",iconAlt:"Fact check icon"},{title:"Ground Up Sustainability",description:"Enable engineers to monitor emissions and usage daily. This allows for iteratively updating practices and choices to optimize for emissions and cost reduction.",icon:"img/legend_toggle-black-24dp.svg",iconAlt:"Legend icon"}];function R(e){var a=e.title,t=e.description,n=e.icon,r=e.iconAlt;return o.a.createElement(T,{className:O.a.valuePropCard},o.a.createElement(S,null,o.a.createElement("div",null,o.a.createElement("div",{className:O.a.valuePropCardHeaderContainer},o.a.createElement("div",{className:O.a.valuePropCardIconContainer},o.a.createElement("img",{src:n,alt:r})),o.a.createElement("div",{className:O.a.valuePropCardTitleContainer},o.a.createElement("p",{className:O.a.valuePropCardTitle},a))),o.a.createElement("div",{className:O.a.valuePropCardDescriptionContainer},o.a.createElement("p",null,t)))))}var P=function(){return o.a.createElement("div",{className:"home__subsection-box-format"},o.a.createElement("p",{className:"home__subsection-title"},"MEASURE AND CONTROL YOUR IMPACT"),o.a.createElement("div",{className:O.a.valuePropCardsContainer},L.map((function(e,a){return o.a.createElement(R,Object(w.a)({key:a},e))}))))},_=t(97),M=t.n(_),W=[{text:"Architected to work for multiple cloud providers and displays cloud carbon metrics in a single, holistic view"},{text:"Supports AWS and Google Cloud, with plans to add Azure and other providers, including potential for on-prem and co-located data centers"},{text:"Ability to measure usage at a granular service level and use actual server utilization rather than average utilization for hyperscale data centers"},{text:"Provides estimates for both energy and carbon emissions from cloud usage"},{text:"Displays information in chart visual, table, or CSV"},{text:"The solution is open and extensible; contributions and improvements encouraged"}];function z(e){var a=e.text;return o.a.createElement("div",{className:M.a.differentiatorCheckContainer},o.a.createElement("img",{className:M.a.differentiatorCheckIcon,src:"img/check-black-24dp.svg",alt:"Check icon"}),o.a.createElement("p",{className:M.a.differentiatorCheckText},a))}var D=function(){return o.a.createElement("div",{className:M.a.differentiatorContainer},o.a.createElement("div",{className:M.a.differentiatorListItem},o.a.createElement("p",{className:M.a.differentiatorListTitle},"Solution Differentiators"),W.map((function(e,a){return o.a.createElement(z,Object(w.a)({key:a},e))}))),o.a.createElement("div",{className:M.a.differentiatorImageItem},o.a.createElement("img",{src:"img/infographic.png",alt:"Infographic showing the different paths data taken from the cloud providers may take: our frontend app, CLI app, raw data or analysis your way"})))},F=t(98),U=t.n(F),G=[{path:"img/logos/TWLogo.png",alt:"ThoughtWorks logo"},{path:"img/logos/GOLogo.png",alt:"GO logo"},{path:"img/logos/OCFLogo.png",alt:"Open Climate Fix logo"}];var H=function(){var e=function(){return G.map((function(e,a){return o.a.createElement("div",{key:a,className:U.a.innovationPartnerItem},o.a.createElement("img",{className:U.a.innovationPartnerLogo,alt:e.alt,src:e.path}))}))};return o.a.createElement("div",{className:"home__subsection-box-format"},o.a.createElement("p",{className:"home__subsection-title"},"INNOVATION PARTNERS"),o.a.createElement("div",{className:U.a.logosContainer},o.a.createElement(e,null)))};t(114);a.default=function(){return o.a.createElement(c,null,o.a.createElement(h,null),o.a.createElement(N,null),o.a.createElement(P,null),o.a.createElement(D,null),o.a.createElement(H,null))}},114:function(e,a,t){"use strict";var n=t(0),o=t.n(n),r=t(56),i=t.n(r),c=t(196),s=t(115),l=t(112);a.a=function(){var e=Object(s.a)();return o.a.createElement("div",{className:i.a.footerImageContainer},o.a.createElement("div",null,o.a.createElement("p",{className:i.a.footerImageTitle},"Have a Question?"),o.a.createElement(l.a,{to:"https://groups.google.com/g/cloud-carbon-footprint"},o.a.createElement(c.a,{variant:"contained",classes:{root:e.paddingHigh}},"JOIN OUR DISCUSSION FORUM"))))}},115:function(e,a,t){"use strict";var n=t(192),o={background:"#146133",color:"white",fontFamily:"Helvetica",fontSize:"12pt",fontWeight:"700",letterSpacing:"1px","&:hover":{color:"#ffffff",backgroundColor:"#067A3E",textDecoration:"none"}},r=Object(n.a)((function(e){var a,t;return{paddingLow:Object.assign({},o,(a={padding:"14px 40px"},a[e.breakpoints.down("xs")]={padding:"10px 40px"},a)),paddingHigh:Object.assign({},o,(t={padding:"14px 90px"},t[e.breakpoints.down("xs")]={padding:"10px 40px"},t))}}));a.a=r},121:function(e,a,t){"use strict";var n=t(0),o=t.n(n),r=t(114),i=t(57),c=t.n(i);function s(e){var a=e.link,t=e.text;return o.a.createElement("a",{className:c.a.footerLicenseLink,target:"_blank",href:a},t)}a.a=function(){return o.a.createElement("div",null,o.a.createElement(r.a,null),o.a.createElement("div",{className:c.a.footerLicenseContainer},o.a.createElement("p",null,"Cloud Carbon Footprint is an open-source project, sponsored by ThoughtWorks Inc. under the\xa0",o.a.createElement(s,{link:"http://www.apache.org/licenses/LICENSE-2.0",text:"Apache License, Version 2.0"})),o.a.createElement("p",null,o.a.createElement(s,{link:"https://www.thoughtworks.com/privacy-policy",text:"PRIVACY POLICY"}))))}}}]);