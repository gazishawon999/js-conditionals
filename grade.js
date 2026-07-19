//Build a grading system using a marks variable (A+, A, B, C, F) — it must have at least 5 condition branches.

const marks = 77;

if( marks > 80){
    console.log("The CGPA is : A+");
}
else if ( marks > 70){
    console.log("The CGPA is : A");
}
else if( marks > 60){
    console.log("The CGPA is : B");
}
else if( marks > 50){
    console.log("The CGPA is : C");
}
else 
    console.log("The CGPA is : F");