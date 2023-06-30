(() => {

    // aplicando el principio de responsabilidad única

    type Gender = 'M'|'F';

    interface IPerson {
        birthdate : Date;
        gender    : Gender;
        name      : string;
    }

    class Person {
        public birthdate: Date;
        public gender   : Gender;
        public name     : string;

        constructor({ name, gender, birthdate }: IPerson ){
            this.name      = name;
            this.gender    = gender;
            this.birthdate = birthdate;
        }
    }


    interface IUser {
        email     : string;
        role      : string;
    }

    class User {      
        public email: string;
        public role : string;
        public lastAccess: Date;

        constructor({
            email,
            role,
        }: IUser ) {
            this.lastAccess = new Date();
            this.email = email;
            this.role  = role;
        }

        checkCredentials() {
            return true;
        }
    }


    interface ISettings {
        lastOpenFolder   : string;
        workingDirectory : string;
    }

    class Settings {
        public workingDirectory: string;
        public lastOpenFolder  : string;

        constructor({
            workingDirectory,
            lastOpenFolder,
        }: ISettings ) {
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder   = lastOpenFolder;
        }
    }

    interface IUserSettings {
        birthdate        : Date;
        email            : string;
        gender           : Gender;
        lastOpenFolder   : string;
        name             : string;
        role             : string;
        workingDirectory : string;
    }

    class UserSettings {
        public person : Person;
        public user: User;
        public settings: Settings;

        constructor({name,email,gender,role,birthdate,workingDirectory,lastOpenFolder}:IUserSettings){
            this.person = new Person({name,gender,birthdate});
            this.user = new User({email,role});
            this.settings = new Settings({workingDirectory,lastOpenFolder});
        }
    }

    const userSettings = new UserSettings({
        birthdate: new Date('1985-10-21'),
        email: 'fernando@google.com',
        gender: 'M',
        lastOpenFolder: '/home',
        name: 'Fernando',
        role: 'Admin',
        workingDirectory: '/usr/home',
    });

    console.log({ userSettings });


})();

 