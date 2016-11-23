var directions = [[-1,0],[0,1],[1,0],[0,-1]];

function fu(m, from, to) {

	console.log(...from);
	
  if (m[from[0]][from[1]]) {  
  	return false;
  } else if (from[0] === to[0] && from[1] === to[1]) {
  	return true;
  }
  
  else {
  
  	for (var i = 0; i < 4; ++i) {
    	var newX = from[0] + directions[i][0];
      var newY = from[1] + directions[i][1];
      
      console.log(newX, newY);
      
      if (newX < m.length && newX > 0 && newY < m.length && newY > 0) {
				if (fu(m, [newX, newY], to)) {
      			return true;
      	} else {
      		  m[newX, newY] = 1;        
      	}
      }
    }
  }
  
}

var arr = [[1,0,0,0],
				   [0,1,0,0],
           [0,1,0,0],
           [0,0,0,1]];

alert(fu(arr, [0,3], [3,0]));
