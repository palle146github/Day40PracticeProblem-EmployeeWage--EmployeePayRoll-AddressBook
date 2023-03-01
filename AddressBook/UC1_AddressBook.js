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



    set phoneNumber(phoneNumber){
        return this._phoneNumber = phoneNumber;
    }

    set email(email){
        return this._email = email;
    }


    set city(city){
        return this._city = city;
    }

    set state(state){
        return this._state = state;
    }

    set zip(zip){
        return this._zip = zip;
    }

    set firstname(firstname){
        return this._firstname = firstname;
    }

    set lastName(lastName){
        return this._lastName = lastName;
    }

    set address(address){
        return this._address = address;
    }
  

    get phoneNumber(){
        return this._phoneNumber;
    }

    get email(){
        return this._email;
    }


    get city(){
        return this._city;
    }

    get state(){
        return this._state;
    }

    get zip(){
        return this._zip;
    }

    get firstname(){
        return this._firstname;
    }

    get lastName(){
        return this._lastName;
    }

    get address(){
        return this._address;
    }
  
    getFullName() {
      return this.firstName + ' ' + this.lastName;
    }
  
    getAddress() {
      return this.address + ', ' + this.city + ', ' + this.state + ' ' + this.zip;
    }
  
    getPhoneNumber() {
      return this.phoneNumber;
    }
  
    getEmail() {
      return this.email;
    }
  }

  class AddressBook {
    constructor() {
      this.contacts = [];
    }
  
    addContact(contact) {
      this.contacts.push(contact);
    }
  
    deleteContact(index) {
      this.contacts.splice(index, 1);
    }
  
    searchContacts(searchTerm) {
      return this.contacts.filter(contact => {
        const fullName = contact.getFullName().toLowerCase();
        return fullName.includes(searchTerm.toLowerCase());
      });
    }
  }
    const addressBook = new AddressBook();
  
  const contact1 = new Contact('John', 'Doe', '123 Main St', 'Anytown', 'CA', '12345', '555-1234', 'johndoe@example.com');
  addressBook.addContact(contact1);
  
  const contact2 = new Contact('Jane', 'Smith', '456 Oak Ave', 'Sometown', 'NY', '67890', '555-5678', 'janesmith@example.com');
  addressBook.addContact(contact2);
  
  console.log(addressBook.searchContacts('john')); // returns [contact1]
  console.log(contact1.getAddress()); // returns "123 Main St, Anytown, CA 12345"
  console.log(contact2.getPhoneNumber());
  console.log(addressBook.contacts);