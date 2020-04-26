let mode;
let graph;
let Reserve = false;
let Purchase = false;
let Sell = false;
let Discount = false;
let tweak;
function setup(){
    createCanvas(600,600);
    mode = 1;
    slider = createSlider(-1,1,0, 0.1);
    tweak = 0;
    button1 = createButton("discount rate");
    button2 = createButton("OMO purchase")
    button5 = createButton("OMO sell")

    button3 = createButton("Reserve Requirement")
    graph = new Graph();
    money = new Money();

    button4 = createButton('change');    

    button1.mousePressed(discount);
    button2.mousePressed(purchase);
    button3.mousePressed(reserve);
    button5.mousePressed(sell);

}
function draw(){
    background(0);
    button4.mousePressed(change);

    switch(mode)
    {
        case 1:
            graph.show();
            graph.plot();
            
            break;
        case 2: 
            money.show();
            money.MS();
            
            break;
    }    
}

function discount()
{
    Discount = true;
    Purchase = false;
    Reserve = false;
    Sell = false;

}
function purchase()
{
    Discount = false;
    Purchase = true;
    Reserve = false;
    Sell = false;
    }
function reserve()
{
    Discount = false;
    Purchase = false;
    Reserve = true;
    Sell = false;
    }
function change()
{
    if(mode == 1)
    {
        mode = 2;
    }else if (mode == 2)
    {
        mode = 1;
    }
}
function sell()
{
    Discount = false;
    Purchase = false;
    Reserve = false;
    Sell = true;
}

