export function ProtectedRoute({chidren}) {
    if(!localStorage.getItem("token")){
      location.href = "/login";
      return;
    }
    return chidren;
}