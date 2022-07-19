import { ResumeBuilder } from "./models/ResumeBuilder";
import { Director } from "./models/Director";
import { IResume } from "./models/Resume";


const resumeTemplate: IResume = {
    skills: []
}

const resume: IResume =  {
    skills: ['JavaScript', 'Vuejs', 'Nodejs'],
    pastProjectExperience: ['Google', 'Yandex'],
    education: ['Tennessee State University']
}

const builder = new ResumeBuilder(resumeTemplate)

const director = new Director(builder)

director.createResumeOnlyWithSkills(resume)

console.log(builder.resume)

// director.createResumeOnlyWithSkills(resume)