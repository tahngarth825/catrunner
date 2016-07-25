Live Link: https://tahngarth825.github.io/catrunner/

##Game Features
Cat Runner is inspired by Frogger. Press "w" to move up, "s" to move down, "a" to move left, and "d" to move right. Avoid the cars and reach the prize at the top of each level! Avoid the cars! Cars cannot spawn on grass -- only on streets.

There are currently three levels, each increasing in difficulty. Later levels have more cars and less safe grass.

###First Level
![image of first level](http://res.cloudinary.com/tahngarth825/image/upload/v1468627194/first_level_end_wgu0jk.png)

###Second Level
![image of second level](http://res.cloudinary.com/tahngarth825/image/upload/v1468627023/second_level_start_il6lj4.png)

##Technical Features
Cat Runner utilizes inheritance to DRY up code. The Car and Cat objects inherit from the MovingObject object. Unfortunately, this process overrides child prototype methods, so this forced me to define object methods on the Cat parent constructor function. There are instances where I had to deep clone arrays because the arrays in my constants file was being overridden. Most game constants are stored in the constants file to allow for flexible game modification and facilitate bug-finding.
