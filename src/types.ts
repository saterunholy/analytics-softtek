import { PanelProps } from '@grafana/data';

export interface Props extends PanelProps<Options> {}

export interface AnalyticsOptions {
  server: string;
  key: string;
  description: string;
  hidden: boolean;
  //  postEnd: boolean;
  //  noCors: boolean;
  //  flatten: boolean;
  //  noCred: boolean;
}

export interface Options {
  analyticsOptions: AnalyticsOptions;
}

// Insert logo
//Create the element
//let image = new Image(80);
// Import the image
//image.id = 'logo';
//image.src = 'https://www.softtek.com/images/content/design2015/LogoCompleto-Website-20.png';
// To fix the logo position in the panel
//image.style.opacity = '0.7';
//image.style.width = '7%';
//image.style.position = 'absolute';
//image.style.display = 'block';
//image.style.left = '1%';
//image.style.bottom = '2%';

// Logo cinepolis.
//image.id = 'logo';
//image.onmouseover = () => {
//  image.src = 'https://static.cinepolis.com/img/lg-cinepolis-new.png';
//  image.style.opacity = '0.7';
//  image.style.width = '7%';
//  image.style.position = 'absolute';
//  image.style.display = 'block';
//  image.style.left = '1%';
//  image.style.bottom = '2%';
//};
//image.onmouseleave = () => {
//  image.src = 'https://www.softtek.com/images/content/design2015/LogoCompleto-Website-20.png';
//  image.style.opacity = '0.7';
//  image.style.width = '7%';
//  image.style.position = 'absolute';
//  image.style.display = 'block';
//  image.style.left = '1%';
//  image.style.bottom = '2%';
//};
// Here we create the logo in the panel
