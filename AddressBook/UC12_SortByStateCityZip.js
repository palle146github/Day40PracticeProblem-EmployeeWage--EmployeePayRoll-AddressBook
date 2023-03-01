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

    addContact(contact) {
      this.contacts.push(contact);
    }
  
    getContactCountByCity(city) {
      return this.contacts.filter((contact) => contact.city === city).length;
    }
  
    getContactCountByState(state) {
      return this.contacts.filter((contact) => contact.state === state).length;
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
  
  const bobJohnson = new Contact(
    "Bob",
    "Johnson",
    "789 Elm St",
    "Anytown",
    "CA",
    "54321",
    "555-9876",
    "bobjohnson@example.com"
  );
  addressBook.addContact(bobJohnson);
  
  // Get contact count in "Anytown"
  const contactCountInAnytown = addressBook.getContactCountByCity("Anytown");
  console.log("Contact count in Anytown:", contactCountInAnytown);
  
  // Get contact count in "CA"
  const contactCountInCA = addressBook.getContactCountByState("CA");
  console.log("Contact count in CA:", contactCountInCA);
  
  // Get contact count by city and state
  const contactCountByCityAndState = addressBook.getContactCountByCityAndState();
  console.log("Contact count by city and state:", contactCountByCityAndState);
  const contact1 = new Contact('John', 'Doe', '123 Main St', 'Anytown', 'CA', '12345', '555-1234', 'johndoe@example.com');
  addressBook.addContact(contact1);
  
  const contact2 = new Contact('Jane', 'Smith', '456 Oak Ave', 'Sometown', 'NY', '67890', '555-5678', 'janesmith@example.com');
  addressBook.addContact(contact2);
  addressBook.sortContactByName();
  console.log(addressBook.contacts);
  addressBook.sortByCity();
  console.log(addressBook.contacts);
  addressBook.sortByState();
  console.log(addressBook.contacts);
  addressBook.sortByZip();
  console.log(addressBook.contacts);
