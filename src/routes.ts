import { About, Contact, Home, NotFound } from "views";

const routes: Routes = [
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/contact",
    component: Contact,
    searchKeys: ["origin"],
  },
  {
    path: "/not_found",
    component: NotFound,
  },
  {
    path: "/about",
    component: About,
  },
];

export default routes;
