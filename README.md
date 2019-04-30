# Lab4 Foco Meal Board
## CS52 with Tim Tregubov April 2019
Sheppard Somers

# Goal 
Create a CRUD application for foco meal hacks to share your favorite meal combinations at foco.  

# Tech
Uses the react/redux etc. [starterpack](https://github.com/dartmouth-cs52-19S/starterpack-sheppardrs) that I created. 

# Process
I used the basic CRUD structure to create a little posting board about foco meal hacks, like fancy sandwiches or special food combos.

## Did not work
Using redux state for editing, instead of using a local state. This had a coupel hickups, including not being able to reset the post state in time, and it showing up on the add new page, the state not actually being edited, and the state not being shown. So basically everything. 

## Worked 
Eventually, by adding a clearPost action and reducer that set each piece of post to '' allowed it to work. I did have to access state in my actions to send the new post or edited post along to the server. There was some hesitation from stackoverflow about doing this, but their concern seemed to lie especially with changing, and I was just reading. It seemed silly that they would not want you to use the redux state in your action thunks. I chose to do it this way so that I could reuse the Create component for both creating a new meal and for editing a meal. This ended up working out super well in the end, making adding editing a breeze and helping styling go quicker. 

# Sources
As with any assignment my main source of information was the assignment and class. I also consulted Regina Yan, stackoverflow and csstricks. Other sites are also specifically listed in the code when I copied some code. The style inspiration is from [The Nerd Writer](http://thenerdwriter.net/) and [The Outline](https://theoutline.com/).