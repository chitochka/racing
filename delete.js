function doscanaFunc(O_o){     
      /*dev*/
      myspan1.innerHTML = 'IndeX = <b>' + findSegment(position).index + '</b>';
       myspan2.innerHTML = 'position: <b>' + position.toFixed(0) +  '<b>';
      myspan3.innerHTML = 'speed = <b>' + speed/100 + '</b>';
      /*dev*/
      

      var dx = O_o.dx;
      var dt = O_o.dt;
     /* rucni zmena pruhu */
      if (keyLeft)
        playerX = playerX - dx;
      else if (keyRight)
        playerX = playerX + dx;


      if (keyFaster)
        speed = Util.accelerate(speed, accel, dt);
      else if (keySlower)
        speed = Util.accelerate(speed, breaking, dt);

      if ((fly.up ==true )|| (fly.down == true)) fly.f(fly);
      spanFLY.innerHTML = 'Vyska= <b>' + cameraHeight + "</b>"




    //  speed   = Util.limit(speed, 0, maxSpeed); // omezeni rychlosti, nejspis nepotrebujem
    //  playerX = Util.limit(playerX, -.9, .9);// Nepotrebujem     // dont ever let player go too far out of bounds


    // myspan.innerHTML = 'zrychl: <b>'+ zrychleni+'</b>';

};

      var startCas = 0
      mereniCasu = function(now){

        if (!startCas) startCas = now
        mainTimeS.innerHTML = 'Čas : <b> ' + Math.round((now - startCas)/10)/100 + '</b>'


      }
  // var gate = null;
  // meritko.onclick= function(e){
  //   indexForBrana = findSegment(position + Game.counter.distance2sek).index;   
  //   var rand = Math.floor(Math.random()*5);
  //   while (gate == rand){
  //     rand = Math.floor(Math.random()*5)
  //   }
  //   gate = rand
  //   segments[indexForBrana ].sprites.push({ source: imgElements.brana, offset: 0, gate: gate  }); 
  // };

var debug = false

fly.f = function(fly){
  if (fly.up==true ) cameraHeight =  cameraHeight +20;
  if (fly.down==true ) cameraHeight = (cameraHeight > 160)?   cameraHeight -20 : cameraHeight ;
};





//-------   s c o r e    -------------------------

var scoreOnline = document.getElementById('score-online');
scoreOnline.innerHTML = "P.S. shora je vzdy posl zaznam <div>"+
  "<span> Čas    </span> "+ 
  "<span> Projel </span> "+
  "<span> SMS  </span> "+
  "<span> $egm   </span> "+
  "<span> MaxČas </span> "+
"</div>";
showScoreOnline = function(data){
  var div = document.createElement('div');
  div.innerHTML =  "<span>" + data.time   + 
          "</span>  <span>" + data.projel + 
          "</span>  <span>" + data.smskuje+ 
          "</span>  <span>" + data.segm   + 
          "</span>  <span>" + data.maxReactTime + 
          "</span>";
  scoreOnline.insertBefore(div, scoreOnline.children[1])
}


var test ={
  st:[],
  end:[],
  pro:[],
}





    
/*  Dinamicke nastaveni tlacitek a jejich pozice podl-e poctu pruhu */

/*  MYKEYS = [49, 50, 51, 52, 53];;
    setKeyToChangeLine = function(arrKeys){
      var keys    = [],
          pocet   = arrKeys.length,
          width = 2/ pocet ,  //  interval (-1 ~ 1) = 2 / pocet pruhu / stred pruhu
          codeKey, 
          keyObject,
          position = [];

          (function(){
            for (var i = 0; i < pocet; i+=1) {
              position.push(
                Math.round((-1 + (i*width + width/2))*1000)/1000
              )
            };
            console.info(position)
          })();

      for (var i=0; i < pocet; i+=1) {
          codeKey = arrKeys[i];
          // position = -1 + (i*width + width/2);
          keys.push( { keys : codeKey, mode: "down", action: function(){ activeKey = position[i]; console.warn(activeKey) } } );
          keys.push( { keys : codeKey, mode: "up"  , action: function(){ activeKey = null; console.warn(activeKey) }         } );
      };
      return keys;
    }; 
*/



  /*
  background: function(ctx) {
  // background: function(ctx, background, width, height, layer, rotation, offset) {
    var rand = Math.floor(Math.random()*2);
    ctx.drawImage(sky,rand/2,0, width, (height/2) +10);
    return;
     /*  fon  
    rotation = rotation || 0;
    offset   = offset   || 0;

    var imageW = layer.w/2;
    var imageH = layer.h;

    var sourceX = layer.x + Math.floor(layer.w * rotation);
    var sourceY = layer.y
    var sourceW = Math.min(imageW, layer.x+layer.w-sourceX);
    var sourceH = imageH;
    
    var destX = 0; 
    var destY = offset;
    var destW = Math.floor(width * (sourceW/imageW));
    var destH = height;

    ctx.drawImage(background, sourceX, sourceY, sourceW, sourceH, destX, destY, destW, destH);
    if (sourceW < imageW) 
      ctx.drawImage(background, layer.x, sourceY, imageW-sourceW, sourceH, destW-1, destY, width-destW, destH);
   
  },*/