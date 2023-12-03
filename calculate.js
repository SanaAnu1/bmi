function calculate(){
    a=Number(a.value)
    b=Number(b.value/100)

    bmi=Math.round(Number(a/(b**2)))
    if(bmi<18.5){
    alert(bmi+ " Under Weight")
}
else if(bmi<=25){
    alert(bmi+" Normal Weight")

}
else if(bmi<=29.9){
    alert(bmi+ " Over Weight")

}
else if(bmi<=100){
    alert(bmi+ " Obesity")

}

else{
    alert("Refresh the page")
}
}