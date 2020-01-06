//Dialogue Progression Javascript Sheet

var magicEraser = function(currentStep) {
            var lastStep = currentStep - 1;
            
            var previousStepA = [];
            previousStepA.push("Step" + lastStep + "a");
            
            var previousStepB = [];
            previousStepB.push("Step" + lastStep + "b");
            
            document.getElementById(previousStepB[0]).style.display = "none";
            document.getElementById(previousStepA[0]).style.display = "none";
            
            previousStepB.shift();
            previousStepA.shift();
        };
        
        var dialogueProgressionA = function(currentStep) {
            //choice a
            var optionA = document.getElementById("Step" + currentStep + "a"); 
            optionA.style.zIndex = "0" + currentStep;
            
            console.log(optionA.style.zIndex = "0" + currentStep);
            
            //choice b
            var optionB = document.getElementById("Step" + currentStep + "b");
            optionB.style.zIndex = "0" + currentStep;
            
            //computation   
            if (optionA.style.display == "none" && optionB.style.display == "none") {
                    optionA.style.display = "block";
                    optionB.style.display = "none";
                    
            } else {
                optionA.style.display = "none";
            }
            
            magicEraser(currentStep);
                
        };
        
        var dialogueProgressionB = function(currentStep) {
            //choice a
            var optionA = document.getElementById("Step" + currentStep + "a");
            optionA.style.zIndex = "0" + currentStep;
            
            //choice b
            var optionB = document.getElementById("Step" + currentStep + "b");
            optionB.style.zIndex = "0" + currentStep;
            
            //computation   
            if (optionA.style.display == "none" && optionB.style.display == "none") {
                    optionB.style.display = "block";
                    optionA.style.display = "none";
            } else {
                optionB.style.display = "none";
            }
            
            magicEraser(currentStep);
        };