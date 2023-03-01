 
class Contact {
  constructor(firstName, lastName, address, city, state, zip, phoneNumber, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.city = city;
    this.state = state;
    this.zip = zip;
    this.phoneNumber = phoneNumber;
    this.email = email;
  }

  getFirstName(){
      return this.firstName;
  }
  getLastName(){
      return this.lastName;
  }
  getAddress(){
      return this.address;
  }

  getCity(){
      return this.city;
  }

  getState(){
      return this.state;
  }

  getZip(){
      return this.zip = zip;
  }

  getPhoneNumber(){
      return this.phoneNumber;
  }

  getEmail(){
      return this.email;
  }

  setFirstName(firstName) {
      const pattern = "^[A-Z][a-z]{2,}$";
      if (!pattern.test(firstName)) {
        throw new Error('Invalid first name: ' + firstName);
      }
      this.firstName = firstName;
    }
  
    setLastName(lastName) {
      const pattern = "^[A-Z][a-z]{2,}$";
      if (!pattern.test(lastName)) {
        throw new Error('Invalid last name: ' + lastName);
      }
      this.lastName = lastName;
    }
  
    setAddress(address) {
      const pattern = "^[a-zA-Z0-9\s,'-]{4,}$";
      if (!pattern.test(address)) {
        throw new Error('Invalid address: ' + address);
      }
      this.address = address;
    }
  
    setCity(city) {
      const pattern = "^[a-zA-Z\s]{4,}$";
      if (!pattern.test(city)) {
        throw new Error('Invalid city: ' + city);
      }
      this.city = city;
    }
  
    setState(state) {
      const pattern = "^[a-zA-Z\s]{4,}$";
      if (!pattern.test(state)) {
        throw new Error('Invalid state: ' + state);
      }
      this.state = state;
    }
  
    setZip(zip) {
      const pattern = "^\d{5}$";
      if (!pattern.test(zip)) {
        throw new Error('Invalid zip code: ' + zip);
      }
      this.zip = zip;
    }
  
    setPhoneNumber(phoneNumber) {
      const pattern = "^\d{10}$";
      if (!pattern.test(phoneNumber)) {
        throw new Error('Invalid phone number: ' + phoneNumber);
      }
      this.phoneNumber = phoneNumber;
    }
  
    setEmail(email) {
      const pattern = "^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$";
      if (!pattern.test(email)) {
        throw new Error('Invalid email address: ' + email);
      }
      this.email = email;
    }
  }

  class AddressBook {
      constructor() {
        this.contacts = [];
      }
    
        addContact(contact) {
          const duplicate = this.contacts.filter((existingContact) => existingContact.firstName === contact.firstName &&mexistingContact.lastName === contact.lastName);
      
          if (duplicate.length > 0) {
            throw new Error("Duplicate entry found");
          }
      
          this.contacts.push(contact);
        }
        findContactByName(firstName) {
          return this.contacts.find(contact => {
            return (contact.firstName === firstName );
          });
        }
        editContact(firstName,newData) {
          const contact = this.findContactByName(firstName);
          if (contact) {
            Object.assign(contact, newData);
          }
        }
        removeContact(contact) {
          const index = this.contacts.indexOf(contact);
          if (index !== -1) {
            this.contacts.splice(index, 1);
          }
        }
        deleteContact(firstName) {
          const contact = this.findContactByName(firstName);
          if (contact) {
            this.removeContact(contact);
          }
        }
        getContactCount() {
          return this.contacts.reduce((count, contact) => count + 1, 0);
        }

        searchByCity(city) {
          return this.contacts.filter((contact) => contact.city === city);
        }
      
        searchByState(state) {
          return this.contacts.filter((contact) => contact.state === state);
        }

        getContactCountByCityAndState() {
          const countByCity = this.contacts.reduce((count, contact) => {
            count[contact.city] = (count[contact.city] || 0) + 1;
            return count;
          }, {});
      
          const countByState = this.contacts.reduce((count, contact) => {
            count[contact.state] = (count[contact.state] || 0) + 1;
            return count;
          }, {});
      
          return { countByCity, countByState };
        }
        sortContactByName(){
          this.contacts.sort((a, b) => {
              if (a.firstName < b.firstName) {
                return -1;
              }
              if (a.firstName > b.firstName) {
                return 1;
              }
              return 0;
            });
      }
      sortByCity(){
          this.contacts.sort((a, b) => a.city.localeCompare(b.city));
      }
      
      // Sort by state
      sortByState(){
          this.contacts.sort((a, b) => a.state.localeCompare(b.state));
      }
      // Sort by zip
      sortByZip(){
          this.contacts.sort((a, b) => a.zip.localeCompare(b.zip));
      } 
  }
  const readline = require("readline-sync");
  console.log("Welcome to AddessBook");
  const addressBook = new AddressBook();
  while(true){
      console.log("Choose One Option");
      console.log("1. Add Contact \n2. Edit Contact\n3. Delete Contact\n4. Count Contact\n5. Contact in City \n6. Contact in State\n7. Contact count by City or State\n8. Sorting");

  var n = readline.question();
  console.log(n);
    switch(n){
          case "1":
            console.log("Add Contact");
            console.log("Enter First Name ");
            var firstName = readline.question();
            console.log("Enter Last Name ");
            var lastName = readline.question();
            console.log("Enter Address ");
            var address = readline.question();
            console.log("Enter City ");
            var city = readline.question();
            console.log("Enter State ");
            var state = readline.question();
            console.log("Enter Zip ");
            var zip = readline.question();
            console.log("Enter Phone number ");
            var phoneNumber = readline.question();
            console.log("Enter email ");
            var email = readline.question();
              const cont = new Contact(firstName, lastName, address, city, state, zip, phoneNumber, email);
              addressBook.addContact(cont);
              break;
          case "2":
            console.log("Edit Contact");
            console.log("Enter First Name ");
            var firstName = readline.question();
            console.log("Enter Last Name ");
            var lastName = readline.question();
            console.log("Enter Address ");
            var address = readline.question();
            console.log("Enter City ");
            var city = readline.question();
            console.log("Enter State ");
            var state = readline.question();
            console.log("Enter Zip ");
            var zip = readline.question();
            console.log("Enter Phone number ");
            var phoneNumber = readline.question();
            console.log("Enter email ");
            var email = readline.question();
            const cont1 = new Contact(firstName, lastName, address, city, state, zip, phoneNumber, email);
            addressBook.editContact(firstName, cont1);

            // addressBook.editContact(firstName, {
            //   firstName : firstName ,
            //   lastName : lastName, 
            //   address : address,
            //   city : city,
            //   state : state,
            //   zip : zip,
            //   phoneNumber : phoneNumber,
            //   email : email});
          break;
          case "3":
            console.log("Enter First Name");
            var firstName = readline.question();
            addressBook.deleteContact(firstName);
            console.log(addressBook.contacts);
            break;
          case "4":
          const contactCount = addressBook.getContactCount();
          console.log(contactCount); // Output: 2  
          break;
          case "5":
          const contactsInAnytown = addressBook.searchByCity("Anytown");
          console.log("Contacts in Anytown:", contactsInAnytown);
          break;
          case "6":
            const contactsInCA = addressBook.searchByState("CA");
            console.log("Contacts in CA:", contactsInCA);
          break;
          case "7":
            const contactCountByCityAndState = addressBook.getContactCountByCityAndState();
            console.log("Contact count by city and state:", contactCountByCityAndState);
            break;
          case "8":
            addressBook.sortContactByName();
            console.log(addressBook.contacts);
            addressBook.sortByCity();
            console.log(addressBook.contacts);
            addressBook.sortByState();
            console.log(addressBook.contacts);
            addressBook.sortByZip();
            console.log(addressBook.contacts);
            case "9":
            console.log(addressBook.contacts);
            break;
          default:
              console.log("Invalid Option");
              break;
      }
  }