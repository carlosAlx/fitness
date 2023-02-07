export type Props = {
  topOfPage?: boolean;
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

export enum SelectedPage {
  Home = "home",
  Benefits = "benefit",
  OurClasses = "ourClass",
  ContactUs = "contactus",
}