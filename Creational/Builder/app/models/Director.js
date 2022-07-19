"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Director = void 0;
class Director {
    constructor(builder) {
        this.builder = builder;
    }
    setBuilder(builder) {
        this.builder = builder;
    }
    createFullResume(resume) {
        this.builder.setSkills(resume.skills);
        this.builder.setEducation(resume.education);
        this.builder.setPastProjExp(resume.pastProjectExperience);
    }
    createResumeOnlyWithSkills(resume) {
        this.builder.setSkills(resume.skills);
    }
}
exports.Director = Director;
