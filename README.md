# Inspirational Quotes Generator

This JavaScript code generates random inspirational quotes based on predefined categories and words. The quotes aim to inspire and motivate individuals by emphasizing positivity, perseverance, commitment, and grit.

## Functionality

The code consists of a function `randomNumber(num)` that generates a random integer between 0 (inclusive) and a given number `num` (exclusive).

The inspirational quotes are stored in an array `inspirationalQuotes`, and constant words for quotes are organized into an object `quoteWords` with four categories: positive, process, commit, and grit.

A `for...in` loop iterates through the `quoteWords` object, selecting a random word from each category using the `randomNumber` function and generating a custom message based on the chosen word. The generated quotes are pushed into the `inspirationalQuotes` array.

The quotes are then formatted into a single string using the `join()` method and printed to the console.

## Usage

To use this code with Node.js, follow these steps:

1. Ensure you have Node.js installed on your system. If not, download and install it from [Node.js website](https://nodejs.org/).
2. Save the provided JavaScript code into a file, for example, `script.js`.
3. Open a command prompt or terminal.
4. Navigate to the directory where you saved `script.js`.
5. Run the code by typing `node script.js` in the command prompt and pressing Enter.

This code was developed using Visual Studio. Upon execution, the code will generate a random inspirational quote and print it to the console. You can integrate this functionality into your projects to provide users with uplifting messages.


## Example Output

Here is an example output of the generated inspirational quotes:
> There is no such thing as too little time.
> Trust the process. Be kinder to yourself.
> Commit to bettering your dreams.
> When things get tough, your courage will pull you through.


Feel free to modify the code to suit your needs or integrate it into your projects to provide users with inspirational messages.


