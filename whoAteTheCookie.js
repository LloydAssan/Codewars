8 kyu
Who ate the cookie?

function cookie(x){
  if (x === x.toString()){
    return "Who ate the last cookie? It was Zach!"
  }else if(x === Number(x)){
    return "Who ate the last cookie? It was Monica!"
  }else{
  return "Who ate the last cookie? It was the dog!"
  }
}
