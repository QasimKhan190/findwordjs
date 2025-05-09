paragraph=prompt("enter paragraph").toLowerCase()
word=prompt("enter word to find").toLowerCase()
let count = 0;
let words = paragraph.split(' ');
for (let i = 0; i < words.length; i++) {
      if (words[i] === word) {
        count++;
      }
}
  console.log(count);
  
  