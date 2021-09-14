/*
Access the form element using the method getElementById()
The following URL will help you to do this:
https://www.javascript-coder.com/javascript-form/getelementbyid-form/
*/
var Length = document.getElementById('txtLength');
var Width = document.getElementById('txtWidth');
var Height = document.getElementById('txtHeight');



/*
Also store the tdCost id element as a variable.
The following link will help you to do this:
https://www.w3schools.com/jsref/met_document_getelementbyid.asp
*/
var Cost = document.getElementById('tdCost');



/*
select the "Calculate Cost" and "Reset" buttons by
getting their elements by ID. Add an event handler code to an
onclick event. The Calculate Cost button should run the function
that calculates the costs and the Reset button should run the
function that resets the text boxes and output.
The links below will help you to do this:
https://www.w3schools.com/js/js_htmldom_document.asp
https://www.w3schools.com/jsref/event_onclick.asp
*/
document.getElementById('btnReset').onclick = resetInputs;
document.getElementById('btnCalcCosts').onclick = calcCosts;


/*
Create a function that calculates the surface area.

Get the value of each variable you created at the beginning
and store each value as a new variable.
https://www.javascript-coder.com/javascript-form/getelementbyid-form/

Test whether the user has entered a number in
the text boxes and return an alert if non-numbers are entered. If
numbers have been entered into the text boxes, calculate the surface area
and return the result. You can use the following links to help you with this.
https://www.w3schools.com/js/js_functions.asp
https://www.w3schools.com/jsref/jsref_isNaN.asp
*/
function surfaceArea(){
	var length = new Number(Length.value);
	var width = new Number(Width.value);
	var height = new Number(Height.value);
                
}


/*
Create a function that calculates the length of the edges
and returns the result.
You can use the following link to help you with this.
https://www.w3schools.com/js/js_functions.asp
*/

function edges(){
	var edges= new Number(Edges.length);
	
}

/*
At the beginning of your function get the value of each variable you
created at the beginning of your program and store each value as a new variable.
https://www.javascript-coder.com/javascript-form/getelementbyid-form/
*/

function value(){
	var length = new Number(Length.value);
	var width = new Number(Width.value);
	var height = new Number(Height.value);

 


/*
create a function that stores the results of the previous functions
as variables. Use a conditional statement to determine the thickness
of the glass and calculate the cost of the glass. You can use the URL
below to help you do this:
https://www.w3schools.com/js/js_if_else.asp

Calculate the cost of the glue, labour, sub-total, tax and total cost.

Use the .toFixed() method to round the result to two decimal places.
You can use the URL below to help you do this:
https://www.w3schools.com/jsref/jsref_tofixed.asp
*/
function calcCosts() {
	var costGlue = new Number(CostGlue.value);
	var labour = new Number(Labour.value);
	var sub-total = new Number(sub-total.value);
	var tax = new Number(tax.value);
	var total-cost= new Number(total-cost.value);
	
function myFunction() {
  var num = value;
  var n = num.toFixed(2);
  
}


/*
Create a function named resetInputs to reset the inputs (Length, Width, Height).
Use this link to help https://www.w3schools.com/js/tryit.asp?filename=tryjs_form_reset
*/

function resetInput() {
	var Length = new Number(Length.reset);
	var Width = new Number(Width.reset);
	var Height = new Number(Height.reset);

}

