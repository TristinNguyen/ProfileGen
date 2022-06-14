const {Employee} = require('../employee');

describe('Employee', () => {
    it('should create an object with a name, id, email, and role', () => {
        const employee = new Employee("Leo", 1, "leo@gmail.com", "employee");

        expect(employee.getName()).toEqual('Leo');
        expect(employee.getId()).toEqual(1);
        expect(employee.getEmail()).toEqual('leo@gmail.com');
        expect(employee.getRole()).toEqual('Employee');
    })

    // it('should throw an error if nothing is entered for their name, email, and role', () => {
    //     const a = new Employee();
    //     const err = new Error ('Name, email, and role need to be provided')

    //     expect(a).toThrowError(err);
    // })

    // it('should throw an error if no number or a negative number is entered for the id', () => {
    //     const b = new Employee("Leo",-1,"leo@gmail.com","manager").getId();
    //     const err = new Error ('Positive integer needed for id')

    //     expect(b).toThrow();
    // })
})