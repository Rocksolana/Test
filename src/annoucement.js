
const  tasks = [
    {
        id:1,
        title:"Covid",
        description:"All coverage of Coronavirus including the political response and the effect on our health system, the economy and our communities.",
        date:1.09,
       
    },
    {
        id:2,
        title:"New Zealanders",
        description:"New Zealanders outside of Auckland are hopeful the government will today announce a move to level 2, but they are being warned it won't be level 2 as we know it.",
        date:1.10,
    },
    {
        id:3,
        title:"Canada",
        description:"We have to face it head-on': Canada's opioid crisis should be front and centre this election, advocates say",
        date:1.11,
    },
       
]

export const getProductsObject = (array) => array.reduce((obj,task) => ({
    ...obj,
    [task.id]:task
}), {})
export default tasks
