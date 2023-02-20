interface AccordionInterface{
    id:number;
    question:string;
    answer:string;
}

const accordionData:AccordionInterface[]=[
    {
        id:1,
        question:'What is your Name ?',
        answer:'My name is Sabita Thapa Magar'
    },
    {
        id:2,
        question:'What is your college name?',
        answer:'Aryan College of engineering'
    },
    {
        id:3,
        question:'In which semester do you studied?',
        answer:'5th semseter'
    }
]

export default accordionData;