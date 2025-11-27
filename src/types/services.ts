export interface IProjectsData {
    id: string;
    image: string;
    headerText: string;
    descriptionText: string;
    descriptionList?: string[];
    metaTitle?: string;
    metaDescription?: string;
}

export interface IProjectImagesData {
    id: string;
    image: string;
}

export type ProjectsDataLocale = IProjectsData[];

export interface ServiceProjectsInfoData {
    ka: ProjectsDataLocale;
    en: ProjectsDataLocale;
    ru: ProjectsDataLocale;
}