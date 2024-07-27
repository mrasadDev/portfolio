export interface Service {
  title?: string;
  description?: string;
  icon?: string;
  link?: string;
}

const s1: Service = {
  title: "Product Development",
  description:
    "We design, architect, and engineer digital products to improve business outcomes, simplify workflows and drive growth.",
  icon: "feather-box",
  link: "/services/digital-product-development",
};

const s2: Service = {
  title: "Application Modernisation",
  description:
    "We transform complex, monolithic legacy applications into modern digital platforms to accelerate business outcomes.",
  icon: "feather-cloud",
  link: "/services/application-modernisation",
};

const s3: Service = {
  title: "Website Development",
  description:
    "We develop websites to improve your business presence online, reach a bigger audience and increase growth.",
  icon: "feather-globe",
  link: "/services/website-development",
};

const s4: Service = {
  title: "Mobile App Development",
  description:
    "We develop secure, highly adaptable quality mobile apps to increase user engagement and accelerate business growth.",
  icon: "feather-smartphone",
  link: "/services/mobile-app-development",
};

export const services = [s1, s2, s3, s4];
