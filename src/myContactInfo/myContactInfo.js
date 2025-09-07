import * as urls from "./mediaUrls";

function getImgUrl(imgFileName) {
  return new URL(`../assets/${imgFileName}`, import.meta.url).href;
}

export const telnum = {
  name: "Tel.",
  img: getImgUrl("phone.svg"),
  content: "(407)-942-4515",
};

export const email = {
  name: "Email",
  img: getImgUrl("mail.svg"),
  content: "fx.adrian@gmail.com",
  url: urls.mailUrl,
};

export const linkedin = {
  name: "Linkedin",
  img: getImgUrl("linkedin2.svg"),
  content: "Linkedin >>",
  url: urls.linkedinUrl,
};

export const twitter = {
  name: "Twitter",
  img: getImgUrl("twitter.svg"),
  content: "Twitter >>",
  url: urls.twitterUrl,
};

export const github = {
  name: "Github",
  img: getImgUrl("github.svg"),
  content: "Github >>",
  url: urls.githubUrl,
};
