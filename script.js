let comp = [
    { name : 'company1',category : 'finance',start : 1981,end : 2003 },
    { name : 'company2',category : 'finance',start : 1992,end : 2033},
    { name : 'company3',category : 'Retail',start : 1999,end : 2021},
    { name : 'company4',category : 'Banking',start : 1989,end : 2020},
    { name : 'company5',category : 'Marketing',start : 2009,end : 2024},
    { name : 'company6',category : 'Retail',start : 1987,end : 2030},
    { name : 'company7',category : 'Wholesale',start : 1986,end : 2023},
    { name : 'company8',category : 'Agent',start : 2011,end : 2016},
];

let num =[2,4,6,8,10,12,14,16,18,20];

// foreach 
// for(let i =0; i< comp.length; i++){
//    console.log(comp[i])
// }
 

// comp.forEach(function (company) {
//     console.log(company.name);
    
// })
// let match = 18;
// for ( let i=0; i <=match; i++){
//     if (i % 2 ==0) {
//         console.log(i);
//     }

// }

// filter 
let strainer = num.filter((age)=>{
    if (age >= 10){
        return true;
    }
})
console.log(strainer)

// OR 
// let sifter  = comp.filter((company)=>{
//     if(company.category === 'Retail' ){
//         return true
//     }
   
// })
// console.log(sifter);

// OR 
// let sieve = comp.filter(company=> company.category === 'Retail')
// console.log(sieve);

// filtering all companies from the 80's 
let canDrink = comp.filter((company)=>{
    if(company.start >= 1980 && company.start <1990){
        return true
    }
}) 
console.log(canDrink);

// companies that lasted required years or more 

const years = comp.filter((last)=>{
    if(last.end- last.start >10){
         return true
    }
})
  console.log(years);

//   let companyCategory = comp.map((company)=>{return company.category})
//   console.log(companyCategory);
let companyCategory = comp.map((company)=>{return `${company.name}-(${company.start}, ${company.end})`})
console.log(companyCategory);


let Array2 = num.map((each)=>
    Math.sqrt(each)
)
console.log(Array2)