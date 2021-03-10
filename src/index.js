module.exports = function reverse (n) {
    let m = ''
    n+=''
  for(let i = n.length; i > -1; i--){
      if(n.charAt(i)!='-'){
         m += n.charAt(i);
      }
  }
  return(m);
}
