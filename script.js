var pageElementObArr = {'idN':  ['yellowStripe', 'titleBox', 'sB'  ], 
                        'elementN':['','REPUTATIONAL RISKS','START']
                        }

 var posiArr = {'xPos':['(screenW/2)-(widthOfMoveThisThingX/2)', '(screenW/2)-(widthOfMoveThisThingX/2)', '(screenW/2)-(widthOfMoveThisThingX/2)'], 
                'yPos':['(screenH/2)-(heightOfMoveThisThingY/2)', '((screenH+(screenH*0.01))/2)-(heightOfMoveThisThingY/2)', '(screenH/2)-(heightOfMoveThisThingY/2)']
                }

x='';
var nextPage;

function ClassAndEleName() {
    var pageElementOb,i,j=-1,z='';
    pageElementOb = pageElementObArr;

        
             for (i=0;i<pageElementOb.idN.length;i++) {
                j=j+1;
                x = pageElementOb.idN[i];
                z = pageElementOb.elementN[j];
                 console.log(x,z);
                 pageElement();
                 }

                  function pageElement() { 
                        var div = document.createElement('div');
                        div.setAttribute('id', x);
                        div.innerHTML = z;
                        document.getElementsByTagName('body')[0].appendChild(div);
                        }
                        dynamX();
                        dynamY();
                        moveIn();
                    }

var screenW = window.innerWidth || document.documentElement.clientWidth
|| document.body.clientWidth;
var screenH = window.innerHeight || document.documentElement.clientHeight
|| document.body.clientHeight;
console.log(screenW + ' this is the screen width');
console.log(screenH + ' this is the screen height');



function dynamX() {
    allDivEleNames = [];
    var p=0;
    for (k=0;k<pageElementObArr.idN.length-1;k++) {
        l = pageElementObArr.idN[k];
        console.log(l + ' this is l');
       
        var moveThisThingX = document.getElementById(l);
        console.log(moveThisThingX + ' this is the element l');
       
        allDivEleNames.push(moveThisThingX);
       
        xAxisCollect = window.getComputedStyle(moveThisThingX,null).getPropertyValue("left");
        console.log(xAxisCollect + ' this is the l elements left coord');
       
        var xAxisTrackArray = xAxisCollect.split('px');
        console.log(xAxisTrackArray[0] + ' this is the element l left coord, number only');
        
        xAxisVal = xAxisTrackArray[0];
        console.log(xAxisVal);
        
        var widthOfMoveThisThingX = document.getElementById(l).offsetWidth;
        console.log(widthOfMoveThisThingX + ' this is the width of the element l');
        
        p=p+1;
        console.log(p + ' This is the variable p'); 

        var xAxis = eval(posiArr.xPos[p]);

        console.log(xAxis + ' This is the x axis of element k'); 
           
        moveThisThingX.style.left = xAxis + 'px';
    }

        window.addEventListener("resize", function(event) {
            console.log(document.body.clientWidth + ' wide by ' + document.body.clientHeight+' high');
            screenW = document.body.clientWidth;
            screenH = document.body.clientHeight;
                var l;
                var r=0;
                for (k=0;k<pageElementObArr.idN.length-1;k++) {
                    l = pageElementObArr.idN[k];
                    console.log(l + ' EL this is l');
                   
                    var moveThisThingX = document.getElementById(l);
                    console.log(moveThisThingX + ' EL this is the element l');
                   
                    xAxisCollect = window.getComputedStyle(moveThisThingX,null).getPropertyValue("left");
                    console.log(xAxisCollect + ' EL this is the start button left coord');
                    
                    var xAxisTrackArray = xAxisCollect.split('px');
                    console.log(xAxisTrackArray[0] + ' EL this is the start button left coord, number only');
                    
                    xAxisVal = xAxisTrackArray[0];
                    console.log(xAxisVal);
                    
                    var widthOfMoveThisThingX = document.getElementById(l).offsetWidth;
                    console.log(widthOfMoveThisThingX + ' EL this is the width of element l');

                    r=r+1;
                    console.log(r + ' This is variable p'); 

                    var xAxis = eval(posiArr.xPos[r]);
                    console.log(xAxis + ' EL This is the x axis of element k');

                    moveThisThingX.style.left = xAxis + 'px';
                }
            })
    }

        function dynamY() {
            var q=0;
            for (m=0;m<pageElementObArr.idN.lenght-1;m++) {
                n = pageElementObArr.idN[m];
                console.log(n + ' this is n');
                
                var moveThisThingY = document.getElementById(n);
                console.log(moveThisThingY + ' this is the element n');

                yAxisCollect = window.getComputedStyle(moveThisThingY,null).getPropertyValue("top");
                console.log(yAxisCollect + ' this is the n elements left coord');
               
                var yAxisTrackArray = yAxisCollect.split('px');
                console.log(yAxisTrackArray[0] + ' this is the element n left coord, number only');
               
                yAxisVal = yAxisTrackArray[0];
                console.log(yAxisVal);
                
                var heightOfMoveThisThingY = document.getElementById(n).offsetHeight;
                console.log(heightOfMoveThisThingY + ' ##this is the height of the element n');

                q=q+1;
                console.log(p + ' This is variable q'); 

                var yAxis = eval(posiArr.yPos[q]);
                console.log(yAxis + ' This is the y axis of element n');

                moveThisThingY.style.top = yAxis + 'px';
            }

                window.addEventListener("resize", function(event) {
                    console.log(document.body.clientWidth + ' wide by ' + document.body.clientHeight+' high');
                    screenW = document.body.clientWidth;
                    screenH = document.body.clientHeight;
                        var n;
                        var s=0;
                        for (m=0;m<pageElementObArr.idN.length-1;m++) {
                            n = pageElementObArr.idN[m];
                            console.log(l + ' this is l');
                           
                            var moveThisThingY = document.getElementById(n);
                            console.log(moveThisThingY + ' ##his is the start button');
                           
                            yAxisCollect = window.getComputedStyle(moveThisThingY,null).getPropertyValue("top");
                            console.log(yAxisCollect + ' ##this is the start button left coord');
                           
                            var yAxisTrackArray = yAxisCollect.split('px');
                            console.log(yAxisTrackArray[0] + ' ##this is the top of the m element, number only');
                           
                            yAxisVal = yAxisTrackArray[0];
                            console.log(yAxisVal);
                           
                            var heightOfMoveThisThingY = document.getElementById(n).offsetHeight;
                            console.log(heightOfMoveThisThingY + ' #gg#this is the height of the object');
                            
                            s=s+1;
                            console.log(s + ' This is variable s'); 

                            var yAxis = eval(posiArr.yPos[s]);
                            console.log(yAxis + ' EL This is the y axis of element n');

                            moveThisThingY.style.top = yAxis + 'px';
                        }
                    })

            }


function moveIn() {
var elemName = document.getElementById("sB");
var xAxisTrack = window.addEventListener("moved", function(event) {
    parseInt(window.getComputedStyle(elemName,null).getPropertyValue("left"));
    console.log(xAxisTrack);
    })
var xAxisOrigNum = parseInt(window.getComputedStyle(elemName,null).getPropertyValue("left"));
console.log(xAxisOrigNum + ' This is where the start button x axis is at on screen open');

var xAxis = xAxisOrigNum;
console.log(xAxis + ' this is the xAxis of start on window load.');

var incriment = xAxis/xAxis;

var intSet = setInterval(moveDiv, 25);
    function moveDiv() {
        if (xAxis <= xAxisOrigNum && xAxis>=(screenW*0.75)) {
            incriment = incriment+(incriment/10);
            xAxis = xAxis-incriment;
            elemName.style.left = xAxis + 'px';
        } else if (xAxis <= (screenW*0.75) && xAxis>=(screenW*0.45)) {
            incriment = incriment-(incriment/10);
            xAxis = xAxis-incriment;
            elemName.style.left = xAxis + 'px';
        } else {
            clearInterval(intSet);
            document.getElementById("sB").setAttribute('onclick', 'moveOut()');
        }
    }
}

function moveOut() {
var elemName = document.getElementById("sB");
var xAxisTrack = window.addEventListener("moved", function(event) {
    parseInt(window.getComputedStyle(elemName,null).getPropertyValue("left"));
    console.log(xAxisTrack);
    })
var xAxisOrigNum = parseInt(window.getComputedStyle(elemName,null).getPropertyValue("left"));
console.log(xAxisOrigNum + ' This is where the start button x axis is when it has stopped in the middle of the screen');

var xAxis = xAxisOrigNum;
console.log(xAxis + ' this is the xAxis of the button when it is clicked in the middle of the screen');

var incriment = xAxis/xAxis;

var intSet = setInterval(moveDiv, 25);
    function moveDiv() {
        if (xAxis <= (screenW*0.45) && xAxis >= -300) {         
            incriment = incriment+(incriment/10);
            xAxis = xAxis-incriment;
            elemName.style.left = xAxis + 'px';
        } else {
            clearInterval(intSet);
            cleanPage();
        }
    }
}

function cleanPage() {
    for (t=0;t<pageElementObArr.idN.length;t++) {
        u = pageElementObArr.idN[t];
        console.log(u + ' This is the variable u');
        var elemToRemove = document.getElementById(u);
        elemToRemove.remove();
    }
    buildHeadingAndNav();
} 

var dragAndDropNo = 6;

var headingArr = ['backgroundBox', 'yellowRectangle', 'headingTitle', 'information', 'restart', 'next'];
var headingTextArr = ['','', 'REPUTATIONAL RISKS', '', '','NEXT'];
var headingFuncTrigArr = ['onclick','onclick','onclick','onclick','onclick','onclick'];
var headingFuncArr = ['doNothing()','doNothing()','doNothing()','openInf()','restart()','doNothing()'];

function buildHeadingAndNav() {
    hAndNeleNum = 6;
    var hAndNelemArr = new Array(hAndNeleNum);
    // console.log(hAndNelemArr + ' This is the empty array elemArr');
    var k = -1;
        for(j=0;j<headingArr.length;j++){
            k=k+1;
            hAndNelemArr[k] = headingArr[k];
            // console.log(k + ' This is variable k');
        }

    // console.log(hAndNelemArr + ' This is the array elemArr after adding names to it');

    for(i=0;i<hAndNelemArr.length;i++) {
        bAndHeleId = i;
        headPageElement();
            function headPageElement() { 
                var bAndHdiv = document.createElement('div');
                bAndHdiv.setAttribute('id', hAndNelemArr[bAndHeleId]);
                bAndHdiv.innerHTML = headingTextArr[i];
                document.getElementsByTagName('body')[0].appendChild(bAndHdiv);
                }    
            }
            addHAndNFunction();
                function addHAndNFunction() {
                    var l = -1;
                    for(l=0;l<headingFuncTrigArr.length;l++) {
                        document.getElementById(headingArr[l]).setAttribute(headingFuncTrigArr[l],headingFuncArr[l]);
                        // console.log(headingFuncArr[l]);
                    }
                }
        buildInformation();
    }

function doNothing() {

}

function restart() {
    for (t=0;t<headingArr.length;t++) {
        u = headingArr[t];
        // console.log(u + ' This is the variable u for restart function');
        var elemToRemove = document.getElementById(u);
        elemToRemove.remove();
    }
    for (v=0;v<infoArr.length;v++) {
        w = infoArr[v];
        // console.log(w + ' This is the variable w for restart function');
        var elemToRemove = document.getElementById(w);
        elemToRemove.remove();
    }
    ClassAndEleName();
}


var infoArr = ['infoBackground','infoIcon', 'infoTitle', 'infoText', 'infoClose'];
var infoElemTypeArr = ['div', 'div', 'div', 'p', 'div'];
var infTex = "Before an organisation develops a reputation management strategy, it needs to know that there are numerous reputational risks that it may face. Reputational risks can be classified according to the nature of the risk. <br/><br/> Match the examples of reputational risk to their corresponding categories.";
var infoTextArr = ['','','Instructions:',infTex,''];
var infoFuncTrigArr = ['onclick','onclick','onclick','onclick','onclick'];
var infoFuncArr = ['doNothing()','doNothing()','doNothing()','doNothing()','closeInf()'];

function buildInformation() {
    bIEleNum = 5;
    var bIElemArr = new Array(bIEleNum);
    // console.log(bIElemArr + ' This is the empty array elemArr for build information');
    var k = -1;
        for(j=0;j<infoArr.length;j++){
            k=k+1;
            bIElemArr[k] = infoArr[k];
            // console.log(k + ' This is variable k in buildInformation');
        }

    // console.log(bIElemArr + ' This is the array bIEelemArr after adding names to it');

    for(i=0;i<bIElemArr.length;i++) {
        bIeleId = i;
        infoPageElement();
            function infoPageElement() { 
                var bIdiv = document.createElement(infoElemTypeArr[bIeleId]);
                bIdiv.setAttribute('id', bIElemArr[bIeleId]);
                bIdiv.innerHTML = infoTextArr[i];
                document.getElementsByTagName('body')[0].appendChild(bIdiv);
                }    
            }
            addInfoFunction();
                function addInfoFunction() {
                    var l = -1;
                    for(l=0;l<infoFuncTrigArr.length;l++) {
                        document.getElementById(infoArr[l]).setAttribute(infoFuncTrigArr[l],infoFuncArr[l]);
                        // console.log(infoFuncArr[l] + ' This is the operation put into each div in the build information function');
                    }
                }
}

var infoBackgroundTravDist = 0;

function openInf() {
    xAxisInfoOpened = [];
                for(b=0;b<infoArr.length;b++){
                    var elemName = document.getElementById(infoArr[b]);

                    var xAxisOrigNumInfEle = parseFloat(window.getComputedStyle(elemName,null).getPropertyValue("left"));
                    xAxisInfoOpened.push(xAxisOrigNumInfEle);

                }
                // console.log(xAxisInfoOpened);

    var primeElemName = document.getElementById(infoArr[0]);
    // console.log(primeElemName);
    
    var xAxisTrack = window.addEventListener("moved", function(event) {
    parseFloat(window.getComputedStyle(primeElemName,null).getPropertyValue("left"));
    // console.log(xAxisTrack);
    })

    var xAxisOrigNum = parseFloat(window.getComputedStyle(primeElemName,null).getPropertyValue("left"));
    // console.log(xAxisOrigNum + ' This is where the start button x axis for the info backround');

    var xAxis = xAxisOrigNum;
    // console.log(xAxis + ' this is the xAxis of the info box move in');

    var incriment = xAxis/xAxis;
    // console.log(incriment + ' This is incriment for info background move in');

    var intSet = setInterval(moveDivs, 25);
        function moveDivs() {
            if (xAxis <= ((screenW*0.50)*-1) && xAxis>=(screenW*1.2)*-1) {
            incriment = incriment+(incriment/10);
            xAxis = xAxis+incriment;
            primeElemName.style.left = xAxis + 'px';
                for(b=1;b<infoArr.length;b++){
                        var elemName = document.getElementById(infoArr[b]);

                        var xAxisOrigNumNest = parseFloat(window.getComputedStyle(elemName,null).getPropertyValue("left"));
                        // console.log(xAxisOrigNumNest + ' This is the original xAxis of all the element '+ infoArr[b] +' in the infoArr Array');

                        var xAxisNest = xAxisOrigNumNest;
                        // console.log(xAxisNest + ' this is the xAxis of the element '+ infoArr[b] +' in the info box coming in step 1');

                        var incrimentNest = incriment;

                        xAxisNest = xAxisNest+incrimentNest;

                        elemName.style.left = xAxisNest + 'px';
                    }
            } else if (xAxis <= ((screenW*0.02)*-1) && xAxis>=(screenW*0.50)*-1) {
                incriment = incriment-(incriment/10);
                xAxis = xAxis+incriment;
                primeElemName.style.left = xAxis + 'px';
                    for(b=1;b<infoArr.length;b++){
                            var elemName = document.getElementById(infoArr[b]);

                            var xAxisOrigNumNest = parseFloat(window.getComputedStyle(elemName,null).getPropertyValue("left"));
                            // console.log(xAxisOrigNumNest + ' This is the original xAxis of the element '+ infoArr[b] +' in the infoArr Array');

                            var xAxisNest = xAxisOrigNumNest;
                            // console.log(xAxisNest + ' this is the xAxis of the element '+ infoArr[b] +' in the info box coming in step 2');

                            var incrimentNest = incriment;

                            xAxisNest = xAxisNest+incrimentNest;

                            elemName.style.left = xAxisNest + 'px';
                        }
            } else {
                for(b=0;b<xAxisInfoOpened.length;b++){
                    var elemName = document.getElementById(infoArr[b]);

                    elemName.style.left = (xAxisInfoOpened[b] + infoBackgroundTravDist) + 'px';
                }
                // console.log(infoBackgroundTravDist + 'This is the value of infoBackgroundTravDist BEFORE being cleared');
                clearInterval(intSet);
                infoBackgroundTravDist = 0;
                // console.log(infoBackgroundTravDist + 'This is the value of infoBackgroundTravDist AFTER being cleared');
            }
        }
}

function closeInf() {
    xAxisInfoClosed = [];
                for(b=0;b<infoArr.length;b++){
                    var elemName = document.getElementById(infoArr[b]);

                    var xAxisOrigNumInfEle = parseFloat(window.getComputedStyle(elemName,null).getPropertyValue("left"));
                    xAxisInfoClosed.push(xAxisOrigNumInfEle);

                }
                // console.log(xAxisInfoClosed + ' These are the left coordinates for all the info elements when you click close');

    var primeElemName = document.getElementById(infoArr[0]);
    // console.log(primeElemName);
    
    var xAxisTrack = window.addEventListener("moved", function(event) {
    parseFloat(window.getComputedStyle(primeElemName,null).getPropertyValue("left"));
    // console.log(xAxisTrack);
    })

    var xAxisOrigNum = parseFloat(window.getComputedStyle(primeElemName,null).getPropertyValue("left"));
    // console.log(xAxisOrigNum + ' This is the position of the x axis for the info backround on move out');

    var xAxis = xAxisOrigNum;
    // console.log(xAxis + ' this is the xAxis of the info box when moving moveOut');

    var incriment = xAxis/xAxis;
    // console.log(incriment + ' This is incriment for info background on move out');

    var intSet = setInterval(moveDivs, 25);
        function moveDivs() {
            if (xAxis <= (screenW*.85) && xAxis >= (screenW*0.99)*-1) {         
                incriment = incriment+(incriment/10);
                // console.log(incriment + ' This is the value of incriment being added to the x axis of all elements');
                infoBackgroundTravDist += incriment;
                xAxis = xAxis-incriment;
                // console.log(xAxis + ' This is the value of xAxis for the info Background in closeinf');
                primeElemName.style.left = xAxis + 'px';
                    for(b=1;b<infoArr.length;b++){
                        var elemName = document.getElementById(infoArr[b]);

                        var xAxisOrigNumNest = parseFloat(window.getComputedStyle(elemName,null).getPropertyValue("left"));
                        // console.log(xAxisOrigNumNest + ' This is the original xAxis of the element '+ infoArr[b] +' in the infoArr Array');

                        var xAxisNest = xAxisOrigNumNest;
                        // console.log(xAxisNest + ' this is the xAxis of the element '+ infoArr[b] +' in the info box');

                        var incrimentNest = incriment;
                        // console.log(incrimentNest + ' This is the value of incrimentNest');

                        xAxisNest = xAxisNest-incrimentNest;

                        elemName.style.left = xAxisNest + 'px';
                    }
            } else {
                for(b=0;b<xAxisInfoClosed.length;b++){
                    var elemName = document.getElementById(infoArr[b]);

                    // console.log(elemName.style.left);

                    elemName.style.left = (xAxisInfoClosed[b] - infoBackgroundTravDist)  + 'px';
                }
                // console.log(infoBackgroundTravDist + 'This is the calculated distance travled');
                clearInterval(intSet);
                buildInteraction();
            }
        }
}

var interArr = {'leftPElems':  ['option1','option2', 'option3', 'option4', 'option5', 'option6'],
                'middlePElems':['dropZone1','dropZone2','dropZone3','dropZone4','dropZone5','dropZone6'],
                'rightPElems': ['dragItem1','dragItem2','dragItem3','dragItem4','dragItem5','dragItem6'],
                }


var interElemTypeArr = {'leftPElems':  ['p','p','p','p','p','p'],
                        'middlePElems':['p','p','p','p','p','p'],
                        'rightPElems': ['p','p','p','p','p','p'],
                        }

var interElemClass1Add = {'leftPElems':  ['options','options', 'options', 'options', 'options', 'options'],
                          'middlePElems':['dropZone','dropZone','dropZone','dropZone','dropZone','dropZone'],
                          'rightPElems': ['dragItem','dragItem','dragItem','dragItem','dragItem','dragItem'],
                          }

var interTexL1 = "Text for Box L1";
var interTexL2 = "Text for Box L2";
var interTexL3 = "Text for Box L3";
var interTexL4 = "Text for Box L4";
var interTexL5 = "Text for Box L5";
var interTexL6 = "Text for Box L6";
var interTexM1 = "Text for Box M1";
var interTexM2 = "Text for Box M2";
var interTexM3 = "Text for Box M3";
var interTexM4 = "Text for Box M4";
var interTexM5 = "Text for Box M5";
var interTexM6 = "Text for Box M6";
var interTexR1 = "Text for Box R1";
var interTexR2 = "Text for Box R2";
var interTexR3 = "Text for Box R3";
var interTexR4 = "Text for Box R4";
var interTexR5 = "Text for Box R5";
var interTexR6 = "Text for Box R6";

var interTextArr = {'leftPElems':   [interTexL1, interTexL2, interTexL3, interTexL4, interTexL5, interTexL6],
                    'middlePElems': [interTexM1, interTexM2, interTexM3, interTexM4, interTexM5, interTexM6],
                    'rightPElems':  [interTexR1, interTexR2, interTexR3, interTexR4, interTexR5, interTexR6],
                    }

var interFuncTrigArr = {'leftPElems':   ['onclick','onclick','onclick','onclick','onclick', 'onclick'],
                        'middlePElems': ['onclick','onclick','onclick','onclick','onclick', 'onclick'],
                        'rightPElems':  ['onclick','onclick','onclick','onclick','onclick', 'onclick'],
                        }

var interFuncArr = {'leftPElems':   ['doNothing()','doNothing()','doNothing()','doNothing()','doNothing()','doNothing()'],
                    'middlePElems': ['doNothing()','doNothing()','doNothing()','doNothing()','doNothing()','doNothing()'],
                    'rightPElems':  ['doNothing()','doNothing()','doNothing()','doNothing()','doNothing()','doNothing()'],
                    }

function buildInteraction() {
    bIntEleNum = 18;
        for(var key in interArr) {
            // console.log(key + ' this is one of the array names in the object interArr');
            if (interArr.hasOwnProperty(key))
            // console.log(interArr[key] + ' This is the array from the json object');
            for(i=0;i<interArr[key].length;i++){
                // console.log(interArr[key][i] + ' This is the name of the element that was created.');
                    interElement();
                        function interElement() { 
                        var interEleP = document.createElement('p');
                        interEleP.setAttribute('id', interArr[key][i]);
                        interEleP.classList.add(interElemClass1Add[key][i]);
                        // the reason the below argument works is because the names of the arrays in the json objects are the same.
                        interEleP.innerHTML = interTextArr[key][i];
                        // console.log(interEleP.innerHTML + ' This is the text that gets inserted into the p element');
                        document.getElementsByTagName('body')[0].appendChild(interEleP);
                }
            }
        }
    spaceing();
    function spaceing(){
            var screenW = window.innerWidth || document.documentElement.clientWidth
            || document.body.clientWidth;
            var screenH = window.innerHeight || document.documentElement.clientHeight
            || document.body.clientHeight; 

            hdgBackgroundBox =  document.getElementById("backgroundBox");
            
            var position = hdgBackgroundBox.getBoundingClientRect();
            console.log(position + ' this is the element backroundBox');
            
            backgroundBoxYAxTop = position.top;
            console.log(backgroundBoxYAxTop + ' This is the x coordinate for the top of the backgroundBox');
            
            backgroundBoxHeight = position.height;
            console.log(backgroundBoxHeight + ' This is the height of the backgroundBox');

            
            nextButton =  document.getElementById("next");
            
            var position = nextButton.getBoundingClientRect();
            console.log(position + ' this is the element next');
            
            nextButtonYAxTop = position.top;
            console.log(nextButtonYAxTop + ' This is the x coordinate for the top of the next button');
           
            nextButtonHeight = position.height;
            console.log(nextButtonHeight + ' This is the height of the next button');

           
            var interElem =  document.getElementById('option1');
            console.log(interElem);
            
            var position = interElem.getBoundingClientRect();
            console.log(position + ' this is the element option1');
            
            interElemYAxTop = position.top;
            console.log(interElemYAxTop + ' This is the x coordinate for the top of the element option1');
           
            interElemHeight = position.height;
            console.log(interElemHeight + ' This is the height of the element option1');

            usablePageHeight = screenH-(backgroundBoxHeight + (screenH-nextButtonYAxTop));
            console.log(usablePageHeight + ' This is the usable screen height for the element option1');


            //This works out the distance between element centres.
            elementPositionerSpaces = usablePageHeight/((bIntEleNum/3)+1);
            console.log(elementPositionerSpaces + ' distance between element centres');
            
            //This is where the top of the firts element will be positioned.
            elementPositionerStartPos = backgroundBoxHeight;
            console.log(elementPositionerStartPos + ' Where the top of the first element will be');

            //This is the space that will be made between the elements.
            elementPositionerSpacer = (usablePageHeight/((bIntEleNum/3)+1))/((bIntEleNum/3)+1);
            console.log(elementPositionerSpacer + ' This is the space that will be made between the elements');


            recomendedInterEleHeight = elementPositionerSpaces-elementPositionerSpacer;
            console.log(recomendedInterEleHeight + ' This is the recomended hight of the element :-P');


            var a = elementPositionerStartPos;
            console.log(a + ' This is the variable a BEFORE additions');
            var b = elementPositionerSpacer;
            var c = elementPositionerSpaces;

                for(var key in interArr){
                    if (interArr.hasOwnProperty(key))
                        for(i=0;i<interArr[key].length;i++){
                            console.log(interArr[key][i]);
                                if(i==0){
                                    var eleName  = document.getElementById(interArr[key][i]);
                                    eleName.style.height = recomendedInterEleHeight + 'px';
                                    eleName.style.top = a + 'px';
                                } else if(i>=1 && i <= ((bIntEleNum/3)-2)){
                                    a += b+c;
                                    var eleName  = document.getElementById(interArr[key][i]);
                                    eleName.style.height = recomendedInterEleHeight + 'px';
                                    eleName.style.top = a + 'px';
                                } else if(i>=(bIntEleNum/3)-1 && i <= bIntEleNum/3){
                                    a += b+c;
                                    var eleName  = document.getElementById(interArr[key][i]);
                                    eleName.style.height = recomendedInterEleHeight + 'px';
                                    eleName.style.top = a + 'px';
                                    a = elementPositionerStartPos;
                                }                               
                            }
                        } 
    }   
}


 










    // // target elements with the "draggable" class
    // interact('.draggable')
    //     .draggable({
    //         // enable inertial throwing
    //         inertia: true,
    //         // keep the element within the area of it's parent
    //         restrict: {
    //             restriction: "parent",
    //             endOnly: true,
    //             elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
    //         },
    //         // enable autoScroll
    //         autoScroll: true,
    //         onstart: function (event) {
    //             console.log('onstart');
    //         },
    //         // call this function on every dragmove event
    //         onmove: dragMoveListener,
    //         // call this function on every dragend event
    //         onend: function (event) {
    //             console.log('onend');
    //             var textEl = event.target.querySelector('p');
    //             textEl && (textEl.textContent =
    //                 'moved a distance of '
    //                 + (Math.sqrt(event.dx * event.dx +
    //                     event.dy * event.dy)|0) + 'px');
    //         }
    //     });

    // function dragMoveListener (event) {
    //     console.log('dragMoveListener');
    //     var target = event.target,
    //         // keep the dragged position in the data-x/data-y attributes
    //         x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
    //         y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;
    //     // translate the element
    //     target.style.webkitTransform =
    //         target.style.transform =
    //             'translate(' + x + 'px, ' + y + 'px)';
    //     // update the position attributes
    //     target.setAttribute('data-x', x);
    //     target.setAttribute('data-y', y);
    // }

    //     var element = document.getElementById('drag_item_1');

    //     interact(element)
    //       .draggable({
    //         snap: {
    //           targets: [
    //             interact.createSnapGrid({ x: 30, y: 30 })
    //           ],
    //           range: Infinity,
    //           relativePoints: [ { x: 0, y: 0 } ]
    //         },
    //         inertia: true,
    //         restrict: {
    //           restriction: element.parentNode,
    //           elementRect: { top: 0, left: 0, bottom: 1, right: 1 },
    //           endOnly: true
    //         }
    //       })
    //       .on('dragmove', function (event) {
    //         x += event.dx;
    //         y += event.dy;

    //         event.target.style.webkitTransform =
    //         event.target.style.transform =
    //             'translate(' + x + 'px, ' + y + 'px)';
    //       });