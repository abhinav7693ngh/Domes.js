// ============= Testing Area ================ //

const domes = require('../../Domes.js');

let my = new domes.SinglyLinkedList();



let num1 = 100;
let str1 = 'sample';
let obj = {name : 'sample',language : 'Language'};
let nestedObj = {
    name : {
        first : 'sample1',
        last : 'sample2'
    },
    language : 'js',
    frameworks : {
        frontend : {
            first : 'React',
            second : 'Redux',
            third : 'Next.js'
        },
        backend : {
            first : 'node.js',
            second : 'Django'
        }
    }
};


let another = new domes.SinglyLinkedList();
another.insertAtEnd(100);

let array1 = [10,20,30,40,50];
let yup = () =>{
    console.log('yup');
}
let num2 = 200;
let str2 = 'sum';
let arrobj = [{first : function(){console.log('I am')}},{second : 'second'},{third : {fourth : null,fifth : 'fifth'}}];
let arrobj3 = [{ first: function () { console.log('I') } }, { second: 'second' }, { third: { fourth: null, fifth: 'fifth' } }];
let arrobj2 = [{ first: null }, { second: 'scond' }, { third: { fourth: 'fourth', fifth: undefined } }];

my.insertAtEnd(num1);
my.insertAtEnd(str1);
my.insertAtEnd(obj);
my.insertAtEnd(nestedObj);
my.insertAtEnd(another);
my.insertAtEnd(array1);
my.insertAtEnd(yup);
my.insertAtEnd(num2);
my.insertAtEnd(str2);
my.insertAtEnd(arrobj);
// my.insertAtEnd(triple);
// let triple = new domes.SinglyLinkedList();
// triple.insertAtEnd(100);
// triple.insertAtEnd(200);

let store = my.search(arrobj);
console.log(store);

