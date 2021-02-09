//process.stdout.write('\x07'); //Beep sound

//edge cases
//No numbers are provided
//An input is a negative number
//An input is not a number

const arguments = process.argv.slice(2) //slices both the path and script code

const seconds = arguments => { //timer function taking in the process argv arguments
  for (const seconds of arguments) { // for each time in the arguments loop
    if (seconds > 0 && typeof Number(seconds) === "number")  //if the time is > 0 and the input given is a number
      setTimeout(() => {//set timeout
        process.stdout.write('\x07') // beep noise in terminal
      }, seconds * 1000); //time given in arguments * 1000ms
  }
}


seconds(arguments)
