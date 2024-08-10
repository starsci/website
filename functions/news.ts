import {UrlObject} from "node:url";
import {paragraph, sentence} from "txtgen";

export type News = {
    title: string,
    date: Date,
    slug: string,
    body: string,
    thumbnail: string
}

export type NewsWithoutThumbnail = Omit<News, "thumbnail">;

function generateNews(length: number): News[] {
    // generate random values for the news
    return Array.from({length}, () => ({
        title: sentence(),
        date: new Date(),
        slug: "#",
        body: paragraph(),
        thumbnail: `https://picsum.photos/seed/${Math.random()}/384/256`
    }));
}

export function getAnnouncements(maxLength: number = 5) {
    return generateNews(maxLength).map(({thumbnail, ...news}) => news);
}

export function getTheSatellite(maxLength: number = 5) {
    return generateNews(maxLength);
}

export function getAngPararayos(maxLength: number = 5) {
    return generateNews(maxLength);
}
