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
                 //console.log(x,z);
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
//console.log(screenW + ' this is the screen width');
//console.log(screenH + ' this is the screen height');



function dynamX() {
    allDivEleNames = [];
    var p=0;
    for (k=0;k<pageElementObArr.idN.length-1;k++) {
        l = pageElementObArr.idN[k];
        //console.log(l + ' this is l');
       
        var moveThisThingX = document.getElementById(l);
        //console.log(moveThisThingX + ' this is the element l');
       
        allDivEleNames.push(moveThisThingX);
       
        xAxisCollect = window.getComputedStyle(moveThisThingX,null).getPropertyValue("left");
        //console.log(xAxisCollect + ' this is the l elements left coord');
       
        var xAxisTrackArray = xAxisCollect.split('px');
        //console.log(xAxisTrackArray[0] + ' this is the element l left coord, number only');
        
        xAxisVal = xAxisTrackArray[0];
        //console.log(xAxisVal);
        
        var widthOfMoveThisThingX = document.getElementById(l).offsetWidth;
        //console.log(widthOfMoveThisThingX + ' this is the width of the element l');
        
        p=p+1;
        //console.log(p + ' This is the variable p'); 

        var xAxis = eval(posiArr.xPos[p]);

        //console.log(xAxis + ' This is the x axis of element k'); 
           
        moveThisThingX.style.left = xAxis + 'px';
    }

        window.addEventListener("resize", function() {
            //console.log(document.body.clientWidth + ' wide by ' + document.body.clientHeight+' high');
            screenW = document.body.clientWidth;
            screenH = document.body.clientHeight;
                var l;
                var r=0;
                for (k=0;k<pageElementObArr.idN.length-1;k++) {
                    l = pageElementObArr.idN[k];
                    //console.log(l + ' EL this is l');
                   
                    var moveThisThingX = document.getElementById(l);
                    //console.log(moveThisThingX + ' EL this is the element l');
                   
                    xAxisCollect = window.getComputedStyle(moveThisThingX,null).getPropertyValue("left");
                    //console.log(xAxisCollect + ' EL this is the start button left coord');
                    
                    var xAxisTrackArray = xAxisCollect.split('px');
                    //console.log(xAxisTrackArray[0] + ' EL this is the start button left coord, number only');
                    
                    xAxisVal = xAxisTrackArray[0];
                    //console.log(xAxisVal);
                    
                    var widthOfMoveThisThingX = document.getElementById(l).offsetWidth;
                    //console.log(widthOfMoveThisThingX + ' EL this is the width of element l');

                    r=r+1;
                    //console.log(r + ' This is variable p'); 

                    var xAxis = eval(posiArr.xPos[r]);
                    //console.log(xAxis + ' EL This is the x axis of element k');

                    moveThisThingX.style.left = xAxis + 'px';
                }
            })
    }

        function dynamY() {
            var q=0;
            for (m=0;m<pageElementObArr.idN.lenght-1;m++) {
                n = pageElementObArr.idN[m];
                //console.log(n + ' this is n');
                
                var moveThisThingY = document.getElementById(n);
                //console.log(moveThisThingY + ' this is the element n');

                yAxisCollect = window.getComputedStyle(moveThisThingY,null).getPropertyValue("top");
                //console.log(yAxisCollect + ' this is the n elements left coord');
               
                var yAxisTrackArray = yAxisCollect.split('px');
                //console.log(yAxisTrackArray[0] + ' this is the element n left coord, number only');
               
                yAxisVal = yAxisTrackArray[0];
                //console.log(yAxisVal);
                
                var heightOfMoveThisThingY = document.getElementById(n).offsetHeight;
                //console.log(heightOfMoveThisThingY + ' ##this is the height of the element n');

                q=q+1;
                //console.log(p + ' This is variable q'); 

                var yAxis = eval(posiArr.yPos[q]);
                //console.log(yAxis + ' This is the y axis of element n');

                moveThisThingY.style.top = yAxis + 'px';
            }

                window.addEventListener("resize", function() {
                   // console.log(document.body.clientWidth + ' wide by ' + document.body.clientHeight+' high');
                    screenW = document.body.clientWidth;
                    screenH = document.body.clientHeight;
                        var n;
                        var s=0;
                        for (m=0;m<pageElementObArr.idN.length-1;m++) {
                            n = pageElementObArr.idN[m];
                            //console.log(l + ' this is l');
                           
                            var moveThisThingY = document.getElementById(n);
                            //console.log(moveThisThingY + ' ##his is the start button');
                           
                            yAxisCollect = window.getComputedStyle(moveThisThingY,null).getPropertyValue("top");
                            //console.log(yAxisCollect + ' ##this is the start button left coord');
                           
                            var yAxisTrackArray = yAxisCollect.split('px');
                            // console.log(yAxisTrackArray[0] + ' ##this is the top of the m element, number only');
                           
                            yAxisVal = yAxisTrackArray[0];
                            // console.log(yAxisVal);
                           
                            var heightOfMoveThisThingY = document.getElementById(n).offsetHeight;
                            // console.log(heightOfMoveThisThingY + ' #gg#this is the height of the object');
                            
                            s=s+1;
                            // console.log(s + ' This is variable s'); 

                            var yAxis = eval(posiArr.yPos[s]);
                            // console.log(yAxis + ' EL This is the y axis of element n');

                            moveThisThingY.style.top = yAxis + 'px';
                        }
                    })

            }


function moveIn() {
var elemName = document.getElementById("sB");
var xAxisTrack = window.addEventListener("moved", function(event) {
    parseInt(window.getComputedStyle(elemName,null).getPropertyValue("left"));
    // console.log(xAxisTrack);
    })
var xAxisOrigNum = parseInt(window.getComputedStyle(elemName,null).getPropertyValue("left"));
// console.log(xAxisOrigNum + ' This is where the start button x axis is at on screen open');

var xAxis = xAxisOrigNum;
// console.log(xAxis + ' this is the xAxis of start on window load.');

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
    // console.log(xAxisTrack);
    })
var xAxisOrigNum = parseInt(window.getComputedStyle(elemName,null).getPropertyValue("left"));
// console.log(xAxisOrigNum + ' This is where the start button x axis is when it has stopped in the middle of the screen');

var xAxis = xAxisOrigNum;
// console.log(xAxis + ' this is the xAxis of the button when it is clicked in the middle of the screen');

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
        // console.log(u + ' This is the variable u');
        var elemToRemove = document.getElementById(u);
        elemToRemove.remove();
    }
    buildHeadingAndNav();
} 

var dragAndDropNo = 6;

var headingArr = ['backgroundBox', 'yellowRectangle', 'headingTitle', 'information', 'restart', 'next'];
var headingTextArr = ['','', 'REPUTATIONAL RISKS', '', '','NEXT'];
var headingFuncTrigArr = ['onclick','onclick','onclick','onclick','onclick','onclick'];
var headingFuncArr = ['doNothing()','doNothing()','doNothing()','openInf()','restart()','next()'];

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
var restartPressed;
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
    for(i=0;i<interArr.leftPElems.length;i++){
        // console.log(w + ' This is the variable w for restart function');
        var elemToRemove = document.getElementById(interArr.leftPElems[i]);
        elemToRemove.remove();
    }
    for(i=0;i<interArr.middlePElems.length;i++){
        // console.log(w + ' This is the variable w for restart function');
        var elemToRemove = document.getElementById(interArr.middlePElems[i]);
        elemToRemove.remove();
        }
    for(i=0;i<interArr.rightPElems.length;i++){
        // console.log(w + ' This is the variable w for restart function');
        var elemToRemove = document.getElementById(interArr.rightPElems[i]);
        elemToRemove.remove();
        }
        restartPressed=true;
        arrayCreNo=0;
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
        buildInteraction();
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
                // buildInteraction();
            }
        }
}

var interArr = {'leftPElems':  ['option1','option2', 'option3', 'option4', 'option5', 'option6'],
                'middlePElems':['dropZone1','dropZone2','dropZone3','dropZone4','dropZone5','dropZone6'],
                'rightPElems': ['dragItem1','dragItem2','dragItem3','dragItem4','dragItem5','dragItem6'],
                }


var interElemTypeArr = {'leftPElems':  ['div','div','div','div','div','div'],
                        'middlePElems':['div','div','div','div','div','div'],
                        'rightPElems': ['div','div','div','div','div','div'],
                        }

var interElemClass1Add = {'leftPElems':  ['options','options', 'options', 'options', 'options', 'options'],
                          'middlePElems':['dropZone','dropZone','dropZone','dropZone','dropZone','dropZone'],
                          'rightPElems': ['dragItem','dragItem','dragItem','dragItem','dragItem','dragItem'],
                          }
                          
var interElemClass2Add = {'leftPElems':  ['draggable','draggable','draggable','draggable','draggable','draggable'],
                          'middlePElems':['dropZone1','dropZone1','dropZone1','dropZone1','dropZone1','dropZone1'],
                          'rightPElems': ['draggable1','draggable1','draggable1','draggable1','draggable1','draggable1'],
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
                        'rightPElems':  ['onmousedown','onmousedown','onmousedown','onmousedown','onmousedown','onmousedown'],
                        }

var interFuncArr = {'leftPElems':   ['doNothing()','doNothing()','doNothing()','doNothing()','doNothing()','doNothing()'],
                    'middlePElems': ['doNothing()','doNothing()','doNothing()','doNothing()','doNothing()','doNothing()'],
                    'rightPElems':  ['theChosenElem(dragItem1,dropZone1,0)','theChosenElem(dragItem2,dropZone2,1)','theChosenElem(dragItem3,dropZone3,2)','theChosenElem(dragItem4,dropZone4,3)','theChosenElem(dragItem5,dropZone5,4)','theChosenElem(dragItem6,dropZone6,5)'],
                    }

var interFuncTrigArr2 = {'leftPElems':   ['onclick','onclick','onclick','onclick','onclick', 'onclick'],
                        'middlePElems': ['onclick','onclick','onclick','onclick','onclick', 'onclick'],
                        'rightPElems':  ['onmouseover','onmouseover','onmouseover','onmouseover','onmouseover', 'onmouseover'],
                        }

var interFuncArr2 = {'leftPElems':   ['doNothing()','doNothing()','doNothing()','doNothing()','doNothing()','doNothing()'],
                    'middlePElems': ['doNothing()','doNothing()','doNothing()','doNothing()','doNothing()','doNothing()'],
                    'rightPElems':  ['identifyDraggableProp(dropZone1)','identifyDraggableProp(dropZone2)','identifyDraggableProp(dropZone3)','identifyDraggableProp(dropZone4)','identifyDraggableProp(dropZone5)','identifyDraggableProp(dropZone6)'],
                    }

//I need this in the function "theChosenElement" to work out where the user has dragged the draggable item.
var screenToDivide;
//Top of int is the y coordinate for the top of the interactable space.
var topOfInt;
//Bot of int is the y coordinate for the bottom of the interactable space.
var botOfInt;

function buildInteraction() {
    bIntEleNum = 18;
    //I did this because I need this number in the CalcPosOfDragItem function.
    allElemOs =  bIntEleNum;
        for(var key in interArr) {
            // console.log(key + ' this is one of the array names in the object interArr');
            if (interArr.hasOwnProperty(key))
            // console.log(interArr[key] + ' This is the array from the json object');
            for(i=0;i<interArr[key].length;i++){
                // console.log(interArr[key][i] + ' This is the name of the element that was created.');
                    interElement();
                        function interElement() { 
                        var interEleP = document.createElement('div');
                        interEleP.setAttribute('id', interArr[key][i]);
                        interEleP.classList.add(interElemClass1Add[key][i]);
                        interEleP.classList.add(interElemClass2Add[key][i]);
                        interEleP.setAttribute(interFuncTrigArr[key][i], interFuncArr[key][i]);
                        interEleP.setAttribute(interFuncTrigArr2[key][i], interFuncArr2[key][i]);
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
            // console.log(position + ' this is the element backroundBox');
            
            backgroundBoxYAxTop = position.top;
            // console.log(backgroundBoxYAxTop + ' This is the x coordinate for the top of the backgroundBox');
            
            backgroundBoxHeight = position.height;
            // console.log(backgroundBoxHeight + ' This is the height of the backgroundBox');
            topOfInt = backgroundBoxHeight;

            
            nextButton =  document.getElementById("next");
            
            var position = nextButton.getBoundingClientRect();
            // console.log(position + ' this is the element next');
            
            nextButtonYAxTop = position.top;
            // console.log(nextButtonYAxTop + ' This is the x coordinate for the top of the next button');
            botOfInt=nextButtonYAxTop;
           
            nextButtonHeight = position.height;
            // console.log(nextButtonHeight + ' This is the height of the next button');

           
            usablePageHeight = screenH-(backgroundBoxHeight + (screenH-nextButtonYAxTop));
            // console.log(usablePageHeight + ' This is the usable screen height for the element option1');
            screenToDivide = usablePageHeight;


            //This works out the distance between element centres.
            elementPositionerSpaces = usablePageHeight/((bIntEleNum/3)+1);
            // console.log(elementPositionerSpaces + ' distance between element centres');
            
            //This is where the top of the firts element will be positioned.
            elementPositionerStartPos = backgroundBoxHeight;
            // console.log(elementPositionerStartPos + ' Where the top of the first element will be');

            //This is the space that will be made between the elements.
            elementPositionerSpacer = (usablePageHeight/((bIntEleNum/3)+1))/((bIntEleNum/3)+1);
            // console.log(elementPositionerSpacer + ' This is the space that will be made between the elements');


            recomendedInterEleHeight = elementPositionerSpaces-elementPositionerSpacer;
            // console.log(recomendedInterEleHeight + ' This is the recomended hight of the element :-P');


            var a = elementPositionerStartPos;
            // console.log(a + ' This is the variable a BEFORE additions');
            var b = elementPositionerSpacer;
            var c = elementPositionerSpaces;

                for(var key in interArr){
                    if (interArr.hasOwnProperty(key))
                        for(i=0;i<interArr[key].length;i++){
                            // console.log(interArr[key][i]);
                                if(i==0){
                                    var eleName  = document.getElementById(interArr[key][i]);
                                    eleName.style.height = recomendedInterEleHeight + 'px';
                                    eleName.style.top = (a+b) + 'px';
                                    // console.log(eleName.style.top);
                                } else if(i>=1 && i <= ((bIntEleNum/3)-2)){
                                    a += b+c;
                                    var eleName  = document.getElementById(interArr[key][i]);
                                    eleName.style.height = recomendedInterEleHeight + 'px';
                                    eleName.style.top = (a+b) + 'px';
                                } else if(i>=(bIntEleNum/3)-1 && i <= bIntEleNum/3){
                                    a += b+c;
                                    var eleName  = document.getElementById(interArr[key][i]);
                                    eleName.style.height = recomendedInterEleHeight + 'px';
                                    eleName.style.top = (a+b) + 'px';
                                    a = elementPositionerStartPos;
                                }                               
                            }
                        } 
    } 
    // console.log(interArr.middlePElems.length + ' this is what im looking for')
    snapTarget();  
}

//This is the element being dragged. (not the name of the element)
var inActionDrag;

//This is the correct drop zone.(aka, the only one the drop item will snap into.
var inActionDrop;

//This is the name only of the drag item that is in action.
var inActionEleName;

// //This is the name of the element with all syntax added for the drag script to be able to recieve it.
// var formPerfInActionEleName;

// //This is the class name used to control if the item is draggable.
// var formPerfInActionDragClass;

var diPerimPoints = [];
var allElemOs;
var screenToDivide;
var screenPos = [];
var originalDiX;
var originalDiY;
var elementXData;
var elementYData;


function theChosenElem(theDragItem,theDropZone,theEle) {
    inActionDrag = theDragItem;
    // console.log(inActionDrag);
    originalDiCoords=inActionDrag.getBoundingClientRect();
    var originalDiXf = originalDiCoords.left;
    var originalDiYf = originalDiCoords.top;
    originalDiX=originalDiXf;
    originalDiY=originalDiYf;
    var elementXDataf = inActionDrag.getAttribute('data-x');
    var elementYDataf = inActionDrag.getAttribute('data-y');
    elementXData=elementXDataf;
    elementYData=elementYDataf;
    
    // console.log(originalDiX + ' ########This is the X-coord when you click on the drag item');
    // console.log(originalDiY + ' ########This is the Y-coord when you click on the drag item');

    inActionDrop =theDropZone;
    // console.log(theDropZone);
    inActionEleName = interArr.rightPElems[theEle];
    // console.log(inActionEleName);
    formPerfInActionEleNameF="'"+'#'+inActionEleName+"'";
    formPerfInActionEleName=formPerfInActionEleNameF;

    // var inActionDragClassF=interElemClass2Add.rightPElems[theEle];
    // formPerfInActionDragClassF="'"+'.'+inActionDragClassF+"'";
    // formPerfInActionDragClass=inActionDragClassF;

    // console.log(inActionEleName + ' This is the in action ele name');
    // console.log(formPerfInActionEleName + ' This is the in action ele name');
    // console.log(inActionDragClassF + ' This is the in action class for the drag script');
    // console.log(formPerfInActionDragClassF + ' This is the in action class for the drag script');

    
    var screenDivision = screenToDivide/(allElemOs/3);
        // console.log(screenToDivide);
        // console.log(screenDivision);
        // console.log(topOfInt + ' This is top of int');

        var screenDivisionsArr=[];

        var allocatedSpace=topOfInt;
        for(i=0;i<(allElemOs/3);i++){
            if(i==0){
                screenDivisionsArr.push(topOfInt);
            }else if(i>0 && i<((allElemOs/3)-1)){
                screenDivisionsArr.push(allocatedSpace);
            }else {
                screenDivisionsArr.push(allocatedSpace,botOfInt);
                allocatedSpace=topOfInt;
            }
            allocatedSpace=allocatedSpace+screenDivision;
        }
        // console.log(screenDivisionsArr);

    

    document.getElementById(inActionEleName).addEventListener("mousedown", interactableDataOn);
    document.getElementById(inActionEleName).addEventListener("mouseup", interactableDataOff);

    elePosCheckerPeriod = setInterval(interactableDataOn,10);

    function interactableDataOn() {
        elem = document.getElementById(inActionEleName);
        var position = elem.getBoundingClientRect();
        //I used the below to check the value of the z index (currently scripted out) 
        //I need the element to be infront of the other elements so the event listener works. 
        // var diEleZ=elem.style.zIndex;
        elem.style.zIndex=+3;
        // console.log(diEleZ);
        //You need the below for loop to remove the hilighting from all the elements, otherwise they stay hilighted when you move off them.
        for(j=0;j<interArr.middlePElems.length;j++)
            document.getElementById(interArr.middlePElems[j]).classList.remove('drop-target');
        CalcPosOfDragItem();
        //The line below clears out the diPerimPoints array so that when you click again the array does not get added to.
        diPerimPoints = [];
        // console.log('On function fired');
        console.log('Error checker');
    }

    function interactableDataOff() {
        elem = document.getElementById(inActionEleName);
        //The below statement is used to set the selected element back to the same level as all the other elements.
        elem.style.zIndex=+1;
        clearInterval(elePosCheckerPeriod);
        // console.log('Off function fired');
    }
    
    
    
    function CalcPosOfDragItem() {
        var diElem = document.getElementById(inActionEleName);
        var diPosition = diElem.getBoundingClientRect();

        //The below variables collect the required coordinates to locate the chosen element in space.
        var diEleX=diPosition.left;
        var diEleY=diPosition.top;
        var diEleH=diPosition.height;
        var diEleW=diPosition.width;

        //The below variables list the coordinates of the four corners of the chosen element.
        var diBoxTLCoOrdX = diEleX;
        var diBoxTLCoOrdY = diEleY;
        var diBoxTRCoOrdX = diEleX + diEleW;
        var diBoxTRCoOrdY = diEleY;
        var diBoxBLCoOrdX = diEleX;
        var diBoxBLCoOrdY = diEleY + diEleH;
        var diBoxBRCoOrdX = diEleX + diEleW;
        var diBoxBRCoOrdY = diEleY + diEleH;

        // console.log(diBoxTLCoOrdX);
        // console.log(diBoxTLCoOrdY);
        // console.log(diBoxTRCoOrdX);
        // console.log(diBoxTRCoOrdY);
        // console.log(diBoxBLCoOrdX);
        // console.log(diBoxBLCoOrdY);
        // console.log(diBoxBRCoOrdX);
        // console.log(diBoxBRCoOrdY);

        //This variable calculates the Y-center of the chosen element.
        var diEleCY = diEleY+(diEleH/2);
        // console.log(diEleCY);

        //The below statement takes all the coordinates of the box and turns them into an array for comparison later.
        diPerimPoints.push(diBoxTLCoOrdX,diBoxTLCoOrdY,diBoxTRCoOrdX,diBoxTRCoOrdY,diBoxBLCoOrdX,diBoxBLCoOrdY,diBoxBRCoOrdX,diBoxBRCoOrdY);
        // console.log(diPerimPoints);
        // console.log(diPerimPoints[0]);

        //This variable collects the name of the element that will have its class changed to hilight that it is a drop zone.
        var chosenDropZone;

        //This variable is set by the if statement below and identifies where the drop item is on screen.
        var dzInPlay;

        //The if statements below identify where the drag item is on the screen, 
        //so that it can compare it to the correct drop zone, to be hilighted.
        if(diEleCY>=screenDivisionsArr[0] && diEleCY<=screenDivisionsArr[1]){
            chosenDropZone = document.getElementById(interArr.middlePElems[0])
            dzInPlay = 0;
            // console.log(chosenDropZone);
        }else if(diEleCY>=screenDivisionsArr[1] && diEleCY<=screenDivisionsArr[2]) {
            chosenDropZone = document.getElementById(interArr.middlePElems[1])
            dzInPlay = 1;
            // console.log(chosenDropZone);
        }else if(diEleCY>=screenDivisionsArr[2] && diEleCY<=screenDivisionsArr[3]) {
            chosenDropZone = document.getElementById(interArr.middlePElems[2])
            dzInPlay = 2;
            // console.log(chosenDropZone);
        }else if(diEleCY>=screenDivisionsArr[3] && diEleCY<=screenDivisionsArr[4]) {
            chosenDropZone = document.getElementById(interArr.middlePElems[3])
            dzInPlay = 3;
            // console.log(chosenDropZone);
        }else if(diEleCY>=screenDivisionsArr[4] && diEleCY<=screenDivisionsArr[5]) {
            chosenDropZone = document.getElementById(interArr.middlePElems[4])
            dzInPlay = 4;
            // console.log(chosenDropZone);
        }else if(diEleCY>=screenDivisionsArr[5] && diEleCY<=screenDivisionsArr[6]) {
            chosenDropZone = document.getElementById(interArr.middlePElems[5])
            dzInPlay = 5;
            // console.log(chosenDropZone);
        }
        //Im pretty sure I didnt need this last else.
        // else if(diEleCY<screenDivisionsArr[1] || diEleCY>screenDivisionsArr[6]){
        //     for(j=0;j<interArr.middlePElems.length;j++)
        //         document.getElementById(interArr.middlePElems[j]).classList.remove('drop-target');
        // }

        // console.log(dzInPlay + ' is this dz in play');

        var placeHolder = -100;
    
                var condi1 = (diPerimPoints[0]>=comparisonArrays[dzInPlay][0] && diPerimPoints[0]<=comparisonArrays[dzInPlay][2] && diPerimPoints[1]>=comparisonArrays[dzInPlay][1] && diPerimPoints[1]<=comparisonArrays[dzInPlay][5]);
                var condi2 = (diPerimPoints[4]>=comparisonArrays[dzInPlay][4] && diPerimPoints[4]<=comparisonArrays[dzInPlay][6] && diPerimPoints[5]<=comparisonArrays[dzInPlay][5] && diPerimPoints[5]>=comparisonArrays[dzInPlay][1]);
                var condi3 = (diPerimPoints[2]>=comparisonArrays[dzInPlay][0] && diPerimPoints[2]<=comparisonArrays[dzInPlay][2] && diPerimPoints[3]<=comparisonArrays[dzInPlay][7] && diPerimPoints[3]>=comparisonArrays[dzInPlay][3]);
                var condi4 = (diPerimPoints[6]>=comparisonArrays[dzInPlay][4] && diPerimPoints[6]<=comparisonArrays[dzInPlay][6] && diPerimPoints[7]<=comparisonArrays[dzInPlay][7] && diPerimPoints[7]>=comparisonArrays[dzInPlay][3]);

                var dzTracking;

                if((condi1)||(condi2)||(condi3)||(condi4)){
                    chosenDropZone.classList.add('drop-target');
                    
                } else{
                    chosenDropZone.classList.remove('drop-target');
                   
                }
            // console.log(comparisonArrays[dzInPlay][0]);
    
    }
}

// var overlap = isOverlap('#dragItem1','#dropZone2');

// if(overlap){
//     alert('its overlapping');
// } else {
//     alert('its not overlapping');
// }

var dzPerimPoints = [];
//The below object is created inside snap target. It is a list of all the corner points for each drop target.
//This position of the drop item is compared to this list to identify if the drop item and drag zone overlap.
var comparisonArrays = {};
var arrayCreNo=0;

snapTargetStore = [];

function snapTarget() {
    //This creates a new array and the function below it replaces the the array snap targets with this empty array.
    //The reason we do this is to clean out that array so only the snap targets we create are inside that array.
    cleanTargetArr=new Array();
    // console.log(cleanTargetArr + ' this should create an array with a bunch of empty values');
    
    interact('.draggable1').options.drag.snap.targets = cleanTargetArr;
    // console.log(interact('.draggable1').options.drag.snap.targets);

    
    for(i=0;i<interArr.middlePElems.length;i++){
        comparisonArrays[i]=[];
    }
    // console.log(comparisonArrays);


    for(i=0;i<interArr.middlePElems.length;i++) {
    var interElem = document.getElementById(interArr.middlePElems[i]);
    // console.log(interElem);

    var position = interElem.getBoundingClientRect();
    // console.log(position + ' this is the element option1');

    interElemYAxTop = position.top;
    // console.log(interElemYAxTop + ' This is the Y coordinate for the top of the drop zone of the chosen element');

    interElemXAxTop = position.left;
    // console.log(interElemXAxTop + ' This is the x coordinate for the left of the drop zone of the chosen element');

    interElemHeight = position.height;
    // console.log(interElemHeight + ' This is the height of the dropzone of the chosen element');

    interElemWidth = position.width;
    // console.log(interElemWidth + ' This is the width of the dropzone of the chosen element');

    //This gets the coordinates of the top left corner of the drop target so we can add them to the snap target array.
    dropEleX=interElemXAxTop;
    dropEleY=interElemYAxTop;
    dropEleH=interElemHeight*0.5;
    dropEleW=interElemWidth;

    // console.log(dropEleX,dropEleY,dropEleH);

    //This creates the snap target to put into the array.
    var snapTarget = {x: dropEleX, y: dropEleY, range: dropEleH*2};
    
    //This pushes the snap target into the snap target array. 
    interact('.draggable1').options.drag.snap.targets.push(snapTarget);
    // console.log(snapTarget + ' this is snapTarget');
    snapTargetStore.push(snapTarget);
    // interact('.draggable1').options.drag.snap.targets[i].x = dropEleX;
    // interact('.draggable1').options.drag.snap.targets[i].y = dropEleY;
    // interact('.draggable1').options.drag.snap.targets[i].range = dropEleH*0.5;


    // console.log(interact('.draggable1').options.drag.snap.targets[0].x);
    // console.log(interact('.draggable1').options.drag.snap.targets[0].y);
    // console.log(interact('.draggable1').options.drag.snap.targets[0].range);

    var dzBoxTLCoOrdX = dropEleX;
    var dzBoxTLCoOrdY = dropEleY;
    var dzBoxTRCoOrdX = dropEleX + dropEleW;
    var dzBoxTRCoOrdY = dropEleY;
    var dzBoxBLCoOrdX = dropEleX;
    var dzBoxBLCoOrdY = dropEleY + interElemHeight;
    var dzBoxBRCoOrdX = dropEleX + dropEleW;
    var dzBoxBRCoOrdY = dropEleY + interElemHeight;
    // console.log(dzBoxTLCoOrdX);
    // console.log(dzBoxTLCoOrdY);
    // console.log(dzBoxTRCoOrdX);
    // console.log(dzBoxTRCoOrdY);
    // console.log(dzBoxBLCoOrdX);
    // console.log(dzBoxBLCoOrdY);
    // console.log(dzBoxBRCoOrdX);
    // console.log(dzBoxBRCoOrdY);

    
    //dzPerimPoints.push(dzBoxTLCoOrdX,dzBoxTLCoOrdY,dzBoxTRCoOrdX,dzBoxTRCoOrdY,dzBoxBLCoOrdX,dzBoxBLCoOrdY,dzBoxBRCoOrdX,dzBoxBRCoOrdY);

    //The array creator below fills the 6 arrays (created above) with the coordinates of the four corners of each drop zone. 
    comparisonArrays[arrayCreNo].push(dzBoxTLCoOrdX,dzBoxTLCoOrdY,dzBoxTRCoOrdX,dzBoxTRCoOrdY,dzBoxBLCoOrdX,dzBoxBLCoOrdY,dzBoxBRCoOrdX,dzBoxBRCoOrdY)

    //this is needed to incriment the key being created in the 'omparisonArrays' object.
    arrayCreNo = arrayCreNo+1;
    // console.log(arrayCreNo);

    }

    // console.log(interact('.draggable1').options.drag.snap.targets);
    // console.log(perimPoints);
    // console.log(comparisonArrays);
    // console.log(screenPos);
    // console.log(snapTargetStore);
}

var thisIsTheDropZone;

function identifyDraggableProp(ele){
    var dragItemNo = ele.id;
    // console.log(dragItemNo);
    window.dragItemNo=dragItemNo;
}

var isItCorrect;


  // target elements with the "draggable" class
interact('.draggable1').draggable({
  snap: {
      // snap to the point (0, 0) if the pointer gets 0 pixels close
      targets:        [ { x: 0, y: 0, range: 0 }],

      relativePoints: [ { x: 0, y: 0 }]
    },
  // enable inertial throwing
  inertia: true,
  // keep the element within the area of it's parent
  restrict: {
    restriction:'parent',
    endOnly: true,
    elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
  },
  // enable autoScroll
  autoScroll: false,

  // call this function on every dragmove event
  onmove: dragMoveListener,
}).on('dragstart', function(event){
    interact('.draggable1').options.drag.snap.targets=snapTargetStore;
    // console.log('I got activated');
    event.target.classList.add('acceptMe');
    
    
      
}).on('dragend', function(event){
    //I tried to put the return to start here but it was too early in the code, I needed the drop checker (ondrop) to fire first.
    // if(isItCorrect==false){
    //     var emptyArr = [];
    //     interact('.draggable1').options.drag.snap.targets=emptyArr;
    //     var returnSnapTarget = {x: originalDiX, y: originalDiY, range: Infinity};
    //     interact('.draggable1').options.drag.snap.targets.push(returnSnapTarget);
    //     console.log('I got deactivated.');
    //     console.log(event.interaction.modifierStatuses.snap.changed);
    //     for(j=0;j<interArr.middlePElems.length;j++)
    //     document.getElementById(interArr.middlePElems[j]).classList.remove('drop-target');
    //     event.interaction.doMove();
    // }
    // event.target.classList.remove('.acceptMe');
});

function dragMoveListener (event) {
  var target = event.target,
      // keep the dragged position in the data-x/data-y attributes
      x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
      y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

  // translate the element
  target.style.webkitTransform =
  target.style.transform =
    'translate(' + x + 'px, ' + y + 'px)';

  // update the posiion attributes
  target.setAttribute('data-x', x);
  target.setAttribute('data-y', y);
}



// this is used later in the resizing and gesture demos.
window.dragMoveListener = dragMoveListener;

// interact('.dropZone1').options.drop.access='#dragItem2';

  // enable draggables to be dropped into this
interact('.dropZone1').dropzone({
    // only accept elements matching this CSS selector
    accept:'.acceptMe',
    // Require a 75% element overlap for a drop to be possible
    overlap: 0.80,
    
    //The list below is all the elements you can add to the checker function, which is an optional function.

    // checker: function (dropped){
    //     dragEvent,         // related dragmove or dragend
    //     event,             // Touch, Pointer or Mouse Event
    //     dropped,           // bool default checker result
    //     dropzone,          // dropzone Interactable
    //     dropElement,       // dropzone element                      
    //     draggable,         // draggable Interactable
    //     draggableElement) {// draggable element

    //only allow drops into empty dropzone elements
    // return dropped && !dropElement.hasChildNodes();
    // },
    
    // listen for drop related events:
  
    ondropactivate: function (event) {
      // add active dropzone feedback
      event.target.classList.add('drop-active');
      isItCorrect=false;
    //   console.log(interact('.draggable1').options.drag.snap.targets);
    },
    ondragenter: function (event) {
      var draggableElement = event.relatedTarget,
          dropzoneElement = event.target;
          
  
      // feedback the possibility of a drop
      dropzoneElement.classList.add('drop-target');
      draggableElement.classList.add('can-drop');
      draggableElement.textContent = 'Dragged in';
    },
    ondragleave: function (event) {
      // remove the drop feedback style
      event.target.classList.remove('drop-target');
      event.relatedTarget.classList.remove('can-drop');
      event.relatedTarget.textContent = 'Dragged out';
    },
    ondrop: function (event) {
        // console.log(dragItemNo);
        // console.log(event.target);
        var dropItemNo=event.target.id;
        // console.log(dropItemNo);
        if(dragItemNo==dropItemNo){
            //I added this class to make the dropped item turn green. (see class in css)
            event.relatedTarget.classList.add('correct');
            event.relatedTarget.textContent = 'Dropped';
            event.relatedTarget.classList.remove('draggable1');
            isItCorrect=true;
            for(j=0;j<interArr.middlePElems.length;j++)
            document.getElementById(interArr.middlePElems[j]).classList.remove('drop-target');
        }
    },
    ondropdeactivate: function (event) {
      // remove active dropzone feedback
      event.target.classList.remove('drop-active');
      event.target.classList.remove('drop-target');
    //   console.log(interact('.draggable1').options.drag.snap.targets);
    
        if(isItCorrect==false){
            var emptyArr = [];
            interact('.draggable1').options.drag.snap.targets=emptyArr;
            var returnSnapTarget = {x: originalDiX, y: originalDiY, range: Infinity};
            interact('.draggable1').options.drag.snap.targets.push(returnSnapTarget);
            // console.log('I got deactivated.');
            // console.log(event.interaction.modifierStatuses.snap.changed);
            for(j=0;j<interArr.middlePElems.length;j++)
            document.getElementById(interArr.middlePElems[j]).classList.remove('drop-target');

            //This event.interaction.doMove is needed to trigger the snapping back to the start position.
            //if you do not do this the snap targets are not rechecked after you drop the drop item.
            event.interaction.doMove();
        }
    }
  });

  //console.log(interact('.dropZone1').options);

  function next(){
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
    for(i=0;i<interArr.leftPElems.length;i++){
        // console.log(w + ' This is the variable w for restart function');
        var elemToRemove = document.getElementById(interArr.leftPElems[i]);
        elemToRemove.remove();
    }
    for(i=0;i<interArr.middlePElems.length;i++){
        // console.log(w + ' This is the variable w for restart function');
        var elemToRemove = document.getElementById(interArr.middlePElems[i]);
        elemToRemove.remove();
        }
    for(i=0;i<interArr.rightPElems.length;i++){
        // console.log(w + ' This is the variable w for restart function');
        var elemToRemove = document.getElementById(interArr.rightPElems[i]);
        elemToRemove.remove();
        }
        restartPressed=true;
        arrayCreNo=0;
    buildBackPage();
  }


var refPageElementObArr = {'idN':  ['bPYellowStripe', 'bPttitleBox', 'rB', 'references'], 
                        'elementN':['','REPUTATIONAL RISKS','']
                        }

var refPosiArr = {'xPos':['(screenW/2)-(widthOfMoveThisThingX/2)', '(screenW/2)-(widthOfMoveThisThingX/2)', '',''], 
                'yPos':['(screenH/2)-(heightOfMoveThisThingY/2)', '((screenH+(screenH*0.01))/2)-(heightOfMoveThisThingY/2)', '','']
                }

// x='';
// var nextPage;



function buildBackPage(){
    var pageElementOb,i,j=-1,z='';
    pageElementOb = refPageElementObArr;

        
             for (i=0;i<pageElementOb.idN.length;i++) {
                j=j+1;
                x = pageElementOb.idN[i];
                z = pageElementOb.elementN[j];
                 //console.log(x,z);
                 pageElement();
                 }

                  function pageElement() { 
                        var div = document.createElement('div');
                        div.setAttribute('id', x);
                        div.innerHTML = z;
                        document.getElementsByTagName('body')[0].appendChild(div);
                        }
                        // endMoveIn();
}



// function dynamX() {
//     allDivEleNames = [];
//     var p=0;
//     for (k=0;k<pageElementObArr.idN.length-1;k++) {
//         l = pageElementObArr.idN[k];
//         //console.log(l + ' this is l');
       
//         var moveThisThingX = document.getElementById(l);
//         //console.log(moveThisThingX + ' this is the element l');
       
//         allDivEleNames.push(moveThisThingX);
       
//         xAxisCollect = window.getComputedStyle(moveThisThingX,null).getPropertyValue("left");
//         //console.log(xAxisCollect + ' this is the l elements left coord');
       
//         var xAxisTrackArray = xAxisCollect.split('px');
//         //console.log(xAxisTrackArray[0] + ' this is the element l left coord, number only');
        
//         xAxisVal = xAxisTrackArray[0];
//         //console.log(xAxisVal);
        
//         var widthOfMoveThisThingX = document.getElementById(l).offsetWidth;
//         //console.log(widthOfMoveThisThingX + ' this is the width of the element l');
        
//         p=p+1;
//         //console.log(p + ' This is the variable p'); 

//         var xAxis = eval(posiArr.xPos[p]);

//         //console.log(xAxis + ' This is the x axis of element k'); 
           
//         moveThisThingX.style.left = xAxis + 'px';
//     }

//         window.addEventListener("resize", function() {
//             //console.log(document.body.clientWidth + ' wide by ' + document.body.clientHeight+' high');
//             screenW = document.body.clientWidth;
//             screenH = document.body.clientHeight;
//                 var l;
//                 var r=0;
//                 for (k=0;k<pageElementObArr.idN.length-1;k++) {
//                     l = pageElementObArr.idN[k];
//                     //console.log(l + ' EL this is l');
                   
//                     var moveThisThingX = document.getElementById(l);
//                     //console.log(moveThisThingX + ' EL this is the element l');
                   
//                     xAxisCollect = window.getComputedStyle(moveThisThingX,null).getPropertyValue("left");
//                     //console.log(xAxisCollect + ' EL this is the start button left coord');
                    
//                     var xAxisTrackArray = xAxisCollect.split('px');
//                     //console.log(xAxisTrackArray[0] + ' EL this is the start button left coord, number only');
                    
//                     xAxisVal = xAxisTrackArray[0];
//                     //console.log(xAxisVal);
                    
//                     var widthOfMoveThisThingX = document.getElementById(l).offsetWidth;
//                     //console.log(widthOfMoveThisThingX + ' EL this is the width of element l');

//                     r=r+1;
//                     //console.log(r + ' This is variable p'); 

//                     var xAxis = eval(posiArr.xPos[r]);
//                     //console.log(xAxis + ' EL This is the x axis of element k');

//                     moveThisThingX.style.left = xAxis + 'px';
//                 }
//             })
//     }

//         function dynamY() {
//             var q=0;
//             for (m=0;m<pageElementObArr.idN.lenght-1;m++) {
//                 n = pageElementObArr.idN[m];
//                 //console.log(n + ' this is n');
                
//                 var moveThisThingY = document.getElementById(n);
//                 //console.log(moveThisThingY + ' this is the element n');

//                 yAxisCollect = window.getComputedStyle(moveThisThingY,null).getPropertyValue("top");
//                 //console.log(yAxisCollect + ' this is the n elements left coord');
               
//                 var yAxisTrackArray = yAxisCollect.split('px');
//                 //console.log(yAxisTrackArray[0] + ' this is the element n left coord, number only');
               
//                 yAxisVal = yAxisTrackArray[0];
//                 //console.log(yAxisVal);
                
//                 var heightOfMoveThisThingY = document.getElementById(n).offsetHeight;
//                 //console.log(heightOfMoveThisThingY + ' ##this is the height of the element n');

//                 q=q+1;
//                 //console.log(p + ' This is variable q'); 

//                 var yAxis = eval(posiArr.yPos[q]);
//                 //console.log(yAxis + ' This is the y axis of element n');

//                 moveThisThingY.style.top = yAxis + 'px';
//             }

//                 window.addEventListener("resize", function() {
//                    // console.log(document.body.clientWidth + ' wide by ' + document.body.clientHeight+' high');
//                     screenW = document.body.clientWidth;
//                     screenH = document.body.clientHeight;
//                         var n;
//                         var s=0;
//                         for (m=0;m<pageElementObArr.idN.length-1;m++) {
//                             n = pageElementObArr.idN[m];
//                             //console.log(l + ' this is l');
                           
//                             var moveThisThingY = document.getElementById(n);
//                             //console.log(moveThisThingY + ' ##his is the start button');
                           
//                             yAxisCollect = window.getComputedStyle(moveThisThingY,null).getPropertyValue("top");
//                             //console.log(yAxisCollect + ' ##this is the start button left coord');
                           
//                             var yAxisTrackArray = yAxisCollect.split('px');
//                             // console.log(yAxisTrackArray[0] + ' ##this is the top of the m element, number only');
                           
//                             yAxisVal = yAxisTrackArray[0];
//                             // console.log(yAxisVal);
                           
//                             var heightOfMoveThisThingY = document.getElementById(n).offsetHeight;
//                             // console.log(heightOfMoveThisThingY + ' #gg#this is the height of the object');
                            
//                             s=s+1;
//                             // console.log(s + ' This is variable s'); 

//                             var yAxis = eval(posiArr.yPos[s]);
//                             // console.log(yAxis + ' EL This is the y axis of element n');

//                             moveThisThingY.style.top = yAxis + 'px';
//                         }
//                     })

//             }


// function moveIn() {
// var elemName = document.getElementById("sB");
// var xAxisTrack = window.addEventListener("moved", function(event) {
//     parseInt(window.getComputedStyle(elemName,null).getPropertyValue("left"));
//     // console.log(xAxisTrack);
//     })
// var xAxisOrigNum = parseInt(window.getComputedStyle(elemName,null).getPropertyValue("left"));
// // console.log(xAxisOrigNum + ' This is where the start button x axis is at on screen open');

// var xAxis = xAxisOrigNum;
// // console.log(xAxis + ' this is the xAxis of start on window load.');

// var incriment = xAxis/xAxis;

// var intSet = setInterval(moveDiv, 25);
//     function moveDiv() {
//         if (xAxis <= xAxisOrigNum && xAxis>=(screenW*0.75)) {
//             incriment = incriment+(incriment/10);
//             xAxis = xAxis-incriment;
//             elemName.style.left = xAxis + 'px';
//         } else if (xAxis <= (screenW*0.75) && xAxis>=(screenW*0.45)) {
//             incriment = incriment-(incriment/10);
//             xAxis = xAxis-incriment;
//             elemName.style.left = xAxis + 'px';
//         } else {
//             clearInterval(intSet);
//             document.getElementById("sB").setAttribute('onclick', 'moveOut()');
//         }
//     }
// }






























































































//   var condi1 = (diPerimPoints[0]>=dzPerimPoints[0] && diPerimPoints[0]<=dzPerimPoints[2] && diPerimPoints[1]>=dzPerimPoints[1] && diPerimPoints[1]<=dzPerimPoints[5]);
//             var condi2 = (diPerimPoints[4]>=dzPerimPoints[4] && diPerimPoints[4]<=dzPerimPoints[6] && diPerimPoints[5]<=dzPerimPoints[5] && diPerimPoints[5]>=dzPerimPoints[1]);
//             var condi3 = (diPerimPoints[2]>=dzPerimPoints[0] && diPerimPoints[2]<=dzPerimPoints[2] && diPerimPoints[3]<=dzPerimPoints[7] && diPerimPoints[3]>=dzPerimPoints[3]);
//             var condi4 = (diPerimPoints[6]>=dzPerimPoints[4] && diPerimPoints[6]<=dzPerimPoints[6] && diPerimPoints[7]<=dzPerimPoints[7] && diPerimPoints[7]>=dzPerimPoints[3]);






































//All this stuff below works!

//   // target elements with the "draggable" class
// interact('.draggable1')
// .draggable({
//   snap: {
//       targets: [
//       // snap to the point (0, 450) if the pointer gets 50 pixels close
//       { x: 500, y: 120, range: 200 }
//       ]
//   },


// targets:[ 
//     { x: 0, y: 0, range: 0 }
//     ],
//     relativePoints: [ { x: 0, y: 0 } ]
// },


//   // enable inertial throwing
//   inertia: true,
//   // keep the element within the area of it's parent
//   restrict: {
//     restriction: "parent",
//     endOnly: true,
//     elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
//   },
//   // enable autoScroll
//   autoScroll: false,

//   // call this function on every dragmove event
//   onmove: dragMoveListener,
//   // call this function on every dragend event
//   onend: function (event) {
//       console.log();
//     var textEl = event.target.querySelector('p');

//     textEl && (textEl.textContent =
//       'moved a distance of '
//       + (Math.sqrt(Math.pow(event.pageX - event.x0, 2) +
//                    Math.pow(event.pageY - event.y0, 2) | 0))
//           .toFixed(2) + 'px');
//   }
// });



// function dragMoveListener (event) {
//   var target = event.target,
//       // keep the dragged position in the data-x/data-y attributes
//       x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
//       y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

//   // translate the element
//   target.style.webkitTransform =
//   target.style.transform =
//     'translate(' + x + 'px, ' + y + 'px)';

//   // update the posiion attributes
//   target.setAttribute('data-x', x);
//   target.setAttribute('data-y', y);
// }

// // this is used later in the resizing and gesture demos
// window.dragMoveListener = dragMoveListener;






// // enable draggables to be dropped into this
// interact('.dropzone1').dropzone({
//   // only accept elements matching this CSS selector
//   accept: '#dragItem1',
//   // Require a 75% element overlap for a drop to be possible
//   overlap: 0.50,

//   // listen for drop related events:

//   ondropactivate: function (event) {
//     // add active dropzone feedback
//     event.target.classList.add('drop-active');
//   },
//   ondragenter: function (event) {
//     var draggableElement = event.relatedTarget,
//         dropzoneElement = event.target;

//     // feedback the possibility of a drop
//     dropzoneElement.classList.add('drop-target');
//     draggableElement.classList.add('can-drop');
//     draggableElement.textContent = 'Dragged in';
//   },
//   ondragleave: function (event) {
//     // remove the drop feedback style
//     event.target.classList.remove('drop-target');
//     event.relatedTarget.classList.remove('can-drop');
//     event.relatedTarget.textContent = 'Dragged out';
//   },
//   ondrop: function (event) {
//     event.relatedTarget.classList.add('correct');
//     event.relatedTarget.textContent = 'Dropped';
//   },
//   ondropdeactivate: function (event) {
//     // remove active dropzone feedback
//     event.target.classList.remove('drop-active');
//     event.target.classList.remove('drop-target');
//   }
// });