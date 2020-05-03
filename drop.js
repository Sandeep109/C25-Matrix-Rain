class Drops{
    constructor(){
        this.size = rand(10,30)
        this.y = rand(0,width);
        this.x = rand(0,height);
        this.text = getRT()
        this.uTime = rand(1)//update time
        this.update();
    }
    draw(){
        textSize(this.size)
        if(Math.random()>0.1){
            fill(37,219,173);
    }
        else
            fill(170,250,170);
            text(this.text,this.x,this.y)

    }

    update(){
        this.y+= this.size;
        
        if(this.y>height+80){
            this.y = rand(-80,this.size);
            this.x = rand(0,width);
        }
        this.text = getRT();
        this.draw();
    }
}

    function rand(min,max){
        return floor(random(min,max));
    }
        function getRT(){
            var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvexyz";
            return letters[rand(0,letters.length)]
        }