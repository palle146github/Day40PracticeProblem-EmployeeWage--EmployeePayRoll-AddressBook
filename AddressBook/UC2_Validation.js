class Contact {
    constructor(firstName, lastName, address, city, state, zip, phoneNumber, email) {
      this.setFirstName(firstName);
      this.setLastName(lastName);
      this.setAddress(address);
      this.setCity(city);
      this.setState(state);
      this.setZip(zip);
      this.setPhoneNumber(phoneNumber);
      this.setEmail(email);
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
  
  // Define an AddressBook class
  class AddressBook {
    constructor() {
      this.contacts = [];
    }
  
    addContact(contact) {
      this.contacts.push(contact);
    }
  }
  
  // Example usage
  const addressBook = new AddressBook();
  
  // Create a new contact and add it to the address book
  try {
    const johnDoe = new Contact(
      "John",
      "Doe",
      "123 Main St",
      "Anytown",
      "California",
      "12345",
      "5551234567",
      "johndoe@example.com"
    );
    addressBook.addContact(johnDoe);
  } catch (error) {
    console.error(error);
  }
  
  // Create another contact and add it to the address book
  try {
    const janeSmith = new Contact(
      "Jane",
      "Smith",
      "456 Oak Ave",
      "Somewhere",
      "NewYork",
      "67890",
      "555-5678",
      "janesmith@example.com"
    );
    addressBook.addContact(janeSmith);
  } catch (error) {
    console.error(error);
  }