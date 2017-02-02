
'use strict';
/* Magic Mirror
 * Module: voicecontrol
 *
 * By Alex Yakhnin
 * MIT Licensed.
 */

Module.register("voicecontrol", {


	// Default module config.

    defaults: {
		models: [
					{
						keyword: "Show Camera",
						description: "Say 'Show Camera' to display camera",
						file: "showCamera.pmdl",
						message: "SHOW_CAMERA"
					},
					{
						keyword: "Hide Camera",
						description: "Say 'Hide Camera' to hide camera",
						file: "hideCamera.pmdl",
						message: "HIDE_CAMERA"
					},
					{
						keyword: "Selfie",
						description: "Say 'Selfie' when camera is visible",
						file: "selfie.pmdl",
						message: "SELFIE"
					},
				]
	},

    start: function() { 
      var self = this;
    	console.log("hello");
        this.sendSocketNotification("CONNECT", this.config);
        var controller = Leap.loop({enableGestures: true}, function(frame){
           
        if(frame.valid && frame.gestures.length > 0){
        frame.gestures.forEach(function(gesture){
        switch (gesture.type){
          case "circle":
              console.log("Circle Gesture");
              break;
          case "keyTap":
              console.log("Key Tap Gesture");
              break;
          case "screenTap":
              console.log("Screen Tap Gesture");
              break;
          case "swipe":
              console.log("Swipe Gesture");
              self.swipeThrough();
              break;
        }
    });
  }
});

    },

    getStyles: function() {
		return ['voicecontrol.css'];
	},

    socketNotificationReceived: function(notification, payload){
        if (notification === "KEYWORD_SPOTTED"){
            if(payload.message == "HELLO_MIRA")
                this.updateImage("Mira");
            else if(payload.message == "ANALYZE")
                this.updateImage("Mira2");
            else if(payload.message == "ACNE")
                this.updateImage("Mira3")
            else if(payload.message == "HOME")
                this.updateImage("Mira5")
            else if(payload.message == "ROUTINE")
                this.updateImage("Mira6")


        }
	},

	notificationReceived: function(notification, payload, sender) {
        

     
    },


    getDom: function() {
        var wrapper = document.createElement("div");
        var header = document.createElement("header");
        header.innerHTML = "Voice Commands";
        wrapper.appendChild(header);
        var models = this.config.models;

        models.forEach(function(model) {
            var command = document.createElement("div");
            command.innerHTML = model.description;
            command.className = "small dimmed top";
            wrapper.appendChild(command);
        }, this);

        return wrapper;
    },

    updateImage: function(keyword) {

       var div = document.getElementById("module_0_voicecontrol");
       console.log(keyword);
       div.innerHTML = null;
      var img = document.createElement("video");
       img.src="/modules/voicecontrol/vids/"+keyword+".m4v";
       img.width = "864";
       img.height = "1728";

        img.type="video/mp4";
        img.autoplay= true;
        img.id = "mira";
        div.appendChild(img);



},

    swipeThrough: function(){



       var div = document.getElementById("module_0_voicecontrol");
       div.innerHTML = null;
      var img = document.createElement("video");
       img.src="/modules/voicecontrol/vids/Mira4.m4v";
       // img.width = "850";
       // img.height = "1700";
        img.width = "864";
        img.height = "1728";
        img.type="video/mp4";
        img.autoplay= true;
        img.id = "mira";
        div.appendChild(img);



    }




});