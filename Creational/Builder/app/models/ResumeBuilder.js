"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResumeBuilder = void 0;
const Resume_1 = require("./Resume");
class ResumeBuilder {
    constructor(resume) {
        this.resume = resume;
    }
    setEducation(education) {
        this.resume.education = education;
    }
    setSkills(skills) {
        this.resume.skills = skills;
    }
    setPastProjExp(exp) {
        this.resume.pastProjectExperience = exp;
    }
    getPlayer() {
        const cv = this.resume;
        this.resume = new Resume_1.Resume([]);
        return cv;
    }
}
exports.ResumeBuilder = ResumeBuilder;
