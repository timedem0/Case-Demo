import Category from './Category';

export function fetchTestCategories () {

    return [
        new Category('1', 'Trainings', 1000,),
        new Category('2', 'Talkoot', 20000,),
        new Category('3', 'Parties', 300,),
        new Category('4', 'Excursions', 400,),
        new Category('5', 'Purchases', 500,),
    ];
}
