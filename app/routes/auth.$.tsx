import { authenticate } from "~/shopify.server";
import { LoaderFunctionArgs, redirect } from "@remix-run/node";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const { session } = await authenticate.admin(request);

  if (session) {
    return redirect("/");
  }

  return null;
};