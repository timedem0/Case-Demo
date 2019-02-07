import Category from './Category';

export function fetchTestCategories () {

    const obj1 = new Category('1', 'One', '100',);
    const obj2 = new Category('2', 'Two', '200',);
    const obj3 = new Category('3', 'Three', '300',);
    const obj4 = new Category('4', 'Four', '400',);
    const obj5 = new Category('5', 'Five', '500',);

    const objArray = [obj1, obj2, obj3, obj4, obj5,];

    return objArray;
}