# My Farm Project!
This Project I was utilizing my JavaScript skills. Once you click on the animal in the farm, it will move to a random position on the screen and play an audio of the animal you clicked. For example, if you click on the dog, it will move to a random position on the farm and bark!

**Link to project:** https://kordellatimer.github.io/farm

![alt tag]("/images/03 copy.jpg")

## How It's Made:

**Tech used:** HTML, CSS, JavaScript/JQuery

HTML: I used a simple setup. One Section with div's inside. I created 5 div's that I used for the Animals template.
CSS: Set the background of the section as a nice cartoon farm picture. Then I set the background of the div's to the image of the animal. I had to create a box for each div and space them out accordingly.
JavaScript: This is where the magic is! I added an event listener to each div. Once clicked I created an audio file, and inserted the correct audio for the animal. Then I created a function to with the Math.random method to first select a random spot on the DOM. Then to update the div's position with Top and Left.

## Optimizations
*(optional)*

My next addition to this project is to postion the animals around the farm to make it resemble what an actual farm my look like.

## Lessons Learned:

I learned how to create and play an audio file using JavaScript and JQuery. I also have a better understanding of the JavaScript syntax

<!-- ## Examples:
Take a look at these couple examples that I have in my own portfolio: -->
