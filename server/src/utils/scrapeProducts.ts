import { Result } from "../models/result";
import puppeteer, { KnownDevices, Page } from "puppeteer";
import { Site } from "../models/site";
import { sites } from "../data/sites";

const scrapeBeerData = async (
  page: Page,
  selector: string,
  priceSelector: string,
  containerSelector: string,
) => {
  const beers = await page.$$eval(
    selector,
    (beerElements, containerSelector, priceSelector, baseUrl) => {
      return beerElements.map((beerElement) => {
        const beerName = beerElement.textContent?.trim();
        const container = beerElement.closest(containerSelector);
        const priceElement = container
          ? container.querySelector(priceSelector)
          : null;
        const beerPrice = priceElement
          ? priceElement.textContent?.trim()
          : "Precio no encontrado";
        const containsCerveza = beerName?.toLowerCase().includes("cerveza");

        return {
          name: beerName,
          price: beerPrice,
          url: null,
          containsCerveza: containsCerveza,
        };
      });
    },
    containerSelector,
    priceSelector,
    page.url()
  );

  return beers.filter((b) => b.containsCerveza);
};

async function scrollPageToBottom(page: Page): Promise<void> {
  const scrollHeight = await page.evaluate(() => document.body.scrollHeight);
  const scrollStep = 150;
  const scrollDelay = 100;

  let position = 0;
  while (position < scrollHeight) {
    await page.evaluate((scrollStep) => {
      window.scrollBy(0, scrollStep);
    }, scrollStep);

    await page.evaluate((delay) => {
      return new Promise((resolve) => {
        setTimeout(resolve, delay);
      });
    }, scrollDelay);
    position += scrollStep;
  }
}

const setBrandInUrl = (beerBrand: string, sites: Site[]) => {
  return sites.map((site) => ({
    ...site,
    url: site.url.replace("{beer}", beerBrand.toLowerCase()),
  }));
};

export const scrapeByBeer = async (beer: string): Promise<Result[]> => {
  const browser = await puppeteer.launch({headless:false});
  const sitesSetted = setBrandInUrl(beer, sites);
  const results: Result[] = [];
  let page = null;

  for (const site of sitesSetted) {
    try {
      page = await browser.newPage();
      const iphone = KnownDevices["iPad Pro 11"];
      await page.emulate(iphone);
      await page.goto(site.url, { waitUntil: "networkidle2" });
      await page.waitForSelector(site.priceSelector);
      await scrollPageToBottom(page);

      let data = await scrapeBeerData(
        page,
        site.selector,
        site.priceSelector,
        site.containerSelector,
      );
      results.push({ siteName: site.name, data });
    } catch (error) {
      results.push({ siteName: site.name, error: 'No se encontró ninguna cerveza' });
    } finally {
       page ? await page.close() : null;
    }
  }
  await browser.close(); 
  console.log(results)
  return results;
}
