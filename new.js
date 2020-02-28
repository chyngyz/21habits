var counter = document.getElementById('counter').getContext('2d');
        var no = 1; // Starting Point
        var pointToFill = 4.72;  //Point from where you want to fill the circle
        var cw = counter.canvas.width;  //Return canvas width
        var ch = counter.canvas.height; //Return canvas height
        var diff;

        var fillCounter= function(){
            diff = ((no/21) * Math.PI*2*10);
                
                counter.clearRect(0,0,cw,ch);   // Clear canvas every time when function is call
                
                counter.lineWidth = 15;     // size of stroke
                
                counter.fillStyle = '#fff';     // color that you want to fill in counter/circle
                
                counter.strokeStyle = '#F5E0A9';    // Stroke Color
                
                counter.textAlign = 'center';
                
                counter.font = "25px monospace";    //set font size and face
                
                counter.fillText(no+'-KYH',100,110);       //fillText(text,x,y);
                
                counter.beginPath();
                counter.arc(100,100,90,pointToFill,diff/10+pointToFill);    //arc(x,y,radius,start,stop)
                
                counter.stroke();   // to fill stroke
                
                // now add condition
                
                if(no >= 21)
                {
                    clearTimeout(fill);
                    document.querySelector('.button').style.display='none';    //fill is a variable that call the function fillcounter()
                    document.querySelector('.congrate').style.display='block';
                }
                no++;
        }




        document.querySelector('.button').addEventListener('click',fillCounter);
        
        
    
        
        //now call the function
        
        var fill ;     //call the fillCounter function after every 50MS
