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
  
  console.log(addressBook.contacts);