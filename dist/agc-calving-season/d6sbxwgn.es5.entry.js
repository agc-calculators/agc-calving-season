/*! Built with http://stenciljs.com */
AgcCalvingSeason.loadBundle("d6sbxwgn",["exports","./chunk-9886a86d.js"],function(t,e){var a=window.AgcCalvingSeason.h,n=function(){function t(){this.socket="",this.tract="",this.mode="step",this.currentStep=0,this.cache={},this.submitted=!1,this.results={}}return t.prototype.render=function(){var t=this;return a("div",null,a("form",{onSubmit:function(t){return t.preventDefault()},ref:function(e){return t.form=e},"data-wizard":"agc-calving-season","data-wizard-mode":this.mode,class:"agc-wizard"},a("slot",null),a("section",{"data-wizard-section":"1"},a("div",{class:"agc-wizard__field"},a("label",{"data-i18n":"fields.sire-turn-out-date"},"Bull Turn Out Date"),a("input",{name:"bullTurnOutDate",type:"date",required:!0}),a("p",{class:"agc-wizard__validation-message","data-i18n":"validation.sire-turn-out-date.required","data-validates":"bullTurnOutDate"},"Please enter a date."),a("p",{"data-i18n":"hints.sire-turn-out-date"},"⮤ Enter the date the bull was turned in with the herd.")),a("div",{class:"agc-wizard__actions"},"step"===this.mode&&a("button",{class:"agc-wizard__actions-next","data-i18n":"actions.next",onClick:this.nextPrev.bind(this,1)},"Next"))),a("section",{"data-wizard-section":"2"},a("div",{class:"agc-wizard__field"},a("label",{"data-i18n":"fields.breeding-season-length"},"Breeding Season Length"),a("input",{name:"breedingSeasonLength",type:"text",required:!0}),a("p",{class:"agc-wizard__validation-message","data-i18n":"validation.breeding-season-length.required","data-validates":"breedingSeasonLength"},"Please enter a value."),a("p",{"data-i18n":"hints.breeding-season-length"},"⮤ Enter the breeding season length in days.")),a("div",{class:"agc-wizard__actions"},"step"===this.mode&&a("button",{class:"agc-wizard__actions-prev","data-i18n":"actions.prev",onClick:this.nextPrev.bind(this,-1)},"Back"),a("button",{class:"agc-wizard__actions-next","data-i18n":"actions.finish",onClick:this.nextPrev.bind(this,"step"===this.mode?1:2)},"Calculate"))),a("section",{"data-wizard-results":!0},a("slot",{name:"results"}))))},t.prototype.showTab=function(t){"step"===this.mode&&(this.cache.sections[t].style.display="block"),this.socket&&this.agcStepChanged.emit({socket:this.socket,tract:this.tract,step:this.currentStep})},t.prototype.reset=function(){this.currentStep=0,this.submitted=!1,this.showTab(0)},t.prototype.validateForm=function(){var t=!0;return 0!==this.currentStep&&"full"!==this.mode||e.validate(this.form,"bullTurnOutDate")||(t=!1),0!==this.currentStep&&"full"!==this.mode||e.validate(this.form,"breedingSeasonLength")||(t=!1),t},t.prototype.nextPrev=function(t,e){if(e&&e.preventDefault(),"full"===this.mode){if(!this.validateForm())return!1}else if(1==t&&!this.validateForm())return!1;if("step"===this.mode&&(this.cache.sections[this.currentStep].style.display="none"),this.currentStep=this.currentStep+t,this.currentStep>=this.cache.sections.length)return this.submitted=!0,this.showResults.call(this),!1;this.showTab.call(this,this.currentStep)},t.prototype.showResults=function(){var t=this.form.querySelector('[name="bullTurnOutDate"').value,a=parseInt(this.form.querySelector('[name="breedingSeasonLength"').value),n=e.addDays(t,283),i=e.addDays(t,283+a),s={socket:this.socket,tract:this.tract,bullTurnOutDate:t,breedingSeasonLength:a,calvingSeasonStart:n,calvingSeasonEnd:i,calculated:new Date};this.socket&&this.agcCalculated.emit({socket:this.socket,tract:this.tract,results:Object.assign({},s)}),this.results=Object.assign({},s),this.cache.results.forEach(function(t){t.style.display="block"})},t.prototype.handleAction=function(t){"reset"===t.detail.action&&this.reset()},t.prototype.componentDidLoad=function(){var t=Array.from(this.form.querySelectorAll("[data-wizard-section]")).map(function(t){return t}).map(function(t){return t}),a=Array.from(this.form.querySelectorAll("[data-wizard-results]")).map(function(t){return t}).map(function(t){return t});this.cache=Object.assign({},this.cache,{sections:t,results:a}),window.document.addEventListener("agcAction",this.handleAction.bind(this)),this.form.querySelector('[name="bullTurnOutDate"]').value=e.inputDate(new Date),this.form.querySelector('[name="breedingSeasonLength"]').defaultValue="60",this.showTab(0)},t.prototype.componentDidUnload=function(){window.document.removeEventListener("agcAction",this.handleAction)},Object.defineProperty(t,"is",{get:function(){return"agc-calving-season"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{cache:{state:!0},currentStep:{state:!0},mode:{type:String,attr:"mode"},results:{state:!0},socket:{type:String,attr:"socket"},submitted:{state:!0},tract:{type:String,attr:"tract"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"agcCalculated",method:"agcCalculated",bubbles:!0,cancelable:!0,composed:!0},{name:"agcStepChanged",method:"agcStepChanged",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),t}();t.AgcCalvingSeason=n,Object.defineProperty(t,"__esModule",{value:!0})});