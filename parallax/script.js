let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline
.to(".montana-2", 3, {y:50})
.to(".montana-1", 3, {y:100},'-=3')
.to(".montana-1", 3, {display:"none"},'-=3')
.to(".tipo", 3, {y:-500},'-=3')
.to(".bg1", 3, {y:-300},'-=3')
.to(".content", 3, {top:"0%"},'-=3');

let Scene = new ScrollMagic.Scene({
	TriggerElement:"section",
	duration:"100%",
	triggerHook:0,
})
.setTween(timeline)
.setPin("section")
.addTo(controller);