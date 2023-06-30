(()=>{

    type Gender = 'M' | 'F';

    class Person {

        constructor(public name:string,public gender:Gender,public birthDate:Date){}
        
    }

    const newPerson = new Person('jose','M',new Date);

    console.log(newPerson);
    
})()