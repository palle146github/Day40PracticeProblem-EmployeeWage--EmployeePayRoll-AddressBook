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
      this.contacts.push(contact);
    }
  
    removeContact(contact) {
      const index = this.contacts.indexOf(contact);
      if (index !== -1) {
        this.contacts.splice(index, 1);
      }
    }
  
    findContactByName(firstName, lastName) {
      return this.contacts.find(contact => {
        return (
          contact.firstName === firstName &&
          contact.lastName === lastName
        );
      });
    }
  
    deleteContact(firstName, lastName) {
      const contact = this.findContactByName(firstName, lastName);
      if (contact) {
        this.removeContact(contact);
      }
    }
  }
  
  const addressBook = new AddressBook();
  
  const johnDoe = new Contact(
    "John",
    "Doe",
    "123 Main St",
    "Anytown",
    "CA",
    "12345",
    "5551234567",
    "johndoe@example.com"
  );
  addressBook.addContact(johnDoe);
  
  const janeSmith = new Contact(
    "Jane",
    "Smith",
    "456 Oak Ave",
    "Somewhere",
    "NY",
    "67890",
    "555-5678",
    "janesmith@example.com"
  );
  addressBook.addContact(janeSmith);
  
  // Find and delete a contact
  addressBook.deleteContact("John", "Doe");
  
  console.log(addressBook.contacts);