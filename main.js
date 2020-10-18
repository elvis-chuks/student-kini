// create an array of students with their scores on various subjects
// write function that sums up individual scores and multiplies it by 5
// array.filter, records should be enums

const exam = [
    {id : 0, name : "Joshua", courses : [
        {name : "Math", score : 100},
        {name : "English", score : 88},
        {name : "Biology", score : 78},
        {name : "Physics", score : 68},
    ]},
    {id : 1, name : "Eloka", courses : [
        {name : "Math", score : 100},
        {name : "English", score : 100},
        {name : "Biology", score : 78},
        {name : "Physics", score : 78},
    ]},
    {id : 2, name : "Tomi", courses : [
        {name : "Math", score : 100},
        {name : "English", score : 78},
        {name : "Biology", score : 78},
        {name : "Physics", score : 78},
    ]},
];


const sum_scores = () => {
    var gps= []

    exam.forEach(ex => {
        var score = (ex.courses.reduce(sum)).score;
        var gp = (score/400) * 5;

        gps.push({name : ex.name, gp : gp, courses : ex.courses})

    })

    return gps
}

const sum = (total, num) => {
    return { score : total.score + num.score}
}

console.log(sum_scores());