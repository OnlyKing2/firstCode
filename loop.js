var fish = ["Cod", "Trout", "Sword"]
function fishX () {
for (i = 0, len = fish.length, text =
    ""; i < len; i++) {
    text += "On the menu today we have:" +  fish[i] + "\n";}
    console.log(text)
}

fishX()
