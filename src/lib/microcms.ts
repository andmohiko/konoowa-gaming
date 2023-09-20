import { createClient } from "microcms-js-sdk";
import type { Article } from "~/types/article";

export const cmsClient = createClient({
  serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.MICROCMS_API_KEY,
});

export const getNews = async (): Promise<Array<Article>> => {
  const data = await cmsClient.get({ endpoint: 'news' })
  return data.contents
}

export const getNewsById = async (id: string) => await cmsClient.get({ endpoint: 'news', contentId: id })
