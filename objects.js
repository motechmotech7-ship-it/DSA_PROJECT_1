const bookings = new Map();

bookings.set ('G3SL3   ', {
    name: 'John Doe',
    date: '2023-06-15',
    time: '14:00',
    partySize: 4
});
export default bookings;
console.log(bookings.get('G3SL3   '));
      
