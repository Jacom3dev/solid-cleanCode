(()=>{

    //* Aplicar el principio de responsabilidad única
    //* Priorizar la composición frente a la herencia

    type HtmlType = 'input'|'select'|'textarea'|'radio';
   
    class HtmlElement {
        constructor(
            public id: string,
            public type: HtmlType,
        ) {}
    }

    class InputAttributes{
        constructor(
            public value: string,
            public placeholder: string,
        ) {}
    }

    interface IInputEvents {
        id: string;
        type: HtmlType;
        value:string;
        placeholder:string;
    }
    class InputEvents{
        public htmlElement:HtmlElement;
        public inputAttributes:InputAttributes;

        constructor({ value, placeholder, id ,type}:IInputEvents) {
            this.htmlElement = new HtmlElement(id,type);
            this.inputAttributes = new InputAttributes(value,placeholder);
        }

        setFocus() {};
        getValue() {};
        isActive() {};
        removeValue() {};
    }


    //? Idea para la nueva clase InputElement

    const nameField = new InputEvents({value:'Jose',placeholder:'name',id:'1234',type:'textarea'});

    console.log({ nameField });

})()