/*! Built with http://stenciljs.com */
import{h}from"../agc-calving-season.core.js";import{d as formatDate}from"./chunk-7c2770c1.js";var AgcCalvingSeasonResults=function(){function t(){this.socket="",this.ready=!1}return t.prototype.render=function(){var t=this;return h("section",{"data-wizard-results":!0,ref:function(e){return t.section=e}},h("div",{style:{display:this.ready?"none":"block"}},h("slot",{name:"empty"})),h("div",{style:{display:this.ready?"block":"none"}},this.data&&h("ul",{class:"agc-results"},h("li",null,h("h2",{"data-i18n":"results.calving-season-starts"},"Calving Season Starts"),h("span",{class:"agc-results__value"},formatDate(this.data.calvingSeasonStart))),h("li",null,h("h2",{"data-i18n":"results.calving-season-ends"},"Calving Season Ends"),h("span",{class:"agc-results__value"},formatDate(this.data.calvingSeasonEnd))))))},t.prototype.handleResults=function(t){t.detail.socket===this.socket&&(this.data=Object.assign({},t.detail.results),this.ready=!0)},t.prototype.componentDidLoad=function(){this.socket&&window.document.addEventListener("agcCalculated",this.handleResults.bind(this))},t.prototype.componentDidUnload=function(){window.document.removeEventListener("agcCalculated",this.handleResults)},Object.defineProperty(t,"is",{get:function(){return"agc-calving-season-results"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{data:{state:!0},ready:{state:!0},socket:{type:String,attr:"socket"}}},enumerable:!0,configurable:!0}),t}();export{AgcCalvingSeasonResults};