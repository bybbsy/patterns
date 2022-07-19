import { IResumeBuilder } from "./Builder";
import { IResume, Resume } from "./Resume";

export class ResumeBuilder implements IResumeBuilder {
    resume: IResume

    constructor(resume: IResume) {
        this.resume = resume
    }

    setEducation(education: string[]) {
        this.resume.education = education
    }

    setSkills(skills: string[]) {
        this.resume.skills = skills
    }

    setPastProjExp(exp: string[]) {
        this.resume.pastProjectExperience = exp
    }



    getPlayer() {
        const cv = this.resume

        this.resume = new Resume([])

        return cv;
    }
}