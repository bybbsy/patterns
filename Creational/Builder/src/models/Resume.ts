export interface IResume {
    skills: string[]
    education?: string[]
    pastProjectExperience?: string[]
}

export class Resume implements IResume {
    skills: string[]
    education?: string[] | undefined
    pastProjectExperience?: string[] | undefined

    constructor(
        skills: string[],
        education?: string[] | undefined,
        pastProjectExperience?: string[] | undefined
    ) {
        this.skills = skills
        this.education = education
        this.pastProjectExperience = pastProjectExperience
    }
}