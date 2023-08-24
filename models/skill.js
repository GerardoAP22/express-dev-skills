const skills = [
    {id: 143890, skill: "Java"},
    {id: 143910, skill: "JavaScript"},
    {id: 143930, skill: "CSS"},
    {id: 143950, skill: "HTML"},
    {id: 143970, skill: "Express"},
];

module.exports = {
    getAll,
    getOne,
};

function getAll(){
    return skills;
}

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}