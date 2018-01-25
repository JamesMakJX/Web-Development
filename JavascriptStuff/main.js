/*

	var numbers = [33,65,23,25,62,234];


	//for and while loops
	for(var i = 0; i < numbers.length; i++){
		//console.log(numbers[i]);
	}

	var i = 0;

	while(i < 10){
		//console.log(i);
	}


	//if else statements
	var var1 = 3;
	var var2 = 1 + 2;
	if(var1 == or != var2 && or || var1 == 3){
		//console.log('True');
	} else{
		//console.log('False');
	}


	//switch
	var fruit = 'apple'

	switch(fruit){
		case "banana":
			alert('I hate bananas');
			break;
		case "apple":
			alert("I love apples");
			break;
		case "orange":
			alert('Oranges are okay');
			break;
		default:
			alert('I love all other fruits');
			break;
	}

	//Object Literal
	var person = {
		firstName: 'James',
		lastName: 'Mak',
		age: 19,
		children: ["q", 'w', 'e', 'r', 't', 'y'],
		address: {
			street: '2 Lorong M Telok Kurau',
			city: 'Singapore',
			state: 'Singapore'
		},
		fullName: function(){
			return this.firstName +" "+this.lastName
		}
	}

	//console.log(person.children[0]);
	//console.log(person.address.street);
	//console.log(person.fullName());

	//Object Constructor

	var apple = new Object();
	apple.color = 'red';
	apple.shape = 'round';

	apple.describe = function(){
		return 'An apple is '+this.color+'and '+this.shape;
	}
	//console.log(apple.describe())

	//Constructor Pattern (AKA CLASSES IN PYTHON)
	function Fruit(name, color, shape){
		this.name = name;
		this.color = color;
		this.shape = shape;

		this.decribe = function(){
			return "A "+this.name+"is "+this.color+'and '+this.shape;
		}
	}

	var apple = new Fruit('apple', 'red', 'round');

	var melon = new Fruit('melon', 'green', 'round');

	//console.log(melon.describe())


	//array of objects
	var users = [
	{
		name: 'James Mak',
		age: 19

	},
	{
		name: 'Mak James',
		age: 91
	}
]
	
	//console.log(users[0].name);

	*/

	//event handling onclick
	function doClick(){
		var heading = document.getElementById('heading')
		heading.innerHTML = 'THIS CHANGED BECAUSE YOU CLICKED THAT BUTTON DOWN THERE WTF U SHITTER'
	}

	function showDate(){
		var time = document.getElementById('time');
		time.innerHTML = Date()
	}

	function clearDate(){
		var time = document.getElementById('time');
		time.innerHTML = ''
	}

	function changeBackground(x){
		var body = document.getElementById('body');
		body.style.backgroundColor = x.value;
	}
	
	function validate(){
		var firstName = document.forms['myForm']['firstName'].value;
		if(firstName == null || firstName ==''){
			alert('First name is required');
			return false;
		}
		if(firstName.length < 4){
			alert('First name is too short');
			return false;
		}

	}