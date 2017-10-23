function Thing(pic, x, y, picWidth, picHeight) {
var img = new Image();
img.src = pic;    
this.x=x;
this.y=y;
this.picWidth=picWidth;
this.picHeight=picHeight;

    

this.getPic = function(){
        return img;
    }
this.getX = function(){
        return this.x;
    }
this.getY = function(){
        return this.y;
    }
this.getPicWidth = function(){
        return this.picWidth;
    }
this.getPicHeight = function(){
        return this.picHeight;
    }

}