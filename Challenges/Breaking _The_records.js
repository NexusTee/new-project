// Complete the breakingRecords function below.
function breakingRecords(scores) {
    var min = scores[0];
    var max = scores[0];
    
    var x = 0;
    var y = 0;
    
    for(var score of scores){
        if(score<min){
            min = score ;
            x ++;
        }
        if(score > max){
            max = score;
            y++
        }
    }
    
        return [y,x];
    }