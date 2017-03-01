# ﻿John Lazzarini's submission for CSC 413 Assignment 2
#### https://github.com/SFSU-CSC-413/assignment-2-johnlazzarini
## Project introduction and overview
This application consists of a button that appears on the data page of the DroneDeploy application.  Clicking the button is supposed to download a PDF of the map.

My application is not quite working the way that the prompt had led me to believe that it should.

#### Making the button
HTML5 helpfully provides a \<button> element.
I simply replaced the contents in the body of the sample app with the following code:
```
<button id="pdf">Friendly button</button>
```

- Replaced the file argument in Lexer.java's main() method with a String assigned to args[0].

#### Changes made to meet requirement 2

- Added two lines ("VOid void" and "FLoat float") to the end of the tokens file.

<br>Running TokensSetup regenerates the Tokens and TokenTypes classes to add the functionality necessarry to support void and float tokens.

#### Changes made to meet requirement 3

- Added a private data member, private int lineNumber, to the Token class.
- Adjusted the Token class constructor to accommodate the new private member
- Adjusted all Token object constructor calls in Lexer.java to support the new constructor
definition -- of particular importance was the change to Token's newNumberToken() method, which now
returns the following: 
````
        return new Token(
          startPosition, endPosition,
          Symbol.symbol(number, Tokens.INTeger), source.getLineno()
        );
````
Note that the last argument, source.getLineno(), will now instantiate Token objects with
a private lineNumber datum assigned to the corresponding token's line number.

#### Changes made to meet requirement 4

- Removed the System.out.println() methods in SourceReader.java which output file information.
- Removed the output source code from Lexer.java's main() method and replaced it with
the following:

````
                System.out.printf("%-20s %-20s %-20s %s",
                  tok.toString(),
                  "Left: " + tok.getLeftPosition(),
                  "Right: " + tok.getRightPosition(),
                  "Line: " + tok.getLineNumber() + "\n");
                      
````
This "one-line" statement combines the output and formatting operations by itself.

#### Changes made to meet requirement 5
- Added a private StringBuilder sourceAsString data member to SourceReader.java -- a private String
could also have been used, but this method saves more memory.
- Modified the body of SourceReader.java's read() method to look like the following: 

````
if( nextLine != null ) {
     System.out.println( "READLINE:   " + nextLine);
     sourceAsString.append(lineno + ".  " + nextLine + "\n");

      } 
````

- read() now adds the line and linenumber of the current line to sourceAsString.
- Redefined SourceReader's toString method to return sourceAsString.toString().
- Redefined Lexer.java's toString method to return source's toString().
- Added a print statement to the end of the try-catch block in Lexer.java's main() method -- this calls its own toString method, which I redefined in the bulletpoint above in order to get around main's unwillingness to work with instance methods as a static method itself.
- Removed a null assignment that otherwise breaks the program.

## Instructions for compiling and executing as Jar

Generally, compiling and executing as a Jar will involve completion of the following instructions:

1) Identify the Main-Class that will serve as the entry point for the program.

2) Compile the project source code into Java bytecodes.

3) Generate the jar file.

4) Execute the program via the jar file.  Don’t forget to provide arguments!

### To run Lexer.java from console

```
echo Main-Class: lexer/Lexer.java > manifest.txt
javac lexer/*.java
jar cvfm Lexer.jar manifest.txt lexer/*.class
java -jar Lexer.jar factorial.x
```
Replace "factorial.x" with whatever file that you want to run as an argument to Lexer.java's main() method (simple.x, etc).

## Assumptions

This program assumes that the files that it analyzes will be "x files" -- it's specifically written to accommodate x filetype grammar and assumes that the user wouldn't try to input, say, a .java file.  I'm also, of course, assuming that all of the programming that was provided for me does what it's supposed to do.

## Implementation discussion

The UML graphic below describes the relationships between functions.  //add content to this section

![alt text](http://i.imgur.com/mu4hawB.png "Simple UML graphic")

This next graphic is much larger and contains implementation details for each class (data and members).

![alt text](http://i.imgur.com/qgIS5nR.png "Complex UML graphic")

## Results and Conclusions

This program meets the requirements of the spec and works as expected.  It successfully breaks programs down into lexicalaminolaphicalgraphics and displays the corresponding tokens alongside their line numbers.

There were a couple of things that I had a hard time with understanding -- one was the while loop in the main() method within in Lexer.java.  I had a hard time with understanding how it was possible for the program to end while involving an infinite loop with no obvious break case -- this was before I really understood the try-block that surrounded it.

Another issue that I had involved the fact that main() didn't want me to access the source member, since main is a static method. I had to use a hacky fix in order to get around it.

This was a good assignment though, I ended up learning a little bit more about how a program can be broken down into portions that a parser is able to interpret and understand.


#DroneDeploy
##John Lazzarini

#

### Initial Approach
Read the Tile documentation, as per the suggestion from the assignment prompt.


I'm going to take a quick refresher on web development fundamentals before I take on this project.  I want it to meet industry standards, so I've signed up for a Treehouse account to relearn the ropes.

###Plan of Attack

####1) Relearn some web development fundamentals. [x]
####2) Build the DroneDeploy "Hello, world!" and design the Frontend (whiteboarding) [x]
####2) Check out the DroneDeploy tile API* [x]
####3) Download the construction site sample and experiment with the newly repaired tile API documentation example. [x]
#####4) Find a way to add tiles to an invisible HTML canvas [ ]
#####5) Format the canvas into a coherent image [ ] 
#####6) Create a button that, when clicked, downloads the canvas as a pdf [ ]

(The documentation for tile had a couple of errors in it.  I wrote a forum thread about it and the issue was promptly resolved by a developer.)
