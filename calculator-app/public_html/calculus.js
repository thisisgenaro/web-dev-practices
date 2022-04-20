var num = "";
var result = 0;
var display = "0";
var point = false;
var err = false;
var opp = "";

function reset()
{
    result = 0;
    num = "";
    display = "0";
    point = false;
    err = false;
    setOperator("");
    setScreen(display);
}

function setScreen(data)
{
        document.getElementById("screen-display").innerHTML = data;    
}

function setOperator(sign)
{
    opp = sign;
    
    switch (opp)
    {
        case 'add':
            signal = '+';
            break;
        case 'sub':
            signal = '-';
            break;
        case 'div':
            signal = '/';
            break;
        case 'mul':
            signal = 'x';
            break;
        case '':
            signal = ' ';
            break;
            
    }
    document.getElementById("screen-operator").innerHTML = signal;
}

function insert(number)
{
    let wScreen = document.getElementById("screen");
    let wScreenDisplay = document.getElementById("screen-display");
    
    if(!err)
    {
        
        if(wScreenDisplay.offsetWidth/wScreen.offsetWidth > 0.75)
        {
            return;
        }
        
        if(num === "")
        {
            display = "0";
        }

	switch (number)
	{
		case 0:
                    if(!point || display === "0")
                    {
                        display += number;
                        setScreen(display);
                        num = Number(display);
                        return;
                    }
                    break;

		case ".":
                    if(!point)
                    {
                        point = true;
                    }
			
                    else
                    {
                        return;
                    }
                    break;

		case "-":
                    if(num !== "")
                    {
                        return;
                    }
                    
                    else
                    {
                        num = "-";
                        display = "-";
                        setScreen(display);
                        return;
                    }
                    
                    break;
	}

        display = display !== "0" || number === "." ? display + number : (num === "-" ? (-1*number).toString() : number.toString()); 

        num = Number(display);

        setScreen(display);
    }
    
}


function calc(operator)
{
    if(!err)
    {
        if(num === "")
        {
            
            if(operator === "sub" && (opp !== "" || display === "0"))
            {
                insert("-");
            }
            
            else if(operator === "")
            {
                result = Number(display);
            }

            else
            {
                setOperator(operator);
            }

            return;
        }

        switch(opp)
        {
            case '':
                result = num;
                break;

            case 'add': 
                result += num;
                break;

            case 'sub':
                result -= num;
                break;

            case 'mul':
                result *= num;
                break;

            case 'div':
                if(num === 0)
                {
                    setScreen("##Err Div 0##");
                    err = true;
                }

                else
                {
                    result /= num;
                }

                break;

        }
        
        point = false;
        num = "";
        display = result.toString();
        
        setOperator(operator);

        
        if(!err)
        
        {
            setScreen(display);
        }
        
    }
    
}

function deleteKey(){
    if(!err)
    {
        display = document.getElementById("screen-display").innerHTML;
        display = display.length === 1 ? "0" : display.substr(0,display.length -1);
        setScreen(display);
        num = Number(display);
    }
}