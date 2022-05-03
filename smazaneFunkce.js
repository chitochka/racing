/*   Uloziste  smazanych funkce   *//

smazal = {
	//  vytvari na canvasu horni listu s barvy red, seda, green 
	stats: function(parentId, id) { // construct mr.doobs FPS counter - along with friendly good/bad/ok message box

	    var result = new Stats();
	    result.domElement.id = id || 'stats';
	    element(parentId).appendChild(result.domElement);

	    var msg = document.createElement('div');
	    msg.style.cssText = "border: 2px solid gray; padding: 5px; margin-top: -5px; text-align: center; font-size: 1.5em;";
	    element(parentId).appendChild(msg);

	   var value = document.createElement('span');
	    value.innerHTML = "...";
	    msg.appendChild(value);
	 

	    setInterval(function() {
	      var fps   = result.current();
	      var ok    = (fps > 50) ? 'good   :-) '  : (fps < 30) ? 'bad   :-(' : 'uspokojeně';
	      var color = (fps > 50) ? '#40cc40'      : (fps < 30) ? 'red'       : 'gray';
	      var txt = (fps > 50)   ? '#0C280C'      : (fps < 30) ? '#330000'   : 'black';
	      value.innerHTML         = ok;
	      value.style.background  = txt
	      msg.style.background    = color;
	      msg.style.color = 'yellow';
	    }, 5000);
	    return result;
	  },
}