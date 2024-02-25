const form = document.getElementById('form');
const button = document.getElementById('button');
const output = document.getElementById('output');


// Converter function
const convertToRoman = num => {

    // The references to iterate on
    const references = [
        ['M', 1000],
        ['CM', 900],
        ['D', 500],
        ['CD', 400],
        ['C', 100],
        ['XC', 90],
        ['L', 50],
        ['XL', 40],
        ['X', 10],
        ['IX', 9],
        ['V', 5],
        ['IV', 4],
        ['I', 1],
    ];

    // Initializing an empty array...
    const result = [];

    // Iterating on references
    references.forEach((arr) => {

        // Eg. 1200 >= 1000
        while(num >= arr[1]){

            // result = ['M']
            result.push(arr[0]);
            // 1200 - 1000 (next step, num = 200, and so on until achieve ['M', 'C', 'C'])
            num -= arr[1];
        }
    });

    // From ['M', 'C', 'C'] to "MCC"
    return result.join('');
}

// VALIDATION
const isValid = (str, int) => {

    // Initalizing an empty string...
    let errorText = '';

    // Handling an empty input, and a "e" (which is considered a number)
    if(!str || str.match(/[e]/g)) {
        errorText = 'Please enter a valid number.';
        
        
    // Handling a float number (instead of a integer)
    } else if (str.match(/[.]/g)) {
    errorText = 'The number must be an integer.';

    // Handling a "0 or less" number
    } else if (int < 1) {
        errorText = 'The number must be between 1 and 3999.';

    // Handling a number greater than 3999
    } else if (int > 3999) {
        errorText = 'The number must be between 1 and 3999.';
    
    // If there are no errors, return TRUE
    } else {
        return true;
    }

    // Setting the <output> = to errorText
    output.innerText = errorText;

    // Adding class 'alert' to <output>
    output.classList.add('alert');

    // Returning FALSE because of some error
    return false
};

// This function allows the user to test more inputs
const clearOutput = () => {
    output.innerText = '';
    output.classList.remove('alert');
};


form.addEventListener('submit', e => {
    // Preventing default behavior from <form>
    e.preventDefault();
    updateUI();
});


// Setting the button functionality
button.addEventListener('click', () => {
    updateUI();
});


const updateUI = () => {
    const input = document.getElementById('input').value;
    // Converting the input (originally a string) to a number
    const number = parseInt(input);

    // Displaying the <output>
    output.classList.remove('hidden');

    clearOutput();

    // If the input is valid...
    if(isValid(input, number)) {
        // ... convert it to roman!
        output.innerHTML = convertToRoman(number);
    }
};