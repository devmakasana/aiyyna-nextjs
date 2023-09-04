import { getSEOdata } from "../lib/contentful-seo";

/**
 * @desc Checks for Empty string
 * @param {*} value // Accepts string, object
 */
export function isEmpty(value: any) {
  if (
    value === undefined ||
    value === null ||
    (typeof value === "object" && Object.keys(value).length === 0) ||
    (typeof value === "string" && value.trim().length === 0)
  ) {
    return true;
  } else {
    return false;
  }
}

/**
 * @desc Checks if given value is Number
 * @param {*} value // Accepts string
 */
export function isNumber(value: any) {
  var myRegEx = /^(\s*[0-9]+\s*)+$/;
  var isValid = myRegEx.test(value);
  return isValid ? true : false;
}

export const removeUndefineElement = (list: Array<any>) => {
  const newList = list?.filter((item) => !isEmpty(item));
  return newList;
};

/**
 * @desc Check if given value is string
 * @param {*} value // Accepts string
 */
export function isString(value: any) {
  var myRegEx = /^[a-zA-Z\s]*$/;
  var isValid = myRegEx.test(value);
  return isValid ? true : false;
}

/**
 * @desc get query param by name
 */
export const getUrlParam = (query: any, name: any) => {
  let queryParams = new URLSearchParams();
  if (query) queryParams = new URLSearchParams(query);
  return queryParams.get(name);
};

export function convertHighlights(value: string) {
  var result = value?.split(/\[(.*?)\]/);
  const resultedValue = `${result[0]}<span>${result[1]}</span>${result[2]}`;
  return resultedValue;
}

/**
 * @desc Checks if given value is Email
 * @param {*} value // Accepts string
 */
export const isEmail = (value: string) => {
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(value);
};


export function capitalizeFirstLetter(value: string) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

export const getSEOData = async ({ id, data }: { id?: string, data?: any }) => {
  let seoData;
  if (id) seoData = (await getSEOdata(id)) ?? [];
  else seoData = data;
  return {
    title: seoData?.seoTitle,
    canonical: seoData?.canonical,
    description: seoData?.metaDescription,
    openGraph: {
      type: 'website',
      locale: 'en_IE',
      site_name: 'copilot.com',
      images: isEmpty(seoData?.openGraphImage)
        ? ['/images/OpenGraphImage.png']
        : [
          {
            url: seoData?.openGraphImage?.url
          }
        ]
    }
  };
};

