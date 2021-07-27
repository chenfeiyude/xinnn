import NotFound from "@/components/Errors/404";
import Home from "@/components/Home";

const routes = [
    {
        path: "/",
        name: "home",
        component: Home
    },
    {
        path: "/errors",
        redirect: "/errors/404",
        children: [
            {
                path: "404",
                name: "404",
                component: NotFound
            }
        ]
    },
    {
        path: "*",
        redirect: "/errors/404"
    }
];

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
 function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes;