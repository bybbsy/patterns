import { IResumeBuilder } from "./Builder"; 
import { IResume } from "./Resume";

export class Director {
    builder: IResumeBuilder

    constructor(builder: IResumeBuilder) {
        this.builder = builder
    }

    setBuilder(builder: IResumeBuilder) {
        this.builder = builder
    }
    
    createFullResume(resume: IResume) {
        this.builder.setSkills(resume.skills)
        this.builder.setEducation(resume.education as string[])
        this.builder.setPastProjExp(resume.pastProjectExperience as string[])
    }

    createResumeOnlyWithSkills(resume: IResume) {
        this.builder.setSkills(resume.skills)
    }
}