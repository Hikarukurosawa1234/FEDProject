class Money
{
    constructor()
    {
        //graphs
        this.constant = 60;
        //graphs
        this.posx = this.constant;
        this.posy = height - this.constant;
        this.posx2 = width - this.constant;
        this.posy2 = this.constant;

        //demand curve
        this.shortAposx = this.constant+30;
        this.shortAposx2 = width - 70;
        this.shortAposy = 60;
        this.shortAposy2 = height - 70;
        //moneysupply curve
        this.moneySposx = width/2;
        this.moneySposy = height-60;
        this.moneySposy2 = 60;



    }
    show()
    {
        stroke(255);
        line(this.posx, this.posy, this.posx2, this.posy);
        stroke(255);
        line(this.posx, this.posy, this.posx, this.posy2);

        //aggregate
        line(this.shortAposx, this.shortAposy, this.shortAposx2, this.shortAposy2);

        //Moneysupply
        line(this.moneySposx, this.moneySposy, this.moneySposx, this.moneySposy2);

        textSize(30);
        stroke(0);
        fill(0,150, 150);
        
        text("Money Demand vs Money Supply", width/2, 30);
        fill(255, 0,0);
        stroke(255,0,0);

        textSize(20);
        text("Quantity of Money", this.posx2 - 60, this.posy + 30);

        textSize(20);
        textAlign(CENTER, CENTER);
        translate(this.posx - 90, this.posy2 + 90);

        rotate(3 * HALF_PI);
        text("Interest Rate", this.posx, this.posy2);

    }


    
    MS()
    {   
    if(Discount){
        //increase in discount rate leads to decrease in AD
        if(this.moneySposx < this.posx2 && this.moneySposx > this.constant)
        {
            this.moneySposx -= slider.value();
        }
        else if(this.moneySposx >= width && slider.value() > 0)
        {
            this.moneySposx -= slider.value();
        }
        else if(this.moneySposx <= this.constant && slider.value() < 0)
        {
            this.moneySposx -= slider.value();
        }
        
    }else if(Purchase)
    {
        //omo purchase leads to increase in money supply, thus increase in AD
        if(this.moneySposx < this.posx2 && this.moneySposx > this.constant)
        {
            this.moneySposx += slider.value();
        }
        else if(this.moneySposx >= width && slider.value() > 0)
        {
            this.moneySposx += slider.value();
        }
        else if(this.moneySposx <= this.constant && slider.value() < 0)
        {
            this.moneySposx += slider.value();
        }
    }
    else if(Reserve)
    {
        if(this.moneySposx < this.posx2 && this.moneySposx > this.constant)
        {
            this.moneySposx -= slider.value();
        }
        else if(this.moneySposx >= width && slider.value() > 0)
        {
            this.moneySposx -= slider.value();
        }
        else if(this.moneySposx <= this.constant && slider.value() < 0)
        {
            this.moneySposx -= slider.value();
        }
    }
    else if(Sell)
    {
        // omo selling leads to decrease in money supply, thus decrease in AD 
        if(this.moneySposx < this.posx2 && this.moneySposx > this.constant)
        {
            this.moneySposx -= slider.value();
        }
        else if(this.moneySposx >= width && slider.value() > 0)
        {
            this.moneySposx -= slider.value();
        }
        else if(this.moneySposx <= this.constant && slider.value() < 0)
        {
            this.moneySposx -= slider.value();
        }
    }
}

}