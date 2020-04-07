const Skill = require('../models/skill');

/* ///// GET SKILLS LISTING \\\\\ */

const index = (req, res) => {
  res.render('skills/index', {
    skills: Skill.getAll()
  });
};

const show = (req, res) => {
  res.render('skills/show', {
    skill: Skill.getOne(req.params.id),
    skillNum: parseInt(req.params.id) + 1
  });
}

const newSkill = (req, res) => {
  res.render('skills/new');
}

const create = (req, res) => {
  console.log(req.body);
  req.body.done = false;
  Skill.create(req.body);
  res.redirect('/skills');
}

const deleteSkill = (req, res) => {
  Skill.deleteOne(req.params.id);
  res.redirect('/skills');
}

const edit = (req, res) => {
  res.render('skills/edit', {
    skill: Skill.getOne(req.params.id),
    idx: req.params.id
  });
}

const update = (req, res) => {
  req.body.done = req.body.done === 'on';
  Skill.update(req.params.id, req.body);
  res.redirect('/skills');
}

module.exports = {
  index,
  show,
  newSkill,
  create,
  deleteSkill,
  edit,
  update
};
