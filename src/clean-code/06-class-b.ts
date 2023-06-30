(() => {

    // No aplicando el principio de responsabilidad única

    interface IPerson {
        name:string;
        gender: Gender;
        birthdate:Date;
    }
    type Gender = 'M'|'F';

    class Person {
        public name:string;
        public gender:Gender;
        public birthdate:Date;

        constructor({name, gender,birthdate}:IPerson){
            this.name = name;
            this.gender = gender;
            this.birthdate = birthdate;
        }
    }


    interface IUser extends IPerson {
        email:string;
        role:string;
    }

    class User extends Person {
        
        public lastAccess: Date;
        public email: string;
        public role: string;

        constructor({email, role, name,gender,birthdate}:IUser) {
            super( {name, gender, birthdate} );
            this.lastAccess = new Date();
            this.email = email;
            this.role = role;
        }

        checkCredentials() {
            return true;
        }
    }

    interface IUserSettings extends IUser {
        workingDirectory:string;
        lastOpenFolder:string;
    }

    class UserSettings extends User {
        public workingDirectory: string;
        public lastOpenFolder  : string;
        
        constructor({workingDirectory,lastOpenFolder,email,role,name,gender,birthdate }:IUserSettings) {
            super({email, role, name, gender, birthdate} );
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder   = lastOpenFolder ;
        }
    }


    const userSettings = new UserSettings({
        workingDirectory: '/usr/home',
        lastOpenFolder:'/home',
        email:'fernando@google.com',
        role:'Admin',
        name:'Fernando',
        gender:'M',
        birthdate:new Date('1985-10-21')
    });

    console.log({ userSettings });


})();