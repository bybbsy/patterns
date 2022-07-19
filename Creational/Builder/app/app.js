"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ResumeBuilder_1 = require("./models/ResumeBuilder");
const Director_1 = require("./models/Director");
const resumeTemplate = {
    skills: []
};
const resume = {
    skills: ['JavaScript', 'Vuejs', 'Nodejs'],
    pastProjectExperience: ['Google', 'Yandex'],
    education: ['Tennessee State University']
};
const builder = new ResumeBuilder_1.ResumeBuilder(resumeTemplate);
const director = new Director_1.Director(builder);
director.createResumeOnlyWithSkills(resume);
console.log(builder.resume);
// director.createResumeOnlyWithSkills(resume)
