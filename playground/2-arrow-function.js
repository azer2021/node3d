/* const square = (x) => {
    return x*x 
}

console.log(square(3)) */
/* const event = {
    name: 'Birthday Party',
    guestList: ['esmir', 'Emar', 'Edi'],
    printGuestList: function() {
        console.log('Guest list for ' + this.name)
    }
}
 */
const event = {
    name: 'Birthday Party',
    guestList: ['Esmir', 'Emar', 'Edi'],
    printGuestList() {
        console.log('Guest list for ' + this.name)

        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name)
        })

    }
}

/* const event = {
    name: 'Birthday Party',
    printGuestList: () => {
        console.log('Guest list for ' + event.name)
    }
} */

event.printGuestList()