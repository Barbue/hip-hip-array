/* This assignment will give you some practice with creating arrays and using their methods. */


console.log("Challenge 1");
// ANY time you're asked to print something from the  array, do it with a loop, printing each item you're asked to print INDIVIDUALLY.
// 
// 
//
// Challenge 1
//
// Loop through the following array, console.logging out each value.
const students = [
    'Tre',
    'Sonny',
    'Crystal',
    'Ilyas',
    'Greg',
    'Fernando',
    'Timothy',
    'Patrick',
    'Steve',
    'Jimothy',
    'Pat',
    'Arnold',
    'Andy'
  ];
  // Challenge 1 Code


  let index = 0;

  while(index < students.length){
    console.log(students[index]);
    index++;
}



  console.log("\n");
  console.log("Challenge 2");
  // Challenge 2
  // Loop through the following array BACKWARDS, console.logging out each value. 64 should be printed first and 100 last.
  const grades = [100, 80, 110, 75, 83, 64];
  //Challenge 2 Code


  let i= 0;
  grades.reverse();
  
  while(i < grades.length){
  console.log(grades[i]);
  i++;
}

  


  console.log("\n");
  console.log("Challenge 3");
  // Challenge 3
  // Console.log out only the even numbers in the following array.
  const positiveNumbers = [5, 2, 13, 17, 4, 102, 3000];
  // Challenge 3 Code

positiveNumbers.pop();
  positiveNumbers.shift();
  positiveNumbers.splice(1,2);
 

  let loopy = 0;

  while(loopy < positiveNumbers.length){
    console.log(positiveNumbers[loopy]);
    loopy++
  }



  console.log("\n");
  console.log("Challenge 4");
  // Challenge 4
  // Console.log out the even numbers in the following array, INCLUDING the negative ones. There should be four total printings.
  const mixedSignNumbers = [3, 15, 14, -2, -3, -8, -103, 4];

  // Challenge 4 Code

  mixedSignNumbers.shift();
  mixedSignNumbers.splice(0,1);
  mixedSignNumbers.splice(2,1);
  mixedSignNumbers.splice(3,1);
  console.log(mixedSignNumbers);

  let loopy1 = 0;
  while(loopy1 < mixedSignNumbers.length){
    console.log(mixedSignNumbers[loopy1]);
    loopy1++
}
 



  
  console.log("\n");
  console.log("Challenge 5");
  // Challenge 5
  // Remove two values from the beginning and one value from the end of the following array, simply by deleting them in the following line. Then console.log out each value individually.
  const symmetricalCapitals = ['A', 'H', 'I', 'M', 'O', 'T', 'U', 'V', 'W', 'X', 'Y'];
  // Challenge 5 Code

  symmetricalCapitals.pop();
  symmetricalCapitals.shift();
  symmetricalCapitals.shift();

  let ir = 0;

  while(ir < symmetricalCapitals.length){
    console.log(symmetricalCapitals[ir]);ir++
}
    


  console.log("\n");
  console.log("Challenge 6");
  // Challenge 6
  // Add a value (your choice!) to the start of the following array and two values (of your choice) to the end simply by adding them in the following line, and then console.log out each value individually.
  const fibonacciNumbers = [1, 1, 2, 3, 5, 8, 13];
  // Challenge 6 Code

  fibonacciNumbers.unshift("dog");
  fibonacciNumbers.push("cat","wolf");

  let ire = 0;

 while(ire < fibonacciNumbers.length){
console.log(fibonacciNumbers[ire]);ire++
}

  
  


  console.log("\n");
  console.log("Challenge 7");
  // Challenge 7
  // Make a NEW array with 5 values of your choice, using the same syntax as the array creation from the previous 6 challenges; that is, every value should be placed within the square brackets.  Now console.log out each value individually.
  // Challenge 7 Code

const myNumbers = ["bobcat","wolf","bear","racoon","otter","fox"];

  let index1 = 0;

  while(index1 < myNumbers.length){
    console.log(myNumbers[index1]);
    index1++
}





  console.log("\n");
  console.log("Challenge 8");
  // Challenge 8
  // Make a new EMPTY array and fill it with five values of your choice using BOTH .push AND .unshift, and then console.log out each value individually.
  const emptyArray = [];
  // Challenge 8 Code

const emptyArray1 = [];

emptyArray1.unshift("dog",25,"cat",35,"wolf");
emptyArray1.push(45,"bird",55,"rabbit");

let rad = 0;

while(rad < emptyArray1.length){
console.log(emptyArray1[rad]);rad++
}




  console.log("\n");
  console.log("Challenge 9");
  // Challenge 9
  // Loop through the `students` array from Challenge 1, starting at index 3 and ending at index 10 (INCLUSIVE), logging out each value individually.
  // Challenge 9 Code

const students1 = [
    'Tre',
    'Sonny',
    'Crystal',
    'Ilyas',
    'Greg',
    'Fernando',
    'Timothy',
    'Patrick',
    'Steve',
    'Jimothy',
    'Pat',
    'Arnold',
    'Andy'
  ];
  
  let copydeletedvariables = students1.splice(3,9);
  let ind = 0;
  
    while(ind < copydeletedvariables.length-1){
    console.log(copydeletedvariables[ind]);
    ind++;
    }
  
  
  console.log("\n");
  console.log("Challenge 10");
  // Challenge 10
  // Loop through the `students` array from Challenge 1, making a COPY of the array , starting at index 3 and ending at index 10 (INCLUSIVE). This is very similar to string building; create a new array, loop through the old one, and put values from the original in the new one. Then log out each value of the copy indivudally.
  // Do NOT use slice, you will be using that for the next challenge!
  // Challenge 10 Code

const students2 = [
    'Tre',
    'Sonny',
    'Crystal',
    'Ilyas',
    'Greg',
    'Fernando',
    'Timothy',
    'Patrick',
    'Steve',
    'Jimothy',
    'Pat',
    'Arnold',
    'Andy'
  ];
 
  let copydeletedvariables1 = students2.splice(3,9);
  let ind1 = 0;

    while(ind1 < copydeletedvariables1.length-1){
    console.log(copydeletedvariables1[ind1]);
    ind1++;}

    let newArray = [1,2,3,4];
    let ind2 = 0;

    students2.concat(newArray);
    console.log(students2.concat(newArray));
    let allArrays = students2.concat(newArray);
    
    // Wasn't sure if the left over values of original were wanted or the index 3-index 10 from originals were wanted, so i've included both. //
    // copydeletedvariables1.concat(newArray)
    // console.log(copydeletedvariables1.concat(newArray))
    // let allArrays = copydeletedvariables1.concat(newArray)

    while(ind2 < allArrays.length){
      console.log(allArrays[ind2]);
      ind2++
    }




  console.log("\n");
  console.log("Challenge 11");
  // Challenge 11
  // Make a COPY of the `students` array *using .slice*, starting at index 3 and ending at index 10 (INCLUSIVE), then log out each value of the copy individually. THEN log out each value of the original array. Notice that the original array didn't get any values taken out of it, because `slice` does NOT modify the original array.
  // Challenge 11 Code

students3 = [
        'Tre',
        'Sonny',
        'Crystal',
        'Ilyas',
        'Greg',
        'Fernando',
        'Timothy',
        'Patrick',
        'Steve',
        'Jimothy',
        'Pat',
        'Arnold',
        'Andy'
      ];
      
    
      let copy = students3.slice(3,11);
      let index3 = 0;

      while(index3 < copy.length){
        console.log(copy[index3]);
        index3++;
      }

      console.log("Original array: ");
      console.log(students3);

  



  console.log("\n");
  console.log("Challenge 12");
  // Challenge 12
  // Pull the items at indices 4-6 (inclusive) from the following array using .splice (NOT .slice!), then console.log out each item from the ORIGINAL array. Note that .splice DOES change the original array.
  const dinosaurs = ['Velociraptor', 'T-Rex', 'Stegosaurus', 'Triceratops', 'Dimetrodon', 'Allosaur', 'Spinosaurus', 'Gigantosaur']
  // Challenge 12 Code
  
  dinosaurs.splice(4,3);
  console.log(dinosaurs);

  let loopy3 = 0;

  while(loopy3 < dinosaurs.length){
    console.log(dinosaurs[loopy3]);loopy3++
}
  

  
  
  
  console.log("\n");
  console.log("Challenge 13");
  // Challenge 13
  // Use .join to change the dinosaur strings from the above array into one string with a '*' string as the "separator". Then console.log out that string.
  // Challenge 13 Code

const dinosaurs2 = ['Velociraptor', 'T-Rex', 'Stegosaurus', 'Triceratops', 'Dimetrodon', 'Allosaur', 'Spinosaurus', 'Gigantosaur']

  dinosaurs2.join(" * ");
  console.log(dinosaurs2.join(" * "));
  let dino3 = dinosaurs2.join(" * ");
  let loopy4 = 0;

  while(loopy4 < dino3.length){
    console.log(dino3[loopy4]);
    loopy4++;
}



  
  console.log("\n");

  console.log("Challenge 14");
  // Challenge 14
  // Use .reverse to reverse the dinosaur array and then log out the original array. .reverse DOES change the original array.
  // Challenge 14 Code

 dinosaurs3 = ['Velociraptor', 'T-Rex', 'Stegosaurus', 'Triceratops', 'Dimetrodon', 'Allosaur', 'Spinosaurus', 'Gigantosaur']

  dinosaurs3.reverse();
  console.log(dinosaurs3.reverse());
  console.log("Original: ");
  console.group(dinosaurs3);

  let loopy5 = 0;
  while(loopy5 < dinosaurs3.length){
  console.log(dinosaurs3[loopy5]);loopy5++
}



  
  console.log("\n");
  console.log("Challenge 15");
  // Challenge 15
  // Create two new arrays.
  // Use .concat to combine those two arrays into a NEW array you make (.concat RETURNS an array). Then console.log out each value of that new array individually. Now console.log both the primaries and secondaries arrays, noting that .concat does NOT mutate the original arrays.
  // Challenge 15 Code

let doc1 = ["dog","cat",25,"rabbit"];
  let doc2 = ["There","Can","Be","Only",1];
  doc1.concat(doc2);
  //console.log(doc1.concat(doc2));
  let yep = 0;
  let nope = doc1.concat(doc2);

  while(yep < nope.length){
    console.log(nope[yep]);
    yep++
  }

  console.log("Original arrays: ");
  console.log(doc1);
  console.log(doc2);


  
