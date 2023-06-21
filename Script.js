function Parser() {
		//variable for parsing
		let parsedCode;
		//Extract the code in textarea
		let code=document.getElementById('code').value;

		//Parsing the code
		//replace the '(' from code
		parsedCode=code.replace("(","");
		//replace the ')' and ';' from parsedCode
		parsedCode=parsedCode.replace(");","");

		//split 'write' from code
		parsedCode=parsedCode.split("write");

		//print the output
		let output=document.getElementById('output').innerHTML=parsedCode[1];
	}
