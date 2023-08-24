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
    create,
    deleteOne,
    update,
};

function getAll(){
    return skills;
}

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}

function create(skill) {
    skill.id = Date.now() % 1000000;
    skills.push(skill);
}

function deleteOne(id) {
    id = parseInt(id);
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
}

function update(id, updatedSkill) {
    id = parseInt(id);
    const skill = skills.find(skill => skill.id === id);
    Object.assign(skill, updatedSkill);
}