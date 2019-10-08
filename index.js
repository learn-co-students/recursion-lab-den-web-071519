function reverse(str){
    if(str.length > 1){
		let substring = str.slice(0, str.length-1)
		joy.push(str[str.length - 1])
        return reverse(substring) 
    } else {
        joy.push(str[0])
    }
return joy.join("")
}