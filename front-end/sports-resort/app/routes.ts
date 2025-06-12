import {type RouteConfig, index, route} from "@react-router/dev/routes";

export default [index("routes/accueil.tsx"),
    route("login", "routes/login.tsx"),
    route("register", "routes/register.tsx"),
    route("reservations", "routes/reservations.tsx"),
    route("sports", "routes/sports.tsx"),
    route("profile", "routes/profile.tsx"),
    route("admin", "routes/admin.tsx"),
] satisfies RouteConfig;
