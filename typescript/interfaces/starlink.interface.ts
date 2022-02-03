export interface IStarlink {
    mission_name: string;
    launch_date_local: string;
    launch_site: ILaunch_site;
    links: ILinks;
    rocket: IRocket;
}


interface ILaunch_site {
    site_name_long: string;
}

interface ILinks {
    article_link: null;
    video_link: string;
}

interface IRocket {
    rocket_name: string;
    first_stage: IFirst_stage;
    second_stage: ISecond_stage
}

interface IFirst_stage {
    cores: [
        {
            flight: number;
            core: ICore
        }
    ]
}

interface ICore {
    reuse_count: number;
    status: string;
}

interface ISecond_stage {
    payloads: [
        {
            payload_type: string;
            payload_mass_kg: number;
            payload_mass_lbs: number;
        }
    ]
}