// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
    //create a object to later return
    var obj = {};
    //give a new key of id with a value of id
    obj.id = id;
    //give a new key of nameFirst with a value of nameFirst
    obj.nameFirst = nameFirst;
    //give a newkey of namelast witha value of namelast
    obj.nameLast = nameLast;
    //return object
    return obj;
} 


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = [];//set to empty array
    
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        },
        addContact: function(contact){
            //push contact object into contacts list
            contacts.push(contact);
        },
        findContact: function(fullName){
            //iterate through contacts
            for(let i = 0; i < contacts.length; i++){
              //determine if contacts list contains contact object that equals fullname
                if(`${contacts[i].nameFirst} ${contacts[i].nameLast}` === fullName){
                    //return that current object
                    return contacts[i];
                }else{//else
                    //return undefined
                    return undefined;
                }
            }
        },
        removeContact: function(contact){
            //pop off contact object from contacts list
            contacts.pop(contact);
        },
        printAllContactNames: function(){
            //create a string to later return
            var str = "";
            //iterate through contacts
            for(let i = 0; i < contacts.length; i++){
                //string does not equal an empty string
                if(str !== ""){
                    //add and assign new line to my empty string
                    str += "\n";
                    
                }//add and assign first name and last name to string
                str += contacts[i].nameFirst + " " + contacts[i].nameLast;
            }//return my string
            return str;
        }
    }
}




// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
